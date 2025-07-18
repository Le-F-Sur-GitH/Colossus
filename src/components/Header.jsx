import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  // pour gérer l'ouverture/fermeture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // pour savoir si on a scrollé et changer le style du header
  const [scrolled, setScrolled] = useState(false);

  // petit effet pour détecter le scroll de la page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // ne pas oublier de nettoyer l'event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // fonction pour scroller en douceur vers une section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // on ferme le menu après avoir cliqué
    }
  };

  return (
    // le header avec son animation d'apparition
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="nav">
        {/* Le logo et le titre, cliquable pour remonter en haut */}
        <motion.div 
          className="nav-brand"
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/colossus-icon.svg" alt="Logo Colossus" className="nav-logo" />
          <span className="nav-title">Colossus</span>
        </motion.div>
        
        {/* Le bouton pour le menu mobile (burger) */}
        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu mobile"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* La liste des liens de navigation */}
        <motion.ul 
          className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
          initial={false}
          animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        >
          {/* on crée les liens à partir d'un tableau, c'est plus propre */}
          {['hero', 'features', 'accessibility', 'os', 'our-story', 'contact'].map((section, index) => (
            <motion.li 
              key={section}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} // petite animation décalée, sympa
            >
              <a 
                href={`#${section}`} 
                onClick={(e) => {
                  e.preventDefault(); // on empêche le comportement par défaut
                  scrollToSection(section);
                }}
              >
                {/* petit ternaire pour afficher le bon nom de section */}
                {section === 'hero' ? 'Accueil' :
                 section === 'features' ? 'Caractéristiques' :
                 section === 'accessibility' ? 'Accessibilité' :
                 section === 'os' ? 'L\'OS' :
                 section === 'our-story' ? 'Notre Histoire' : 'Contact'}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Header;