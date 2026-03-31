"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const { contextSafe } = useGSAP({ scope: btnRef });

  const handleMouseEnter = contextSafe(() => {
    gsap.to(btnRef.current, {
      x: -4,
      y: -4,
      boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
      duration: 0.2,
      ease: "power2.out",
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
      duration: 0.2,
      ease: "power2.out",
    });
  });

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "px-6 py-3 font-bold border-4 border-black border-solid shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] uppercase transition-colors",
        variant === 'primary' ? "bg-[#ae2a00] text-white" : "bg-[#b2ff05] text-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
