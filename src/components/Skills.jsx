import { skills } from '../data/skills';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver();

  // Memadatkan semua nama skill menjadi satu array dan menghapus duplikat
  const allSkills = skills.reduce((acc, group) => {
    return [...acc, ...group.items.map(item => item.name)];
  }, []);
  const uniqueSkills = [...new Set(allSkills)];

  return (
    <section id="skills" className="section" style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
      <div className="container text-center">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="section-line" style={{ margin: '0 auto 40px auto' }} />

        <div ref={ref} style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px',
          maxWidth: '700px',
          margin: '0 auto',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'none' : 'translateY(16px)',
          transition: 'all 0.5s ease',
        }}>
          {uniqueSkills.map(skill => (
            <span key={skill} style={{
              background: '#eff6ff',
              color: '#1d4ed8',
              padding: '8px 18px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 500,
              border: '1px solid #bfdbfe',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
