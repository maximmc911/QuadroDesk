import type { HTMLAttributes, ReactNode } from "react";

export interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}