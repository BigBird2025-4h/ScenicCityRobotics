# Scenic City Robotics website

Next.js + Tailwind CSS site for a Chattanooga FTC team.

## Edit your content
Almost everything you will change lives in `src/lib/site.ts`: team email, FTC team number, blog posts, sponsors, and resource links.
Page layouts are in `src/app/*/page.tsx`. Colors are in `src/app/globals.css`.

## Run locally
    npm install
    npm run dev

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. In Vercel, choose Add New > Project and import the repo. Vercel detects Next.js automatically.
3. Click Deploy. Every push to main redeploys.

Or from the terminal: `npx vercel`.
