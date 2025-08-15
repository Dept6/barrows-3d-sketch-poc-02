import type { NextConfig } from "next";

// Configure basePath/assetPrefix to match your Webflow Cloud mount path.
// Prefer COSMIC_MOUNT_PATH (set by Webflow Cloud), fallback to NEXT_PUBLIC_MOUNT_PATH, then "/app".
const resolvedMountPath = process.env.COSMIC_MOUNT_PATH ?? process.env.NEXT_PUBLIC_MOUNT_PATH ?? "/app";

export default function nextConfig(_phase?: string, _opts?: { defaultConfig: NextConfig }) {
  const config: NextConfig = {
    basePath: resolvedMountPath,
    assetPrefix: resolvedMountPath,
    // Proactively define images to avoid external mutation of a frozen object in certain build wrappers
    images: { unoptimized: true },
  };
  return config;
}
