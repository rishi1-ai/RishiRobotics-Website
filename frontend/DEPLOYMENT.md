# Deployment Guide

This guide covers deploying the Rishi Robotics educational platform to various hosting providers.

## Prerequisites

- Git repository with your code
- Node.js 18+ installed locally
- Supabase database configured and populated

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

Vercel is built by the creators of Next.js and provides the best Next.js hosting experience.

#### Steps:

1. **Push code to GitHub/GitLab/Bitbucket**

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel auto-detects Next.js settings

3. **Add Environment Variables**
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Future Git pushes trigger automatic deployments

**Vercel Features:**
- Automatic HTTPS
- Global CDN
- Serverless functions
- Zero configuration
- Custom domains
- Preview deployments for PRs

---

### Option 2: Netlify

Netlify is another excellent option with similar features to Vercel.

#### Steps:

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your Git repository

2. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

3. **Environment Variables**
   Add the same Supabase credentials as above

4. **Deploy**
   - Click "Deploy site"
   - Netlify builds and deploys automatically

**Netlify Features:**
- Automatic HTTPS
- Global CDN
- Form handling
- Split testing
- Custom domains
- Deploy previews

---

### Option 3: Self-Hosted (VPS/Cloud Server)

Deploy on your own server (DigitalOcean, AWS EC2, Linode, etc.)

#### Steps:

1. **Server Setup**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y

   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs

   # Install PM2 for process management
   sudo npm install -g pm2
   ```

2. **Clone Repository**
   ```bash
   git clone your-repo-url
   cd Rishi Robotics
   npm install
   ```

3. **Environment Variables**
   ```bash
   # Create .env.local file
   nano .env.local
   ```
   Add your Supabase credentials

4. **Build**
   ```bash
   npm run build
   ```

5. **Run with PM2**
   ```bash
   pm2 start npm --name "Rishi Robotics" -- start
   pm2 save
   pm2 startup
   ```

6. **Set Up Nginx (Optional but recommended)**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

### Option 4: Docker Deployment

Containerize the application for consistent deployment across environments.

#### Dockerfile:

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Build and Run:

```bash
# Build Docker image
docker build -t Rishi Robotics .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL=your_url \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key \
  Rishi Robotics
```

#### Docker Compose:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
      - NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}
    restart: unless-stopped
```

Run with: `docker-compose up -d`

---

## Database Deployment (Supabase)

### Production Supabase Setup:

1. **Create Production Project**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Note the URL and anon key

2. **Run Migrations**
   ```bash
   # Install Supabase CLI
   npm install -g supabase

   # Link project
   supabase link --project-ref your-project-ref

   # Push migrations
   supabase db push
   ```

3. **Seed Production Data**
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=prod_url \
   NEXT_PUBLIC_SUPABASE_ANON_KEY=prod_key \
   node scripts/seed-database.js
   ```

4. **Configure RLS Policies**
   - Review and update RLS policies for production
   - Ensure INSERT policies are restricted to admin users only

---

## CI/CD Setup

### GitHub Actions Example:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Performance Optimization

### Before Deployment:

1. **Optimize Images**
   - Use Next.js Image component
   - Compress images
   - Use WebP format

2. **Enable Compression**
   - Next.js automatically handles gzip
   - Ensure hosting provider supports Brotli

3. **Caching Strategy**
   - Set appropriate cache headers
   - Use CDN for static assets

4. **Code Splitting**
   - Already handled by Next.js
   - Verify with bundle analyzer

5. **Database Optimization**
   - Add indexes to frequently queried columns
   - Enable connection pooling
   - Use Supabase's built-in caching

---

## Monitoring and Analytics

### Recommended Tools:

1. **Vercel Analytics** (if using Vercel)
2. **Google Analytics**
3. **Sentry** for error tracking
4. **Uptime monitoring** (UptimeRobot, Pingdom)

### Setup Sentry:

```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```

---

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test course navigation
- [ ] Check code examples display properly
- [ ] Verify database connection
- [ ] Test on mobile devices
- [ ] Check page load speeds (aim for < 3s)
- [ ] Verify SSL certificate
- [ ] Test error pages (404, 500)
- [ ] Check console for errors
- [ ] Verify environment variables are set
- [ ] Set up monitoring and alerts
- [ ] Configure custom domain (if applicable)
- [ ] Set up backups for database
- [ ] Document deployment process
- [ ] Create rollback plan

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Database Connection Issues

- Verify Supabase URL and key
- Check network/firewall settings
- Ensure RLS policies are correct
- Check Supabase project status

### Performance Issues

- Enable Next.js analytics
- Use Lighthouse for audits
- Check database query performance
- Optimize images and assets

---

## Scaling Considerations

### Database:
- Monitor query performance
- Add indexes as needed
- Consider read replicas
- Enable connection pooling

### Application:
- Use Next.js Image optimization
- Implement caching strategies
- Consider edge functions
- Monitor and optimize Core Web Vitals

### Infrastructure:
- Use CDN for static assets
- Consider serverless functions
- Implement rate limiting
- Set up load balancing (if self-hosted)

---

## Support and Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

---

Happy deploying! 🚀
