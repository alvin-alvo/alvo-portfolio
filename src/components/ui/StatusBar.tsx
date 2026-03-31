"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function StatusBar() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!marqueeRef.current) return;
    
    // Create seamless marquee animation
    gsap.to(marqueeRef.current.children, {
      xPercent: -100,
      repeat: -1,
      duration: 20,
      ease: "linear",
    });
  }, { scope: marqueeRef });

  const statusText = "SYSTEM_STABLE // PACKET_LOSS: 0.02% // ENCRYPTION: AES-256-GCM // TRACE_ROUTE: COMPLETE // NODE_ALVO_ACTIVE // SYSTEM_STABLE";

  return (
    <div className="bg-black text-[#b2ff05] font-mono text-xs md:text-sm font-bold p-2 overflow-hidden whitespace-nowrap border-t-4 border-black">
      <div ref={marqueeRef} className="flex min-w-[200%]">
        <span className="w-full shrink-0 uppercase px-4">{statusText}</span>
        <span className="w-full shrink-0 uppercase px-4">{statusText}</span>
      </div>
    </div>
  );
}
