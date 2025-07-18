import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // petite fonction de scroll, toujours utile
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* Section 1: Logo et description */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} // L'anim se joue qu'une fois
          >
            <motion.div
              className="footer-brand"
              whileHover={{ scale: 1.05 }}
            >
              <img src="/colossus-icon.svg" alt="Logo Colossus" className="footer-logo" />
              <span className="footer-title">Colossus</span>
            </motion.div>
            <p className="footer-description">
              Redéfinir l'accessibilité numérique avec une tablette géante de 24 pouces,
              conçue pour garantir une expérience inclusive et sans barrières.
            </p>
          </motion.div>

          {/* Section 2: Liens de navigation */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Navigation</h3>
            <ul className="footer-links">
              {[
                { id: 'hero', label: 'Accueil' },
                { id: 'features', label: 'Caractéristiques' },
                { id: 'accessibility', label: 'Accessibilité' },
                { id: 'os', label: "L'OS" },
                { id: 'our-story', label: 'Notre Histoire' },
                { id: 'contact', label: 'Contact' }
              ].map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }} // joli décalage
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    whileHover={{ x: 5 }} // petit effet au survol
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Section 3: Infos de contact */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Contact</h3>
            <p>
              <motion.a
                href="mailto:contact@colossus.fr"
                whileHover={{ scale: 1.05 }}
              >
                contact@colossus.fr
              </motion.a>
            </p>
            <p>
              Franck Giordano & Matys Lefevre<br />
              <small>Étudiants ESGI 2</small>
            </p>
          </motion.div>

        </div>

        {/* La partie du bas avec copyright et le coeur */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-heart">
            <p>Fait avec le</p>
            {/* le petit coeur qui bat, c'est la touche finale ❤️ */}
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor" // on le remplit
              stroke="currentColor"
              strokeWidth="2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </motion.svg>
            <p>pour l'accessibilité numérique</p>
          </div>
          <p className="footer-copyright">
            &copy; 2025 Projet Colossus - Un projet présenté par Franck Giordano et Matys Lefevre ESGI 2
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;