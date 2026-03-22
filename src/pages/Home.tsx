import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const bgImages = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2400&auto=format&fit=crop'
];

const projects = [
  {
    id: 'kinetic-monolith',
    title: 'KINETIC MONOLITH',
    category: 'AUDIOVISUAL',
    date: '2024-03-15',
    image: 'https://lh3.googleusercontent.com/d/1Bf2XqjJ9_H2X9_H2X9_H2X9_H2X9_H2X=w1200-h800',
    fallback: 'https://picsum.photos/seed/kinetic/1200/800?grayscale'
  },
  {
    id: 'void-architecture',
    title: 'VOID ARCHITECTURE',
    category: 'MARCAS',
    date: '2024-02-20',
    image: 'https://lh3.googleusercontent.com/d/1Cf2XqjJ9_H2X9_H2X9_H2X9_H2X9_H2X=w1200-h800',
    fallback: 'https://picsum.photos/seed/void/1200/800?grayscale'
  },
  {
    id: 'neon-brutalism',
    title: 'NEON BRUTALISM',
    category: 'REDES SOCIAIS',
    date: '2024-01-10',
    image: 'https://lh3.googleusercontent.com/d/1Df2XqjJ9_H2X9_H2X9_H2X9_H2X9_H2X=w1200-h800',
    fallback: 'https://picsum.photos/seed/neon/1200/800?grayscale'
  },
  {
    id: 'silent-echo',
    title: 'SILENT ECHO',
    category: 'IMPRESSOS',
    date: '2023-11-05',
    image: 'https://lh3.googleusercontent.com/d/1Ef2XqjJ9_H2X9_H2X9_H2X9_H2X9_H2X=w1200-h800',
    fallback: 'https://picsum.photos/seed/echo/1200/800?grayscale'
  }
];

