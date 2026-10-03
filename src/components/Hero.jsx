export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-gray-200"
      style={{
        paddingTop: '70px',
        backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 50%, #eaf2ff 100%',
      }}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#e5e7eb 1px, transparent 1px),
            linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage:
            'linear-gradient(to bottom, black, transparent 90%)',
        }}
      />

      {/* Decorative Elements */}
      <span className="absolute top-32 left[15%] text-blue-300 text-3xl">
        ✦
      </span>

      <span className="absolute top-52 right-[10%] text-gray-300 text-xl">
        {'{ }'}
      </span>

      <span className="absolute bottom-20 left-[18%] text-blue-200 text-3xl">
        +
      </span>

      {/* MAIN CONTAINER */}
      <div className="container hero-container">

            {/* HERO GRID */}
          <div className="hero-grid">

      {/* PHOTO */}
      <div className="hero-photo">
        <div
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '5px solid #dbeafe',
            overflow: 'hidden',
            background: '#eff6ff',
            boxShadow: '0 15px 40px rgba(37, 99, 235, 0.12)',
          }}
        >
          <img
            src="/my photo.png"
            alt="Najwa Amanda"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 15%',
              transform: 'scale(1.20)',
            }}
          />
        </div>
      </div>


      {/* INTRO */}
      <div className="hero-intro">

        {/* Open to Work */}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 14px',
            background: '#f0fdf4',
            color: '#16a34a',
            border: '1px solid #bbf7d0',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 500,
            marginBottom: '24px',
            marginTop: '12px',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#22c55e',
            }}
          />
          Open to work
        </span>

        {/* Name */}
        <h1
          style={{
            fontSize: 'clamp(36px, 4vw, 52px)',
            letterSpacing: '1.5px',
            fontWeight: 800,
            color: '#111827',
            lineHeight: 1.05,
            margin: '0 0 14px',
          }}
        >
          Hi, I'm
          <br/>

          <span 
          style={{ 
            color: '#2563eb' ,
            whiteSpace: 'nowrap',
            }}
          > 
          Najwa Amanda👋
          </span>
        </h1>

        {/* Role */}
        <h2
          style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#374151',
            marginBottom: '16px',
          }}
        >
          QC/QA & IT Application Support
        </h2>

        {/* Description */}
        <p
          style={{
            maxWidth: '560px',
            fontSize: '15px',
            color: '#6b7280',
            lineHeight: 1.7,
            marginBottom: '24px',
          }}
        >
          Mahasiswa Informatika yang tertarik pada quality control,
          IT application support, dan pengembangan digital.
          Suka mengulik, bereksperimen, dan membangun sesuatu
          dari rasa penasaran.
        </p>

        {/* Location */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#6b7280',
            fontSize: '13px',
          }}
        >
          📍 Depok, Indonesia
        </div>

      </div>


      {/* CODE */}
      <div className="hero-code">
        <div
          className="w-full"
          style={{
            maxWidth: '380px',
            background: '#111827',
            borderRadius: '14px',
            padding: '18px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
            color: '#d1d5db',
          }}
        >

          <div
            style={{
              display: 'flex',
              gap: '6px',
              marginBottom: '14px',
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>

          <pre
            style={{
              fontSize: '12px',
              lineHeight: 1.7,
              overflowX: 'auto',
              margin: 0,
            }}
          >
    {`const najwa = {
      role: "IT Student",
      focus: ["QC/QA", "IT Application Support"],
      learning: "Java, Python, JS",
      building: "Web and App Projects",
    };`}
          </pre>

        </div>
      </div>


      {/* TAGS */}
      <div className="hero-tags">

        <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600">
          Web Development
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
          Quality Control
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
          IT Support
        </span>

      </div>


      {/* BUTTONS */}
      <div className="hero-buttons">

        <a
          href="#projects"
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            background: '#2563eb',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '14px',
          }}
        >
          My Projects →
        </a>

        <a
          href="#contact"
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            color: '#374151',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '14px',
            background: '#fff',
          }}
        >
          Contact Me
        </a>

      </div>

    </div>
    </div>
    </section>
  );
}