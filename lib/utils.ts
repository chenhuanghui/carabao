import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getInitialName(name: string): string {
  if (!name || name.length === 0) return '';
  const rgx = /(\p{L}{1})\p{L}+/gu;
  const matches = [...name.matchAll(rgx)];
  
  const initials = (
    (matches[0]?.[1] || '') + (matches[matches.length - 1]?.[1] || '')
  ).toUpperCase();
  return initials
}