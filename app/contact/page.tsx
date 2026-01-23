'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-[1150px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-[#6a7282] text-sm font-mono mb-10">GET IN TOUCH</p>
          <h1
            className="text-5xl md:text-[72px] leading-tight md:leading-[72px] tracking-[-1.8px] font-light text-white mb-8"
            style={{ fontFamily: 'Segoe UI, sans-serif' }}
          >
            Parlons de votre projet
          </h1>
          <p className="text-[#6a7282] text-xl max-w-2xl">
            Je suis disponible pour des projets freelance et des opportunités professionnelles.
            N'hésitez pas à me contacter pour discuter de vos besoins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-mono mb-2">
                  NOM
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-white/50 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white text-sm font-mono mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-white/50 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-sm font-mono mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-white/50 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="border border-white/20 px-12 py-4 text-white text-base hover:bg-white/10 transition-colors duration-300"
              >
                ENVOYER LE MESSAGE
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-white text-sm font-mono mb-4">EMAIL</h3>
              <a
                href="mailto:contact@example.com"
                className="text-[#6a7282] hover:text-white transition-colors text-xl"
              >
                florian.bounissou@example.com
              </a>
            </div>

            <div>
              <h3 className="text-white text-sm font-mono mb-4">TÉLÉPHONE</h3>
              <a
                href="tel:+33612345678"
                className="text-[#6a7282] hover:text-white transition-colors text-xl"
              >
                +33 6 12 34 56 78
              </a>
            </div>

            <div>
              <h3 className="text-white text-sm font-mono mb-4">LOCALISATION</h3>
              <p className="text-[#6a7282] text-xl">Limoges, France</p>
            </div>

            <div>
              <h3 className="text-white text-sm font-mono mb-4">RÉSEAUX SOCIAUX</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#6a7282] hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#6a7282] hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#6a7282] hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
