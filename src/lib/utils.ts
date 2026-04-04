import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  // Use Vite's built-in asset resolution for standard paths
  // If the path already starts with http/https, return it as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Ensure we don't have double slashes and the path is absolute from the base
  return `${baseUrl}${cleanPath}`;
}
