import type { NextConfig } from "next";

/**
 * Portable config: works on Vercel and on any Node.js host.
 * For static-only hosting (e.g. Hostinger shared plan without Node.js),
 * set NEXT_OUTPUT=export to generate a plain HTML/CSS/JS build in /out.
 */
const isStaticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const, trailingSlash: true } : {}),
  images: {
    // Static export cannot use the on-demand image optimizer.
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
