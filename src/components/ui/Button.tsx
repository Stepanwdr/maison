'use client';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'fill' | 'ghost' | 'flat';
type Size    = 'sm' | 'md' | 'lg';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export function Button({ variant = 'fill', size = 'md', className = '', children, ...rest }: Props) {
  return (
    <button className={`btn btn-${variant} btn-${size} ${className}`} {...rest}>
      {children}
    </button>
  );
}
