import { profile } from '../data/profile';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="contact" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="section-line" />
        <div ref={ref} style={{
          maxWidth: '600px', opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'none' : 'translateY(16px)', transition: 'all 0.5s ease',
        }}>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.7, marginBottom: '24px' }}>
            Saat ini saya terbuka untuk kesempatan kerja (full-time, part-time, atau freelance) dan magang.
            Jika ada pertanyaan atau ingin berkolaborasi, jangan ragu untuk menghubungi saya!
          </p>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', background: '#eff6ff', color: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '2px' }}>Email</p>
                <a href={`mailto:${profile.email}`} style={{ fontSize: '15px', fontWeight: 500, color: '#111827', textDecoration: 'none' }}>{profile.email}</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', background: '#eff6ff', color: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '2px' }}>LinkedIn</p>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: '15px', fontWeight: 500, color: '#111827', textDecoration: 'none' }}>linkedin.com/in/najwa-amanda</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', background: '#eff6ff', color: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '2px' }}>Lokasi</p>
                <p style={{ fontSize: '15px', fontWeight: 500, color: '#111827' }}>{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
