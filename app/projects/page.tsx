'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const allProjects = [
  
  {
    year: '2025',
    title: 'Site RCS Médical',
    description: 'Projet de création d\'un site internet pour un magasin médical',
    category: 'Design & Dev',
    link: 'https://www.rcsmedical.fr/',
    image: '/images/RCS.png',
  },
  {
    year: '2025',
    title: 'Habittracker',
    description: 'Application de routine et de suivi des habitudes en Next.js & Typescript',
    category: 'Design , Dev' ,
    link: 'https://github.com/FlorianMMI/Habittracker',
    image: '/images/HabitTracker.png',
  },
  {
    year: '2025',
    title: 'Yanotela',
    description: 'Application web de prise de note collaborative en temps réel',
    category: 'Design , Dev & Management' ,
    link: 'https://github.com/FlorianMMI/Yanotela',
    image: '/images/Yanotela.png',
  },
  {
    year: '2024',
    title: 'Jeux VR',
    description: 'Réalisation d\'un Jeux en Réalité Virtuelle avec A-frame, GSAP, Three.js',
    category: 'Dev',
    link: 'https://florian-bounissou.fr/ClassTrouble/SAE402-4-api/',
    image: '/images/vr-game.png',
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-[1150px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-[#6a7282] text-sm font-mono mb-10">TOUS LES PROJETS</p>
          <h1
            className="text-5xl md:text-[72px] leading-tight md:leading-[72px] tracking-[-1.8px] font-light text-white mb-8"
            style={{ fontFamily: 'Segoe UI, sans-serif' }}
          >
            Mes réalisations
          </h1>
          <p className="text-[#6a7282] text-xl max-w-2xl">
            Une sélection de projets web, applications et designs réalisés avec passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="border border-white/10 hover:border-white/30 transition-colors duration-300 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-auto" />

                  <div className="p-8 border-t border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[#4a5565] text-sm font-mono">{project.year}</p>
                      <span className="text-[#6a7282] text-xs font-mono px-3 py-1 border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    <h3
                      className="text-white text-2xl tracking-[-0.9px] font-light mb-3 group-hover:text-white/80 transition-colors"
                      style={{ fontFamily: 'Segoe UI, sans-serif' }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-[#6a7282] text-sm mb-4">{project.description}</p>

                    <div className="flex items-center text-white text-sm font-mono group-hover:translate-x-2 transition-transform duration-300">
                      <span>VOIR LE PROJET</span>
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
