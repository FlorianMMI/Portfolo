'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    // Update time
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds} — PARIS`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Animated canvas background
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        // keep particles subtle so connecting lines stand out
        opacity: 0.12 + Math.random() * 0.18,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      // Clear canvas each frame (no overlay) so we don't get a filled look
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            // white lines with higher alpha so connections are well marked
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.5 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-dvh w-full overflow-hidden bg-[#0a0a0a]">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: '#0a0a0a' }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-8">
        <p className="text-[#4a5565] text-xs font-mono tracking-wider">
          SCROLL TO EXPLORE
        </p>
      </div>

      {/* Scroll down button */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Scroll to projects"
      >
        <svg
          className="w-6 h-6 text-white animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-14"
        >
          <p className="text-[#6a7282] text-sm font-mono tracking-[1.4px] mb-14">
            Full Stack Developer
          </p>

          {/* Main title with staggered animation */}
          <div className="space-y-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-7xl md:text-[128px] leading-tight md:leading-[128px] tracking-[-6.4px] font-light text-white"
              style={{ fontFamily: 'Segoe UI, sans-serif' }}
            >
              Portfolio
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-7xl md:text-[128px] leading-tight md:leading-[128px] tracking-[-6.4px] italic text-white"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              digitales
            </motion.h2>
          </div>
        </motion.div>

        {/* Location and Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-8 md:gap-16 flex-wrap justify-center"
        >
          <div className="text-center">
            <p className="text-[#6a7282] text-sm font-mono mb-1">BASÉ À</p>
            <p className="text-white text-sm font-mono">Limoges, FR</p>
          </div>

          <div className="w-px h-12 bg-white/20" />

          <div className="text-center">
            <p className="text-[#6a7282] text-sm font-mono mb-1">DISPONIBLE POUR</p>
            <p className="text-white text-sm font-mono">FREELANCE</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
