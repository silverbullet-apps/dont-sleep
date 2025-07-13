# DontSleep Download Analytics Setup

This guide will help you set up the download tracking analytics system using Cloudflare D1.

## Prerequisites

- Node.js installed
- Wrangler CLI installed (`npm install -g wrangler`)
- Cloudflare account

## Setup Steps

### 1. Install Dependencies

```bash
cd website
npm install
```

### 2. Authenticate with Cloudflare

```bash
wrangler auth login
```

### 3. Create D1 Database

Run this command and note the database ID that's returned:

```bash
npm run db:create
```

### 4. Update Database ID

Update the `database_id` in `wrangler.toml` with the ID from step 3.

**Important**: The `database_id` in `wrangler.toml` should already be updated to `3e7a33fb-ca7c-48bb-b207-538e0da9af88` based on your existing setup.

### 5. Run Database Migrations

```bash
npm run db:migrate
```

### 6. Generate TypeScript Types (Important!)

```bash
npm run cf-typegen
```

This creates `worker-configuration.d.ts` with proper Cloudflare types. The bindings helper in `src/utils/bindings.ts` uses these types to provide access to D1 in both development and production.

### 7. Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` and try downloading. Then visit `http://localhost:3000/stats` to see if tracking works.

### 8. Deploy to Production

```bash
npm run deploy
```

This will build and deploy to your production environment.

## Debugging Production Issues

### If `/stats` shows "Database not available" but downloads work:

1. **Check the logs immediately after deployment:**
```bash
wrangler tail dontsleep-client --format=pretty
```

2. **Test the stats API directly:**
```bash
curl https://your-domain.com/_server/api/stats
```

3. **Check D1 database connection:**
```bash
wrangler d1 execute dontsleep-analytics --command="SELECT COUNT(*) FROM downloads"
```

4. **Verify database binding in production:**
   - Make sure `wrangler.toml` has the correct `database_id`
   - Check that the binding name is `DB` (case-sensitive)
   - Ensure the database exists in your Cloudflare account

5. **Look for console logs in Cloudflare dashboard:**
   - Go to Workers & Pages → your-app → Logs
   - Look for messages like "Using context.cloudflare.env" or "Available env keys"

### Common fixes:

1. **Wrong database ID**: Update `wrangler.toml` with the correct ID from `wrangler d1 list`
2. **Database not migrated**: Run `npm run db:migrate` 
3. **Deployment cache**: Try `wrangler deploy --compatibility-date=$(date +%Y-%m-%d)`

## What's Included

### ✅ **Anonymous Privacy-First Tracking**
- IP addresses are hashed (SHA-256) before storage
- No personally identifiable information is stored
- Tracks: country, city, user agent, timestamp, referrer

### ✅ **Smart Download Buttons**
- Both download buttons now track clicks before redirecting
- Graceful fallback - if tracking fails, download still works
- Visual feedback during tracking process

### ✅ **Analytics Dashboard**
- Visit `/stats` to see beautiful charts and metrics
- Real-time data with refresh capability
- Shows:
  - Total downloads
  - Daily breakdown with charts
  - Geographic distribution (top countries)
  - Recent download activity
  - Unique users count

### ✅ **Database Schema**
- `downloads` table for individual download records
- `daily_stats` table for aggregated daily statistics
- Proper indexes for efficient querying

## Database Schema

### Downloads Table
```sql
- id (auto-increment primary key)
- timestamp (Unix timestamp)
- ip_hash (hashed IP for privacy)
- user_agent (browser info)
- country (from Cloudflare)
- city (from Cloudflare)
- version (app version downloaded)
- referrer (where they came from)
- session_id (unique session identifier)
```

### Daily Stats Table
```sql
- date (YYYY-MM-DD)
- total_downloads (count for that day)
- unique_ips (unique users for that day)
- top_countries (JSON of country stats)
- created_at/updated_at (timestamps)
```

## Useful Commands

```bash
# View database contents
wrangler d1 execute dontsleep-analytics --command="SELECT COUNT(*) FROM downloads"

# See recent downloads
wrangler d1 execute dontsleep-analytics --command="SELECT * FROM downloads ORDER BY timestamp DESC LIMIT 10"

# Check daily stats
wrangler d1 execute dontsleep-analytics --command="SELECT * FROM daily_stats ORDER BY date DESC"

# List all databases
wrangler d1 list

# Check if database is properly bound
wrangler deploy --dry-run

# Reset database (careful!)
wrangler d1 execute dontsleep-analytics --command="DELETE FROM downloads"
wrangler d1 execute dontsleep-analytics --command="DELETE FROM daily_stats"
```

## Troubleshooting

### Database Not Found
- Make sure you've created the D1 database with `npm run db:create`
- Verify the database_id in `wrangler.toml` matches the one created

### TypeScript Errors
- Run `npm run cf-typegen` to generate types
- Make sure `@cloudflare/workers-types` is installed

### Local Development Issues
- Make sure you're running `npm run dev` (not just `vite dev`)
- Check that `wrangler` is installed globally

### Deployment Issues
- Ensure you're authenticated: `wrangler auth login`
- Check that your D1 database is properly configured in `wrangler.toml`

### "Database not available" in production
1. **Generate types first**: `npm run cf-typegen` 
2. Verify database exists: `wrangler d1 list`
3. Check binding name matches (`DB` in wrangler.toml)
4. Ensure database_id is correct
5. Check logs: `wrangler tail dontsleep-client`
6. Try redeploying: `npm run deploy`

## Privacy Notes

This system is designed to be privacy-compliant:

- **No personal data**: IP addresses are hashed, not stored
- **Anonymous tracking**: Only aggregated data for analytics
- **Opt-out friendly**: Easy to disable if needed
- **GDPR compliant**: No personal identifiers stored

## Next Steps

After setup, you can:

1. **Monitor growth**: Check `/stats` regularly to see download trends
2. **Set up alerts**: Consider adding webhooks for download milestones
3. **Export data**: Query the D1 database for custom reports
4. **Add more metrics**: Extend the schema for additional tracking

Your download tracking system is now ready! 🎉 