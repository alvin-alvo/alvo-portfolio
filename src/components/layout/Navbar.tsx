"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!navRef.current) return;
    
    gsap.from(navRef.current.children, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.5)',
      delay: 0.2
    });
  }, { scope: navRef, dependencies: [] });

  return (
    <nav className="fixed top-0 w-full z-50 border-b-4 border-black bg-background border-solid px-6 py-4 flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="font-bold text-2xl tracking-tighter uppercase">
        ALVOLABS
      </div>
      <ul ref={navRef as any} className="flex gap-6 uppercase font-bold text-sm">
        <li><Link href="#bio" className="hover:underline hover:text-[#ae2a00] transition-colors">BIO</Link></li>
        <li><Link href="#skills" className="hover:underline hover:text-[#ae2a00] transition-colors">SKILLS</Link></li>
        <li><Link href="#projects" className="hover:underline hover:text-[#ae2a00] transition-colors">PROJECTS</Link></li>
        <li><Link href="#contact" className="hover:underline hover:text-[#ae2a00] transition-colors">CONTACT</Link></li>
      </ul>
    </nav>
  );
}
