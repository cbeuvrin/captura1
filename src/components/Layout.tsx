import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';
import { useLenis, getLenis } from '@/hooks/useLenis';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useLenis();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-cream">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
