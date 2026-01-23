'use client';

import Link from 'next/link';

export default function MinimalFooter() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/10 py-12 px-8">
      <div className="max-w-[1150px] mx-auto">
        {/* Section Header */}
        <div className="mb-32">
          <p className="text-[#6a7282] text-sm font-mono mb-10">04 — GET IN TOUCH</p>
          <div className="space-y-8">
            <h2
              className="text-[72px] leading-[72px] tracking-[-1.8px] font-light text-white"
              style={{ fontFamily: 'Segoe UI, sans-serif' }}
            >
              Envie de collaborer ?
            </h2>
            <p className="text-[#6a7282] text-xl max-w-2xl">
              Je suis disponible pour des projets freelance et des opportunités professionnelles.
              N'hésitez pas à me contacter.
            </p>
            <div className="pt-8">
              <Link
                href="mailto:contact@example.com"
                className="inline-block border border-white/20 px-12 py-4 text-white text-base hover:bg-white/10 transition-colors duration-300"
              >
                ENVOYER UN MESSAGE
              </Link>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex items-center justify-between pt-12 border-t border-white/10">
          <p className="text-[#4a5565] text-sm">
            © 2026 Florian Bounissou. Tous droits réservés.
          </p>

          <div className="flex items-center gap-8">
            <Link
              href="/mentions-legales"
              className="text-[#4a5565] text-sm hover:text-white/60 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="text-[#4a5565] text-sm hover:text-white/60 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
