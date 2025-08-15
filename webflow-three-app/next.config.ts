import type { NextConfig } from "next";

// Configure basePath/assetPrefix to match your Webflow Cloud mount path.
// Update "/app" to your actual mount path when you create the environment.
const mountPath = process.env.NEXT_PUBLIC_MOUNT_PATH ?? "/app";

const nextConfig: NextConfig = {
  basePath: mountPath,
  assetPrefix: mountPath,
};

export default nextConfig;
