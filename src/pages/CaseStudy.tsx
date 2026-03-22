import { useParams, Link } from 'react-router-dom';

export default function CaseStudy() {
  const { id } = useParams();

  // In a real app, fetch data based on ID. Using static data for demo.
  const project = {
    title: id?.replace('-', ' ').toUpperCase() || 'KINETIC MONOLITH',
    client: 'NEXUS CORP',
    role: 'ART DIRECTION, DEV',
    year: '2024',
    description: 'A brutalist exploration of digital space. We stripped away the unnecessary to reveal the raw structure beneath. The result is an uncompromising digital experience that challenges conventional web design paradigms.',
    heroImage: 'https://picsum.photos/seed/kinetic-hero/1920/1080?grayscale',
    processImages: [
      'https://picsum.photos/seed/kinetic-1/800/1000?grayscale',
      'https://picsum.photos/seed/kinetic-2/800/1000?grayscale'
    ]
  };

  return (
    <article className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <header className="py-32 md:py-48 border-b border-outline-variant/30">
        <Link to="/" className="text-primary font-mono text-sm hover:underline mb-12 inline-block">
          &larr; BACK TO WORK
        </Link>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-16 break-words">
          {project.title}
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-outline-variant/30 pt-8">
          <div>
            <h3 className="text-xs font-mono text-on-surface/50 mb-2">CLIENT</h3>
            <p className="font-bold tracking-widest uppercase">{project.client}</p>
          </div>
          <div>
            <h3 className="text-xs font-mono text-on-surface/50 mb-2">ROLE</h3>
            <p className="font-bold tracking-widest uppercase">{project.role}</p>
          </div>
          <div>
            <h3 className="text-xs font-mono text-on-surface/50 mb-2">YEAR</h3>
            <p className="font-bold tracking-widest uppercase">{project.year}</p>
          </div>
          <div>
            <h3 className="text-xs font-mono text-on-surface/50 mb-2">LIVE</h3>
            <a href="#" className="font-bold tracking-widest uppercase text-primary hover:underline">VIEW SITE &#8599;</a>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <section className="py-12">
        <div className="aspect-video bg-surface-container border border-outline-variant/30 overflow-hidden">
          <img 
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-outline-variant/30">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-black tracking-tighter">THE CHALLENGE</h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-2xl md:text-4xl font-medium leading-tight text-on-surface/90">
            {project.description}
          </p>
          <p className="mt-8 text-lg text-on-surface/70 max-w-2xl">
            By utilizing a strict 12-column grid and removing all border radii, we created a system that feels both rigid and endlessly flexible. The typography does the heavy lifting, acting as both content and structural element.
          </p>
        </div>
      </section>

      {/* Process Images */}
      <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.processImages.map((img, i) => (
          <div key={i} className="aspect-[4/5] bg-surface-container border border-outline-variant/30 overflow-hidden">
            <img 
              src={img} 
              alt={`Process ${i + 1}`} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </section>

      {/* Next Project */}
      <section className="py-32 text-center">
        <p className="text-sm font-mono text-on-surface/50 mb-6">NEXT PROJECT</p>
        <Link to="/case-study/void-architecture" className="group inline-block">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter group-hover:text-primary transition-colors">
            VOID ARCHITECTURE
          </h2>
        </Link>
      </section>
    </article>
  );
}
