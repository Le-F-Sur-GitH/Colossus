import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const OurStory = () => {
  // le hook pour animer la section quand elle devient visible
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // petite fonction pour le scroll en douceur
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // toute notre histoire, étape par étape, c'est plus simple à gérer comme ça
  const timelineItems = [
    {
      icon: ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4"/><path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"/><path d="M15.5 7.5c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"/><path d="M8.5 16.5c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"/></svg> ),
      title: "L'Idée ambitieuse",
      description: "Concevoir une tablette tactile de 24 pouces révolutionnaire, entièrement dédiée à l'accessibilité numérique pour les personnes ayant des besoins spécifiques.",
      image: "/images/croquis.png",
      imageLabel: "Première esquisse du projet Colossus",
      markerClass: ""
    },
    {
      icon: ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> ),
      title: "Les défis techniques",
      description: "Des problèmes de soudure et de compatibilité matérielle ont sérieusement freiné notre progression. Malgré tous nos efforts et les nombreuses pièces récupérées, nous avons dû prendre une décision difficile : abandonner la fabrication physique.",
      images: [
        { src: "/images/ecran.jpg", label: "La dalle tactile" },
        { src: "/images/carte_mere.jpg", label: "Les cartes mères" }
      ],
      markerClass: "timeline-marker-red"
    },
    {
      icon: ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> ),
      title: "La transformation",
      description: "Après avoir récupéré du matériel auprès de l'hôpital d'Aix-en-Provence, de l'entreprise Materiel.net et de quelques particuliers bienveillants rencontrés sur Le Bon Coin, nous avons tenté de donner vie à notre tablette. Plutôt que de baisser les bras, nous avons choisi de transformer cet échec en opportunité. Franck Giordano et Matys Lefevre ont décidé de concevoir ce site web, témoignage de notre parcours et de notre volonté de rebondir.",
      image: "/images/echec.png",
      imageLabel: "La révélation",
      markerClass: "timeline-marker-green"
    },
    {
      icon: ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> ),
      title: "Une vision d'avenir",
      description: "Ce site est devenu une plateforme de crowdfunding pour continuer à croire en cette vision, avec l'aide d'une communauté qui partage nos valeurs d'accessibilité et d'inclusion.",
      image: "/images/reussite.png",
      imageLabel: "Notre vision pour l'avenir de Colossus",
      markerClass: "timeline-marker-purple"
    }
  ]

  return (
    <section id="our-story" className="our-story">
      <div className="container">
        
        {/* Header de la section */}
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Notre Histoire</h2>
          <p>Une aventure humaine et technique qui nous a menés de l'échec à l'opportunité.</p>
        </motion.div>

        {/* Le paragraphe d'introduction */}
        <motion.div
          className="story-intro"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            À l'origine, notre projet annuel à l'ESGI visait à concevoir une tablette tactile de 24 pouces
            dédiée à l'accessibilité numérique et le tout avec des pièces d'occasions. L'idée était ambitieuse : créer un appareil pensé pour les
            personnes ayant des besoins spécifiques, en mettant la technologie au service de l'inclusion.
          </p>
        </motion.div>

        {/* La timeline qui raconte tout */}
        <div className="timeline">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className={`timeline-marker ${item.markerClass}`}
                whileHover={{ scale: 1.2 }}
              ></motion.div>
              
              <motion.div
                className="timeline-content"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="timeline-header">
                  {/* petite anim sympa sur l'icône */}
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    {item.icon}
                  </motion.div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
                
                {/* S'il y a une seule image, on l'affiche ici */}
                {item.image && (
                  <motion.div className="timeline-image" whileHover={{ scale: 1.05 }}>
                    <img src={item.image} alt={item.imageLabel} />
                    <span>{item.imageLabel}</span>
                  </motion.div>
                )}
                
                {/* S'il y a plusieurs images, on fait une petite galerie */}
                {item.images && (
                  <div className="timeline-images">
                    {item.images.map((img, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        className="timeline-image"
                        whileHover={{ scale: 1.1, rotate: imgIndex % 2 === 0 ? 2 : -2 }}
                      >
                        <img src={img.src} alt={img.label} />
                        <span>{img.label}</span>
                      </motion.div>
                    ))}
                    <motion.div
                      className="timeline-image additional-image"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: (index + 1) * 0.2 }}
                      whileHover={{ scale: 1.1, rotate: 1 }}
                    >
                      <img src="\images\franck.jpg" alt="Composants électroniques supplémentaires" />
                      <span>Franck démontant des composants</span>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Le mot de la fin */}
        <motion.div
          className="story-conclusion"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3>Plus qu'un projet, une aventure humaine</h3>
          <p>
            Cette aventure, bien plus humaine que technique, nous a appris la résilience, l'importance du
            travail en équipe, et la capacité à s'adapter. Aujourd'hui, ce site est bien plus qu'une vitrine :
            c'est le point de départ d'un projet que nous espérons voir renaître, cette fois, avec le soutien
            de toutes celles et ceux qui croient en une technologie plus accessible.
          </p>
          
          <div className="story-buttons">
            <motion.button
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Soutenir le projet
            </motion.button>
            <motion.a
              href="mailto:contact@colossus.fr"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nous contacter
            </motion.a>
          </div>

          <div className="story-authors">
            <p><strong>Franck Giordano & Matys Lefevre</strong></p>
            <p>Étudiants ESGI 2 - Porteurs du projet Colossus</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}

export default OurStory