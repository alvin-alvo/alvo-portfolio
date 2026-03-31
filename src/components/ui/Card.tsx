"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {

  return (
    <div
      className={cn(
        "bg-white border-4 border-black box-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
