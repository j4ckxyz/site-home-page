# site-home-page
 My landing page of my j4ck.xyz site! (WIP)

## Job
The idea of this is to act as a central location for links to different areas on my site and my social media accounts. I have previously used the root of my j4ck.xyz domain as a micro.blog feed of posts (which have gone out to socials), but I have decided to take that off my main domain. I am trying to work out a system with GPT-5's help that redirects all the old URLs to a new place though (stopping broken links).

A lot of this was also an experiment to use GPT-5 in Cursor during the week it's free. 

This project will always stay open source.

## Deploy (Cloudflare Pages)

This repo is deploy-ready for Cloudflare Pages with Pages Functions:

- Connect the repo to Cloudflare Pages.
- Build command: none
- Output directory: .
- Ensure Pages Functions are enabled (the `functions/` folder is present).
- Map the custom domain `j4ck.xyz` to the Pages project.

### What it does now

- Serves the static landing page from `index.html` at `/`.
- Redirects any date-based post URLs (e.g. `/2025/08/11/...`) to `https://j4ck.micro.b  log/...` with HTTP 301 via a catch‑all Pages Function (`functions/[[path]].ts`).

Security headers and a restrictive CSP are set via `_headers`.

## Future option: migrate posts to `notes.j4ck.xyz`

If/when I want to self-host old posts instead of redirecting to micro.blog:

1. Create a new repo for notes (e.g. `notes-site`).
2. Export content from micro.blog (WXR/JSON). 
3. Choose a simple static generator (e.g. Eleventy/Astro) to render posts to HTML at paths like `/YYYY/MM/DD/slug.html` to preserve permalinks.
4. Deploy that repo to Cloudflare Pages and attach `notes.j4ck.xyz`.
5. Update the redirect target in `functions/[[path]].ts` from `https://j4ck.micro.blog` to `https://notes.j4ck.xyz` and redeploy this project.

This keeps `j4ck.xyz` as the hub, while `notes.j4ck.xyz` serves the archive.

## Local preview

No build step needed; open `index.html` directly. For a full preview of Functions, use Cloudflare’s preview after pushing to a branch/PR.