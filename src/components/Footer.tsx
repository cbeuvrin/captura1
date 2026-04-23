import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream w-full">
      {/* Top Section */}
      <div className="px-6 md:px-10 pt-16 pb-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-12">
          {/* Left Column - Navigation */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-label text-cream/70 hover:text-cream transition-colors">
              INICIO
            </Link>
            <Link to="/servicios" className="text-label text-cream/70 hover:text-cream transition-colors">
              SERVICIOS
            </Link>
            <Link to="/nosotros" className="text-label text-cream/70 hover:text-cream transition-colors">
              NOSOTROS
            </Link>
            <Link to="/nosotros" className="text-label text-cream/70 hover:text-cream transition-colors">
              CONTACTAR
            </Link>
          </div>

          {/* Right Column - Contact Info */}
          <div className="flex flex-col gap-4 items-start md:items-end">
            <span className="text-label text-cream/50 text-right">
              BIG PROJECT? CRAZY THOUGHT? OR JUST FEEL LIKE CHATTING?
            </span>
            <span className="text-xl md:text-2xl font-bold">LET'S TALK!</span>
            <span className="text-label text-cream/50">alexisb@grupocaptura.com.mx</span>
            <span className="text-label text-cream/50">elisamaria@grupocaptura.com.mx</span>
            <span className="text-label text-cream/50 mt-4">COPYRIGHT 2026</span>
            <span className="text-label text-cream/50">CAPTURA FILMS</span>
          </div>
        </div>
      </div>

      {/* Giant Text Section */}
      <div className="w-full overflow-hidden leading-[0.85] pb-0">
        <div
          className="text-cream/[0.15] font-black tracking-tighter whitespace-nowrap select-none"
          style={{ fontSize: 'clamp(120px, 20vw, 300px)' }}
        >
          CAPTURA
        </div>
      </div>
    </footer>
  );
}
