import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reinicializar partículas quando a tela redimensiona
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          life: Math.random() * Math.PI * 2,
          size: Math.random() * 1.5 + 1.5
        });
      }
    };

    // Configuração inicial
    resizeCanvas();
    
    // Listener para redimensionamento com debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);

    const drawBackground = () => {
      // Gradient background que se adapta ao tema
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, 0,
        canvas.width * 0.5, canvas.height * 0.5, Math.max(canvas.width, canvas.height) * 0.8
      );
      
      if (theme === 'dark') {
        gradient.addColorStop(0, '#1a2332');
        gradient.addColorStop(0.4, '#0f1419');
        gradient.addColorStop(1, '#05080c');
      } else {
        gradient.addColorStop(0, '#f8fafc');
        gradient.addColorStop(0.4, '#e2e8f0');
        gradient.addColorStop(1, '#cbd5e1');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawWaveforms = (time: number) => {
      ctx.save();
      
      // Draw flowing wave lines
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        
        if (theme === 'dark') {
          ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 - i * 0.03})`;
        } else {
          ctx.strokeStyle = `rgba(147, 51, 234, ${0.25 - i * 0.05})`;
        }
        
        ctx.lineWidth = 2 - i * 0.3;
        
        const amplitude = 80 + i * 20;
        const frequency = 0.005 + i * 0.002;
        const phase = time * 0.001 + i * Math.PI * 0.5;
        
        for (let x = 0; x <= canvas.width; x += 3) {
          const y = canvas.height * 0.5 + 
                   Math.sin(x * frequency + phase) * amplitude +
                   Math.sin(x * frequency * 2 + phase * 1.5) * (amplitude * 0.3);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const drawMeshNetwork = (time: number) => {
      ctx.save();
      
      if (theme === 'dark') {
        ctx.globalAlpha = 0.08;
        ctx.strokeStyle = '#3b82f6';
      } else {
        ctx.globalAlpha = 0.15;
        ctx.strokeStyle = '#60a5fa';
      }
      
      // Create wireframe mesh effect - adaptativo ao tamanho da tela
      const meshSize = Math.max(80, Math.min(150, canvas.width / 10));
      ctx.lineWidth = 0.8;
      
      for (let x = 0; x < canvas.width + meshSize; x += meshSize) {
        for (let y = 0; y < canvas.height + meshSize; y += meshSize) {
          const offsetX = Math.sin(time * 0.0008 + x * 0.01) * 15;
          const offsetY = Math.cos(time * 0.0006 + y * 0.01) * 15;
          
          const adjustedX = x + offsetX;
          const adjustedY = y + offsetY;
          
          // Draw mesh lines
          if (x < canvas.width) {
            ctx.beginPath();
            ctx.moveTo(adjustedX, adjustedY);
            ctx.lineTo(adjustedX, adjustedY + meshSize);
            ctx.stroke();
          }
          
          if (y < canvas.height) {
            ctx.beginPath();
            ctx.moveTo(adjustedX, adjustedY);
            ctx.lineTo(adjustedX + meshSize, adjustedY);
            ctx.stroke();
          }
        }
      }
      
      ctx.restore();
    };

    const drawParticles = (time: number) => {
      // Update particles
      particlesRef.current.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 0.02;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      // Draw particles with glow effect
      particlesRef.current.forEach(particle => {
        const alpha = (Math.sin(particle.life) + 1) * 0.3 + 0.2;
        const glowSize = Math.max(0.5, particle.size + Math.sin(particle.life) * 1);
        
        // Cores azuis adaptáveis ao tema
        const particleColor = theme === 'dark' ? '#3b82f6' : '#60a5fa';
        const coreColor = theme === 'dark' ? '#60a5fa' : '#3b82f6';
        
        // Glow effect
        ctx.save();
        ctx.globalAlpha = alpha * 0.3;
        ctx.fillStyle = particleColor;
        ctx.shadowBlur = 15;
        ctx.shadowColor = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, Math.max(1, glowSize * 2), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        // Core particle
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = coreColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, Math.max(0.5, particle.size), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Connect nearby particles - distância adaptativa
      const connectionDistance = Math.max(100, Math.min(180, canvas.width / 8));
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
          
          if (distance < connectionDistance) {
            const alpha = (connectionDistance - distance) / connectionDistance * 0.25;
            const lineColor = theme === 'dark' ? '#3b82f6' : '#60a5fa';
            
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const animate = (time: number) => {
      drawBackground();
      drawMeshNetwork(time);
      drawParticles(time);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]); // Dependência do tema para re-renderizar quando mudar

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedBackground; 