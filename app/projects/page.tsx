'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Portfolio Personnel',
      description: 'Portfolio moderne développé avec Next.js et Framer Motion, présentant mes projets et compétences avec des animations fluides.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'web',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Application E-commerce',
      description: 'Application web complète de commerce électronique avec panier d\'achat, gestion des utilisateurs et paiement intégré.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Interface Interactive',
      description: 'Interface utilisateur interactive avec des micro-animations et des transitions fluides pour améliorer l\'expérience utilisateur.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Framer Motion', 'CSS3', 'JavaScript'],
      category: 'interactive',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Application Mobile PWA',
      description: 'Progressive Web App responsive avec fonctionnalités offline et notifications push.',
      image: '/api/placeholder/400/250',
      technologies: ['PWA', 'Service Workers', 'IndexedDB', 'Manifest'],
      category: 'mobile',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Dashboard Analytics',
      description: 'Dashboard interactif pour visualiser des données avec des graphiques dynamiques et des filtres avancés.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'D3.js', 'Chart.js', 'API REST'],
      category: 'web',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Jeu Web Interactif',
      description: 'Jeu développé en JavaScript avec Canvas API, incluant physique, animations et système de score.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'Canvas API', 'HTML5', 'CSS3'],
      category: 'interactive',
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'web', name: 'Développement Web' },
    { id: 'interactive', name: 'Applications Interactives' },
    { id: 'mobile', name: 'Mobile & PWA' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Mes Projets
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Découvrez mes réalisations en développement web et applications interactives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Projets mis en avant
            </h2>
            <p className="text-lg text-gray-600">
              Mes projets les plus significatifs et récents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{project.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:shadow-lg transition-all duration-300"
                    >
                      Voir le projet
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-center font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                    >
                      Code source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tous mes projets
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explorez l'ensemble de mes réalisations par catégorie
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{project.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.demo}
                      className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-center text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
                    >
                      Voir
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded text-center text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              N'hésitez pas à me contacter pour discuter de votre projet. Je serais ravi de collaborer avec vous !
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Démarrer un projet
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}