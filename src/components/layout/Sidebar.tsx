"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Button } from '@/components/ui/Button';
import { User, Zap, FolderOpen, Mail, Download, Terminal } from 'lucide-react';
import type { TabKey } from '@/components/layout/MobileNav';

interface SidebarProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

const navItems: { key: TabKey; num: string; label: string; icon: React.ReactNode }[] = [
  { key: 'bio', num: '01', label: 'BIO', icon: <User size={20} strokeWidth={2.5} /> },
  { key: 'skills', num: '02', label: 'SKILLS', icon: <Zap size={20} strokeWidth={2.5} /> },
  { key: 'projects', num: '03', label: 'PROJECTS', icon: <FolderOpen size={20} strokeWidth={2.5} /> },
  { key: 'contact', num: '04', label: 'CONTACT', icon: <Mail size={20} strokeWidth={2.5} /> },
];

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const sidebarRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sidebarRef.current) return;
    gsap.from(sidebarRef.current.children, {
      x: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.5)',
      delay: 0.1
    });
  }, { scope: sidebarRef });

  return (
    <aside ref={sidebarRef} className="flex flex-col gap-4 w-full h-full p-4 lg:p-6 lg:border-r-4 border-black overflow-hidden">
      
      {/* Profile Block */}
      <div className="bg-[#b2ff05] p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">ALVOLABS</h1>
        <div className="flex items-center gap-2 mb-2">
          <Terminal size={20} strokeWidth={3} />
          <h2 className="text-lg font-bold uppercase tracking-wider">ALVIN BINOY</h2>
        </div>
        <div className="bg-black text-white text-xs font-bold uppercase px-2 py-1 inline-block mb-4">
          STATUS: THREAT HUNTING
        </div>
        <p className="font-bold text-lg uppercase leading-tight">
          CYBERSECURITY<br />ANALYST
        </p>
      </div>

      {/* Navigation Matrix */}
      <nav className="flex flex-col gap-4 mt-2 flex-1 min-h-0">
        {navItems.map((item) => {
          const isActive = activeTab === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onTabChange(item.key)}
              className={`
                w-full text-left p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center transition-all
                ${isActive
                  ? 'bg-[#b2ff05] -translate-y-1 translate-x-1'
                  : 'bg-white hover:-translate-y-1 hover:translate-x-1 hover:bg-[#b2ff05] active:translate-y-0 active:translate-x-0 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                }
              `}
            >
              <span className="font-bold text-xl uppercase">{item.num} <span className="ml-2">{item.label}</span></span>
              {item.icon}
            </button>
          );
        })}
      </nav>

      {/* Action Button */}
      <div className="mt-auto pt-4 shrink-0">
        <Button className="w-full flex items-center justify-center gap-2">
          <Download size={18} strokeWidth={2.5} /> DOWNLOAD DOSSIER
        </Button>
      </div>

    </aside>
  );
}
