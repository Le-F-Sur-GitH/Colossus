import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Accessibility = () => {
  
  // hook pour déclencher les anims quand la section devient visible
  const [ref, inView] = useInView({
    triggerOnce: true, // on joue l'animation une seule fois
    threshold: 0.1,    // se déclenche quand 10% de l'élément est visible
  });

  // toutes nos features listées ici, c'est plus simple à gérer
  const accessibilityFeatures = [
    {
      // <svg>...</svg>
      icon: ( <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg> ),
      title: 'Commandes vocales avancées',
      description: 'Contrôlez l\'ensemble des fonctionnalités grâce à une reconnaissance vocale précise, même en environnement bruyant.',
    },
    {
      // <svg>...</svg>
      icon: ( <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 11V6a6 6 0 0 0-12 0v5"/><path d="M2 13a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6z"/></svg> ),
      title: 'Retour haptique personnalisable',
      description: 'Vibrations et retours tactiles ajustables offrant un feedback sensoriel pour faciliter la navigation.',
    },
    {
      // <svg>...</svg>
      icon: ( <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="6" y1="4" x2="10" y2="4"/><line x1="6" y1="8" x2="10" y2="8"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="6" y1="16" x2="10" y2="16"/><line x1="6" y1="20" x2="10" y2="20"/><path d="M14 7h7"/><path d="M15 12h6"/><path d="M14 17h7"/></svg> ),
      title: 'Boutons physiques adaptables',
      description: 'Accessoires magnétiques permettant d\'ajouter des boutons physiques de différentes tailles et sensibilités.',
    },
    {
      // <svg>...</svg>
      icon: ( <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> ),
      title: 'Optimisation pour lecteurs d\'écran',
      description: 'Compatible avec tous les logiciels d\'assistance, avec descriptions détaillées des éléments visuels.',
    },
    {
      // <svg>...</svg>
      icon: ( <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5,6 9,2 9,2 15,6 15,11 19,11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg> ),
      title: 'Système audio intelligent',
      description: 'Haut-parleurs directionnels et amplification ciblée des fréquences vocales pour une meilleure intelligibilité.',
    },
    {
      // <svg>...</svg>
      icon: ( <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 6A2.5 2.5 0 0 1 17 8.5c0 1.11-.35 2.13-.94 2.97"/><path d="M22 9c0 1.66-.67 3.17-1.76 4.24"/></svg> ),
      title: 'Interface adaptative',
      description: 'L\'IA analyse vos interactions et adapte progressivement l\'interface à vos besoins spécifiques.',
    },
  ];

  return (
    <section id="accessibility" className="accessibility">
      
      {/* le titre de la section qui apparait en fondu */}
      <motion.div
        ref={ref} // on attache la ref ici pour détecter la visibilité
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2>Accessibilité sans compromis</h2>
        <p>
          Chaque détail de Colossus a été conçu pour garantir une expérience numérique
          inclusive et accessible à tous.
        </p>
      </motion.div>

      <div className="accessibility-content">
        
        {/* la grille avec les features */}
        <div className="accessibility-features">
          {accessibilityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="accessibility-item"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }} // j'aime bien ce petit décalage
              whileHover={{
                scale: 1.02,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
                x: 10,
              }}
            >
              
              {/* l'icône qui s'anime au survol */}
              <motion.div
                className="accessibility-icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {feature.icon}
              </motion.div>

              <div className="accessibility-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* la vidéo de démo qui arrive de la droite */}
        <motion.div
          className="accessibility-video"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <video controls>
            <source src="/videos/demo.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </motion.div>

      </div>
    </section>
  );
};

export default Accessibility;