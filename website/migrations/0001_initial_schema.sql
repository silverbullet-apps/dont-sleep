-- Migration: Initial schema for download tracking
-- Created: 2025-01-27

CREATE TABLE IF NOT EXISTS downloads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp INTEGER NOT NULL DEFAULT (unixepoch()),
    ip_hash TEXT NOT NULL,
    user_agent TEXT,
    country TEXT,
    city TEXT,
    version TEXT,
    referrer TEXT,
    session_id TEXT
);

-- Index for efficient querying
CREATE INDEX IF NOT EXISTS idx_downloads_timestamp ON downloads(timestamp);
CREATE INDEX IF NOT EXISTS idx_downloads_ip_hash ON downloads(ip_hash);
CREATE INDEX IF NOT EXISTS idx_downloads_country ON downloads(country);

-- Table for storing daily aggregated stats (for faster analytics)
CREATE TABLE IF NOT EXISTS daily_stats (
    date TEXT PRIMARY KEY,
    total_downloads INTEGER NOT NULL DEFAULT 0,
    unique_ips INTEGER NOT NULL DEFAULT 0,
    top_countries TEXT, -- JSON array of {country, count}
    created_at INTEGER NOT NULL DEFAULT (unixepoch()),
    updated_at INTEGER NOT NULL DEFAULT (unixepoch())
); 