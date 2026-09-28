import { useState } from 'react';
import { experiences } from '../data/experience';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const typeColor = {
  work: { bg: '#eff6ff', text: '#2563eb', label: 'Kerja' },
  organization: { bg: '#f0fdf4', text: '#16a34a', label: 'Organisasi' },
  internship: { bg: '#fefce8', text: '#ca8a04', label: 'Magang' },
};

export default function Experience() {
  const { ref, isVisible } = useIntersectionObserver();
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="experience" className="section" style={{ background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
        <div ref={ref} style={{
          maxWidth: '680px',
          position: 'relative',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'none' : 'translateY(16px)',
          transition: 'all 0.5s ease',
        }}>
          <div style={{ position: 'absolute', left: '4px', top: '12px', bottom: '12px', width: '1px', background: '#e5e7eb' }} />
          {experiences.map((exp) => {
            const c = typeColor[exp.type] || typeColor.work;
            const open = expanded === exp.id;
            return (
              <div key={exp.id} style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
                <div style={{ paddingTop: '3px' }}><div className="timeline-dot" /></div>
                <div className="card" style={{ flex: 1 }}>
                  <div style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}
                    onClick={() => setExpanded(open ? null : exp.id)}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontWeight: 600, fontSize: '15px', color: '#111827' }}>{exp.position}</span>
                        <span style={{ fontSize: '11px', fontWeight: 500, padding: '2px 8px', borderRadius: '4px', background: c.bg, color: c.text }}>{c.label}</span>
                      </div>
                      <p style={{ fontSize: '14px', color: '#3b82f6', fontWeight: 500, marginBottom: '2px' }}>{exp.company}</p>
                      <p style={{ fontSize: '12px', color: '#9ca3af' }}>{exp.period} · {exp.location}</p>
                    </div>
                    <svg width="16" height="16" fill="none" stroke="#9ca3af" strokeWidth="2" viewBox="0 0 24 24"
                      style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0, marginTop: '4px' }}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {open && (
                    <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid #f3f4f6' }}>
                      <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, marginBottom: '12px' }}>{exp.description}</p>
                      <ul style={{ paddingLeft: '16px', marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {exp.responsibilities.map((r, j) => <li key={j} style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.65 }}>{r}</li>)}
                      </ul>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {exp.technologies.map(t => <span key={t} className="badge badge-gray">{t}</span>)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
