// //components/Projects.tsx
// 'use client'

// import { useTranslation, Trans } from 'react-i18next'
// import { motion } from 'framer-motion'
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// const projects = [
//   {
//     title: 'projects.portfolio.title',
//     description: 'projects.portfolio.description',
//     tech: ['Next.js', 'React', 'Tailwind CSS'],
//     github: 'https://github.com/noalbertin/portoflio',
//     demo: 'https://noalbertin.vercel.app',
//   },
//   {
//     title: 'projects.api.title',
//     description: 'projects.api.description',
//     tech: ['Node.js', 'Express', 'MySQL'],
//     github: 'https://github.com/noalbertin/app',
//   },
//   {
//     title: 'projects.dashboard.title',
//     description: 'projects.dashboard.description',
//     tech: ['React', 'Chart.js', 'Tailwind CSS'],
//     github: 'https://github.com/noalbertin/app',
//   },
//   {
//     title: 'projects.Pva.title',
//     description: 'projects.Pva.description',
//     tech: ['Next.js', 'React', 'Tailwind CSS'],
//     demo: 'https://pva-ro.vercel.app/',
//   },
//   {
//     title: 'projects.Pvc.title',
//     description: 'projects.Pvc.description',
//     tech: ['Next.js', 'React', 'Tailwind CSS'],
//     demo: 'https://pvc-three.vercel.app/',
//   },
// ]


// export default function Projects() {


//     const { t } = useTranslation()


    
//   return (
//     <section
//     id={t('anchor.projets')}
//       className="min-h-screen bg-white dark:bg-gray-900 px-4 py-20"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-6xl mx-auto"
//       >
//         <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 text-center mb-10">
//           <Trans
//             i18nKey="projets_phrase"
//           />
//         </h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.02 }}
//               className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//                 {t(project.title)}
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
//                 {t(project.description)}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="text-xs bg-indigo-100 dark:bg-indigo-700 dark:text-white text-indigo-800 px-2 py-1 rounded"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex items-center gap-4">
//                 {project.github && (
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 text-sm"
//                   >
//                     <FaGithub /> {t('code')}
//                   </a>
//                 )}
//                 {project.demo && (
//                   <a
//                     href={project.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 text-sm"
//                   >
//                     <FaExternalLinkAlt /> {t('demo')}
//                   </a>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   )
// }

//components/Projects.tsx
'use client'

import { useTranslation, Trans } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'projects.portfolio.title',
    description: 'projects.portfolio.description',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    github: 'https://github.com/noalbertin/portoflio',
    demo: 'https://noalbertin.vercel.app',
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    title: 'projects.Pva.title',
    description: 'projects.Pva.description',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    demo: 'https://pva-ro.vercel.app/',
    gradient: 'from-pink-500 to-rose-600'
  },
   {
    title: 'projects.caterpillar.title',
    description: 'projects.caterpillar.description',
    tech: ['React+Vite', 'Node.js','MySQL', 'Bootstrap'],
    demo: 'https://caterpillar-tulear.vercel.app/',
    gradient: 'from-indigo-500 to-purple-700'
  },
  {
    title: 'projects.Pvc.title',
    description: 'projects.Pvc.description',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    demo: 'https://pvc-three.vercel.app/',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    title: 'projects.api.title',
    description: 'projects.api.description',
    tech: ['Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/noalbertin/app',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    title: 'projects.dashboard.title',
    description: 'projects.dashboard.description',
    tech: ['React', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/noalbertin/app',
    gradient: 'from-cyan-500 to-blue-600'
  },
]

export default function Projects() {
  const { t } = useTranslation()
    
  return (
    <section
      id={t('anchor.projets')}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
        {/* Particules flottantes */}
        {Array.from({ length: 25 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        {/* Titre */}
        <motion.h2 
          className="text-4xl sm:text-5xl py-3 font-bold text-center mb-16 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Trans i18nKey="projets_phrase" />
        </motion.h2>

        {/* Grille de projets */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
              />
              
              {/* Card */}
              <div className="relative h-full p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col">
                {/* Badge décoratif */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient} animate-pulse`} />

                {/* Titre */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {t(project.title)}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 mb-4 flex-grow leading-relaxed">
                  {t(project.description)}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                      className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-white/20 text-white font-medium`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Liens */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group/link"
                      whileHover={{ x: 3 }}
                    >
                      <FaGithub className="text-lg" />
                      <span className="group-hover/link:underline">{t('code')}</span>
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group/link"
                      whileHover={{ x: 3 }}
                    >
                      <FaExternalLinkAlt className="text-base" />
                      <span className="group-hover/link:underline">{t('demo')}</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Grille décorative en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
    </section>
  )
}