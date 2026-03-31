"use client";

import React from "react";
import { Sun, Moon, Terminal } from "lucide-react";

interface MobileHeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function MobileHeader({ isDark, onToggleTheme }: MobileHeaderProps) {
  return (
    <header className="shrink-0 flex items-center justify-between px-4 py-3 bg-white border-b-4 border-black md:hidden">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <Terminal size={20} strokeWidth={3} />
        <h1 className="text-lg font-black uppercase tracking-tighter">ALVOLABS</h1>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={onToggleTheme}
        className="p-2 border-2 border-black bg-[#b2ff05] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} strokeWidth={3} /> : <Moon size={18} strokeWidth={3} />}
      </button>
    </header>
  );
}
