import { useState, useEffect } from 'react';
import { profile } from '../data/profile';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: '#fff',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
      transition: 'box-shadow 0.2s',
    }}>
      <div className="container" style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#home" onClick={e => go(e, '#home')} style={{ fontWeight: 700, fontSize: '16px', color: '#111827', textDecoration: 'none' }}>
          Najwa<span style={{ color: '#3b82f6' }}>.Amanda</span>
        </a>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="nav-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => go(e, l.href)} className="nav-link">{l.label}</a>
          ))}
          <a href={`mailto:${profile.email}`} className="btn btn-blue" style={{ padding: '7px 16px', fontSize: '13px' }}>
            Touch Me In
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="nav-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#374151' }}>
          {open
            ? <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </div>
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid #e5e7eb', padding: '16px 24px 20px' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => go(e, l.href)}
              style={{ display: 'block', padding: '10px 0', fontSize: '15px', fontWeight: 500, color: '#374151', textDecoration: 'none', borderBottom: '1px solid #f3f4f6' }}>
              {l.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="btn btn-blue" style={{ marginTop: '14px', display: 'inline-flex' }}>
            Touch Me In
          </a>
        </div>
      )}
      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile { display: none; }
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
