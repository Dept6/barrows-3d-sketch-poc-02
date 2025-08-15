import type { NextConfig } from "next";

// Configure basePath/assetPrefix to match your Webflow Cloud mount path.
// Prefer COSMIC_MOUNT_PATH (set by Webflow Cloud), fallback to NEXT_PUBLIC_MOUNT_PATH, then "/app".
const mountPath = process.env.COSMIC_MOUNT_PATH ?? process.env.NEXT_PUBLIC_MOUNT_PATH ?? "/app";

const nextConfig: NextConfig = {
  basePath: mountPath,
  assetPrefix: mountPath,
};

export default nextConfig;
