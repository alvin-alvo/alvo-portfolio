'use client';

import React, { useEffect, useState } from 'react';

const words = ["CYBER ANALYST", "FULL STACK DEV", "CREATIVE"];

export default function RotatingText() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000); // Rotate every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="relative inline-block border border-gray-500 px-2 py-1 ml-2 text-gray-300 font-mono text-sm tracking-wider uppercase overflow-hidden align-middle">
            <span key={index} className="animate-slide-up inline-block">
                {words[index]}
            </span>
        </span>
    );
}
