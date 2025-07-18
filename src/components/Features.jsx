import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Features = () => {
  // le hook pour déclencher les animations quand la section est visible
  const [ref, inView] = useInView({
    triggerOnce: true, // on ne joue l'animation qu'une seule fois
    threshold: 0.1
  })

  // toutes les caractéristiques listées ici, c'est plus propre
  const features = [
    {
      icon: ( <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg> ),
      title: "Taille XXL",
      description: "Écran 24 pouces offrant une surface d'interaction maximale pour faciliter la navigation."
    },
    {
      icon: ( <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 21h8"/><path d="M12 17v4"/></svg> ),
      title: "Écran tactile",
      description: "Technologie tactile haute précision avec sensibilité ajustable selon les besoins."
    },
    {
      icon: ( <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="21" y1="4" x2="14" y2="4"/><line x1="10" y1="4" x2="3" y2="4"/><line x1="21" y1="12" x2="12" y2="12"/><line x1="8" y1="12" x2="3" y2="12"/><line x1="21" y1="20" x2="16" y2="20"/><line x1="12" y1="20" x2="3" y2="20"/><line x1="14" y1="2" x2="14" y2="6"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="16" y1="18" x2="16" y2="22"/></svg> ),
      title: "Interface personnalisable",
      description: "Personnalisation complète : taille des polices, contrastes, agencement des éléments."
    },
    {
      icon: ( <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> ),
      title: "Connectivité avancée",
      description: "Wi-Fi 6, Bluetooth 5.2 et ports USB-C pour une connectivité sans faille."
    },
    {
      icon: ( <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="6" width="18" height="10" rx="2"/><line x1="22" y1="12" x2="19" y2="12"/></svg> ),
      title: "Autonomie longue durée",
      description: "Batterie haute capacité offrant jusqu'à 10 heures d'utilisation continue."
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        
        {/* Le titre et le sous-titre de la section */}
        <motion.div
          ref={ref} // on met la ref ici pour que tout s'anime en même temps
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Caractéristiques</h2>
          <p>Une tablette pensée dans les moindres détails pour offrir une expérience accessible et intuitive.</p>
        </motion.div>

        {/* La grille avec toutes les cartes */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }} // petit décalage pour l'animation
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                y: -10
              }}
            >
              <motion.div
                className="feature-icon"
                whileHover={{ scale: 1.1, rotate: 5 }} // l'icône aussi s'anime
              >
                {feature.icon}
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* La petite section de texte pour expliquer le pourquoi */}
        <motion.div
          className="features-highlight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Pourquoi ces caractéristiques ?</h3>
          <p>
            Chaque fonctionnalité a été pensée pour répondre aux besoins réels des utilisateurs.
            Un écran plus grand pour ceux qui ont des difficultés visuelles, une interface personnalisable
            pour s'adapter à chaque situation, une autonomie longue pour ne jamais être pris au dépourvu.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Features