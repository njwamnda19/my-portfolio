import { profile } from '../data/profile';

export default function Hero() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" 
    style={{ background: '#fff', paddingTop: '70px', paddingBottom: '10px', borderBottom: '1px solid #e5e7eb' }}>
      <div className="bg-gradient-to-br from-slate-50 to-blue-100 pt-[100px] pb-16 border-b border-gray-200" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '40px 16px' }}>
      {/* Badge Open to Work */}
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 14px',
        background: '#f0fdf4',
        color: '#16a34a',
        border: '1px solid #bbf7d0',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 500,
        marginBottom: '20px',
      }}>
        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e' }}></span>
        Open to work
      </span>

      {/* Foto Profil Lingkaran */}
      <div style={{
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        border: '4px solid #bfdbfe',
        overflow: 'hidden',
        marginBottom: '24px',
        background: '#eff6ff',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img 
          src="/my photo.png" 
          alt="Najwa Amanda" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            objectPosition: 'center 15%', // fokus ke area wajah/atas
            transform: 'scale(1.25)' // sedikit zoom biar pas
          }} 
        />
      </div>

      {/* Nama & Deskripsi */}
      
      <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#111827', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        Hi, I'm Najwa Amanda <span>👋</span>
      </h1>

      <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#2563eb', margin: '0 0 16px 0' }}>
        QC/QA and IT Support
      </h2>

      <p style={{ maxWidth: '650px', fontSize: '14px', color: '#4b5563', lineHeight: 1.6, margin: '0 0 16px 0' }}>
        Mahasiswa Informatika yang passionate di bidang quality control dan tertarik di bidang QC/QA dan IT Application Support. Suka mengulik dan suka melakukan experiment kecil-kecilan.
      </p>

      {/* Lokasi */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#6b7280', fontSize: '13px', marginBottom: '24px' }}>
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
        Depok, Indonesia
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
        <a href="#projects" className="btn btn-primary" style={{ padding: '8px 20px', borderRadius: '8px', background: '#2563eb', color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
          My Project
        </a>
        <a href="#contact" className="btn btn-outline" style={{ padding: '8px 18px', borderRadius: '8px', border: '1px solid #d1d5db', color: '#374151', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
          Touch Me In
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 18px', borderRadius: '8px', border: '1px solid #d1d5db', color: '#374151', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 18px', borderRadius: '8px', border: '1px solid #d1d5db', color: '#374151', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
          LinkedIn
        </a>
      </div>
      </div>
    </section>
  );
}
