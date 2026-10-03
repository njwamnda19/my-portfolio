export default function ProjectCard({ project }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%', transition: 'box-shadow 0.15s' }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      <div style={{
        height: '120px', background: '#eff6ff', borderRadius: '6px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '40px', fontWeight: 700, color: '#bfdbfe', position: 'relative',
      }}>
        {project.image ? (
          <img
          src= {project.image}
          alt= {project.title}
          style= {{width: '100%', height: '100%', objectFit: 'cover'}}
        />
        ) : (
    <span style={{ fontSize: '40px', fontWeight: 700, color: '#bfdbfe' }}>
      {project.title.charAt(0)}
    </span>
  )}
        {project.title.charAt(0)}
        {project.featured && (
          <span style={{ position: 'absolute', top: '8px', right: '8px', fontSize: '11px', fontWeight: 600, padding: '2px 8px', background: '#fef3c7', color: '#d97706', borderRadius: '4px' }}>⭐ Featured</span>
        )}
      </div>

      {project.status && (
            <span className={`status-badge ${project.status.toLowerCase()}`}>
        ● {project.status}
      </span>
      )}
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3 style={{ fontWeight: 600, fontSize: '15px', color: '#111827' }}>{project.title}</h3>
          <span className="badge badge-gray" style={{ fontSize: '11px' }}>{project.category}</span>
        </div>
        <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.65, flex: 1 }}>{project.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {project.technologies.slice(0, 4).map(t => <span key={t} className="badge badge-gray" style={{ fontSize: '11px' }}>{t}</span>)}
          {project.technologies.length > 4 && <span className="badge badge-gray" style={{ fontSize: '11px', opacity: 0.6 }}>+{project.technologies.length - 4}</span>}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '8px', paddingTop: '10px', borderTop: '1px solid #f3f4f6' }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1, justifyContent: 'center', fontSize: '13px', padding: '6px 12px' }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-blue" style={{ flex: 1, justifyContent: 'center', fontSize: '13px', padding: '6px 12px' }}>
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Demo
          </a>
        )}
      </div>
    </div>
  );
}
