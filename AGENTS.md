# Repository Guide

## Project Shape

This is a personal portfolio site built with Next.js App Router, React, TypeScript, Tailwind CSS v4, shadcn-style UI primitives, Magic UI animation components, and content-collections.

The site is statically exported for GitHub Pages. Production output is generated into `out/`.

## Commands

Use npm for dependency management.

```bash
npm install
npm run dev
npm run lint
npm run build
```

Do not add or refresh lockfiles for other package managers.

## Content

Most editable profile content lives in:

```text
src/data/resume.tsx
```

The homepage is assembled in:

```text
src/app/page.tsx
```

The contact page posts to FormSubmit from:

```text
src/app/contact/page.tsx
```

## Generated Files

Do not commit generated build/cache output:

```text
.next/
out/
.content-collections/
```

Do not commit OS/editor artifacts such as `.DS_Store`.

## Deployment

GitHub Actions deploys pushes to `main` via `.github/workflows/deploy.yml`. The workflow uses Node 20, `npm ci`, and `npm run build`, then uploads `out/` to GitHub Pages.
