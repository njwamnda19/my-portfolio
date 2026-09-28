import { profile } from '../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#f9fafb', borderTop: '1px solid #e5e7eb', padding: '32px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontWeight: 600, fontSize: '16px', color: '#111827', marginBottom: '4px' }}>{profile.name}</p>
            <p style={{ fontSize: '13px', color: '#6b7280' }}>Informatics Engineering Student</p>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280' }}>GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280' }}>LinkedIn</a>
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280' }}>Instagram</a>
          </div>
        </div>
        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #e5e7eb', textAlign: 'center', fontSize: '13px', color: '#9ca3af' }}>
          &copy; {year} {profile.name}
        </div>
      </div>
    </footer>
  );
}
