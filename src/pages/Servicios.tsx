import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

export default function Servicios() {
  const [activeService, setActiveService] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero & Sections line entrance
      const lines = document.querySelectorAll('.animate-line');
      if (lines) {
        lines.forEach((line) => {
          gsap.fromTo(
            line,
            { y: '100%', opacity: 0 },
            {
              y: 0, opacity: 1, duration: 1, ease: 'power3.out',
              scrollTrigger: { trigger: line, start: 'top 85%' },
            }
          );
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-[50vh] bg-cream flex flex-col items-center justify-center px-6 md:px-10 pt-[100px] pb-16">
        <div className="overflow-hidden mb-4">
          <span className="animate-line text-label text-muted-grey block">NUESTROS SERVICIOS</span>
        </div>
        <div className="overflow-hidden text-center max-w-[900px]">
          <h1 className="animate-line text-5xl md:text-7xl lg:text-8xl font-black text-charcoal tracking-tight leading-tight">
            Conoce todos nuestros servicios
          </h1>
        </div>
        <div className="overflow-hidden mt-6 text-center max-w-[700px]">
          <p className="animate-line text-lg text-muted-grey leading-relaxed">
            Nuestro servicio va más allá de la simple publicidad; inspiramos marcas para que se conviertan en referentes,
            y cautivamos audiencias para que se conviertan en seguidores leales y apasionados.
          </p>
        </div>
      </section>

      {/* Interactive Services List */}
      <section ref={listRef} className="bg-cream py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Left Column - Sticky Image */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="sticky top-[120px]">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-charcoal/5">
                {services.map((svc, i) => (
                  <img
                    key={svc.name}
                    src={svc.image}
                    alt={svc.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: activeService === i ? 1 : 0 }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Service List */}
          <div className="lg:col-span-3">
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
                    className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight transition-all duration-400"
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

      {/* CTA Section */}
      <section
        ref={ctaRef}
        id="cta-section"
        className="py-32 md:py-40 px-6 md:px-10 text-center"
        style={{ background: 'linear-gradient(180deg, #1A1A1A 0%, #4A1A22 100%)' }}
      >
        <div className="max-w-[800px] mx-auto">
          <div className="overflow-hidden mb-6">
            <h2 className="animate-line text-5xl md:text-7xl lg:text-8xl font-black text-cream tracking-tight">
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
