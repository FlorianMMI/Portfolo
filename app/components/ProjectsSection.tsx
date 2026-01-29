'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const projects = [
  {
    year: '2025',
    title: 'RCSMEDICAL',
    description: 'Application e-commerce pour un magasin de matériel médical',
    link: 'https://www.rcsmedical.fr/',
  },
  {
    year: '2025',
    title: 'YANOTELA',
    description: 'Application web de prise de note collaborative en temps réel',
    link: 'https://github.com/FlorianMMI/Yanotela',
  },
  {
    year: '2024',
    title: 'VR-GAME',
    description: 'Jeux VR développé avec A-frame, GSAP et Three.js',
    link: 'https://fp-lajudie.fr/site',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-8 bg-[#0a0a0a]">
      <div className="max-w-[1150px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-48"
        >
          <p className="text-[#6a7282] text-sm font-mono mb-10">02 — SELECTED WORKS</p>
          <h2
            className="text-[72px] leading-[72px] tracking-[-1.8px] font-light text-white"
            style={{ fontFamily: 'Segoe UI, sans-serif' }}
          >
            Projets récents
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="border-t border-white/10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-white/10 py-8 md:py-12 group hover:bg-white/5 transition-colors duration-300"
            >
              <Link href={project.link} className="block">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-24">
                  {/* Year */}
                  <p className="text-[#4a5565] text-sm font-mono w-full md:w-12">{project.year}</p>

                  {/* Title */}
                  <h3
                    className="text-white text-2xl md:text-4xl tracking-[-0.9px] font-light flex-1"
                    style={{ fontFamily: 'Segoe UI, sans-serif' }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6a7282] text-sm w-full md:w-96">{project.description}</p>

                  {/* Arrow Icon */}
                  <div className="transform group-hover:translate-x-2 transition-transform duration-300 self-end md:self-auto">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-32"
        >
          <Link
            href="/projects"
            className="border border-white/20 px-12 py-4 text-white text-base hover:bg-white/10 transition-colors duration-300"
          >
            VOIR TOUS LES PROJETS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
