"use client";

import React, { useState, useEffect, useRef } from "react";
import { ProjectsSection } from "./components/Projects";

/* ─────────────────────────────────────────────
   TYPES & INTERFACES
   ───────────────────────────────────────────── */
interface TechItem {
    name: string;
    icon: string;
    color: string;
    bg: string;
    border: string;
}


interface SocialItem {
    icon: string;
    label: string;
}

/* ─────────────────────────────────────────────
   GLOBAL STYLES injected via <style> tag
───────────────────────────────────────────── */
const GlobalStyles = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Poppins:wght@300;400;500;600;700&display=swap');

    :root {
      --pink:        #FF9EBE;
      --lavender:    #D8B4E8;
      --rose-gold:   #E8A8B8;
      --peach:       #FFBFA8;
      --cream:       #FFF8F5;
      --charcoal:    #1E293B;
      --muted:       #64748B;
      --glass-bg:    rgba(255,255,255,0.55);
      --glass-border:rgba(255,158,190,0.35);
      --shadow-pink: 0 8px 40px rgba(255,158,190,0.25);
      --shadow-lav:  0 8px 40px rgba(216,180,232,0.22);
      --glow-pink:   0 0 30px rgba(255,158,190,0.45);
      --glow-lav:    0 0 30px rgba(216,180,232,0.45);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Poppins', sans-serif;
      background: var(--cream);
      color: var(--charcoal);
      overflow-x: hidden;
    }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--cream); }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, var(--pink), var(--lavender));
      border-radius: 99px;
    }

    /* Gradient mesh BG */
    .mesh-bg {
      position: fixed; inset: 0; z-index: -1;
      background:
        radial-gradient(ellipse 80% 60% at 10% 10%, rgba(255,158,190,0.22) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 90% 20%, rgba(216,180,232,0.20) 0%, transparent 60%),
        radial-gradient(ellipse 70% 60% at 50% 100%, rgba(255,191,168,0.18) 0%, transparent 60%),
        #FFF8F5;
    }

    /* Typography */
    .serif { font-family: 'Playfair Display', serif; }

    /* Glass card */
    .glass {
      background: var(--glass-bg);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border: 1.5px solid var(--glass-border);
      border-radius: 28px;
      box-shadow: var(--shadow-pink);
    }

    /* Pill badge */
    .pill {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 7px 18px;
      border-radius: 999px;
      font-size: 13px; font-weight: 500;
      border: 1.5px solid;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .pill:hover { transform: translateY(-3px); }

    /* CTA Button */
    .btn-cta {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 14px 32px;
      border-radius: 999px;
      background: linear-gradient(135deg, var(--pink) 0%, var(--rose-gold) 50%, var(--lavender) 100%);
      color: white;
      font-family: 'Poppins', sans-serif;
      font-weight: 600; font-size: 15px;
      border: none; cursor: pointer;
      box-shadow: 0 6px 30px rgba(255,158,190,0.45), inset 0 1px 0 rgba(255,255,255,0.35);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      text-decoration: none;
    }
    .btn-cta:hover {
      transform: translateY(-4px) scale(1.03);
      box-shadow: 0 14px 40px rgba(255,158,190,0.55), inset 0 1px 0 rgba(255,255,255,0.4);
    }

    /* Outline button */
    .btn-outline {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 13px 30px;
      border-radius: 999px;
      background: transparent;
      color: var(--charcoal);
      font-family: 'Poppins', sans-serif;
      font-weight: 500; font-size: 15px;
      border: 1.5px solid var(--pink);
      cursor: pointer;
      transition: all 0.25s ease;
      text-decoration: none;
    }
    .btn-outline:hover {
      background: rgba(255,158,190,0.08);
      transform: translateY(-3px);
      box-shadow: var(--glow-pink);
    }

    /* Section fade-in */
    .fade-section {
      opacity: 0; transform: translateY(36px);
      transition: opacity 0.75s cubic-bezier(.22,1,.36,1), transform 0.75s cubic-bezier(.22,1,.36,1);
    }
    .fade-section.visible { opacity: 1; transform: none; }

    /* Floating animation */
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-14px); }
    }
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50%       { transform: translateY(-8px) rotate(3deg); }
    }
    @keyframes sparkle {
      0%, 100% { opacity: 0.3; transform: scale(0.8); }
      50%       { opacity: 1;   transform: scale(1.2); }
    }
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }
    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 20px rgba(255,158,190,0.3); }
      50%       { box-shadow: 0 0 40px rgba(255,158,190,0.6), 0 0 60px rgba(216,180,232,0.3); }
    }
    @keyframes gradientShift {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes bounce-in {
      0%   { opacity:0; transform: scale(0.5) rotate(-10deg); }
      60%  { transform: scale(1.1) rotate(2deg); }
      100% { opacity:1; transform: scale(1) rotate(0deg); }
    }

    .float   { animation: float    3.5s ease-in-out infinite; }
    .float2  { animation: floatSlow 4.5s ease-in-out infinite; }
    .sparkle-dot { animation: sparkle 2s ease-in-out infinite; }

    /* Nav */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      padding: 16px 40px;
      display: flex; align-items: center; justify-content: space-between;
      background: rgba(255,248,245,0.78);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255,158,190,0.18);
      transition: box-shadow 0.3s;
    }
    .nav.scrolled { box-shadow: 0 4px 30px rgba(255,158,190,0.15); }

    .nav-links { display: flex; gap: 36px; list-style: none; }
    .nav-links a {
      font-size: 14px; font-weight: 500; color: var(--muted);
      text-decoration: none;
      transition: color 0.2s;
      position: relative;
    }
    .nav-links a::after {
      content:''; position: absolute; bottom:-3px; left:0; right:0; height:2px;
      background: linear-gradient(90deg, var(--pink), var(--lavender));
      border-radius: 99px;
      transform: scaleX(0); transition: transform 0.3s ease;
    }
    .nav-links a:hover { color: var(--charcoal); }
    .nav-links a:hover::after { transform: scaleX(1); }

    /* Gradient text */
    .gradient-text {
      background: linear-gradient(135deg, var(--pink) 0%, #C084E8 50%, var(--peach) 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s linear infinite;
    }

    /* Project card hover */
    .project-card {
      transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease;
    }
    .project-card:hover {
      transform: translateY(-10px) rotate(-0.5deg);
      box-shadow: 0 24px 60px rgba(255,158,190,0.3), 0 0 0 1px rgba(255,158,190,0.2);
    }

    /* Social icon */
    .social-icon {
      width: 48px; height: 48px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 14px;
      background: var(--glass-bg);
      backdrop-filter: blur(12px);
      border: 1.5px solid var(--glass-border);
      color: var(--rose-gold);
      cursor: pointer;
      transition: all 0.25s ease;
      font-size: 20px;
    }
    .social-icon:hover {
      background: linear-gradient(135deg, rgba(255,158,190,0.2), rgba(216,180,232,0.2));
      transform: translateY(-4px);
      box-shadow: var(--glow-pink);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .hero-grid { grid-template-columns: 1fr !important; }
      .projects-grid { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

/* ─────────────────────────────────────────────
   SVG DECORATIONS
───────────────────────────────────────────── */
const RibbonLeft = ({ style }: { style?: React.CSSProperties }) => (
    <svg className="float2" style={{ ...style, position: 'absolute', left: '-30px', top: '120px', opacity: 0.55, zIndex: 0, pointerEvents: 'none' }} width="90" height="280" viewBox="0 0 90 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 10 C20 40, 80 80, 30 120 C-10 160, 70 200, 25 250 C10 265, 30 275, 45 270" stroke="url(#ribGrad1)" strokeWidth="3.5" strokeLinecap="round" fill="none" strokeDasharray="6 4" />
        <path d="M50 5 C10 35, 70 75, 20 115 C-20 155, 60 195, 15 245 C0 260, 20 272, 35 268" stroke="url(#ribGrad2)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
        <circle cx="60" cy="10" r="5" fill="#FF9EBE" opacity="0.8" />
        <circle cx="30" cy="120" r="4" fill="#D8B4E8" opacity="0.8" />
        <circle cx="25" cy="250" r="5" fill="#E8A8B8" opacity="0.8" />
        <defs>
            <linearGradient id="ribGrad1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF9EBE" />
                <stop offset="50%" stopColor="#D8B4E8" />
                <stop offset="100%" stopColor="#FFBFA8" />
            </linearGradient>
            <linearGradient id="ribGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E8A8B8" />
                <stop offset="100%" stopColor="#D8B4E8" />
            </linearGradient>
        </defs>
    </svg>
);

const RibbonRight = ({ style }: { style?: React.CSSProperties }) => (
    <svg className="float" style={{ ...style, position: 'absolute', right: '-20px', top: '60px', opacity: 0.5, zIndex: 0, pointerEvents: 'none' }} width="80" height="320" viewBox="0 0 80 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10 C60 50, 10 100, 55 150 C90 190, 20 230, 60 285 C68 300, 50 315, 35 310" stroke="url(#ribGrad3)" strokeWidth="3.5" strokeLinecap="round" fill="none" strokeDasharray="8 5" />
        <circle cx="20" cy="10" r="5" fill="#D8B4E8" opacity="0.9" />
        <circle cx="55" cy="150" r="4" fill="#FF9EBE" opacity="0.8" />
        <circle cx="60" cy="285" r="5.5" fill="#FFBFA8" opacity="0.8" />
        <defs>
            <linearGradient id="ribGrad3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D8B4E8" />
                <stop offset="60%" stopColor="#FF9EBE" />
                <stop offset="100%" stopColor="#FFBFA8" />
            </linearGradient>
        </defs>
    </svg>
);

const FloralCorner = ({ style }: { style?: React.CSSProperties }) => (
    <svg style={{ ...style, opacity: 0.35, pointerEvents: 'none' }} width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="10" fill="#FF9EBE" opacity="0.5" />
        <circle cx="50" cy="20" r="7" fill="#D8B4E8" opacity="0.5" />
        <circle cx="20" cy="50" r="7" fill="#FFBFA8" opacity="0.5" />
        <circle cx="60" cy="40" r="5" fill="#E8A8B8" opacity="0.6" />
        <circle cx="40" cy="60" r="5" fill="#D8B4E8" opacity="0.5" />
        <line x1="30" y1="30" x2="50" y2="20" stroke="#FF9EBE" strokeWidth="1.5" opacity="0.5" />
        <line x1="30" y1="30" x2="20" y2="50" stroke="#D8B4E8" strokeWidth="1.5" opacity="0.5" />
        <line x1="50" y1="20" x2="60" y2="40" stroke="#E8A8B8" strokeWidth="1.5" opacity="0.5" />
        <line x1="20" y1="50" x2="40" y2="60" stroke="#FFBFA8" strokeWidth="1.5" opacity="0.5" />
        <path d="M25 25 Q35 15 45 25 Q55 35 45 45 Q35 55 25 45 Q15 35 25 25Z" fill="#FF9EBE" opacity="0.12" />
        <path d="M10 5 Q20 0 25 10 Q20 20 10 18 Q3 12 10 5Z" fill="#D8B4E8" opacity="0.15" />
    </svg>
);

const SparkleIcon = ({ size = 20, color = "#FF9EBE", style }: { size?: number; color?: string; style?: React.CSSProperties }) => (
    <svg style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L13.5 9 20 9 14.5 13.5 16.5 21 12 17 7.5 21 9.5 13.5 4 9 10.5 9Z" fill={color} opacity="0.85" />
    </svg>
);

const StarDots = () => {
    const dotsPrimary: [number, number, string][] = [
        [80, 80, '#FF9EBE'], [720, 60, '#D8B4E8'], [200, 160, '#E8A8B8'], [600, 140, '#FFBFA8'],
        [50, 320, '#D8B4E8'], [760, 300, '#FF9EBE'], [400, 50, '#FFBFA8'], [370, 560, '#D8B4E8'],
        [680, 480, '#FF9EBE'], [130, 500, '#E8A8B8']
    ];
    const dotsSecondary: [number, number, string][] = [
        [160, 260, '#FF9EBE'], [640, 200, '#D8B4E8'], [300, 500, '#FFBFA8']
    ];

    return (
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            {dotsPrimary.map(([cx, cy, c], i) => (
                <circle key={i} cx={cx} cy={cy} r="3.5" fill={c} opacity="0.55" className="sparkle-dot" style={{ animationDelay: `${i * 0.3}s` }} />
            ))}
            {dotsSecondary.map(([cx, cy, c], i) => (
                <polygon key={i} points={`${cx},${cy - 6} ${cx + 2},${cy - 2} ${cx + 6},${cy} ${cx + 2},${cy + 2} ${cx},${cy + 6} ${cx - 2},${cy + 2} ${cx - 6},${cy} ${cx - 2},${cy - 2}`} fill={c} opacity="0.6" className="sparkle-dot" style={{ animationDelay: `${i * 0.5 + 0.2}s` }} />
            ))}
        </svg>
    );
};

/* ─────────────────────────────────────────────
   SVG ILLUSTRATION — Coder Girl
───────────────────────────────────────────── */
const CoderGirlIllustration = () => (
    <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 420, filter: 'drop-shadow(0 20px 60px rgba(255,158,190,0.35))' }}>
        <defs>
            <radialGradient id="deskGlow" cx="50%" cy="100%" r="60%">
                <stop offset="0%" stopColor="#FF9EBE" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#D8B4E8" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="hoodiGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#C084E8" />
                <stop offset="100%" stopColor="#FF9EBE" />
            </linearGradient>
            <linearGradient id="macGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F0E6FF" />
                <stop offset="100%" stopColor="#E0D0FF" />
            </linearGradient>
            <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FDDBB4" />
                <stop offset="100%" stopColor="#F5C89A" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8B3A62" />
                <stop offset="100%" stopColor="#C0608A" />
            </linearGradient>
            <filter id="softGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>

        {/* Glow base */}
        <ellipse cx="210" cy="380" rx="160" ry="30" fill="url(#deskGlow)" opacity="0.7" />

        {/* DESK */}
        <rect x="60" y="310" width="300" height="14" rx="7" fill="#E8C8D8" opacity="0.7" />
        <rect x="90" y="322" width="14" height="50" rx="7" fill="#E0BDC9" opacity="0.5" />
        <rect x="316" y="322" width="14" height="50" rx="7" fill="#E0BDC9" opacity="0.5" />

        {/* Fairy lights string */}
        <path d="M75 295 Q120 285, 165 295 Q210 305, 255 295 Q300 285, 345 295" stroke="#FFD700" strokeWidth="1.5" fill="none" opacity="0.6" />
        {[95, 135, 175, 215, 255, 295, 335].map((x, i) => (
            <ellipse key={i} cx={x} cy={295 + (i % 2) * 5} rx="5" ry="3.5" fill={['#FF9EBE', '#FFFACD', '#D8B4E8', '#A8E0FF', '#FFD700', '#FFB3C6', '#C3E8D0'][i]} opacity="0.9" />
        ))}

        {/* Plant pot left */}
        <ellipse cx="100" cy="310" rx="18" ry="6" fill="#D9A8C8" opacity="0.6" />
        <rect x="85" y="295" width="30" height="18" rx="6" fill="#C89AB8" opacity="0.65" />
        <path d="M100 295 C95 280, 85 270, 88 260 M100 295 C102 278, 115 265, 112 255 M100 295 C98 275, 92 262, 96 252" stroke="#7BC67A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
        <circle cx="88" cy="260" r="8" fill="#9CDA8C" opacity="0.75" />
        <circle cx="112" cy="255" r="7" fill="#8DD080" opacity="0.75" />
        <circle cx="96" cy="252" r="6" fill="#A8DC98" opacity="0.75" />

        {/* Mug right */}
        <rect x="315" y="292" width="24" height="20" rx="5" fill="#FFD0E0" opacity="0.8" />
        <path d="M339 299 Q348 299, 348 306 Q348 313, 339 313" stroke="#E8A8B8" strokeWidth="2" fill="none" />
        <rect x="318" y="294" width="18" height="4" rx="2" fill="#FF9EBE" opacity="0.5" />
        <path d="M324 291 Q325 286, 326 291 M330 290 Q331 285, 332 290 M336 291 Q337 287, 338 291" stroke="#E8A8B8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

        {/* MACBOOK */}
        <rect x="125" y="230" width="170" height="85" rx="10" fill="url(#macGrad)" opacity="0.95" />
        <rect x="130" y="235" width="160" height="76" rx="7" fill="url(#screenGrad)" />
        {/* Screen content */}
        <rect x="136" y="241" width="70" height="5" rx="2.5" fill="#FF9EBE" opacity="0.7" />
        <rect x="136" y="250" width="50" height="4" rx="2" fill="#7DD3FC" opacity="0.6" />
        <rect x="140" y="258" width="40" height="3.5" rx="1.75" fill="#86EFAC" opacity="0.6" />
        <rect x="140" y="265" width="55" height="3.5" rx="1.75" fill="#FCA5A5" opacity="0.6" />
        <rect x="140" y="272" width="35" height="3.5" rx="1.75" fill="#C4B5FD" opacity="0.6" />
        <rect x="140" y="279" width="45" height="3.5" rx="1.75" fill="#FDE68A" opacity="0.6" />
        {/* Cursor blink */}
        <rect x="185" y="258" width="2" height="10" rx="1" fill="#FF9EBE" opacity="0.9" />
        {/* Right panel mini UI */}
        <rect x="215" y="241" width="70" height="70" rx="5" fill="rgba(255,158,190,0.1)" stroke="rgba(255,158,190,0.25)" strokeWidth="1" />
        <circle cx="250" cy="266" r="14" fill="none" stroke="#FF9EBE" strokeWidth="3" opacity="0.6" strokeDasharray="40 10" />
        <circle cx="250" cy="266" r="14" fill="none" stroke="#D8B4E8" strokeWidth="2" opacity="0.4" strokeDasharray="20 30" strokeDashoffset="10" />
        <circle cx="250" cy="266" r="5" fill="#FF9EBE" opacity="0.6" />
        <rect x="220" y="286" width="60" height="3.5" rx="1.75" fill="#D8B4E8" opacity="0.5" />
        <rect x="226" y="292" width="48" height="3" rx="1.5" fill="#E8A8B8" opacity="0.4" />
        {/* Keyboard */}
        <rect x="125" y="314" width="170" height="8" rx="4" fill="#D8C8DC" opacity="0.5" />
        <rect x="155" y="316" width="110" height="3" rx="1.5" fill="#C8B8CC" opacity="0.4" />

        {/* BODY / HOODIE */}
        <path d="M155 310 C140 295, 130 270, 135 245 C138 232, 155 225, 175 222 L185 218 L195 215 L215 215 L225 218 L235 222 C255 225, 272 232, 275 245 C280 270, 270 295, 255 310 Z" fill="url(#hoodiGrad)" opacity="0.92" />
        {/* Hoodie pocket */}
        <path d="M185 285 Q195 280, 205 280 Q215 280, 225 285 Q228 295, 225 305 Q215 310, 205 310 Q195 310, 185 305 Q182 295, 185 285Z" fill="rgba(255,255,255,0.12)" />
        {/* Hoodie strings */}
        <path d="M195 230 Q192 242, 188 256" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M215 230 Q218 242, 222 256" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round" />

        {/* NECK */}
        <rect x="198" y="206" width="24" height="22" rx="10" fill="url(#skinGrad)" />

        {/* HEAD */}
        <ellipse cx="210" cy="178" rx="42" ry="44" fill="url(#skinGrad)" />
        {/* Ears */}
        <ellipse cx="168" cy="180" rx="8" ry="10" fill="#F5C89A" />
        <ellipse cx="252" cy="180" rx="8" ry="10" fill="#F5C89A" />
        {/* Earring */}
        <circle cx="253" cy="190" r="3.5" fill="#FF9EBE" />
        <circle cx="253" cy="190" r="2" fill="#E8A8B8" />

        {/* HAIR */}
        <ellipse cx="210" cy="155" rx="44" ry="28" fill="url(#hairGrad)" />
        <path d="M168 165 C160 175, 158 195, 162 215 C165 225, 168 228, 170 225 C168 210, 169 192, 172 178Z" fill="url(#hairGrad)" />
        <path d="M252 165 C260 175, 262 195, 258 215 C255 225, 252 228, 250 225 C252 210, 251 192, 248 178Z" fill="url(#hairGrad)" />
        {/* Ponytail */}
        <path d="M240 145 C260 135, 280 140, 285 155 C290 170, 278 185, 265 192 C258 196, 248 198, 242 193 C250 182, 256 168, 250 158 C246 150, 242 147, 240 145Z" fill="url(#hairGrad)" opacity="0.9" />
        {/* Hair highlight */}
        <path d="M185 148 Q200 142, 215 148" stroke="rgba(255,255,255,0.25)" strokeWidth="3" strokeLinecap="round" />
        {/* Hair tie */}
        <circle cx="255" cy="162" r="6" fill="#FF9EBE" />
        <circle cx="255" cy="162" r="3.5" fill="#E8A8B8" />

        {/* FACE */}
        {/* Eyes */}
        <ellipse cx="195" cy="180" rx="8" ry="9" fill="#1E293B" />
        <ellipse cx="225" cy="180" rx="8" ry="9" fill="#1E293B" />
        <ellipse cx="197" cy="178" rx="3" ry="3.5" fill="white" opacity="0.7" />
        <ellipse cx="227" cy="178" rx="3" ry="3.5" fill="white" opacity="0.7" />
        {/* Lashes */}
        <path d="M187 174 Q188 170, 191 172 M193 172 Q193 168, 196 170 M199 172 Q200 168, 203 170" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M217 172 Q218 168, 221 170 M223 172 Q223 168, 226 170 M229 172 Q230 168, 233 170" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
        {/* Blush */}
        <ellipse cx="183" cy="192" rx="12" ry="6" fill="#FF9EBE" opacity="0.3" />
        <ellipse cx="237" cy="192" rx="12" ry="6" fill="#FF9EBE" opacity="0.3" />
        {/* Nose */}
        <path d="M207 192 Q210 198, 213 192" stroke="#E8A8A0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Smile */}
        <path d="M198 204 Q210 214, 222 204" stroke="#D4958C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Brows */}
        <path d="M187 170 Q195 165, 203 170" stroke="#8B3A62" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M217 170 Q225 165, 233 170" stroke="#8B3A62" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* HEADPHONES */}
        <path d="M168 170 Q168 140, 210 135 Q252 140, 252 170" stroke="#C084E8" strokeWidth="7" fill="none" strokeLinecap="round" />
        <rect x="157" y="166" width="18" height="22" rx="9" fill="#D8B4E8" />
        <rect x="160" y="169" width="12" height="16" rx="6" fill="#C084E8" />
        <rect x="245" y="166" width="18" height="22" rx="9" fill="#D8B4E8" />
        <rect x="248" y="169" width="12" height="16" rx="6" fill="#C084E8" />

        {/* Floating hearts/stars */}
        <text x="285" y="165" fontSize="14" opacity="0.7" style={{ animation: 'sparkle 2s ease-in-out infinite' }}>✨</text>
        <text x="100" y="200" fontSize="12" opacity="0.65" style={{ animation: 'sparkle 2.5s ease-in-out infinite', animationDelay: '0.5s' }}>💕</text>
        <text x="295" y="220" fontSize="11" opacity="0.6" style={{ animation: 'sparkle 3s ease-in-out infinite', animationDelay: '1s' }}>🌸</text>
    </svg>
);

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const techStack: TechItem[] = [
    { name: "React", icon: "⚛️", color: "#61DAFB", bg: "rgba(97,218,251,0.12)", border: "rgba(97,218,251,0.35)" },
    { name: "TypeScript", icon: "🔷", color: "#3178C6", bg: "rgba(49,120,198,0.10)", border: "rgba(49,120,198,0.3)" },
    { name: "Next.js", icon: "▲", color: "#1E293B", bg: "rgba(30,41,59,0.08)", border: "rgba(30,41,59,0.25)" },
    { name: "Python", icon: "🐍", color: "#3776AB", bg: "rgba(55,118,171,0.10)", border: "rgba(55,118,171,0.3)" },
    { name: "Tailwind", icon: "🌊", color: "#06B6D4", bg: "rgba(6,182,212,0.10)", border: "rgba(6,182,212,0.3)" },
    { name: "Node.js", icon: "🟢", color: "#339933", bg: "rgba(51,153,51,0.10)", border: "rgba(51,153,51,0.3)" },
    { name: "Figma", icon: "🎨", color: "#F24E1E", bg: "rgba(242,78,30,0.10)", border: "rgba(242,78,30,0.28)" },
    { name: "MongoDB", icon: "🍃", color: "#47A248", bg: "rgba(71,162,72,0.10)", border: "rgba(71,162,72,0.3)" },
    { name: "Git", icon: "🔧", color: "#F05032", bg: "rgba(240,80,50,0.10)", border: "rgba(240,80,50,0.28)" },
    { name: "Three.js", icon: "🌐", color: "#C084E8", bg: "rgba(192,132,232,0.12)", border: "rgba(192,132,232,0.35)" },
];


/* ─────────────────────────────────────────────
   CUSTOM HOOK: Intersection Observer
───────────────────────────────────────────── */
export function useFadeIn() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

/* ─────────────────────────────────────────────
   SECTION COMPONENTS
───────────────────────────────────────────── */
function Navbar({ scrolled }: { scrolled: boolean }) {
    return (
        <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--pink)', boxShadow: 'var(--glow-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/profile.jpg" alt="Anjali" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span className="serif" style={{ fontSize: 17, fontWeight: 700, color: '#1E293B', letterSpacing: '-0.02em' }}>Anjali.dev</span>
            </div>
            <ul className="nav-links">
                {["About", "Stack", "Projects", "Contact"].map(n => (
                    <li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>
                ))}
            </ul>
            <a className="btn-cta" href="#contact" style={{ padding: '10px 22px', fontSize: 13 }}>
                Say Hi 💕
            </a>
        </nav>
    );
}

function HeroSection() {
    return (
        <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 100, paddingBottom: 60, padding: '120px 6vw 60px', position: 'relative', overflow: 'hidden' }}>
            <StarDots />
            <RibbonLeft />
            <RibbonRight />
            <FloralCorner style={{ position: 'absolute', top: 80, right: '8%' }} />
            <FloralCorner style={{ position: 'absolute', bottom: 60, left: '4%', transform: 'rotate(180deg)' }} />

            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', width: '100%', maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* LEFT */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    {/* Availability badge */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,158,190,0.12)', border: '1.5px solid rgba(255,158,190,0.3)', borderRadius: 999, padding: '6px 16px', width: 'fit-content' }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 8px #4ADE80', display: 'block' }} />
                        <span style={{ fontSize: 12, fontWeight: 500, color: '#64748B', letterSpacing: '0.02em' }}>Available for opportunities ✨</span>
                    </div>

                    <div>
                        <p style={{ fontFamily: 'Poppins', fontSize: 16, color: '#FF9EBE', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Hey there! I'm</p>
                        <h1 className="serif" style={{ fontSize: 'clamp(42px,5.5vw,68px)', fontWeight: 900, lineHeight: 1.08, color: '#1E293B', letterSpacing: '-0.03em', marginBottom: 8 }}>
                            Anjali Jangid<br />
                            <span className="gradient-text" style={{ fontStyle: 'italic' }}>✨ Codes & Creates</span>
                        </h1>
                    </div>

                    <p style={{ fontSize: 16, lineHeight: 1.75, color: '#64748B', maxWidth: 480, fontWeight: 400 }}>
                        19-year-old full-stack developer & UI/UX enthusiast. I turn ideas into beautifully engineered digital experiences — one component at a time. 🌸
                    </p>

                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
                        <a className="btn-cta" href="#projects">View my Work 🚀</a>
                        <a className="btn-outline" href="#contact">Download CV</a>
                    </div>

                    {/* Stats row */}
                    <div style={{ display: 'flex', gap: 32, marginTop: 16 }}>
                        {[["12+", "Projects Built"], ["3+", "Years Coding"], ["∞", "Cups of Chai ☕"]].map(([n, l]) => (
                            <div key={l}>
                                <p className="serif" style={{ fontSize: 26, fontWeight: 800, color: '#1E293B', lineHeight: 1 }}>{n}</p>
                                <p style={{ fontSize: 12, color: '#94A3B8', marginTop: 3, fontWeight: 500 }}>{l}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT — Illustration */}
                <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    {/* Glow blob */}
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,158,190,0.22) 0%, rgba(216,180,232,0.16) 50%, transparent 70%)', filter: 'blur(30px)', zIndex: 0 }} />
                    <div style={{ position: 'relative', width: '100%', maxWidth: 420, aspectRatio: '1/1', borderRadius: '42px', overflow: 'hidden', border: '3px solid white', boxShadow: 'var(--shadow-pink)', animation: 'float 6s ease-in-out infinite' }}>
                        <img src="/profile.jpg" alt="Anjali Jangid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(255,158,190,0.2))', pointerEvents: 'none' }} />
                    </div>
                    {/* Floating tags */}
                    <div className="glass float2" style={{ position: 'absolute', top: '8%', right: '-5%', padding: '10px 16px', borderRadius: 16, fontSize: 13, fontWeight: 600, color: '#1E293B', animationDelay: '0.5s', zIndex: 2 }}>
                        <span>{'<'}</span><span style={{ color: '#FF9EBE' }}>dev</span><span>{'>'}</span>
                        <span style={{ color: '#D8B4E8' }}> Anjali</span>
                        <span>{'</'}</span><span style={{ color: '#FF9EBE' }}>dev</span><span>{'>'}</span>
                    </div>
                    <div className="glass float" style={{ position: 'absolute', bottom: '14%', left: '-8%', padding: '10px 16px', borderRadius: 16, fontSize: 13, fontWeight: 600, animationDelay: '1s', zIndex: 2 }}>
                        <span style={{ color: '#4ADE80' }}>✓</span>{' '}
                        <span style={{ color: '#64748B' }}>Open to work</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TechStackSection() {
    const ref = useFadeIn();
    return (
        <section id="stack" ref={ref} className="fade-section" style={{ padding: '80px 6vw', position: 'relative' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 52 }}>
                    <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FF9EBE', marginBottom: 12 }}>✦ WHAT I WORK WITH ✦</span>
                    <h2 className="serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, color: '#1E293B', letterSpacing: '-0.03em' }}>
                        My <span className="gradient-text" style={{ fontStyle: 'italic' }}>Tech Stack</span>
                    </h2>
                    <p style={{ marginTop: 12, color: '#94A3B8', fontSize: 15 }}>Languages, frameworks & tools I love working with 💻</p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
                    {techStack.map((t, i) => (
                        <div key={t.name} className="pill" style={{ background: t.bg, borderColor: t.border, color: t.color, animationDelay: `${i * 0.08}s`, boxShadow: `0 0 18px ${t.border}, inset 0 1px 0 rgba(255,255,255,0.5)` }}>
                            <span style={{ fontSize: 16 }}>{t.icon}</span>
                            <span style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 13, color: '#1E293B' }}>{t.name}</span>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.color, opacity: 0.8, display: 'block', animation: `sparkle ${1.5 + i * 0.2}s ease-in-out infinite` }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


function ContactSection() {
    const ref = useFadeIn();
    const [val, setVal] = useState({ name: '', email: '', msg: '' });
    const [sent, setSent] = useState(false);

    const handle = () => {
        if (val.name && val.email && val.msg) { setSent(true); setTimeout(() => setSent(false), 3000); setVal({ name: '', email: '', msg: '' }); }
    };

    const inputStyle = {
        width: '100%', padding: '14px 18px',
        borderRadius: 14, border: '1.5px solid rgba(255,158,190,0.3)',
        background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)',
        fontFamily: 'Poppins', fontSize: 14, color: '#1E293B',
        outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
    };

    const socials: SocialItem[] = [
        { icon: '𝕏', label: 'Twitter' },
        { icon: 'in', label: 'LinkedIn' },
        { icon: '⬡', label: 'GitHub' },
        { icon: '🎨', label: 'Dribbble' },
        { icon: '✉️', label: 'Email' },
    ];

    return (
        <section id="contact" ref={ref} className="fade-section" style={{ padding: '80px 6vw 120px', position: 'relative', overflow: 'hidden' }}>
            {/* bg blob */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '60vw', height: '60vh', borderRadius: '50%', background: 'radial-gradient(circle, rgba(216,180,232,0.18), rgba(255,158,190,0.12), transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />

            <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: 52 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E8A8B8', display: 'block', marginBottom: 12 }}>✦ GET IN TOUCH ✦</span>
                    <h2 className="serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, color: '#1E293B', letterSpacing: '-0.03em', marginBottom: 12 }}>
                        Let's Connect <span className="gradient-text">💕</span>
                    </h2>
                    <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.7 }}>Got a project, collab idea, or just want to say hi?<br />My DMs are always open 🌸</p>
                </div>

                {/* Socials */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 44 }}>
                    {socials.map(s => (
                        <button key={s.label} className="social-icon" title={s.label} style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 16 }}>
                            {s.icon}
                        </button>
                    ))}
                </div>

                {/* Form */}
                <div className="glass" style={{ padding: 40, borderRadius: 32 }}>
                    {sent ? (
                        <div style={{ textAlign: 'center', padding: '40px 0', animation: 'bounce-in 0.6s ease' }}>
                            <div style={{ fontSize: 48, marginBottom: 12 }}>💌</div>
                            <h3 className="serif" style={{ fontSize: 24, fontWeight: 700, color: '#1E293B' }}>Message Sent!</h3>
                            <p style={{ color: '#94A3B8', marginTop: 8 }}>I'll get back to you soon ✨</p>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                                <input style={inputStyle} placeholder="Your Name 🌸" value={val.name} onChange={e => setVal(v => ({ ...v, name: e.target.value }))} onFocus={e => { (e.target as HTMLElement).style.borderColor = '#FF9EBE'; (e.target as HTMLElement).style.boxShadow = '0 0 20px rgba(255,158,190,0.25)' }} onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,158,190,0.3)'; (e.target as HTMLElement).style.boxShadow = 'none' }} />
                                <input style={inputStyle} placeholder="Email ✉️" value={val.email} onChange={e => setVal(v => ({ ...v, email: e.target.value }))} onFocus={e => { (e.target as HTMLElement).style.borderColor = '#D8B4E8'; (e.target as HTMLElement).style.boxShadow = '0 0 20px rgba(216,180,232,0.25)' }} onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,158,190,0.3)'; (e.target as HTMLElement).style.boxShadow = 'none' }} />
                            </div>
                            <textarea style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }} placeholder="Your message... 💬" value={val.msg} onChange={e => setVal(v => ({ ...v, msg: e.target.value }))} onFocus={e => { (e.target as HTMLElement).style.borderColor = '#FF9EBE'; (e.target as HTMLElement).style.boxShadow = '0 0 20px rgba(255,158,190,0.25)' }} onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,158,190,0.3)'; (e.target as HTMLElement).style.boxShadow = 'none' }} />
                            <button className="btn-cta" onClick={handle} style={{ alignSelf: 'center', marginTop: 8 }}>
                                Send Message ✨
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer style={{ padding: '28px 6vw', borderTop: '1px solid rgba(255,158,190,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 16 }}>✨</span>
                <span className="serif" style={{ fontSize: 15, fontWeight: 700, color: '#1E293B' }}>Anjali.dev</span>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8' }}>
                Crafted with 💕 & lots of chai · © 2025 Anjali Jangid
            </p>
            <a href="#about" style={{ fontSize: 13, color: '#FF9EBE', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => (e.target as HTMLElement).style.color = '#D8B4E8'} onMouseOut={e => (e.target as HTMLElement).style.color = '#FF9EBE'}>
                Back to top ↑
            </a>
        </footer>
    );
}

/* ─────────────────────────────────────────────
   ROOT COMPONENT
───────────────────────────────────────────── */
export default function Portfolio() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <GlobalStyles />
            <div className="mesh-bg" />
            <Navbar scrolled={scrolled} />
            <main>
                <HeroSection />
                <TechStackSection />
                <ProjectsSection useFadeIn={useFadeIn} />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}