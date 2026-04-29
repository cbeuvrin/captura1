import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { gsap } from 'gsap';

export default function Nav() {
const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollPos > prevScrollPos.current && currentScrollPos > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      prevScrollPos.current = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(menuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        onStart: () => {
          if (menuRef.current) menuRef.current.style.pointerEvents = 'auto';
        }
      });
      if (linksRef.current) {
        const links = linksRef.current.querySelectorAll('.menu-link');
        gsap.fromTo(
          links,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out', delay: 0.2 }
        );
      }
    } else {
      document.body.style.overflow = '';
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.pointerEvents = 'none';
        }
      });
    }
  }, [menuOpen]);

  const handleContactClick = () => {
    setMenuOpen(false);
    setTimeout(() => {
      const ctaSection = document.getElementById('cta-section');
      if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`fixed top-6 right-6 md:top-10 md:right-10 z-[70] bg-black text-cream px-8 py-3 text-label rounded-none hover:scale-105 transition-all duration-300 shadow-lg ${
          visible || menuOpen ? 'translate-y-0 opacity-1' : '-translate-y-20 opacity-0'
        }`}
      >
        {menuOpen ? 'CERRAR' : 'MENU'}
      </button>

      {/* Full Screen Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[60] bg-charcoal opacity-0 pointer-events-none"
        style={{ transform: 'translateY(-20px)' }}
      >
        <div className="flex flex-col h-full pt-[60px]">
          {/* Top nav bar in menu */}
          <div className="flex items-center justify-between px-6 md:px-10 h-[60px]">
            <img src="/logo/logo.png" alt="CAPTURA FILMS" className="h-8 w-auto opacity-80" />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-label text-cream hover:text-[#e70209] transition-colors cursor-pointer"
            >
              CERRAR
            </button>
            <span
              onClick={handleContactClick}
              className="text-label text-cream hover:text-[#e70209] transition-colors cursor-pointer"
            >
              CONTACTAR
            </span>
          </div>

          {/* Menu Links */}
          <div
            ref={linksRef}
            className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-6"
          >
            {[
              { label: 'INICIO', to: '/' },
              { label: 'SERVICIOS', to: '/servicios' },
              { label: 'NOSOTROS', to: '/nosotros' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="menu-link text-cream text-5xl md:text-7xl lg:text-8xl font-black tracking-tight hover:text-[#e70209] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleContactClick}
              className="menu-link text-cream text-5xl md:text-7xl lg:text-8xl font-black tracking-tight hover:text-[#e70209] transition-colors duration-300"
            >
              CONTACTAR
            </button>
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-6 md:px-10 pb-8">
            <div className="flex flex-col gap-1">
              <span className="text-label text-cream/50">alexisb@grupocaptura.com.mx</span>
              <span className="text-label text-cream/50">elisamaria@grupocaptura.com.mx</span>
            </div>
            <div className="flex gap-4">
              {['INICIO', 'SERVICIOS', 'NOSOTROS', 'CONTACTAR'].map((item) => (
                <span key={item} className="text-label text-cream/50">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Extra backdrop removed to avoid overlapping issues */}
    </>
  );
}
