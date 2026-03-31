"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import data from '@/data/alvo-db.json';
import { AlvoDatabase } from '@/types/database';
import { Card } from '@/components/ui/Card';
import { Flag, Users, ArrowUpRight, Tag } from 'lucide-react';

export default function ProjectsView() {
  const container = useRef<HTMLDivElement>(null);
  const db = data as AlvoDatabase;

  useGSAP(() => {
    gsap.from(".project-item", {
      x: 60,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: container, dependencies: [] });

  return (
    <div ref={container} className="h-full flex flex-col gap-6 max-w-[1200px] mx-auto p-4 lg:p-8 overflow-hidden">

      {/* Header */}
      <header className="project-item flex items-center justify-between border-b-4 border-black pb-4 shrink-0">
        <div className="flex items-center gap-4">
          <div className="bg-black text-white px-3 py-1 font-bold text-sm tracking-wider">
            DIR: /PROJ/INDEX
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">PROJECTS</h2>
        </div>
      </header>

      {/* Projects List */}
      <div className="flex flex-col gap-6 flex-1 min-h-0 overflow-hidden">
        {db.projects.map((project, i) => (
          <Card key={project.title} className="project-item p-5 flex flex-col gap-3">
            {/* Title Row */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Flag size={20} strokeWidth={2.5} className="text-[#ae2a00] shrink-0" />
                <h3 className="font-black text-xl md:text-2xl uppercase tracking-tight">{project.title}</h3>
              </div>
              <button className="shrink-0 p-2 border-2 border-black hover:bg-[#b2ff05] transition-colors">
                <ArrowUpRight size={16} strokeWidth={3} />
              </button>
            </div>

            {/* Role */}
            <div className="flex items-center gap-2">
              <Users size={14} strokeWidth={2.5} className="text-gray-500" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{project.role}</span>
            </div>

            {/* Description */}
            <p className="font-bold text-sm leading-relaxed">{project.description}</p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-1">
              {project.tech.map((t) => (
                <span key={t} className="flex items-center gap-1 px-2 py-1 text-xs font-bold uppercase bg-[#faf9f5] border-2 border-black">
                  <Tag size={10} strokeWidth={3} />
                  {t}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
