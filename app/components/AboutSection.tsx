'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Experience {
  title: string;
  description: string;
  side: 'left' | 'right';
}

const experiences: Experience[] = [
  {
    title: 'Stage : Yanola',
    description:
      'Stage en cours de réalisation chez Yanola du 1er février 2024 au 22 Mai 2026.',
    side: 'right',
  },
  {
    title: 'DigiFlow',
    description:
      'Création de DigiFlow, une auto-entreprise spécialisée dans le développement web et la communication digitale. J\'ai pu réaliser divers projets comme rcsmedical.fr.',
    side: 'left',
  },
  {
    title: 'Stage : ChevalierB.fr',
    description:
      'Stage réalisé du 14 Avril 2025 pendant 8 Semaine. Le stage consistait à réaliser une application web pour un réseau intranet de professionnels',
    side: 'right',
  },
  {
    title: 'BUT MMI',
    description:
      '3ème année de la formation en Métiers du Multimédia et de l\'Internet à l\'IUT de Limoges. Spécialisation en développement web.',
    side: 'left',
  },
  {
    title: 'Baccalauréat',
    description:
      'Juin 2023 : Obtention du baccalauréat avec mention Bien. Spécialité Mathématiques et Numérique et Sciences Informatiques.',
    side: 'right',
  },
];

export default function AboutSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [typedText, setTypedText] = useState('');

  const handleClick = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      setTypedText('');
      return;
    }

    setSelectedIndex(index);
    setTypedText('');

    // Typing animation
    const text = experiences[index].description;
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 20);
  };

  return (
    <section id="about" className="py-32 px-8 bg-[#0a0a0a]">
      <div className="max-w-[1150px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#6a7282] text-sm font-mono mb-10">03 — ABOUT ME</p>
          <h2
            className="text-[72px] tracking-[-0.9px] font-light text-white mb-32"
            style={{ fontFamily: 'Segoe UI, sans-serif' }}
          >
            Mes expériences
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />

          {/* Experiences */}
          <div className="space-y-32">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <button
                  onClick={() => handleClick(index)}
                  className={`absolute left-1/2 top-0 -translate-x-1/2 w-6 h-6 rounded-full transition-all duration-300 z-10 ${
                    selectedIndex === index
                      ? 'bg-white scale-125'
                      : 'bg-[#d9d9d9] hover:bg-white/80 hover:scale-110'
                  }`}
                  aria-label={`View details for ${exp.title}`}
                />

                {/* Content */}
                <div
                  className={`${
                    exp.side === 'left' ? 'pr-[60%]' : 'pl-[60%]'
                  } cursor-pointer`}
                  onClick={() => handleClick(index)}
                >
                  <motion.h3
                    className="text-4xl tracking-[-0.9px] font-light text-white hover:text-white/80 transition-colors"
                    style={{ fontFamily: 'Segoe UI, sans-serif' }}
                    whileHover={{ x: exp.side === 'left' ? -10 : 10 }}
                  >
                    {exp.title}
                  </motion.h3>

                  {/* Typing animation */}
                  <AnimatePresence>
                    {selectedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 overflow-hidden"
                      >
                        <p className="text-[#6a7282] text-base font-mono">
                          {typedText}
                          <span className="animate-pulse">|</span>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
