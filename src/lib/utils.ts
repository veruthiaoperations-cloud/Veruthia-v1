import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SPRING_PHYSICS = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};
