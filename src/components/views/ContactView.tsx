"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, Github, Linkedin, Send, ExternalLink } from 'lucide-react';

const links = [
  { label: "EMAIL", href: "mailto:alvin@alvolabs.dev", icon: <Mail size={20} strokeWidth={2.5} /> },
  { label: "GITHUB", href: "https://github.com/alvinbinoy", icon: <Github size={20} strokeWidth={2.5} /> },
  { label: "LINKEDIN", href: "https://linkedin.com/in/alvinbinoy", icon: <Linkedin size={20} strokeWidth={2.5} /> },
];

export default function ContactView() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".contact-item", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: container, dependencies: [] });

  return (
    <div ref={container} className="h-full flex flex-col gap-6 max-w-[1200px] mx-auto p-4 lg:p-8 overflow-hidden">

      {/* Header */}
      <header className="contact-item flex items-center justify-between border-b-4 border-black pb-4 shrink-0">
        <div className="flex items-center gap-4">
          <div className="bg-black text-white px-3 py-1 font-bold text-sm tracking-wider">
            DIR: /SYS/CONTACT
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">CONTACT</h2>
        </div>
      </header>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-0 overflow-hidden">

        {/* Left: CTA */}
        <Card className="contact-item flex flex-col justify-center items-start p-6 md:p-8 bg-[#b2ff05]">
          <Send size={40} strokeWidth={2} className="mb-4" />
          <h3 className="font-black text-3xl md:text-4xl uppercase tracking-tighter mb-3">
            LET&apos;S WORK<br/>TOGETHER
          </h3>
          <p className="font-bold text-sm uppercase leading-relaxed mb-6 text-gray-800">
            Open for freelance, collaboration, and security consulting engagements.
          </p>
          <Button variant="neutral" className="flex items-center gap-2 w-full text-lg mt-4 h-12">
            <Mail size={16} strokeWidth={2.5} /> SEND MESSAGE
          </Button>
        </Card>

        {/* Right: Links */}
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <Card className="flex items-center justify-between p-5 hover:bg-[#b2ff05] transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  {link.icon}
                  <span className="font-black text-lg uppercase tracking-wide">{link.label}</span>
                </div>
                <ExternalLink size={18} strokeWidth={2.5} />
              </Card>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
