import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { name: 'Cine / Video', image: '/images/svc-cine.jpg', desc: 'Producción audiovisual profesional' },
  { name: 'Material POP', image: '/images/svc-pop.jpg', desc: 'Displays y material para punto de venta' },
  { name: 'Diseño de Stands', image: '/images/svc-stands.jpg', desc: 'Stands feriales y exposiciones' },
  { name: 'Marketing 360', image: '/images/svc-marketing.jpg', desc: 'Estrategias de marketing integral' },
  { name: 'Foto de producto', image: '/images/svc-foto.jpg', desc: 'Fotografía profesional de productos' },
  { name: 'Animación', image: '/images/svc-animacion.jpg', desc: 'Animación 2D y motion graphics' },
  { name: 'Diseño web', image: '/images/svc-web.jpg', desc: 'Diseño y desarrollo de sitios web' },
  { name: 'RRSS', image: '/images/svc-rrss.jpg', desc: 'Gestión de redes sociales' },
];

const projects = [
  { name: 'Campaña Audiovisual 2025', image: '/images/proj-1.jpg' },
  { name: 'Stand Expo Guadalajara', image: '/images/proj-2.jpg' },
  { name: 'Material POP Retail', image: '/images/proj-3.jpg' },
  { name: 'Rediseño Web Corporativo', image: '/images/proj-4.jpg' },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [activeService, setActiveService] = useState(0);

  // Hero and Video animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      const logoChars = heroRef.current?.querySelectorAll('.hero-logo-char');
      if (logoChars) {
        gsap.fromTo(
          logoChars,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.05, duration: 1.2, ease: 'power4.out', delay: 0.4 }
        );
      }

      const subtext = heroRef.current?.querySelector('.hero-subtext');
      if (subtext) {
        gsap.to(subtext, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 1.2
        });
      }

      // Parallax effect for Hero content (slower move up)
      if (heroContentRef.current && heroRef.current) {
        const logoContainer = heroRef.current.querySelector('h1');
        const subtext = heroRef.current.querySelector('.hero-subtext');

        if (logoContainer) {
          gsap.to(logoContainer, {
            y: 150, 
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            }
          });
        }

        if (subtext) {
          gsap.to(subtext, {
            y: 200,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            }
          });
        }
      }

      // Video Expansion (Zoom) as it scrolls up
      if (videoSectionRef.current && videoWrapperRef.current) {
        gsap.fromTo(videoWrapperRef.current, 
          { width: "60%" },
          { 
            width: "90%",
            scrollTrigger: {
              trigger: videoSectionRef.current,
              start: "top bottom",
              end: "top top",
              scrub: true,
            }
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Timer to alternate colors for the hero text - removed as text is gone
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentIdx((prev) => (prev + 1) % 2);
  //   }, 4000);
  //   return () => clearInterval(timer);
  // }, []);

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
        className="h-[100dvh] bg-white flex flex-col items-center justify-center relative z-10 overflow-hidden px-6 md:px-10"
      >
        <div ref={heroContentRef} className="relative w-full max-w-[90vw] mx-auto">
          {/* Logo with Dark Video Mask Test */}
          <div className="w-full flex items-center justify-center mb-12 overflow-hidden relative">
            <video 
              src="/video/video4.mp4" 
              autoPlay 
              muted={true}
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.3)' }}
            />
            <h1 
              className="relative text-black font-black tracking-tighter leading-none text-center select-none flex flex-nowrap justify-center w-full whitespace-nowrap bg-white mix-blend-screen py-4"
              style={{ fontSize: 'clamp(56px, 18vw, 600px)' }}
            >
              {"CAPTURA".split("").map((char, i) => (
                <span 
                  key={i} 
                  className="hero-logo-char inline-block transition-colors duration-300 hover:text-[#e70209] cursor-default"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      y: 40,
                      duration: 0.1,
                      ease: "power2.out",
                      overwrite: true,
                      onComplete: () => {
                        gsap.to(e.currentTarget, {
                          y: 0,
                          duration: 0.6,
                          ease: "elastic.out(1, 0.3)"
                        });
                      }
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      y: 0,
                      duration: 0.4,
                      ease: "power2.out",
                      overwrite: true
                    });
                  }}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>

          {/* Sub-headline block */}
          <div className="hero-subtext max-w-[600px] opacity-0 translate-y-10">
            <p className="text-xl md:text-3xl font-bold text-charcoal leading-tight mb-4">
              Producimos tu marca en pantalla, en el punto de venta y en el mercado.<br />
              <span className="font-normal opacity-80 italic">Agencia creativa 360. Resultados superiores.</span>
            </p>
            <Link 
              to="/nosotros" 
              className="inline-flex items-center gap-2 text-sm font-bold text-muted-grey hover:text-charcoal transition-colors uppercase"
            >
              <span className="w-2 h-2 bg-[#e70209]"></span>
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section 
        ref={videoSectionRef}
        className="relative z-20 bg-white min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div 
          ref={videoWrapperRef} 
          className="relative aspect-video overflow-hidden shadow-2xl"
          style={{ width: '60%' }}
        >
          <video 
            src="/video/video.mp4" 
            autoPlay 
            muted={true}
            loop 
            playsInline 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* About Snippet Section */}
      <section ref={aboutRef} className="bg-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="about-left lg:col-span-3">
            <div className="overflow-hidden mb-4">
              <span className="animate-line text-label text-muted-grey block">AGENCIA DE MEDIOS</span>
            </div>
            <div className="overflow-hidden mb-6">
              <h2 className="animate-line text-4xl md:text-5xl font-black text-charcoal tracking-tighter">Captura Films</h2>
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

      {/* Interactive Services List from Servicios Page */}
      <section ref={servicesRef} className="bg-white py-24 md:py-32 px-6 md:px-10 border-t border-charcoal/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Left Column - Sticky Image */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="sticky top-[120px]">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-charcoal/5 rounded-2xl">
                {services.map((svc, i) => {
                  const isActive = activeService === i;
                  const isPast = i < activeService;

                  return (
                    <img
                      key={svc.name}
                      src={svc.image}
                      alt={svc.name}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom"
                      style={{ 
                        opacity: isActive ? 1 : 0,
                        transform: isActive 
                          ? 'translateY(0) scale(1) rotate(0deg)' 
                          : isPast 
                            ? 'translateY(-100%) scale(0.9) rotate(-5deg)' 
                            : 'translateY(100%) scale(1.1) rotate(5deg)',
                        zIndex: isActive ? 10 : 0
                      }}
                      loading="lazy"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Service List */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden mb-12">
              <span className="animate-line text-label text-muted-grey block">NUESTROS SERVICIOS</span>
            </div>
            {services.map((svc, i) => (
              <div
                key={svc.name}
                className="service-list-item border-b border-charcoal/10 py-6 md:py-8 cursor-pointer group relative"
                onMouseEnter={() => setActiveService(i)}
              >
                {/* Active dot */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#e70209] transition-opacity duration-300"
                  style={{ opacity: activeService === i ? 1 : 0 }}
                />

                <div className="flex items-center justify-between pl-6">
                  <h3
                    className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter transition-all duration-400"
                    style={{
                      opacity: activeService === i ? 1 : 0.25,
                      color: activeService === i ? '#e70209' : '#1A1A1A',
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {svc.name}
                  </h3>
                  <span className="text-label text-muted-grey hidden md:block">{svc.desc}</span>
                </div>

                {/* Mobile image */}
                <div className="lg:hidden mt-4 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.name}
                    className="w-full aspect-video object-cover transition-all duration-500"
                    style={{
                      maxHeight: activeService === i ? '200px' : '0',
                      opacity: activeService === i ? 1 : 0,
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
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
