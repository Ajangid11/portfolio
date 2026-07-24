"use client";

import React from "react";

interface SectionHeadingProps {
    children: React.ReactNode;
    eyebrow?: string;
}

export function SectionHeading({ children, eyebrow }: SectionHeadingProps) {
    return (
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
            {eyebrow && (
                <p
                    style={{
                        fontFamily: 'Poppins', fontSize: 13, fontWeight: 600,
                        color: 'var(--rose-gold)', letterSpacing: '0.14em',
                        textTransform: 'uppercase', marginBottom: 10,
                    }}
                >
                    {eyebrow}
                </p>
            )}
            <h2
                className="serif"
                style={{
                    fontSize: 'clamp(32px,4vw,48px)',
                    fontWeight: 800,
                    color: '#1E293B',
                    letterSpacing: '-0.02em',
                }}
            >
                {children}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 18 }}>
                <span style={{ width: 32, height: 3, borderRadius: 99, background: 'linear-gradient(90deg, transparent, var(--pink))' }} />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.5 9 20 9 14.5 13.5 16.5 21 12 17 7.5 21 9.5 13.5 4 9 10.5 9Z" fill="#D8B4E8" opacity="0.9" />
                </svg>
                <span style={{ width: 32, height: 3, borderRadius: 99, background: 'linear-gradient(90deg, var(--lavender), transparent)' }} />
            </div>
        </div>
    );
}
