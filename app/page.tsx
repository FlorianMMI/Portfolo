'use client';

import { motion } from 'motion/react';
import Link from 'next/link';


const projects = [
  {
    title: "Jeux VR",
    description:
      "Réalisation d'un Jeux en Réalité Virtuelle avec A-frame, GSAP, Three.js & une base de donnée",
    
    link: "https://florian-bounissou.fr/ClassTrouble/SAE402-4-api/",
    image: "/images/vr-game.png",
  },
  {
    title: "24h Code",
    description:
      "Projet Universitaire en équipe pour créer une application web en 24h chrono sur le thème de l'écologie. Le lien mène au dépôt GitHub du projet.",
    
    link: "https://github.com/josueprlt/Project-Nuit-MMI",
    image: "/images/ProjetMMi.png",
  },
  {
    title: "Yanotela",
    description:
      "Nous somme en réalisation d'une application web de prise de note collaborative en temps réel",
    tags: ["Next.js", "Tailwind CSS", "Animation"],
    link: "https://mmi-limoges.fr",
    image: "/images/mmilimoges.png",
  },
];



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
                Florian Bounissou
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-colors duration-300">
                Étudiant en BUT MMI3 à Limoges, passionné par le{' '}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">développement web</span> et la création d'{' '}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">applications interactives</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* <Link
                href="/projects"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Voir mes projets
              </Link> */}
              <Link
                href="/contact"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-medium hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                Me contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-6">
              À propos de moi
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Actuellement en troisième année de BUT Métiers du Multimédia et de l'Internet à Limoges,
              je me spécialise dans le développement d'applications web modernes et interactives.
              Ma passion pour la technologie et le design me pousse à créer des expériences utilisateur
              exceptionnelles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Développement Web</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">React, Next.js, TypeScript, Node.js</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Applications Interactives</h3>
              <p className="text-gray-600 dark:text-gray-300">UX/UI Design, Animations, Interactivité</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Formation BUT MMI3</h3>
              <p className="text-gray-600 dark:text-gray-300">Université de Limoges, 2025</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/about"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              En savoir plus sur mon parcours
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Mes derniers projetss
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez quelques-uns de mes projets récents en développement web et applications interactives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-900 dark:to-purple-900 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags && project.tags.length > 0 ? (
                      project.tags.map((tag, idx) => (
                        <span
                          key={tag + idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400 text-sm">Aucun tag</span>
                    )}
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Voir le projet
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Voir tous mes projets
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
