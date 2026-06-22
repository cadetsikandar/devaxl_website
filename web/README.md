# DevAXL Website

The `web` folder contains the DevAXL marketing site built with Next.js and React.
It is the code that gets pushed to the public site repository, so this folder is
the root of what should deploy.

## What is included

- App Router pages for the main site, about, contact, insights, process,
  services, and work.
- Shared site components for hero sections, navigation, testimonials, proof,
  and calls to action.
- Reusable UI primitives under `src/components/ui` and work/insights cards.
- Static assets in `public/` for client logos, project images, and branded media.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Project Structure

- `src/app/` - route files, layouts, and metadata.
- `src/components/site/` - page sections and shared marketing components.
- `src/components/ui/` - low-level UI building blocks.
- `src/components/work/` - work and case-study components.
- `src/components/insights/` - insight/article components.
- `src/lib/` - site data and content helpers.
- `public/` - static images and exported assets.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production build locally:

```bash
npm run start
```

## Content and Assets

When updating the site, keep images and other static files inside `public/` so
they can be referenced consistently from the app. Page copy, work items, and
insight content are usually driven from the `src/lib/` data modules.

## Deployment Note

This repository is intended to publish the `web` folder contents to the target
GitHub repository. If you add files outside this folder, they will not be part
of the subtree push.
