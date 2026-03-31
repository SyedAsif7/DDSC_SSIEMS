import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  const baseUrl = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if it exists to avoid double slashes
  const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
  return `${baseUrl}${normalizedPath}`;
}
