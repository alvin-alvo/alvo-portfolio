'use client';

import React from 'react';
import GlassSurface from './GlassSurface';

export default function LiquidText() {
    return (
        <div className="relative flex items-center justify-center py-20 w-full select-none">
            {/* 
                Pill Container with Glass Surface.
                We use the GlassSurface as the background.
                "alvo" text sits on top in white.
            */}
            <div className="relative">
                <GlassSurface
                    width={500}
                    height={180}
                    borderRadius={100} // Full pill shape
                    borderWidth={0.5}
                    brightness={100}
                    opacity={0.6}
                    backgroundOpacity={0.4} // Visible glass pill
                    blur={12}
                    distortionScale={20}
                    displace={0.2}
                    mixBlendMode="normal"
                    className="flex items-center justify-center shadow-2xl shadow-blue-900/20"
                >
                    <h1
                        className="text-[8rem] font-black tracking-tighter text-white leading-none pb-4 drop-shadow-lg"
                        style={{ fontFamily: 'system-ui, sans-serif' }}
                    >
                        alvo
                    </h1>
                </GlassSurface>
            </div>
        </div>
    );
}
