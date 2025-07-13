import { createServerFn } from "@tanstack/react-start";
import { getBindings } from "~/utils/bindings";

export const getStats = createServerFn({ method: "GET" })
  .validator(() => ({})) // No input validation needed for GET
  .handler(async () => {
    try {
      // Access Cloudflare bindings using the helper function
      const env = getBindings();
      
      if (!env.DB) {
        console.error('D1 database not available');
        return { 
          success: false,
          error: 'Database not available'
        };
      }

      // Get total downloads
      const totalResult = await env.DB.prepare(`
        SELECT COUNT(*) as total FROM downloads
      `).first();
      const totalDownloads = totalResult?.total || 0;

      // Get today's downloads
      const today = new Date().toISOString().split('T')[0];
      const todayResult = await env.DB.prepare(`
        SELECT COUNT(*) as today FROM downloads 
        WHERE date(timestamp, 'unixepoch') = ?
      `).bind(today).first();
      const todayDownloads = todayResult?.today || 0;

      // Get unique downloads (unique IP hashes)
      const uniqueResult = await env.DB.prepare(`
        SELECT COUNT(DISTINCT ip_hash) as unique_count FROM downloads
      `).first();
      const uniqueDownloads = uniqueResult?.unique_count || 0;

      // Get top countries
      const countriesResult = await env.DB.prepare(`
        SELECT country, COUNT(*) as count 
        FROM downloads 
        WHERE country != '' 
        GROUP BY country 
        ORDER BY count DESC 
        LIMIT 10
      `).all();
      const topCountries = countriesResult?.results?.map((row: any) => ({
        country: row.country,
        count: row.count
      })) || [];

      // Get recent downloads
      const recentResult = await env.DB.prepare(`
        SELECT timestamp, country, city, user_agent 
        FROM downloads 
        ORDER BY timestamp DESC 
        LIMIT 20
      `).all();
      const recentDownloads = recentResult?.results?.map((row: any) => ({
        timestamp: row.timestamp,
        country: row.country,
        city: row.city,
        userAgent: row.user_agent
      })) || [];

      // Get daily stats for the last 30 days
      const dailyResult = await env.DB.prepare(`
        SELECT date(timestamp, 'unixepoch') as date, COUNT(*) as downloads 
        FROM downloads 
        WHERE timestamp >= unixepoch() - (30 * 24 * 60 * 60)
        GROUP BY date(timestamp, 'unixepoch')
        ORDER BY date ASC
      `).all();
      const dailyStats = dailyResult?.results?.map((row: any) => ({
        date: row.date,
        downloads: row.downloads
      })) || [];

      return {
        success: true,
        totalDownloads,
        todayDownloads,
        uniqueDownloads,
        topCountries,
        recentDownloads,
        dailyStats
      };

    } catch (error) {
      console.error('Stats fetch error:', error);
      return { 
        success: false,
        error: `Failed to fetch statistics: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  }); 