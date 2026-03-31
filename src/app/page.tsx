"use client";

import React, { useState, useCallback } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import MobileHeader from '@/components/layout/MobileHeader';
import MobileNav, { type TabKey } from '@/components/layout/MobileNav';
import StatusBar from '@/components/ui/StatusBar';
import BioView from '@/components/views/BioView';
import SkillsView from '@/components/views/SkillsView';
import ProjectsView from '@/components/views/ProjectsView';
import ContactView from '@/components/views/ContactView';

const viewMap: Record<TabKey, React.ReactNode> = {
  bio: <BioView />,
  skills: <SkillsView />,
  projects: <ProjectsView />,
  contact: <ContactView />,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("bio");
  const [isDark, setIsDark] = useState(false);

  const handleTabChange = useCallback((tab: TabKey) => {
    setActiveTab(tab);
  }, []);

  const handleToggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
    // Future: toggle .dark class on document.documentElement
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-[100dvh] w-screen overflow-hidden bg-white border-0 md:border-4 border-black md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">

      {/* ── MOBILE HEADER (< md) ── */}
      <MobileHeader isDark={isDark} onToggleTheme={handleToggleTheme} />

      {/* ── DESKTOP SIDEBAR (>= md) — static, never changes ── */}
      <div className="hidden md:flex w-[400px] shrink-0 border-r-4 border-black h-full overflow-hidden">
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {/* ── MIDDLE VIEWPORT — only this changes ── */}
      <main className="flex-1 relative overflow-hidden flex flex-col min-h-0">
        <div className="flex-1 min-h-0 overflow-hidden bg-[#faf9f5]" key={activeTab}>
          {viewMap[activeTab]}
        </div>

        {/* Status Bar — pinned bottom of content area */}
        <div className="shrink-0">
          <StatusBar />
        </div>
      </main>

      {/* ── MOBILE BOTTOM NAV (< md) ── */}
      <MobileNav activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
