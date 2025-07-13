import { createServerFn } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";
import { createHash } from "node:crypto";
import { getBindings } from "~/utils/bindings";

const DOWNLOAD_URL = "https://github.com/silverbullet-apps/dont-sleep/releases/download/0.0.1/DontSleep-Installer.dmg";

interface DownloadRequest {
  version?: string;
  referrer?: string;
}

// Hash IP address for privacy (one-way hash)
function hashIP(ip: string): string {
  return createHash('sha256').update(ip + 'dontsleep-salt').digest('hex').substring(0, 16);
}

// Generate session ID for tracking unique sessions
function generateSessionId(): string {
  return createHash('sha256').update(Date.now() + Math.random().toString()).digest('hex').substring(0, 16);
}

export const trackDownload = createServerFn({ method: "POST" })
  .validator((data: DownloadRequest) => data)
  .handler(async ({ data }) => {
    try {
      // Access Cloudflare bindings using the helper function
      const env = getBindings();
      
      if (!env.DB) {
        console.error('D1 database not available');
        return { 
          success: false,
          error: 'Database not available',
          downloadUrl: DOWNLOAD_URL 
        };
      }

      // Get request headers for IP and geolocation
      let userAgent = 'Unknown';
      let clientIP = '0.0.0.0';
      let country = '';
      let city = '';
      
      try {
        const request = getWebRequest();
        userAgent = request.headers.get('User-Agent') || 'Unknown';
        clientIP = request.headers.get('CF-Connecting-IP') || '0.0.0.0';
        country = request.headers.get('CF-IPCountry') || '';
        city = request.headers.get('CF-IPCity') || '';
      } catch (e) {
        console.warn('Could not access request context:', e);
      }
      
      const referrer = data.referrer || '';
      
      // Hash IP for privacy
      const ipHash = hashIP(clientIP);
      const sessionId = generateSessionId();
      
      // Insert download record
      await env.DB.prepare(`
        INSERT INTO downloads (ip_hash, user_agent, country, city, version, referrer, session_id)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(
        ipHash,
        userAgent,
        country,
        city,
        data.version || '0.0.1',
        referrer,
        sessionId
      ).run();

      // Update or create daily stats
      const today = new Date().toISOString().split('T')[0];
      
      // Get current day stats
      const currentStats = await env.DB.prepare(`
        SELECT * FROM daily_stats WHERE date = ?
      `).bind(today).first();

      if (currentStats) {
        // Update existing stats
        await env.DB.prepare(`
          UPDATE daily_stats 
          SET total_downloads = total_downloads + 1,
              updated_at = unixepoch()
          WHERE date = ?
        `).bind(today).run();
      } else {
        // Create new daily stats
        await env.DB.prepare(`
          INSERT INTO daily_stats (date, total_downloads, unique_ips)
          VALUES (?, 1, 1)
        `).bind(today).run();
      }

      return { 
        success: true,
        downloadUrl: DOWNLOAD_URL,
        sessionId: sessionId
      };

    } catch (error) {
      console.error('Download tracking error:', error);
      
      // Return download URL even if tracking fails
      return { 
        success: false,
        error: 'Tracking failed but download available',
        downloadUrl: DOWNLOAD_URL 
      };
    }
  }); 