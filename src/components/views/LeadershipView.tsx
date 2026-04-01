"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import data from '@/data/alvo-db.json';
import { AlvoDatabase } from '@/types/database';
import { Card } from '@/components/ui/Card';
import { Award, Star, Trophy, Target } from 'lucide-react';

export default function LeadershipView() {
  const container = useRef<HTMLDivElement>(null);
  const db = data as AlvoDatabase;

  useGSAP(() => {
    gsap.from(".lead-item", {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: container, dependencies: [] });

  return (
    <div ref={container} className="h-full flex flex-col gap-6 max-w-[1200px] mx-auto p-4 lg:p-8 overflow-hidden">
      
      {/* Header */}
      <header className="lead-item flex items-center justify-between border-b-4 border-black pb-4 shrink-0">
        <div className="flex items-center gap-4">
          <div className="bg-black text-white px-3 py-1 font-bold text-sm tracking-wider">
            DIR: /SYS/HONORS
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">LEADERSHIP</h2>
        </div>
      </header>

      {/* Main Content Feed */}
      <div className="flex flex-col gap-6 flex-1 min-h-0 overflow-y-auto pr-2 pb-8">
        
        {/* Achievements Section */}
        {db.achievements.length > 0 && (
          <div className="flex flex-col gap-4 mb-4">
            <h3 className="lead-item font-black text-2xl uppercase flex items-center gap-2">
              <Trophy size={24} strokeWidth={2.5} className="text-[#b2ff05]" />
              HONORS & ACHIEVEMENTS
            </h3>
            {db.achievements.map((ach, i) => (
              <Card key={i} className="lead-item p-5 bg-[#b2ff05]">
                <div className="flex items-start gap-4">
                  <Star size={24} strokeWidth={2.5} className="shrink-0 mt-1" />
                  <div className="flex flex-col gap-2">
                    <h4 className="font-black text-xl uppercase tracking-tighter">{ach.title}</h4>
                    <p className="font-bold text-sm leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Leadership Section */}
        <div className="flex flex-col gap-4">
          <div className="lead-item flex items-center gap-4 mt-2">
            <h3 className="font-black text-2xl uppercase flex items-center gap-2">
              <Target size={24} strokeWidth={2.5} className="text-[#ae2a00]" />
              ROLES & MENTORSHIP
            </h3>
            <div className="flex-1 h-1 bg-black opacity-20 hidden md:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {db.leadership.map((lead) => (
              <Card key={lead.id} className="lead-item p-5 flex flex-col gap-3 h-full">
                <div className="flex flex-col gap-1 mb-2">
                  <h4 className="font-black text-xl uppercase tracking-tight text-[#ae2a00]">{lead.organization}</h4>
                  <span className="font-bold text-xs uppercase tracking-widest bg-black text-white px-2 py-1 self-start inline-block">
                    {lead.role}
                  </span>
                </div>
                <p className="font-bold text-sm leading-relaxed flex-1">{lead.description}</p>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
