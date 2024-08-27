import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inp: ClassValue[]) {
  return twMerge(clsx(inp));
}
