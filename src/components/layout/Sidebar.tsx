"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Button } from '@/components/ui/Button';
import { User, Zap, FolderOpen, Mail, Download, Terminal, Briefcase, Award } from 'lucide-react';
import type { TabKey } from '@/components/layout/MobileNav';

interface SidebarProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

const navItems: { key: TabKey; num: string; label: string; icon: React.ReactNode }[] = [
  { key: 'bio', num: '00', label: 'BIO', icon: <User size={20} strokeWidth={2.5} /> },
  { key: 'skills', num: '01', label: 'SKILLS', icon: <Zap size={20} strokeWidth={2.5} /> },
  { key: 'projects', num: '02', label: 'PROJECTS', icon: <FolderOpen size={20} strokeWidth={2.5} /> },
  { key: 'experience', num: '03', label: 'EXPERIENCE', icon: <Briefcase size={20} strokeWidth={2.5} /> },
  { key: 'leadership', num: '04', label: 'LEADERSHIP', icon: <Award size={20} strokeWidth={2.5} /> },
  { key: 'contact', num: '05', label: 'CONTACT', icon: <Mail size={20} strokeWidth={2.5} /> },
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
  }, { scope: sidebarRef, dependencies: [] });

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
      <nav className="flex flex-col gap-2 md:gap-4 mt-2 flex-1 min-h-0 justify-evenly">
        {navItems.map((item) => {
          const isActive = activeTab === item.key;
          return (
            <Button
              key={item.key}
              onClick={() => onTabChange(item.key)}
              variant={isActive ? "noShadow" : "neutral"}
              className={`
                w-full flex justify-between items-center h-auto px-4 text-left transition-all [&_svg]:size-5 flex-1 max-h-[72px] min-h-0
                ${isActive ? 'translate-y-boxShadowY translate-x-boxShadowX' : ''}
              `}
            >
              <span className="font-bold text-lg xl:text-xl uppercase truncate">{item.num} <span className="ml-2">{item.label}</span></span>
              {item.icon}
            </Button>
          );
        })}

        {/* Spacer for Contact Gap */}
        <div className="flex-[0.25] max-h-6 min-h-1 shrink-0"></div>

        {/* Action Button */}
        <Button className="w-full flex items-center justify-center gap-2 h-auto px-4 flex-1 max-h-[72px] min-h-0">
          <Download size={18} strokeWidth={2.5} className="shrink-0" /> <span className="truncate">DOWNLOAD RESUME</span>
        </Button>
      </nav>

    </aside>
  );
}
