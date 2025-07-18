import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OS = () => {
  // le hook pour déclencher les animations quand la section est visible
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // les points forts de notre OS, c'est plus simple à gérer dans un tableau
  const osFeatures = [
    {
      title: 'Interface simplifiée',
      description: "Une interface épurée et intuitive, spécialement adaptée aux besoins d'accessibilité.",
    },
    {
      title: 'Personnalisation avancée',
      description: "Modification complète de l'interface utilisateur pour s'adapter à chaque handicap.",
    },
    {
      title: 'Compatibilité matérielle',
      description: 'Optimisé pour fonctionner parfaitement sur notre tablette 24 pouces.',
    },
    {
      title: 'Applications dédiées',
      description: "Suite d'applications spécialement conçues pour l'accessibilité numérique.",
    },
  ];

  return (
    <section id="os" className="os">
      <div className="container">

        {/* Le header de la section, qui s'anime au scroll */}
        <motion.div
          ref={ref} // la ref est ici, elle pilote toutes les anims de la section
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>L'OS - BlissOS Adapté</h2>
          <p>Un système d'exploitation sur mesure, basé sur BlissOS et entièrement personnalisé pour l'accessibilité.</p>
        </motion.div>

        <div className="os-content">
          
          {/* La partie gauche avec la description et les features */}
          <motion.div
            className="os-description"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3>BlissOS : La base parfaite</h3>
            <p>
              Nous avons choisi BlissOS comme fondation de notre système d'exploitation car il offre
              une excellente compatibilité Android tout en permettant une personnalisation poussée.
              Cette flexibilité nous permet d'adapter chaque aspect de l'interface aux besoins
              spécifiques de nos utilisateurs.
            </p>

            {/* la liste des points forts */}
            <div className="os-features">
              {osFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="os-feature"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="os-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  </div>
                  <div className="os-feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* La partie droite avec la galerie d'images */}
          <motion.div
            className="os-gallery"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="os-images">
              <motion.div
                className="os-image-card main"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img src="\images\interface.png" alt="Interface BlissOS personnalisée" />
                <span className="os-image-label">Interface principale adaptée</span>
              </motion.div>

              {/* la petite grille d'images secondaires */}
              <div className="os-images-grid">
                <motion.div
                  className="os-image-card"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="\images\accessibilite.png" alt="Menu d'accessibilité" />
                  <span className="os-image-label">Menu d'accessibilité</span>
                </motion.div>
                <motion.div
                  className="os-image-card"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="\images\app.jpeg" alt="Applications dédiées" />
                  <span className="os-image-label">Applications dédiées</span>
                </motion.div>
                <motion.div
                  className="os-image-card"
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="\images\perso.jpg" alt="Paramètres personnalisés" />
                  <span className="os-image-label">Paramètres personnalisés</span>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>
        
        {/* Le bloc de texte final pour conclure */}
        <motion.div
          className="os-highlight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3>Une adaptation sur mesure</h3>
          <p>
            Notre version modifiée de BlissOS intègre des fonctionnalités d'accessibilité avancées :
            reconnaissance vocale améliorée, interface à contraste élevé, navigation simplifiée,
            et bien plus encore. Chaque élément a été repensé pour offrir une expérience utilisateur
            optimale aux personnes en situation de handicap.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default OS;