# Next-Gen Learning Dashboard

A modern student dashboard built with Next.js, TypeScript, Tailwind CSS, Supabase, and Framer Motion.

## Features

* Dynamic course data fetched from Supabase
* Server-side data fetching using Next.js App Router
* Animated Bento Grid dashboard
* Dynamic Lucide icons rendered from database values
* Animated progress indicators
* Activity heatmap widget
* Loading skeletons with pulsing animations
* Error boundary handling
* Responsive design for desktop, tablet, and mobile
* Framer Motion hover interactions and transitions

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React
* Vercel

## Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_publishable_key
```

## Running Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Architecture

### Server Components

Course data is fetched from Supabase using Next.js Server Components to improve performance and reduce client-side data fetching.

### Client Components

Interactive UI elements such as animated course cards and progress bars use Framer Motion inside Client Components.

### Database

Supabase stores:

* id
* title
* progress
* icon_name
* created_at

Course cards are rendered dynamically from database records.

## Deployment

The application is deployed on Vercel and connected to Supabase using environment variables.

## Challenges Faced

* Integrating Supabase with Next.js App Router
* Implementing animated loading states
* Dynamically rendering Lucide icons from database values
* Building reusable dashboard components while maintaining responsiveness
