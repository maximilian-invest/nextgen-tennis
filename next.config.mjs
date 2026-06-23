/**
 * Static-export config for GitHub Pages.
 *
 * PAGES_BASE_PATH is provided by the deploy workflow (from actions/configure-pages):
 *   - project site  username.github.io/<repo>  → "/<repo>"
 *   - user/org site username.github.io         → ""
 * It is mirrored into NEXT_PUBLIC_BASE_PATH so client code (the asset() helper)
 * can prefix raw <img>/<video> src strings, which Next does not rewrite.
 */
const basePath = process.env.PAGES_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
