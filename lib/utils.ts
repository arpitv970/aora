import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes with support for conditional classes.
 * @param inputs - An array of class names or conditional class values.
 * @returns A single merged class name string.
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
