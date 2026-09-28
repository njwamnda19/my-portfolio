import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Projects() {
  const { ref, isVisible } = useIntersectionObserver();
  const [cat, setCat] = useState('All');
  const cats = ['All', ...new Set(projects.map(p => p.category))];
  const filtered = cat === 'All' ? projects : projects.filter(p => p.category === cat);

  return (
    <section id="projects" className="section" style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {cats.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{
              padding: '6px 14px', borderRadius: '20px',
              border: cat === c ? '1px solid #3b82f6' : '1px solid #e5e7eb',
              background: cat === c ? '#eff6ff' : '#fff',
              color: cat === c ? '#2563eb' : '#4b5563',
              fontSize: '13px', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
            }}>
              {c}
            </button>
          ))}
        </div>
        <div ref={ref} style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px',
          opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(16px)', transition: 'all 0.5s ease',
        }}>
          {filtered.map(proj => <ProjectCard key={proj.id} project={proj} />)}
        </div>
      </div>
    </section>
  );
}
