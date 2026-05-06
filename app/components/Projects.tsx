"use client";

import React from "react";
import { SectionHeading } from "./SectionHeading";

export interface Project {
    title: string;
    desc: string;
    tags: string[];
    emoji: string;
    gradient: string;
    accent: string;
    mockupLines: string[];
    image?: string;
    url?: string;
}

export const projects: Project[] = [
    {
        title: "FleetTrack — Logistics ERP",
        desc: "A powerful fleet and logistics management system featuring real-time GPS tracking, automated dispatching, and comprehensive booking workflows. Built for high-scale operations.",
        tags: ["React", "Node.js", "MongoDB", "Maps"],
        emoji: "🚚",
        gradient: "linear-gradient(135deg, rgba(125,211,252,0.2) 0%, rgba(192,132,232,0.2) 100%)",
        accent: "#7DD3FC",
        mockupLines: [],
        image: "/fleet-logistics.png",
        url: "https://logistic-three-smoky.vercel.app/"
    },
    {
        title: "HireHub — Job Management",
        desc: "A streamlined recruitment platform designed for efficient job posting management, candidate tracking, and workflow automation. Features a clean, intuitive admin dashboard.",
        tags: ["Next.js", "PostgreSQL", "Prisma"],
        emoji: "💼",
        gradient: "linear-gradient(135deg, rgba(232,168,184,0.2) 0%, rgba(255,191,168,0.2) 100%)",
        accent: "#E8A8B8",
        mockupLines: [],
        image: "/job-portal.png",
        url: "https://job-refferal-frontend.vercel.app/"
    },
    {
        title: "Doctor-For — Healthcare",
        desc: "A comprehensive healthcare platform enabling patients to search for specialists and book online appointments seamlessly. Features a clean, patient-centric interface.",
        tags: ["React", "Express", "MongoDB", "Auth"],
        emoji: "🩺",
        gradient: "linear-gradient(135deg, rgba(147,197,253,0.2) 0%, rgba(167,243,208,0.2) 100%)",
        accent: "#60A5FA",
        mockupLines: [],
        image: "/doctor-for.png",
        url: "https://doctor-for.vercel.app/"
    },
    {
        title: "Maitrii Infotech — Agency",
        desc: "The official corporate presence for Maitrii Infotech, highlighting our suite of digital solutions, technological expertise, and commitment to delivering excellence for clients worldwide.",
        tags: ["HTML", "CSS", "JS", "SEO"],
        emoji: "🏢",
        gradient: "linear-gradient(135deg, rgba(165,180,252,0.2) 0%, rgba(199,210,254,0.2) 100%)",
        accent: "#6366F1",
        mockupLines: [],
        image: "/maitrii-web.png",
        url: "https://www.maitriiinfotech.com/"
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <div className="glass project-card" style={{ padding: 28, borderRadius: 28, background: project.gradient, position: 'relative', cursor: 'pointer', animationDelay: `${index * 0.15}s` }}>
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
                <div style={{ display: 'flex', gap: 12 }}>
                    <button className="btn-outline" style={{ fontSize: 13, padding: '8px 20px', borderColor: project.accent, color: project.accent, flex: 1 }}>
                        Details →
                    </button>
                    {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ fontSize: 13, padding: '8px 20px', flex: 1, textDecoration: 'none', textAlign: 'center' }}>
                            Live Demo 🚀
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export function ProjectsSection({ useFadeIn }: { useFadeIn: () => React.RefObject<any> }) {
    const ref = useFadeIn();
    return (
        <section id="projects" ref={ref} className="fade-section" style={{ padding: '80px 6vw', position: 'relative' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <SectionHeading>
                    Featured <span className="gradient-text" style={{ fontStyle: 'italic' }}>Projects</span>
                </SectionHeading>

                <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
                    {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 40 }}>
                    <a className="btn-outline" href="#" style={{ fontSize: 13 }}>View All Projects →</a>
                </div>
            </div>
        </section>
    );
}
