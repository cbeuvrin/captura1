import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { num: '01', title: 'Cine / Video', desc: 'Producción audiovisual de alto impacto' },
  { num: '02', title: 'Material POP', desc: 'Displays y material para punto de venta' },
  { num: '03', title: 'Diseño de Stands', desc: 'Stands feriales y exposiciones' },
  { num: '04', title: 'Marketing 360', desc: 'Estrategias de marketing integral' },
  { num: '05', title: 'Foto de producto', desc: 'Fotografía profesional de productos' },
  { num: '06', title: 'Animación', desc: 'Animación 2D y motion graphics' },
  { num: '07', title: 'Diseño web', desc: 'Diseño y desarrollo de sitios web' },
  { num: '08', title: 'RRSS', desc: 'Gestión de redes sociales' },
];

const projects = [
  { name: 'Campaña Audiovisual 2025', image: '/images/proj-1.jpg' },
  { name: 'Stand Expo Guadalajara', image: '/images/proj-2.jpg' },
  { name: 'Material POP Retail', image: '/images/proj-3.jpg' },
  { name: 'Rediseño Web Corporativo', image: '/images/proj-4.jpg' },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Hero entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroChars = heroRef.current?.querySelectorAll('.hero-char');
      const tags = heroRef.current?.querySelectorAll('.hero-tag');

      if (heroChars) {
        gsap.fromTo(
          heroChars,
          { y: '120%', opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.04, duration: 1.2, ease: 'power4.out', delay: 0.6 }
        );
      }

      if (tags) {
        gsap.fromTo(
          tags,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out', delay: 1.2 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Timer to alternate colors for the hero text
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Scroll animations for various sections
  useEffect(() => {
    const ctx = gsap.context(() => {
      // About section staggered entrance
      const aboutLines = aboutRef.current?.querySelectorAll('.animate-line');
      if (aboutLines) {
        gsap.fromTo(
          aboutLines,
          { y: '100%', opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: aboutRef.current, start: 'top 80%' },
          }
        );
      }

      // Stats numbers animation
      const stats = aboutRef.current?.querySelectorAll('.stat-item');
      if (stats) {
        stats.forEach((stat) => {
          const numEl = stat.querySelector('.stat-num');
          if (numEl) {
            const target = parseInt(numEl.getAttribute('data-target') || '0');
            gsap.fromTo(
              numEl,
              { innerText: 0 },
              {
                innerText: target,
                duration: 1.5,
                ease: 'power2.out',
                snap: { innerText: 1 },
                scrollTrigger: { trigger: stat, start: 'top 80%' },
              }
            );
          }
        });
      }

      // Services grid and header animation
      const servicesLines = servicesRef.current?.querySelectorAll('.animate-line');
      if (servicesLines) {
        gsap.fromTo(
          servicesLines,
          { y: '100%', opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: servicesRef.current, start: 'top 80%' },
          }
        );
      }

      const cards = servicesRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: servicesRef.current, start: 'top 70%' },
          }
        );
      }

      // Projects animation
      const items = projectsRef.current?.querySelectorAll('.project-item');
      const portfolioLines = projectsRef.current?.querySelectorAll('.animate-line');
      if (items) {
        items.forEach((item) => {
          gsap.fromTo(
            item,
            { clipPath: 'inset(100% 0 0 0)' },
            {
              clipPath: 'inset(0% 0 0 0)',
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: { trigger: item, start: 'top 80%' },
            }
          );
        });
      }
      if (portfolioLines) {
        gsap.fromTo(
          portfolioLines,
          { y: '100%', opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: projectsRef.current, start: 'top 80%' },
          }
        );
      }

      // CTA entrance
      const ctaLine = ctaRef.current?.querySelector('.animate-line');
      if (ctaLine) {
        gsap.fromTo(
          ctaLine,
          { y: '100%', opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);



  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-[100dvh] bg-black flex flex-col items-center justify-center relative overflow-hidden px-4"
      >
        {/* Background Slider removed as requested */}

        {/* Hero Text */}
        <div className="relative z-10 text-center">
          <h1 className="text-display leading-[0.85]" style={{ fontSize: 'clamp(60px, 15vw, 220px)' }}>
            <div className="overflow-hidden py-2">
              <span 
                className={`hero-line block transition-colors duration-1000 ${currentIdx === 0 ? 'text-white' : 'text-[#e70209]'}`}
              >
                {"AGENCIA".split("").map((char, i) => (
                  <span key={i} className="hero-char inline-block">
                    {char}
                  </span>
                ))}
              </span>
            </div>
            <div className="overflow-hidden py-2">
              <span 
                className={`hero-line block transition-colors duration-1000 ${currentIdx === 0 ? 'text-[#e70209]' : 'text-white'}`}
              >
                {"CREATIVA".split("").map((char, i) => (
                  <span key={i} className="hero-char inline-block">
                    {char}
                  </span>
                ))}
              </span>
            </div>
          </h1>

          {/* Category Tags */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 md:mt-12">
            {['CINE / VIDEO', 'MATERIAL POP', 'STANDS', 'MARKETING 360'].map((tag) => (
              <span key={tag} className="hero-tag text-label text-muted-grey">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section ref={aboutRef} className="bg-cream py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="about-left lg:col-span-3">
            <div className="overflow-hidden mb-4">
              <span className="animate-line text-label text-muted-grey block">AGENCIA DE MEDIOS</span>
            </div>
            <div className="overflow-hidden mb-6">
              <h2 className="animate-line text-4xl md:text-5xl font-extrabold text-charcoal">Captura Films</h2>
            </div>
            <div className="overflow-hidden mb-8">
              <p className="animate-line text-lg text-charcoal/80 leading-relaxed max-w-[520px]">
                Agencia de medios que desarrolla soluciones. Diseñamos estrategias eficaces alineadas a los objetivos de
                negocio para que tu marca destaque y tenga crecimiento en el mercado. Llevamos de principio a fin tu
                proyecto, lo hacemos nuestro y descubrimos nuevas oportunidades.
              </p>
            </div>
            <div className="overflow-hidden">
              <Link
                to="/servicios"
                className="animate-line inline-flex items-center gap-2 text-sm font-semibold text-burgundy hover:underline transition-all"
              >
                Conoce todos nuestros servicios <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            {[
              { num: 15, label: 'Años de experiencia', prefix: '+' },
              { num: 90, label: 'Proyectos realizados', prefix: '+' },
              { num: 15, label: 'Marcas atendidas', prefix: '+' },
            ].map((stat) => (
              <div key={stat.label} className="stat-item overflow-hidden">
                <div className="animate-line">
                  <span
                    className="stat-num block text-6xl md:text-7xl lg:text-8xl font-black text-[#e70209]"
                    data-target={stat.num}
                  >
                    {stat.prefix}0
                  </span>
                  <span className="text-label text-muted-grey mt-2 block">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section
        ref={servicesRef}
        className="py-24 md:py-36 px-6 md:px-10"
        style={{ background: 'linear-gradient(180deg, #DEDCD7 0%, rgba(114,47,55,0.05) 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="overflow-hidden mb-4">
              <span className="animate-line text-label text-muted-grey block">NUESTROS SERVICIOS</span>
            </div>
            <div className="overflow-hidden">
              <h2 className="animate-line text-4xl md:text-5xl lg:text-6xl font-extrabold text-charcoal">
                Soluciones integrales para tu marca
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <Link
                to="/servicios"
                key={svc.num}
                className="service-card bg-white p-8 group hover:-translate-y-2 hover:shadow-float transition-all duration-300"
              >
                <span className="text-label text-muted-grey">{svc.num}</span>
                <h3 className="text-xl md:text-2xl font-bold text-charcoal mt-6">{svc.title}</h3>
                <p className="text-sm text-muted-grey mt-3">{svc.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#e70209] mt-6 group-hover:gap-2 transition-all">
                  INFO <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section ref={projectsRef} className="bg-charcoal text-cream py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="overflow-hidden mb-4">
                <span className="animate-line text-label text-muted-grey block">PROYECTOS RECIENTES</span>
              </div>
              <div className="overflow-hidden">
                <h2 className="animate-line text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">Nuestro portafolio</h2>
              </div>
            </div>
            <span className="text-label text-burgundy hidden md:block">Ver más →</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <div key={proj.name} className="project-item group cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-lg font-semibold text-cream">{proj.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        id="cta-section"
        className="py-32 md:py-40 px-6 md:px-10 text-center"
        style={{ background: 'linear-gradient(180deg, #1A1A1A 0%, #4A1A22 100%)' }}
      >
        <div className="max-w-[800px] mx-auto">
          <div className="overflow-hidden mb-6">
            <h2
              className="animate-line text-5xl md:text-7xl lg:text-8xl font-black text-cream tracking-tight"
            >
              Hacemos realidad tus ideas
            </h2>
          </div>
          <p className="text-lg text-cream/60 mb-10">
            Ponte en contacto si quieres crear, potenciar o evolucionar tu marca
          </p>
          <div className="flex flex-col items-center gap-3 mb-10">
            <span className="text-base font-medium text-cream/80 hover:text-soft-gold transition-colors cursor-pointer">
              alexisb@grupocaptura.com.mx
            </span>
            <span className="text-base font-medium text-cream/80 hover:text-soft-gold transition-colors cursor-pointer">
              elisamaria@grupocaptura.com.mx
            </span>
          </div>
          <Link
            to="/nosotros"
            className="inline-block border border-cream text-cream px-12 py-4 text-label hover:bg-cream hover:text-charcoal transition-all duration-300"
          >
            CONTACTAR
          </Link>
        </div>
      </section>
    </div>
  );
}
