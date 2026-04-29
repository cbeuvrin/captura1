import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Users, Shield, Heart, Users2, Award, RefreshCw } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: Eye, title: 'Transparencia', desc: 'Comunicación abierta y honesta' },
  { icon: Users, title: 'Inclusión y diversidad', desc: 'Valoramos todas las perspectivas' },
  { icon: Shield, title: 'Confiabilidad', desc: 'Cumplimos lo que prometemos' },
  { icon: Heart, title: 'Integridad', desc: 'Actuamos con ética siempre' },
  { icon: Users2, title: 'Trabajo en equipo', desc: 'Juntos logramos más' },
  { icon: Award, title: 'Excelencia', desc: 'Buscamos la mejor versión' },
  { icon: RefreshCw, title: 'Adaptación', desc: 'Evolucionamos con el mercado' },
];

export default function Nosotros() {
  const heroRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line entrance for all marked elements
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

      // Values cards staggered entrance
      const cards = valuesRef.current?.querySelectorAll('.value-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.07, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: valuesRef.current, start: 'top 75%' },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-[50vh] bg-cream flex flex-col items-center justify-center px-6 md:px-10 pt-[100px] pb-16">
        <div className="overflow-hidden mb-4">
          <span className="animate-line text-label text-muted-grey block">SOBRE NOSOTROS</span>
        </div>
        <div className="overflow-hidden text-center max-w-[900px]">
          <h1 className="animate-line text-5xl md:text-7xl lg:text-8xl font-black text-charcoal tracking-tight leading-tight">
            Tu proyecto en buenas manos
          </h1>
        </div>
        <div className="overflow-hidden mt-6 text-center max-w-[700px]">
          <p className="animate-line text-xl text-muted-grey">
            Descubre nuestro enfoque, quienes somos y cómo trabajamos.
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section ref={descRef} className="bg-cream py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="desc-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-6">Captura Films</h2>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Captura Films is una empresa integral en el campo del marketing y los medios, especializada en diversas
              áreas que van desde la producción de materiales publicitarios hasta la implementación de estrategias de
              marketing 360.
            </p>
          </div>
          <div className="desc-right">
            <img
              src="/images/about-team.jpg"
              alt="Equipo Captura Films"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        ref={missionRef}
        className="py-20 md:py-28 px-6 md:px-10"
        style={{ background: 'linear-gradient(180deg, #DEDCD7 0%, rgba(85,107,47,0.08) 100%)' }}
      >
        <div className="max-w-[1400px] mx-auto space-y-16 md:space-y-24">
          {/* Mission */}
          <div className="mission-block grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12">
            <div className="lg:col-span-1">
              <span className="text-label text-[#e70209]">MISIÓN</span>
            </div>
            <div className="lg:col-span-3 overflow-hidden">
              <p className="animate-line text-xl md:text-2xl text-charcoal leading-relaxed font-normal">
                Estamos dedicados a dar un servicio a la vida y trabajar con el corazón pues le damos energía y vida a
                cada proyecto. Conectamos con la esencia de cada marca para saber qué hacer para mejorar y cómo hacerlo
                en cada caso. Cada cliente es único por lo que absolutamente todas las soluciones están hechas a la
                medida.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="mission-block grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12">
            <div className="lg:col-span-1">
              <span className="text-label text-dark-olive">VISIÓN</span>
            </div>
            <div className="lg:col-span-3 overflow-hidden">
              <p className="animate-line text-xl md:text-2xl text-charcoal leading-relaxed font-normal">
                Queremos llevar tu marca al ÉXITO, creando canales de comunicación que nos conduzcan a nuevas formas de
                pensamiento e impecable ejecución.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="bg-charcoal text-cream py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16 tracking-tight">
            Nuestros valores
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="value-card border border-cream/15 p-8 hover:border-[#e70209] transition-colors duration-300"
                >
                  <Icon size={28} strokeWidth={1.5} className="text-soft-gold" />
                  <h3 className="text-xl font-bold mt-4">{val.title}</h3>
                  <p className="text-sm text-cream/50 mt-2">{val.desc}</p>
                </div>
              );
            })}
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
          <a
            href="mailto:alexisb@grupocaptura.com.mx"
            className="inline-block border border-cream text-cream px-12 py-4 text-label hover:bg-cream hover:text-charcoal transition-all duration-300"
          >
            CONTACTAR
          </a>
        </div>
      </section>
    </div>
  );
}
