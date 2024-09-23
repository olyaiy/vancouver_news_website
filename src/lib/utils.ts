import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, parseISO } from 'date-fns';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Helper function to format the date
export function formatDate(dateString: string) {
  const date = parseISO(dateString);
  return format(date, 'MMM d, yyyy');
}


// Helper function to truncate text
export function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}