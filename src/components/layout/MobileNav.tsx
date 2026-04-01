"use client";

import React from "react";
import { User, Cpu, FolderOpen, Mail, Briefcase, Award } from "lucide-react";

export type TabKey = "bio" | "skills" | "projects" | "experience" | "leadership" | "contact";

interface MobileNavProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  { key: "bio", label: "Bio", icon: <User size={22} strokeWidth={2.5} /> },
  { key: "skills", label: "Skills", icon: <Cpu size={22} strokeWidth={2.5} /> },
  { key: "projects", label: "Projects", icon: <FolderOpen size={22} strokeWidth={2.5} /> },
  { key: "experience", label: "Exp", icon: <Briefcase size={22} strokeWidth={2.5} /> },
  { key: "leadership", label: "Lead", icon: <Award size={22} strokeWidth={2.5} /> },
  { key: "contact", label: "Contact", icon: <Mail size={22} strokeWidth={2.5} /> },
];

export default function MobileNav({ activeTab, onTabChange }: MobileNavProps) {
  return (
    <nav className="shrink-0 flex items-stretch bg-white border-t-4 border-black md:hidden">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`
              flex-1 flex flex-col items-center justify-center gap-1 py-3 transition-colors
              ${isActive ? "bg-[#b2ff05] text-black font-black" : "bg-white text-gray-500 hover:bg-gray-100"}
            `}
            aria-label={tab.label}
            aria-current={isActive ? "page" : undefined}
          >
            {tab.icon}
            <span className="text-[10px] font-bold uppercase tracking-wider hidden xs:block">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
