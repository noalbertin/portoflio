// //components/Skills.tsx
// 'use client'
// import { useTranslation, Trans } from 'react-i18next'
// import { motion } from 'framer-motion'
// import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaPhp, FaJava } from 'react-icons/fa'
// import { SiTypescript, SiTailwindcss, SiMysql } from 'react-icons/si'

// const skills = [
//   { name: 'React', icon: <FaReact className="text-sky-500" /> },
//   { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
//   { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
//   { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
//   { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
//   { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
//   { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
//   { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
//   { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
//   { name: 'Base de données', icon: <FaDatabase className="text-gray-600" /> },
//   { name: 'PHP', icon: <FaPhp className="text-indigo-600" /> },
//   { name: 'Java', icon: <FaJava className="text-red-600" /> },
// ]


// export default function Skills() {

//       const { t } = useTranslation()
    
//   return (
//     <section
//       id={t('anchor.competences')}
//       className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-20"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-5xl mx-auto text-center"
//       >
//         <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-10">
//           <Trans
//             i18nKey="competences_phrase"
//           />
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-800 dark:text-gray-100">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.1 }}
//               className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition"
//             >
//               <div className="text-4xl mb-2">{skill.icon}</div>
//               <p className="text-sm font-medium">{skill.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   )
// }

//components/Skills.tsx
'use client'
import { useTranslation, Trans } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaPhp, FaJava } from 'react-icons/fa'
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiTailwindcss, SiMysql, SiNextdotjs  } from 'react-icons/si'

const skills = [
  { name: 'React', icon: <FaReact className="text-sky-400" />, color: 'from-sky-400 to-cyan-500' },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, color: 'from-gray-800 to-black' },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" />, color: 'from-yellow-400 to-amber-500' },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" />, color: 'from-blue-400 to-indigo-500' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, color: 'from-cyan-400 to-teal-500' },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-400" />, color: 'from-orange-400 to-red-500' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, color: 'from-blue-500 to-indigo-600' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-400" />, color: 'from-green-400 to-emerald-500' },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" />, color: 'from-blue-600 to-indigo-700' },
  { name: 'Git', icon: <FaGitAlt className="text-orange-500" />, color: 'from-orange-500 to-red-600' },
  { name: 'Base de données', icon: <FaDatabase className="text-gray-400" />, color: 'from-gray-400 to-slate-500' },
  { name: 'PHP', icon: <FaPhp className="text-indigo-500" />, color: 'from-indigo-500 to-purple-600' },
  { name: 'Java', icon: <FaJava className="text-red-500" />, color: 'from-red-500 to-orange-600' },
]

export default function Skills() {
  const { t } = useTranslation()
    
  return (
    <section
      id={t('anchor.competences')}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950">
        {/* Particules flottantes */}
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-cyan-500/5 animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        {/* Titre avec effet de gradient */}
        <motion.h2 
          className="text-4xl sm:text-5xl py-6 font-bold mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block pb-1 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            <Trans i18nKey="competences_phrase" />
          </span>
        </motion.h2>

        {/* Grille de compétences */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, y: -5 }}
              className="group relative"
            >
              {/* Glow effect au hover */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
              />
              
              {/* Card */}
              <div className="relative flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl">
                {/* Icône */}
                <motion.div 
                  className="text-5xl mb-3"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                
                {/* Nom */}
                <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {skill.name}
                </p>

                {/* Barre de progression décorative */}
                <motion.div
                  className="mt-2 w-full h-1 bg-white/10 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                    initial={{ x: '-100%' }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
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