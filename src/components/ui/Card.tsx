"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardRef.current) return;
    gsap.from(cardRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    });
  }, { scope: cardRef });

  return (
    <div
      ref={cardRef}
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
