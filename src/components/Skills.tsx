//components/Skills.tsx
'use client'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaPhp, FaJava, FaPython } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiMysql, SiNextdotjs, SiMongodb, SiPrisma, SiOracle, SiPostgresql, SiC, SiCplusplus  } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { IoScanCircleSharp } from 'react-icons/io5'

const skills = [
  { name: 'React', icon: <FaReact className="text-sky-400" />, color: 'from-sky-400 to-cyan-500' },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" />, color: 'from-yellow-400 to-amber-500' },
  { name: 'Next.js', icon: <SiNextdotjs className="text-slate-800 dark:text-white" />, color: 'from-gray-800 to-black' },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" />, color: 'from-blue-400 to-indigo-500' },
  { name: 'Python', icon: <FaPython className="text-yellow-400" />, color: 'from-yellow-400 to-blue-500' },
  { name: 'PHP', icon: <FaPhp className="text-indigo-500" />, color: 'from-indigo-500 to-purple-600' },
  { name: 'Java', icon: <FaJava className="text-red-500" />, color: 'from-red-500 to-orange-600' },
  { name: 'C', icon: <SiC className="text-blue-500" />, color: 'from-blue-500 to-blue-700' },
  { name: 'C++', icon: <SiCplusplus className="text-blue-400" />, color: 'from-blue-400 to-indigo-600' },
  { name: 'C#', icon: <IoScanCircleSharp className="text-purple-500" />, color: 'from-purple-500 to-violet-600' },
  { name: 'React Native', icon: <TbBrandReactNative className="text-cyan-400" />, color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-400" />, color: 'from-green-400 to-emerald-500' },
  { name: 'Prisma', icon: <SiPrisma className="text-slate-400" />, color: 'from-slate-400 to-slate-600' },
  { name: 'Git', icon: <FaGitAlt className="text-orange-500" />, color: 'from-orange-500 to-red-600' },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-400" />, color: 'from-orange-400 to-red-500' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, color: 'from-blue-500 to-indigo-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, color: 'from-cyan-400 to-teal-500' },
  { name: 'Base de données', icon: <FaDatabase className="text-gray-400" />, color: 'from-gray-400 to-slate-500' },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" />, color: 'from-blue-600 to-indigo-700' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-sky-500" />, color: 'from-sky-500 to-blue-600' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, color: 'from-green-500 to-emerald-600' },
  { name: 'Oracle', icon: <SiOracle className="text-red-600" />, color: 'from-red-600 to-orange-600' },
  
]

export default function Skills() {
  const { t } = useTranslation()
    
  return (
    <section
      id={t('anchor.competences')}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 transition-colors duration-300"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-950 transition-colors duration-300">
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-cyan-500/5 animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        {/* Titre */}
        <motion.h2 
          className="text-4xl sm:text-5xl py-6 font-bold mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block pb-1 bg-gradient-to-r from-slate-800 via-indigo-700 to-purple-700 dark:from-white dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent">
            {t('competences_phrase')}
          </span>
        </motion.h2>

        {/* Grille de compétences */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
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
              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative flex flex-col items-center justify-center p-6 bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-indigo-300/60 dark:hover:border-white/20 transition-all duration-300 shadow-md dark:shadow-xl">
                <motion.div
                  className="text-5xl mb-3"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>

                <p className="text-sm font-semibold text-slate-700 dark:text-gray-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {skill.name}
                </p>

                {/* Barre de progression */}
                <motion.div
                  className="mt-2 w-full h-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden"
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

      {/* Grille décorative */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
    </section>
  )
}