'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Minus, Square, X } from 'lucide-react';
import GlassSurface from './GlassSurface';

interface WindowFrameProps {
    children: React.ReactNode;
}

export default function WindowFrame({ children }: WindowFrameProps) {
    const router = useRouter();

    const handleCrash = () => {
        router.push('/404');
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    return (
        <div className="min-h-screen bg-black p-4 md:p-6 flex flex-col font-mono text-gray-400 overflow-hidden selection:bg-gray-800 selection:text-white">
            <div className="relative flex-1 rounded-2xl border-2 border-[#333] flex flex-col overflow-hidden shadow-2xl bg-[#0A0A0A]">

                {/* Tab & Header */}
                <div className="absolute top-0 left-0 w-full h-12 flex items-center justify-between px-4 z-50 pointer-events-none">
                    <div className="pointer-events-auto absolute -top-[2px] left-8 bg-[#0A0A0A] border-2 border-b-0 border-[#333] rounded-t-lg px-6 py-1 h-[34px] flex items-center">
                        <span className="text-xs tracking-wider font-bold text-gray-500 uppercase select-none">
                            alvoLabs
                        </span>
                    </div>

                    {/* Window Controls - Top Right */}
                    <div className="absolute top-4 right-4 z-50 flex gap-4 pointer-events-auto">
                        <div className="relative group w-10 h-10">
                            <GlassSurface
                                width="100%"
                                height="100%"
                                borderRadius={12}
                                borderWidth={0.5}
                                brightness={100}
                                opacity={0.4}
                                blur={4}
                                distortionScale={10}
                                backgroundOpacity={0.1}
                                mixBlendMode="overlay"
                                className="transition-transform duration-200 group-hover:scale-105"
                                style={{ backdropFilter: 'blur(10px) saturate(1.5)' }} // Check if this helps fallback
                            >
                                <button
                                    onClick={handleCrash}
                                    className="w-full h-full flex items-center justify-center text-white/70 hover:text-white"
                                    aria-label="Minimize"
                                >
                                    <Minus size={18} />
                                </button>
                            </GlassSurface>
                        </div>

                        <div className="relative group w-10 h-10">
                            <GlassSurface
                                width="100%"
                                height="100%"
                                borderRadius={12}
                                borderWidth={0.5}
                                brightness={100}
                                opacity={0.4}
                                blur={4}
                                distortionScale={10}
                                backgroundOpacity={0.1}
                                mixBlendMode="overlay"
                                className="transition-transform duration-200 group-hover:scale-105"
                                style={{ backdropFilter: 'blur(10px) saturate(1.5)' }}
                            >
                                <button
                                    onClick={toggleFullscreen}
                                    className="w-full h-full flex items-center justify-center text-white/70 hover:text-white"
                                    aria-label="Maximize"
                                >
                                    <Square size={14} />
                                </button>
                            </GlassSurface>
                        </div>

                        <div className="relative group w-10 h-10">
                            <GlassSurface
                                width="100%"
                                height="100%"
                                borderRadius={12}
                                borderWidth={0.5}
                                brightness={80}
                                opacity={0.4}
                                blur={4}
                                distortionScale={10}
                                backgroundOpacity={0.2}
                                mixBlendMode="overlay"
                                className="transition-transform duration-200 group-hover:scale-105"
                                style={{ background: 'rgba(255, 0, 0, 0.1)', backdropFilter: 'blur(10px) saturate(1.5)' }}
                            >
                                <button
                                    onClick={handleCrash}
                                    className="w-full h-full flex items-center justify-center text-red-300 hover:text-white"
                                    aria-label="Close"
                                >
                                    <X size={18} />
                                </button>
                            </GlassSurface>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="relative flex-1 w-full h-full overflow-hidden">
                    {children}
                </div>

            </div>
        </div>
    );
}