export default function Home() {
  const [currentBg, setCurrentBg] = useState(0);
  const [activeFilter, setActiveFilter] = useState('TODOS');

  const categories = ['TODOS', 'AUDIOVISUAL', 'IMPRESSOS', 'MARCAS', 'REDES SOCIAIS'];

  // Filter and sort projects by date (newest first)
  const filteredProjects = projects
    .filter(project => activeFilter === 'TODOS' || project.category === activeFilter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 border-b border-outline-variant/30 overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {bgImages.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentBg ? 'opacity-20' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt="Background"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
          {/* Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8">
            DESIGN<br />
            <span className="text-primary">É DAR FORMA</span><br />
            À VIDA. <br />
          </h1>
          <p className="text-xl md:text-2xl text-on-surface/70 max-w-2xl font-medium">
            Minha missão é dar forma às ideias da sua vida.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Filters */}
      <section className="py-12 flex flex-wrap gap-4 border-b border-outline-variant/30">
        {categories.map(category => (
          <button 
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 font-bold tracking-widest uppercase text-sm transition-colors ${
              activeFilter === category 
                ? 'bg-primary text-background hover:bg-white' 
                : 'border border-outline-variant/50 text-on-surface hover:border-primary hover:text-primary'
            }`}
          >
            {category}
          </button>
        ))}
      </section>

      {/* Project Grid */}
      <section id="projetos" className="py-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 scroll-mt-20">
        {filteredProjects.map((project, index) => (
          <Link 
            key={project.id} 
            to={`/case-study/${project.id}`}
            className={`group block ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-container mb-6">
              <img 
                src={project.fallback} 
                alt={project.title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-outline-variant/20 pointer-events-none"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-black tracking-tighter group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm font-mono text-on-surface/50 mt-2 tracking-widest uppercase">
                  {project.category}
                </p>
              </div>
              <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                [VIEW]
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 md:py-48 border-t border-b border-outline-variant/30 scroll-mt-20">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8">
          SOBRE<br />
          <span className="text-primary">MIM</span>
        </h2>
        <p className="text-xl md:text-2xl text-on-surface/70 max-w-2xl font-medium">
          Muito prazer. Sou brasileiro. Designer há 10 anos. Especialista em descomplicar.
        </p>
      </section>

      {/* About Content Grid */}
      <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-b border-outline-variant/30">
        <div className="lg:col-span-5">
          <div className="aspect-[3/4] bg-surface-container border border-outline-variant/30 overflow-hidden sticky top-32">
            <img 
              src="https://picsum.photos/seed/aura-studio/800/1200?grayscale" 
              alt="Studio Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <div className="lg:col-span-7 space-y-16">
          <div>
            <h3 className="text-3xl font-black tracking-tighter mb-6">COMO EU TRABALHO</h3>
            <p className="text-lg text-on-surface/80 leading-relaxed mb-6">
              Para mim, um bom projeto nasce de uma boa conversa. Minha prioridade é compreender o seu universo e os seus objetivos, para depois transformar tudo isso em um resultado visual claro e autêntico.
            </p>
          </div>

          <div className="overflow-hidden w-full">
            <h3 className="text-3xl font-black tracking-tighter mb-8">PARCEIROS</h3>
            <div className="relative w-full flex items-center py-4">
              {/* Gradient masks for smooth fade on edges */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex w-max animate-marquee text-white opacity-60 hover:opacity-100 transition-opacity duration-500">
                {/* First set of logos */}
                <div className="flex gap-24 items-center px-8 flex-shrink-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/83/TNT_Sports_%282023%29.svg" 
                    alt="TNT Sports" 
                    className="h-8 w-auto max-w-none flex-shrink-0 brightness-0 invert"
                  />
                  <img 
                    src="/365Scores-Logo-New.svg" 
                    alt="365Scores" 
                    className="h-8 w-auto max-w-none flex-shrink-0 brightness-0 invert"
                  />
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Logomarca_Intelbras_verde.png" 
                    alt="Intelbras" 
                    className="h-8 w-auto max-w-none flex-shrink-0 brightness-0 invert"
                  />
                  <img 
                    src="/Olsen.svg" 
                    alt="Olsen" 
                    className="h-8 w-auto max-w-none flex-shrink-0 brightness-0 invert"
                  />
                </div>
                {/* Duplicated set for seamless loop */}
                <div className="flex gap-24 items-center px-8 flex-shrink-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/83/TNT_Sports_%282023%29.svg" 
                    alt="TNT Sports" 
                    className="h-8 w-auto max-w-none flex-shrink-0 brightness-0 invert"
                  />
                  <img 
                    src="/365Scores-Logo-New.svg" 
                    alt="365Scores" 
                    className="h-8 w-auto max-w-none flex-shrink-0 brightness-0 invert"
                  />
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Logomarca_Intelbras_verde.png" 
                    alt="Intelbras" 
                    className="h-8 w-auto max-w-none flex-shrink-0 brightness-0 invert"
                  />
                  <img 
                    src="/Olsen.svg" 
                    alt="Olsen" 
                    className="h-8 w-auto max-w-none flex-shrink-0 brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 text-center">
          VAMOS<br />COMEÇAR?
        </h2>
        
        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div className="group">
            <label htmlFor="name" className="block text-xs font-mono text-on-surface/50 mb-2 uppercase tracking-widest group-focus-within:text-primary transition-colors">Nome</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-transparent border-b-2 border-outline-variant/50 py-4 text-xl font-medium focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface/20"
              placeholder="João Silva"
            />
          </div>
          
          <div className="group">
            <label htmlFor="email" className="block text-xs font-mono text-on-surface/50 mb-2 uppercase tracking-widest group-focus-within:text-primary transition-colors">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-transparent border-b-2 border-outline-variant/50 py-4 text-xl font-medium focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface/20"
              placeholder="joãosilva@gmail.com"
            />
          </div>
          
          <div className="group">
            <label htmlFor="message" className="block text-xs font-mono text-on-surface/50 mb-2 uppercase tracking-widest group-focus-within:text-primary transition-colors">Mensagem</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full bg-transparent border-b-2 border-outline-variant/50 py-4 text-xl font-medium focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface/20 resize-none"
              placeholder="Como posso te ajudar?"
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="w-full py-6 bg-primary text-background font-black tracking-widest uppercase text-xl hover:bg-white transition-colors"
          >
            ENVIAR MENSAGEM
          </button>
        </form>
      </section>
      </div>
    </div>
  );
}
