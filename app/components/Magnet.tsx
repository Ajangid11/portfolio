"use client";

import React, { useEffect, useRef, useState } from "react";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const withinX = e.clientX > rect.left - padding && e.clientX < rect.right + padding;
      const withinY = e.clientY > rect.top - padding && e.clientY < rect.bottom + padding;

      if (withinX && withinY) {
        setState({
          x: (e.clientX - centerX) / strength,
          y: (e.clientY - centerY) / strength,
          active: true,
        });
      } else {
        setState({ x: 0, y: 0, active: false });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${state.x}px, ${state.y}px, 0)`,
        transition: state.active ? activeTransition : inactiveTransition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
