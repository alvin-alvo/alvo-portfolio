"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import data from '@/data/alvo-db.json';
import { AlvoDatabase } from '@/types/database';
import { Card } from '@/components/ui/Card';
import { ShieldCheck, Code2, Lock, Bug, Terminal as TerminalIcon, Globe, FileCode2, Braces, Cpu, PenTool, LayoutTemplate, Camera, Image as ImageIcon } from 'lucide-react';

const cyberIcons: Record<string, React.ReactNode> = {
  "Cryptography": <Lock size={16} strokeWidth={2.5} />,
  "Malware Analysis": <Bug size={16} strokeWidth={2.5} />,
  "Penetration Testing": <ShieldCheck size={16} strokeWidth={2.5} />,
  "Wireshark": <Globe size={16} strokeWidth={2.5} />,
  "Linux / Bash": <TerminalIcon size={16} strokeWidth={2.5} />,
};

const devIcons: Record<string, React.ReactNode> = {
  "Next.js / React": <Globe size={16} strokeWidth={2.5} />,
  "TypeScript": <FileCode2 size={16} strokeWidth={2.5} />,
  "Python": <Code2 size={16} strokeWidth={2.5} />,
  "C Programming": <Braces size={16} strokeWidth={2.5} />,
  "Tailwind CSS": <Cpu size={16} strokeWidth={2.5} />,
};

const designIcons: Record<string, React.ReactNode> = {
  "UI/UX (Figma)": <LayoutTemplate size={16} strokeWidth={2.5} />,
  "Graphic Design": <PenTool size={16} strokeWidth={2.5} />,
  "Photography": <Camera size={16} strokeWidth={2.5} />,
  "Canva": <ImageIcon size={16} strokeWidth={2.5} />,
};

export default function SkillsView() {
  const container = useRef<HTMLDivElement>(null);
  const db = data as AlvoDatabase;

  useGSAP(() => {
    gsap.from(".skill-item", {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      stagger: 0.06,
      ease: "back.out(1.7)",
    });
  }, { scope: container, dependencies: [] });

  return (
    <div ref={container} className="h-full flex flex-col gap-6 max-w-[1200px] mx-auto p-4 lg:p-8 overflow-hidden">
      
      {/* Header */}
      <header className="skill-item flex items-center justify-between border-b-4 border-black pb-4 shrink-0">
        <div className="flex items-center gap-4">
          <div className="bg-black text-white px-3 py-1 font-bold text-sm tracking-wider">
            DIR: /SYS/SKILLS
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">CAPABILITIES</h2>
        </div>
      </header>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 min-h-0 overflow-hidden">

        {/* Cyber Column */}
        <Card className="skill-item flex flex-col gap-3 p-5 overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck size={22} strokeWidth={2.5} className="text-[#ae2a00]" />
            <h3 className="font-black text-xl uppercase tracking-tight">CYBERSECURITY</h3>
          </div>
          <div className="flex flex-col gap-2 flex-1 min-h-0">
            {db.skills.cyber.map((skill, i) => (
              <div
                key={skill}
                className="skill-item flex items-center gap-3 p-3 border-2 border-black bg-[#faf9f5] hover:bg-[#b2ff05] transition-colors"
              >
                {cyberIcons[skill] || <ShieldCheck size={16} strokeWidth={2.5} />}
                <span className="font-bold text-sm uppercase tracking-wide">{skill}</span>
                <div className="ml-auto h-2 w-16 border-2 border-black overflow-hidden">
                  <div
                    className="h-full bg-[#ae2a00]"
                    style={{ width: `${90 - i * 8}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Dev Column */}
        <Card className="skill-item flex flex-col gap-3 p-5 overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <Code2 size={22} strokeWidth={2.5} className="text-[#b2ff05]" />
            <h3 className="font-black text-xl uppercase tracking-tight">DEVELOPMENT</h3>
          </div>
          <div className="flex flex-col gap-2 flex-1 min-h-0">
            {db.skills.dev.map((skill, i) => (
              <div
                key={skill}
                className="skill-item flex items-center gap-3 p-3 border-2 border-black bg-[#faf9f5] hover:bg-[#b2ff05] transition-colors"
              >
                {devIcons[skill] || <Code2 size={16} strokeWidth={2.5} />}
                <span className="font-bold text-sm uppercase tracking-wide">{skill}</span>
                <div className="ml-auto h-2 w-16 border-2 border-black overflow-hidden">
                  <div
                    className="h-full bg-[#b2ff05]"
                    style={{ width: `${85 - i * 7}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Design Column */}
        <Card className="skill-item flex flex-col gap-3 p-5 overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <PenTool size={22} strokeWidth={2.5} className="text-[#00c9ff]" />
            <h3 className="font-black text-xl uppercase tracking-tight">DESIGN</h3>
          </div>
          <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-y-auto pr-1">
            {db.skills.design.map((skill, i) => (
              <div
                key={skill}
                className="skill-item flex items-center gap-3 p-3 border-2 border-black bg-[#faf9f5] hover:bg-[#b2ff05] transition-colors"
              >
                {designIcons[skill] || <PenTool size={16} strokeWidth={2.5} />}
                <span className="font-bold text-sm uppercase tracking-wide">{skill}</span>
                <div className="ml-auto h-2 w-16 border-2 border-black overflow-hidden shrink-0">
                  <div
                    className="h-full bg-[#00c9ff]"
                    style={{ width: `${80 - i * 5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </div>
  );
}
