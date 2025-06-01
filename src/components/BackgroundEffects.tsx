import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[1]">
      {/* Orbs flutuantes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-cyan-500/8 rounded-full blur-xl animate-float-slower"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-indigo-500/12 rounded-full blur-xl animate-float"></div>
      
      {/* Pontos de luz pulsantes */}
      <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-1/6 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default BackgroundEffects; 