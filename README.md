# Ahmad Nadzifi — React Portfolio

Premium hybrid (dark + light) personal portfolio built with React, Vite, Framer Motion and Lucide React. Ready for Vercel.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```
The production output is generated in `dist/`.

## Deploy to Vercel (free Hobby plan)
1. Create a GitHub account if you do not already have one.
2. Create a new **public** GitHub repository, for example `ahmad-nadzifi-portfolio`.
3. Upload all files and folders from this project to the repository root (do not upload the ZIP itself).
4. Sign in to https://vercel.com/ using GitHub.
5. Select **Add New → Project**, import `ahmad-nadzifi-portfolio`.
6. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
7. Click **Deploy**. Vercel will provide a free `*.vercel.app` address.
8. Every push to the connected GitHub branch triggers a new deployment.

No environment variables or paid database are required for this static portfolio.

## Edit your content
Most personal information and all gallery/project/achievement entries are centralized in:
- `src/content.js`

Replace the sample portrait/gallery/project URLs with your own image URLs. For local images:
1. Create `public/images/`.
2. Copy your image files into it, e.g. `public/images/ahmad-profile.jpg`.
3. Use `/images/ahmad-profile.jpg` as the corresponding image value in `src/content.js`.

The hero background uses `profile.portrait`. The about portrait uses `profile.aboutPhoto`.

## Important
- This initial release is a static portfolio. Content changes are made in `src/content.js` and redeployed through GitHub.
- There is no public admin dashboard yet. A real content-management dashboard requires authentication and a storage/backend service. Do not put private keys in frontend code.
- The current photo URLs are sample placeholders and should be replaced with Ahmad's own photos before public launch.
- Verify all competition names, award dates, certificate details, and the exact HAKI title/number against original documents before publishing.
- Vercel Hobby is free subject to Vercel's current usage limits and acceptable-use terms. A custom domain is optional and may cost money; the included `vercel.app` subdomain is free.
