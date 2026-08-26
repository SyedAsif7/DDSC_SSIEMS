import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import webpManifest from "./webp-manifest.json"

const webpSources = new Set(webpManifest as string[])

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Prefer optimized WebP sibling when scripts/optimize-images.mjs produced one. */
function preferWebp(assetPath: string) {
  const normalized = assetPath.startsWith("/") ? assetPath : `/${assetPath}`
  if (!webpSources.has(normalized)) return assetPath
  return normalized.replace(/\.(jpe?g|png)$/i, ".webp")
}

export function getAssetPath(path: string) {
  // Use Vite's built-in asset resolution for standard paths
  // If the path already starts with http/https, return it as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  const preferred = preferWebp(path)
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanPath = preferred.startsWith('/') ? preferred.substring(1) : preferred;
  
// Ensure we don't have double slashes and the path is absolute from the base
  return `${baseUrl}${cleanPath}`;
}

import { lazy, type ComponentType } from "react";

/**
 * Automatically retries dynamic component imports by forcing a single page reload
 * when new Vite deployments invalidate cached chunk hashes.
 */
export function lazyRetry<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    const pageHasBeenForceRefreshed = JSON.parse(
      window.sessionStorage.getItem("page-has-been-force-refreshed") || "false"
    );

    try {
      const component = await componentImport();
      window.sessionStorage.setItem("page-has-been-force-refreshed", "false");
      return component;
    } catch (error) {
      if (!pageHasBeenForceRefreshed) {
        window.sessionStorage.setItem("page-has-been-force-refreshed", "true");
        window.location.reload();
        return { default: (() => null) as unknown as T };
      }
      throw error;
    }
  });
}
