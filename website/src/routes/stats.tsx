import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getStats } from "./api.stats";

export const Route = createFileRoute("/stats")({
  component: Stats,
});

interface DownloadStats {
  success: boolean;
  totalDownloads: number;
  todayDownloads: number;
  uniqueDownloads: number;
  topCountries: { country: string; count: number }[];
  recentDownloads: {
    timestamp: number;
    country: string;
    city: string;
    userAgent: string;
  }[];
  dailyStats: { date: string; downloads: number }[];
}

function Stats() {
  const [stats, setStats] = useState<DownloadStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const data = await getStats({ data: {} });
      if (data.success && 'totalDownloads' in data) {
        setStats(data as DownloadStats);
      } else {
        throw new Error('error' in data ? data.error : 'Failed to fetch stats');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load stats');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading download statistics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ Error</div>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={fetchStats}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">DontSleep Download Statistics</h1>
          <p className="text-gray-600">Anonymous download tracking and analytics</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Downloads */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Downloads</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.totalDownloads || 0}</p>
              </div>
            </div>
          </div>

          {/* Today's Downloads */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Today</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.todayDownloads || 0}</p>
              </div>
            </div>
          </div>

          {/* Unique Downloads */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Unique IPs</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.uniqueDownloads || 0}</p>
              </div>
            </div>
          </div>

          {/* Conversion Rate */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Countries</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.topCountries?.length || 0}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Countries */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Top Countries</h3>
            <div className="space-y-3">
              {stats?.topCountries?.slice(0, 10).map((country, index) => (
                <div key={country.country} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">
                      {country.country === 'US' ? '🇺🇸' : 
                       country.country === 'GB' ? '🇬🇧' : 
                       country.country === 'DE' ? '🇩🇪' : 
                       country.country === 'FR' ? '🇫🇷' : 
                       country.country === 'CA' ? '🇨🇦' : 
                       country.country === 'AU' ? '🇦🇺' : 
                       country.country === 'JP' ? '🇯🇵' : 
                       '🌍'}
                    </span>
                    <span className="font-medium">{country.country || 'Unknown'}</span>
                  </div>
                  <span className="text-gray-600">{country.count} downloads</span>
                </div>
              )) || (
                <p className="text-gray-500 text-center py-4">No data available</p>
              )}
            </div>
          </div>

          {/* Recent Downloads */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Downloads</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {stats?.recentDownloads?.slice(0, 10).map((download, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div>
                    <div className="font-medium text-gray-900">
                      {download.country} {download.city && `• ${download.city}`}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {new Date(download.timestamp * 1000).toLocaleString()}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 max-w-32 truncate">
                    {download.userAgent?.split(' ')[0] || 'Unknown'}
                  </div>
                </div>
              )) || (
                <p className="text-gray-500 text-center py-4">No recent downloads</p>
              )}
            </div>
          </div>
        </div>

        {/* Daily Chart */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Daily Downloads (Last 30 Days)</h3>
          <div className="h-64 flex items-end space-x-2">
            {stats?.dailyStats?.slice(-30).map((day, index) => (
              <div key={day.date} className="flex-1 flex flex-col items-center">
                <div 
                  className="bg-blue-500 rounded-t w-full min-h-1"
                  style={{ 
                    height: `${Math.max(4, (day.downloads / Math.max(...(stats.dailyStats?.map(d => d.downloads) || [1]))) * 200)}px` 
                  }}
                  title={`${day.date}: ${day.downloads} downloads`}
                ></div>
                <div className="text-xs text-gray-500 mt-1 transform -rotate-45 origin-left">
                  {new Date(day.date).toLocaleDateString()}
                </div>
              </div>
            )) || (
              <p className="text-gray-500 text-center w-full py-8">No daily data available</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Statistics are collected anonymously. IP addresses are hashed for privacy.</p>
          <button 
            onClick={fetchStats}
            className="mt-2 px-4 py-2 text-blue-600 hover:text-blue-800"
          >
            Refresh Data
          </button>
        </div>
      </div>
    </div>
  );
} 