"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import data from '@/data/alvo-db.json';
import { AlvoDatabase } from '@/types/database';
import { Card } from '@/components/ui/Card';
import { Briefcase, GraduationCap, ArrowUpRight, Calendar, MapPin } from 'lucide-react';

export default function ExperienceView() {
  const container = useRef<HTMLDivElement>(null);
  const db = data as AlvoDatabase;

  useGSAP(() => {
    gsap.from(".exp-item", {
      x: -60,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: container, dependencies: [] });

  return (
    <div ref={container} className="h-full flex flex-col gap-6 max-w-[1200px] mx-auto p-4 lg:p-8 overflow-hidden">
      
      {/* Header */}
      <header className="exp-item flex items-center justify-between border-b-4 border-black pb-4 shrink-0">
        <div className="flex items-center gap-4">
          <div className="bg-black text-white px-3 py-1 font-bold text-sm tracking-wider">
            DIR: /SYS/EXPERIENCE
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">EXPERIENCE</h2>
        </div>
      </header>

      {/* Main Grid: Experience (Left) and Education (Right) */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 flex-1 min-h-0 overflow-hidden">
        
        {/* Experience List (2/3 width) */}
        <div className="flex-[2] flex flex-col gap-6 overflow-y-auto pr-2 pb-8">
          {db.experience.map((exp) => (
            <Card key={exp.id} className="exp-item p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <h3 className="font-black text-xl md:text-2xl uppercase tracking-tight text-[#ae2a00]">{exp.company}</h3>
                  <div className="hidden md:block w-2 h-2 bg-black shrink-0"></div>
                  <span className="font-bold text-lg md:text-xl uppercase">{exp.role}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-600 mb-1">
                <div className="flex items-center gap-1"><Calendar size={14} strokeWidth={2.5}/> {exp.duration}</div>
                <div className="flex items-center gap-1"><MapPin size={14} strokeWidth={2.5}/> {exp.type}</div>
              </div>

              <p className="font-bold text-sm leading-relaxed">{exp.description}</p>
            </Card>
          ))}
        </div>

        {/* Education Section (1/3 width, "small space") */}
        <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2 pb-8 lg:border-l-4 border-black lg:pl-8">
          <div className="exp-item flex items-center gap-2 mb-2 shrink-0">
            <GraduationCap size={24} strokeWidth={2.5} className="text-[#b2ff05]" />
            <h3 className="font-black text-2xl uppercase tracking-tight">EDUCATION</h3>
          </div>
          
          <div className="flex flex-col gap-4">
            {db.education.map((edu, i) => (
              <Card key={i} className="exp-item p-4 flex flex-col gap-2 bg-[#faf9f5]">
                <h4 className="font-black text-sm uppercase leading-tight select-all">{edu.degree}</h4>
                <p className="font-bold text-xs uppercase text-gray-500">{edu.institution}</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t-2 border-dashed border-gray-300">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">{edu.duration}</span>
                  <span className="text-xs font-black px-2 py-0.5 bg-[#b2ff05] border-2 border-black">{edu.score}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
