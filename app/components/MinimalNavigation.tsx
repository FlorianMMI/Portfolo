'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MinimalNavigation() {
  const [time, setTime] = useState('');
  const [activeSection, setActiveSection] = useState(0);

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

    // Track active section
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1150px] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left side - Name and Time */}
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="text-white text-xl tracking-[-0.5px] hover:text-white/80 transition-colors"
              style={{ fontFamily: 'Segoe UI, sans-serif' }}
            >
              Florian Bounissou
            </Link>
            <p className="text-[#6a7282] text-sm font-mono">{time}</p>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center gap-8">
            {/* Section numbers */}
            <div className="flex items-center gap-6">
              {['01', '02', '03', '04'].map((num, index) => (
                <button
                  key={num}
                  onClick={() =>
                    scrollToSection(
                      ['hero', 'projects', 'about', 'contact'][index]
                    )
                  }
                  className={`text-sm font-mono transition-colors ${
                    activeSection === index ? 'text-white' : 'text-[#4a5565] hover:text-white/60'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            {/* Contact button */}
            <Link
              href="/contact"
              className="border border-white/20 px-6 py-2 text-white text-base hover:bg-white/10 transition-colors duration-300"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
