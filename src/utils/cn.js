import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges tailwind classes and handles conditional classes safely.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
