"use client";

import React from "react";

export interface Project {
    title: string;
    desc: string;
    tags: string[];
    emoji: string;
    gradient: string;
    accent: string;
    mockupLines: string[];
    image?: string;
}

export const projects: Project[] = [
    {
        title: "Bloom — AI Journaling",
        desc: "A pastel-aesthetic AI-powered journaling app with mood tracking, sentiment analysis, and guided affirmations. Built with React + OpenAI.",
        tags: ["React", "OpenAI", "Tailwind"],
        emoji: "🌸",
        gradient: "linear-gradient(135deg, rgba(255,158,190,0.25) 0%, rgba(216,180,232,0.25) 100%)",
        accent: "#FF9EBE",
        mockupLines: ["#FF9EBE", "#D8B4E8", "#FFBFA8", "#E8A8B8"],
    },
    {
        title: "Stardust — Dev Portfolio",
        desc: "A generative art portfolio generator using Three.js particle systems. Each visitor gets a unique starfield based on their GitHub stats.",
        tags: ["Three.js", "GSAP", "Next.js"],
        emoji: "✨",
        gradient: "linear-gradient(135deg, rgba(216,180,232,0.25) 0%, rgba(97,218,251,0.15) 100%)",
        accent: "#D8B4E8",
        mockupLines: ["#D8B4E8", "#61DAFB", "#C084E8", "#A8D8FF"],
    },
    {
        title: "Sakura — E-Commerce UI",
        desc: "A full-stack fashion e-commerce platform with AR try-on feature, real-time inventory, and seamless checkout flow.",
        tags: ["Next.js", "Stripe", "MongoDB"],
        emoji: "🛍️",
        gradient: "linear-gradient(135deg, rgba(255,191,168,0.25) 0%, rgba(232,168,184,0.25) 100%)",
        accent: "#FFBFA8",
        mockupLines: ["#FFBFA8", "#E8A8B8", "#FDD", "#FFD700"],
    },
    {
        title: "FleetTrack — Logistics ERP",
        desc: "A powerful fleet and logistics management system featuring real-time GPS tracking, automated dispatching, and comprehensive booking workflows. Built for high-scale operations.",
        tags: ["React", "Node.js", "MongoDB", "Maps"],
        emoji: "🚚",
        gradient: "linear-gradient(135deg, rgba(125,211,252,0.2) 0%, rgba(192,132,232,0.2) 100%)",
        accent: "#7DD3FC",
        mockupLines: [],
        image: "/fleet-logistics.png"
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <div className="glass project-card" style={{ padding: 28, borderRadius: 28, background: project.gradient, position: 'relative', overflow: 'hidden', cursor: 'pointer', animationDelay: `${index * 0.15}s` }}>
            {/* Decorative bg glow */}
            <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: `radial-gradient(circle, ${project.accent}33, transparent 70%)`, filter: 'blur(20px)', zIndex: 0 }} />

            {/* Mock screen or Image */}
            <div style={{ borderRadius: 16, background: 'rgba(30,41,59,0.88)', height: 160, marginBottom: 20, position: 'relative', zIndex: 1, backdropFilter: 'blur(8px)', overflow: 'hidden' }}>
                {project.image ? (
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
                ) : (
                    <div style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
                            {['#FF6B6B', '#FFE66D', '#6BCF7F'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
                        </div>
                        {project.mockupLines.map((c, i) => (
                            <div key={i} style={{ height: 6, borderRadius: 3, marginBottom: 8, background: `linear-gradient(90deg, ${c}88, transparent)`, width: `${55 + i * 10}%` }} />
                        ))}
                        <div style={{ height: 30, borderRadius: 8, background: `${project.accent}22`, border: `1px solid ${project.accent}44`, marginTop: 12 }} />
                    </div>
                )}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(30,41,59,0.4))' }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 24 }}>{project.emoji}</span>
                    <h3 className="serif" style={{ fontSize: 20, fontWeight: 800, color: '#1E293B', letterSpacing: '-0.02em' }}>{project.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.65, marginBottom: 16 }}>{project.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                    {project.tags.map(t => (
                        <span key={t} style={{ fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 99, background: `${project.accent}22`, color: project.accent, border: `1px solid ${project.accent}44`, letterSpacing: '0.04em' }}>{t}</span>
                    ))}
                </div>
                <button className="btn-outline" style={{ fontSize: 13, padding: '8px 20px', borderColor: project.accent, color: project.accent }}>
                    View Project →
                </button>
            </div>
        </div>
    );
}

export function ProjectsSection({ useFadeIn }: { useFadeIn: () => React.RefObject<any> }) {
    const ref = useFadeIn();
    return (
        <section id="projects" ref={ref} className="fade-section" style={{ padding: '80px 6vw', position: 'relative' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 20 }}>
                    <div>
                        <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D8B4E8', marginBottom: 12 }}>✦ PORTFOLIO ✦</span>
                        <h2 className="serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, color: '#1E293B', letterSpacing: '-0.03em' }}>
                            Featured <span className="gradient-text" style={{ fontStyle: 'italic' }}>Projects</span>
                        </h2>
                    </div>
                    <a className="btn-outline" href="#" style={{ fontSize: 13 }}>All Projects →</a>
                </div>

                <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
                    {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
                </div>
            </div>
        </section>
    );
}
