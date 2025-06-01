import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';
import BackgroundEffects from './BackgroundEffects';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
      <AnimatedBackground />
      <BackgroundEffects />
      <div className="relative z-10">
        <Navigation />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout; 