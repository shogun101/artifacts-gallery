# AI Artifacts Gallery

A curated gallery website displaying AI-generated brand artifacts (coins, wax seals, pills, keycaps, bottle caps). Each artifact has a hidden prompt that users can copy to clipboard with one click.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Sanity v3** (CMS)
- **Vercel** (Deployment)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.local.example` to `.env.local` and fill in your Sanity credentials:
   ```bash
   cp .env.local.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) for the gallery
6. Open [http://localhost:3000/studio](http://localhost:3000/studio) for Sanity Studio

## Sanity Setup

1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Add your project ID to `.env.local`
3. Add localhost:3000 to CORS origins in Sanity project settings

## Deploy

Deploy to Vercel and set environment variables in the Vercel dashboard.

## License

MIT
