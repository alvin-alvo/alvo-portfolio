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
        <div className="min-h-screen bg-black p-4 md:p-6 flex flex-col font-mono text-gray-400 overflow-hidden selection:bg-gray-800 selection:text-foreground">
            <div className="relative flex-1 rounded-2xl border-2 border-[#333] flex flex-col overflow-hidden shadow-2xl bg-[#0A0A0A]">

                {/* Tab & Header */}
                <div className="absolute top-0 left-0 w-full h-12 flex items-center justify-between px-4 z-50 pointer-events-none">
                    {/* <div className="pointer-events-auto absolute -top-[2px] left-8 bg-[#0A0A0A] border-2 border-b-0 border-[#333] rounded-t-lg px-6 py-1 h-[34px] flex items-center">
                        <span className="text-xs tracking-wider font-bold text-gray-500 uppercase select-none">
                            alvoLabs
                        </span>
                    </div> */}

                    {/* Window Controls - Top Right */}
                    <div className="absolute top-4 right-4 z-50 gap-4 pointer-events-auto hidden md:flex">
                        <button
                            onClick={handleCrash}
                            className="w-8 h-8 border border-foreground/30 hover:bg-foreground hover:text-background flex items-center justify-center transition-colors"
                            aria-label="Minimize"
                        >
                            <Minus size={16} />
                        </button>

                        <button
                            onClick={toggleFullscreen}
                            className="w-8 h-8 border border-foreground/30 hover:bg-foreground hover:text-background flex items-center justify-center transition-colors"
                            aria-label="Maximize"
                        >
                            <Square size={12} />
                        </button>

                        <button
                            onClick={handleCrash}
                            className="w-8 h-8 border border-foreground/30 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors text-red-400"
                            aria-label="Close"
                        >
                            <X size={16} />
                        </button>
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
