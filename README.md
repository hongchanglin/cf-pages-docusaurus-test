# Website

This website is built using [Docusaurus](https://docusaurus.io/) and is ready to deploy to [Cloudflare Pages](https://pages.cloudflare.com/).

## Installation

```bash
npm install
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Cloudflare Pages Setup

Create a Pages project and use these settings:

- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `build`
- Root directory: `cf-pages-docusaurus` if your git repo root is the parent folder
- Environment variable: `NODE_VERSION=20`

Optional environment variables for the Docusaurus site config:

- `DOCUSAURUS_SITE_URL=https://your-project.pages.dev` or your custom domain
- `DOCUSAURUS_SITE_NAME=Your Docs Name`
- `DOCUSAURUS_REPO_URL=https://github.com/your-org/your-repo`

## Local Production Preview

```bash
npm run build
npm run serve
```

This serves the generated `build` directory so you can validate the production output before deploying.
