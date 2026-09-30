import { profile } from '../data/profile';
import { education } from '../data/experience';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="section" style={{ background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-line" />

        <div ref={ref} style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'none' : 'translateY(16px)',
          transition: 'all 0.5s ease',
        }} className="about-grid">
          <div>
            <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.75, marginBottom: '16px' }}>
              Saya adalah mahasiswa Informatika yang tertarik di bidang <strong>QC/QA</strong> dan
              <strong> IT Application Support</strong>. Saya suka mencoba mengaplikasikan ilmu IT ke dalam masalah nyata.
            </p>
            <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.75, marginBottom: '24px' }}>
              Saya juga aktif di organisasi Unit Aktifitas Mahasiswa Teknik Informatika (UNITAS TI) periode 2023-2024 dan saya senang berbagi ilmu dengan teman-teman.
              Saya percaya bahwa belajar itu tidak berhenti di dalam kelas.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Email', value: profile.email },
                { label: 'Lokasi', value: profile.location },
                { label: 'Status', value: 'Mahasiswa aktif & open to work' },
                { label: 'Bahasa', value: 'Bahasa Indonesia, English' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '8px', fontSize: '14px' }}>
                  <span style={{ color: '#9ca3af', width: '60px', flexShrink: 0 }}>{label}</span>
                  <span style={{ color: '#374151' }}>{value}</span>
                </div>
              ))}
            </div>
            <a 
            href={profile.cvUrl} 
            download = "CV Najwa Amanda.pdf"
            target="_blank" rel="noopener noreferrer"
              className="btn btn-outline" style={{ marginTop: '20px', display: 'inline-flex' }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>
          <div>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              EDUCATION
            </p>
            {education.map(edu => (
              <div key={edu.id} className="card" style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '15px', color: '#111827', marginBottom: '2px' }}>{edu.degree}</p>
                    <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: 500, marginBottom: '2px' }}>{edu.major}</p>
                    <p style={{ fontSize: '13px', color: '#6b7280' }}>{edu.institution}</p>
                  </div>
                  <span className="badge">{edu.period}</span>
                </div>
                <p style={{ fontSize: '13px', color: '#22c55e', fontWeight: 500, marginTop: '10px' }}>
                  IPK {edu.gpa}
                </p>
                {edu.achievements.length > 0 && (
                  <ul style={{ marginTop: '8px', paddingLeft: '16px', fontSize: '13px', color: '#6b7280', lineHeight: 1.7 }}>
                    {edu.achievements.map(a => <li key={a}>{a}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
