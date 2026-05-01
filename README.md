# ryanbattles.com

Personal portfolio site for Ryan Battles — marketing leader, builder, Columbus, Ohio.

Built with Next.js, Tailwind CSS, shadcn/ui, and Magic UI. Outputs a fully static site deployed via GitHub Actions to GitHub Pages.

## Stack

- **Next.js** (App Router, static export)
- **TypeScript / TSX**
- **Tailwind CSS v4**
- **shadcn/ui** — accessible component primitives
- **Magic UI** — animation components (BlurFade, FlickeringGrid)
- **react-icons** — brand icons (Salesforce, HubSpot, etc.)
- **Lucide React** — general-purpose icons

## Development

Install dependencies:

```bash
npm install
```

Start the local dev server with hot reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

Nearly all page content lives in a single file:

```
src/data/resume.tsx
```

Edit the `DATA` object there to update name, description, work history, skills, projects, and contact links. Changes reflect instantly in the dev server.

## Building for Production

```bash
npm run build
```

Outputs a fully static site to the `out/` directory — plain HTML, CSS, and JS ready for any static host.

## Deployment

Pushes to `main` automatically trigger a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the site and deploys `out/` to GitHub Pages.

To deploy manually without a code change, use the **Run workflow** button under the Actions tab on GitHub.

## Project Structure

```
src/
  app/
    layout.tsx        # Global layout, fonts, metadata
    page.tsx          # Main page structure and sections
  components/
    section/          # ContactSection, ProjectsSection, WorkSection
    magicui/          # BlurFade, FlickeringGrid animation components
    ui/               # shadcn/ui primitives
  data/
    resume.tsx        # ← Edit this for all content changes
public/
  assets/img/         # Headshot and other images
  llms.txt            # Structured content for AI crawlers
  robots.txt
  .nojekyll           # Prevents GitHub Pages/Jekyll from blocking _next/ assets
.github/
  workflows/
    deploy.yml        # Build + deploy to GitHub Pages on push to main
```
