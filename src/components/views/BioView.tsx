"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import data from '@/data/alvo-db.json';
import { AlvoDatabase } from '@/types/database';
import { Card } from '@/components/ui/Card';
import { Shield, Activity, Crosshair } from 'lucide-react';

export default function BioView() {
  const container = useRef<HTMLDivElement>(null);
  const db = data as AlvoDatabase;

  useGSAP(() => {
    gsap.from(".bio-item", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
    });
  }, { scope: container, dependencies: [] });

  return (
    <div ref={container} className="h-full flex flex-col gap-6 max-w-[1200px] mx-auto p-4 lg:p-8 overflow-hidden">
      
      {/* Top Header */}
      <header className="bio-item flex flex-col md:flex-row items-start md:items-center justify-between border-b-4 border-black pb-4 shrink-0">
        <div className="flex items-center gap-4">
          <div className="bg-black text-white px-3 py-1 font-bold text-sm tracking-wider">
            DIR: /USER/BIO
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">BIOGRAPHY</h2>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <div className="w-5 h-5 bg-black"></div>
          <div className="w-5 h-5 bg-black"></div>
          <div className="w-5 h-5 bg-black"></div>
        </div>
      </header>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 flex-1 min-h-0 overflow-hidden">
        
        {/* Left Column: Image & Bio Text */}
        <section className="bio-item flex flex-col gap-4 min-h-0 overflow-hidden">
          <div className="relative border-4 border-black bg-black h-40 md:h-56 w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden shrink-0">
            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
            <div className="font-mono text-[#b2ff05] text-xs absolute top-4 left-4 whitespace-pre">
              {`> INIT SECURE CONNECTION...`}
              <br/>{`> BYPASSING MAINFRAME...`}
              <br/>{`> ALVOLABS.SYS_MOUNT`}
            </div>
            <div className="absolute -bottom-3 -right-3 bg-[#ae2a00] border-4 border-black text-white font-bold text-xs uppercase px-3 py-1.5 z-10">
              IMG_REF: 099-SYS
            </div>
          </div>

          <p className="text-base md:text-lg font-bold leading-relaxed">
            {db.profile.bio}
          </p>
        </section>

        {/* Right Column: Metrics & Certs */}
        <section className="flex flex-col gap-4 min-h-0 overflow-hidden">
          
          <Card className="bio-item p-4 pb-5 shrink-0">
            <div className="flex items-center gap-2 mb-1">
              <Crosshair size={14} strokeWidth={3} className="text-gray-500" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">FOCUS AREA</span>
            </div>
            <h3 className="font-black text-lg uppercase mb-3">NETWORK PENETRATION</h3>
            <div className="w-full h-3 border-4 border-black flex overflow-hidden">
              <div className="h-full bg-[#ae2a00] w-[85%] border-r-4 border-black"></div>
              <div className="h-full bg-white flex-1"></div>
            </div>
          </Card>

          <Card className="bio-item p-4 pb-5 shrink-0">
            <div className="flex items-center gap-2 mb-1">
              <Activity size={14} strokeWidth={3} className="text-gray-500" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">CORE METRIC</span>
            </div>
            <h3 className="font-black text-lg uppercase mb-3">INCIDENT RESPONSE</h3>
            <div className="w-full h-3 border-4 border-black flex overflow-hidden">
              <div className="h-full bg-[#b2ff05] w-[70%] border-r-4 border-black"></div>
              <div className="h-full bg-white flex-1"></div>
            </div>
          </Card>

          <Card className="bio-item flex-1 min-h-[120px] flex flex-col p-5 bg-white overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <Shield size={20} strokeWidth={2.5} className="text-[#ae2a00]" />
              <h2 className="text-xl font-black uppercase tracking-tight">CERTIFICATIONS</h2>
            </div>
            <div className="flex flex-col gap-2 flex-1 overflow-y-auto pr-2">
              {db.certifications.map((cert, i) => (
                <div key={i} className="flex items-start gap-2 border-b-2 border-dashed border-gray-200 pb-2 last:border-0 last:pb-0">
                   <div className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0"></div>
                   <p className="font-bold text-xs uppercase text-gray-700 leading-tight">
                     {cert}
                   </p>
                </div>
              ))}
            </div>
          </Card>

        </section>

      </div>
    </div>
  );
}
