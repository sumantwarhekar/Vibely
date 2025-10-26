# ✨ Vibely

Vibely is a modern, full-stack social media platform built from scratch using the Next.js App Router, React Server Components, Prisma, and PostgreSQL. This project is inspired by platforms like MySpace and Facebook, serving as a comprehensive demonstration of modern web development practices and architecture.

This application is the result of the **"Next.js - The Full Course"**, putting advanced concepts into practice.

---

## 🚀 About The Project

The goal of this project is to build a simple social media platform where users can befriend each other. It serves as a practical guide to Next.js's advanced rendering, data-fetching, and caching strategies.

The application showcases everything from project setup and data modeling with Prisma to complex features like user authentication, relational data handling (follower system), and form submission with Server Actions.

---

## 🛠️ Tech Stack

This project utilizes a modern, type-safe stack:

* **Framework:** [Next.js 14+](https://nextjs.org/) (with App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Authentication:** [Auth.js](https://authjs.dev/) (formerly NextAuth.js)
* **ORM:** [Prisma](https://www.prisma.io/)
* **Database:** [PostgreSQL](https://www.postgresql.org/)
* **UI Components:** [React Server Components (RSC)](https://nextjs.org/docs/app/building-your-application/rendering/server-components) & Client Components

---

## 🔥 Features

This application implements a wide range of features, covering the entire development lifecycle:

* **Project Setup:** Full Next.js project organization from scratch.
* **Authentication:** Complete user authentication system (Sign-in, Sign-out) using Auth.js.
* **Protected Routes:** Redirecting unauthenticated users from private pages.
* **Database & ORM:** Full setup with PostgreSQL and Prisma, including data modeling for users and followers.
* **API & Route Handlers:** Creating and fetching from API endpoints.
* **Advanced Rendering:** Using both Server-Side Rendering (SSR) and Static Generation (SSG).
* **Data Fetching:** Implemented multiple data-fetching patterns, including:
    * Fetching from Server Components (RSC)
    * Fetching from API Routes
    * Fetching on dynamic routes
* **UI/UX:**
    * **Streaming & Suspense:** Implemented loading UIs for a better user experience.
    * **Error Handling:** Built custom error UIs for data fetching errors.
* **Core Social Features:**
    * **Follower System:** Modeled and created endpoints for relational follower data.
    * **Client-Side Mutations:** Implemented a follow/unfollow button with optimistic UI updates.
* **Modern Form Handling:**
    * Used **Server Actions** to handle form submissions and database mutations directly on the server.

---

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or later)
* npm, yarn, or pnpm
* A running PostgreSQL database

### Installation

1.  **Clone the repo**
    ```sh
    git clone [https://github.com/sumantwarhekar/Vibely.git](https://github.com/sumantwarhekar/Vibely.git)
    cd Vibely
    ```

2.  **Install dependencies**
    ```sh
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables**
    Create a file named `.env.local` in the root of the project and add the following variables.

    ```env
    # Get this from your PostgreSQL provider
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

    # Generate a secret using `openssl rand -hex 32`
    AUTH_SECRET="YOUR_AUTH_SECRET"

    # Add your GitHub (or other) provider credentials
    # You will need to create an OAuth App on GitHub
    AUTH_GITHUB_ID="YOUR_GITHUB_OAUTH_ID"
    AUTH_GITHUB_SECRET="YOUR_GITHUB_OAUTH_SECRET"
    ```

4.  **Run database migrations**
    This will sync your Prisma schema with your PostgreSQL database and create the necessary tables.
    ```sh
    npx prisma migrate dev
    ```

5.  **Run the development server**
    ```sh
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result!
