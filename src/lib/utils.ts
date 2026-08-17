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
