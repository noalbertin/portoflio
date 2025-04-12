'use client'
import { Trans } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaPhp, FaJava } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiMysql } from 'react-icons/si'

const skills = [
  { name: 'React', icon: <FaReact className="text-sky-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'Base de données', icon: <FaDatabase className="text-gray-600" /> },
  { name: 'PHP', icon: <FaPhp className="text-indigo-600" /> },
  { name: 'Java', icon: <FaJava className="text-red-600" /> },

]


export default function Skills() {
    
  return (
    <section
      id="competences"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-10">
          <Trans
            i18nKey="competences_phrase"
          />
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-800 dark:text-gray-100">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
