'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function About() {
    const skills = [
        // Design & Prototyping
        { name: 'Figma', level: 90, category: 'design' },
        { name: 'Photoshop', level: 85, category: 'design' },
        { name: 'Illustrator', level: 80, category: 'design' },
        
        // Frontend Development
        { name: 'HTML', level: 100, category: 'frontend' },
        { name: 'React', level: 95, category: 'frontend' },
        { name: 'Next.js', level: 95, category: 'frontend' },
        { name: 'CSS', level: 90, category: 'frontend' },
        { name: 'JavaScript', level: 85, category: 'frontend' },
        { name: 'TypeScript', level: 85, category: 'frontend' },
        { name: 'Tailwind CSS', level: 95, category: 'frontend' },
        { name: 'Sass', level: 85, category: 'frontend' },
        { name: 'Vue.js', level: 70, category: 'frontend' },
        { name: 'Flutter', level: 50, category: 'frontend' },
        
        // Backend & Database
        { name: 'MySQL', level: 100, category: 'backend' },
        { name: 'PostGres', level: 100, category: 'backend' },
        { name: 'Symfony', level: 95, category: 'backend' },
        { name: 'Node.js', level: 90, category: 'backend' },
        { name: 'Express.js', level: 90, category: 'backend' },
        { name: 'PHP', level: 90, category: 'backend' },
        
        
        
        
        // Libraries & Frameworks
        { name: 'Chart.js', level: 80, category: 'libraries' },
        { name: 'Framer Motion', level: 85, category: 'libraries' },
        { name: 'GSAP', level: 75, category: 'libraries' },
        { name: 'A-Frame', level: 70, category: 'libraries' },
        { name: 'Yjs', level: 65, category: 'libraries' },
    ];

    const skillCategories = {
        design: { name: 'Design & Prototyping', color: 'bg-pink-500 dark:bg-pink-600' },
        frontend: { name: 'Frontend Development', color: 'bg-blue-500 dark:bg-blue-600' },
        backend: { name: 'Backend & Database', color: 'bg-green-500 dark:bg-green-600' },
        libraries: { name: 'Librairies & Frameworks', color: 'bg-purple-500 dark:bg-purple-600' },
    };

    const education = [
        {
            year: '2023-2025',
            title: 'BUT MMI3 - Métiers du Multimédia et de l\'Internet',
            institution: 'Université de Limoges',
            description: 'Spécialisation en développement web et applications interactives'
        },
        {
            year: '2023',
            title: 'Bac général',
            institution: 'Lycée Arnaut Daniel de Ribérac',
            description: 'Formation lycéene générale en spécialité Mathématiques, Numérique et Sciences Informatiques avec Mathématiques expertes'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600">
                            À propos de moi
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                            Découvrez mon parcours, mes compétences et ma passion pour le développement web
                        </p>
                    </motion.div>

                    {/* Profile Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16 transition-colors duration-300"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Florian Bounissou</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                                    Étudiant passionné en BUT MMI3 à l'Université de Limoges, je me spécialise dans le 
                                    développement d'applications web modernes et interactives. Mon objectif est de créer 
                                    des expériences utilisateur exceptionnelles en combinant design et technologie.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                                    J'aime explorer les nouvelles technologies, résoudre des problèmes complexes et 
                                    collaborer sur des projets innovants. Toujours en quête d'apprentissage, je cherche 
                                    à perfectionner mes compétences et à contribuer à des projets significatifs.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full dark:bg-blue-900 dark:text-blue-200">Développeur Web</span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full dark:bg-purple-900 dark:text-purple-200">UI/UX Enthusiast</span>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full dark:bg-green-900 dark:text-green-200">BUT MMI3</span>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-700 dark:to-purple-700 rounded-full flex items-center justify-center">
                                    <span className="text-white text-6xl font-bold">FB</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 transition-colors duration-300">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Mes compétences</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Technologies et outils que j'utilise pour créer des applications web modernes
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {Object.entries(skillCategories).map(([categoryKey, category]) => {
                            const categorySkills = skills.filter(skill => skill.category === categoryKey);
                            return (
                                <div key={categoryKey}>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                        <div className={`w-3 h-3 ${category.color} rounded-full mr-3`}></div>
                                        {category.name}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {categorySkills.map((skill, index) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm transition-colors duration-300"
                                            >
                                                <div className="flex justify-between items-center mb-2">
                                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                                                        viewport={{ once: true }}
                                                        className={`${category.color} h-2 rounded-full`}
                                                    />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Formation</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Mon parcours académique en multimédia et internet
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 border-blue-600 dark:border-blue-400 transition-colors duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full dark:text-blue-200 dark:bg-blue-900">
                                        {item.year}
                                    </span>
                                </div>
                                <p className="text-lg text-gray-700 font-medium mb-2 dark:text-gray-300">{item.institution}</p>
                                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 transition-colors duration-300">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            Intéressé par mon profil ?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            N'hésitez pas à consulter mes projets ou à me contacter pour discuter d'opportunités de collaboration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/projects"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 dark:from-blue-500 dark:to-purple-700"
                            >
                                Voir mes projets
                            </Link>
                            <Link
                                href="/contact"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300 dark:border-gray-600 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
                            >
                                Me contacter
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}