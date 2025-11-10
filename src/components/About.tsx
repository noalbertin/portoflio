'use client'

import { useTranslation, Trans } from 'react-i18next'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function About() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  const title = t('job_title')
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.3
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section
      ref={containerRef}
      id={t('anchor.apropos')}
      className="relative min-h-screen flex items-center justify-center mt-12 lg:mt-8 px-4 py-20"
    >
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
        {/* Particules flottantes */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse" />
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full mx-auto lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Colonne gauche: Photo et Nom/Titre */}
          <div className="flex flex-col items-center  text-center  space-y-8">
            
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="relative group">
                {/* Halo lumineux animé */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                />
                
                {/* Cercles décoratifs */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border border-indigo-500/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-6 border border-purple-500/15 rounded-full"
                />
                
                {/* Image ronde - taille moyenne */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl backdrop-blur-sm bg-white/5"
                >
                  <Image
                    src="/sary.png"
                    alt="Photo de profil"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                    priority
                  />
                  
                  {/* Overlay gradient subtil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-purple-900/20" />
                </motion.div>
              </div>
            </motion.div>

            {/* Nom et titre */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                Nirindrainy Sylvano Albertin
              </h2>
              
              {/* Titre animé lettre par lettre */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-light text-indigo-300/90"
              >
                {title.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className="inline-block hover:text-white transition-colors duration-200 cursor-default"
                    whileHover={{ scale: 1.1, rotateZ: Math.random() * 10 - 5 }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            
          </div>

          {/* Colonne droite: Texte descriptif */}
          <motion.div
            style={{ y }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
                <div className="absolute top-6 left-6 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
                
                <div className="mt-8 space-y-6 text-gray-200 leading-relaxed">
                  <p className="text-lg">
                    <Trans
                      i18nKey="intro1"
                      components={{
                        1: (
                          <a
                            href="https://eni.mg/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text hover:from-indigo-300 hover:to-purple-300 transition-all duration-300 underline decoration-indigo-400/50"
                          />
                        ),
                        2: <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text" />
                      }}
                    />
                  </p>

                  <p className="text-lg">
                    <Trans
                      i18nKey="intro2"
                      components={{
                        1: <span className="font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text" />
                      }}
                    />
                  </p>
                </div>

                {/* Bouton CV - desktop seulement en bas à gauche */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className='flex justify-center mt-2 lg:justify-end lg:mt-0'
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-white overflow-hidden shadow-xl border border-white/10"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv/Nirindrainy_Sylvano_Albertin_CV.pdf'; 
                  link.download = 'Nirindrainy_Sylvano_Albertin_CV.pdf'; 
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                {/* Effet de brillance animé */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative z-10 flex items-center gap-2">
                  {t('download_cv')}
                </span>
              </motion.button>
            </motion.div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>

      {/* Grille décorative en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </section>
  )
}

