"use client";

import React from "react";

interface SectionHeadingProps {
    children: React.ReactNode;
    imageWidth?: string;
}

export function SectionHeading({ children, imageWidth = "500px" }: SectionHeadingProps) {
    return (
        <div style={{ textAlign: 'center', marginBottom: 52, position: 'relative', padding: '20px 0' }}>
            <img
                src="/heading-img.png"
                alt=""
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: imageWidth,
                    maxWidth: '95vw',
                    opacity: 0.9,
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />
            <h2
                className="serif"
                style={{
                    fontSize: 'clamp(32px,4vw,48px)',
                    fontWeight: 800,
                    color: '#1E293B',
                    letterSpacing: '-0.02em',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {children}
            </h2>
        </div>
    );
}
