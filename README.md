```markdown
# Vibely

Vibely is a modern, full‑stack social platform built with the Next.js App Router, React Server Components and Prisma. It demonstrates production-ready patterns for authentication, data modelling and fetching, server actions, route handlers and UI streaming — everything needed to build fast, scalable web apps with Next.js and PostgreSQL.

This repository is written in TypeScript and uses Next.js (App Router), NextAuth for authentication and Prisma as the ORM with PostgreSQL.

- Live development: npm run dev
- Production build: npm run build && npm run start

## Key Concepts & Highlights

- Next.js App Router with server and client components
- Route handlers for API endpoints
- Auth with NextAuth and the Prisma adapter
- PostgreSQL database with Prisma schema and migrations
- Server Actions + client mutation examples
- Loading / error / streaming UI patterns (React Suspense)
- TypeScript-first codebase

This project is ideal as a learning template or a starting point for building social features: sign in/out, following, profile pages, feed, and server-side logic.

## Features

- Authentication and session management using next-auth and Prisma adapter
- Database modelling and migrations with Prisma and PostgreSQL
- Modular routes using Next.js App Router (route handlers, layouts, nested routing)
- Examples of server components, server actions and client-side mutations
- Loading and error UI states for better UX
- Ready for deployment on Vercel (or any Node hosting)

## Tech Stack

- Next.js (App Router) - latest App Router features and React Server Components
- React (TypeScript)
- NextAuth.js for authentication
- Prisma + PostgreSQL for persistent data
- TypeScript for type safety

## Repository structure (short)

- app/ - Next.js App Router pages, layouts, and server/client components
- prisma/ - Prisma schema and migration files
- public/ - static assets
- styles/ - global and component styles
- package.json - scripts and dependencies

(Refer to the repo to see exact folders and files — the project is TypeScript-first and uses Next.js conventions.)

## Getting started (local)

1. Clone the repo
   git clone https://github.com/sumantwarhekar/Vibely.git
   cd Vibely

2. Install dependencies
   npm install

3. Create environment file
   Copy .env.example to .env (or create .env in the project root) and fill the values.

   Example .env values:
   - DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
   - NEXTAUTH_URL="http://localhost:3000"
   - NEXTAUTH_SECRET="<a-random-secret-string>"

4. Prisma setup
   - Generate Prisma client:
     npx prisma generate
   - Create and apply migrations (development):
     npx prisma migrate dev --name init
     OR push schema (if you prefer):
     npx prisma db push

   - (Optional) Seed the DB if you add a seed script or sample data.

5. Run development server
   npm run dev
   Open http://localhost:3000

## Authentication

This project uses next-auth with the Prisma adapter. Typical environment variables required:

- NEXTAUTH_URL — base URL of your app
- NEXTAUTH_SECRET — a random secret (use openssl rand -hex 32)
- Provider-specific keys (e.g., GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET) if using OAuth providers

NextAuth stores sessions and user-adapter related data in your Postgres database through Prisma.

## Database & Prisma

- Schema lives in prisma/schema.prisma
- Use `npx prisma studio` to inspect the database visually
- For production, set DATABASE_URL to your managed PostgreSQL provider (Supabase, Neon, ElephantSQL, etc.)
- Remember to run migrations after changing the Prisma schema

## Deployment

- Vercel is recommended for the smoothest Next.js experience. Set environment variables on Vercel:
  - DATABASE_URL
  - NEXTAUTH_URL
  - NEXTAUTH_SECRET
  - Provider keys (if any)

- Make sure to run your Prisma migrations on the production database before starting.

## Scripts

- npm run dev: Start Next.js dev server
- npm run build: Build the app for production
- npm run start: Start the production server

(These are defined in package.json.)

## Contributing

Contributions are welcome. If you want to extend functionality (e.g., add posts, comments, notifications), please:

- Open an issue describing the change
- Create a branch for your work and open a pull request
- Keep code in TypeScript and follow the existing project structure

## Roadmap / Ideas

- Add multi-provider OAuth and email sign-in
- Improve feed ranking, caching and pagination
- Add tests and CI workflows
- Add deployment scripts and seeding for production

## License

Specify a license (e.g., MIT) if you want the project to be open-source. Add LICENSE file to the repo when ready.

---

Thank you for building with modern Next.js! If you want, I can:
- commit this README.md directly to a branch and open a PR,
- add a .env.example template in the repo,
- or make the README shorter/longer or include badges and screenshots.
```
