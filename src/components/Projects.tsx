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
  },
  {
    title: 'projects.api.title',
    description: 'projects.api.description',
    tech: ['Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/noalbertin/app',
  },
  {
    title: 'projects.dashboard.title',
    description: 'projects.dashboard.description',
    tech: ['React', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/noalbertin/app',
  },
]


export default function Projects() {


    const { t } = useTranslation()


    
  return (
    <section
    id={t('anchor.projets')}
      className="min-h-screen bg-white dark:bg-gray-900 px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 text-center mb-10">
          <Trans
            i18nKey="projets_phrase"
          />
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {t(project.title)}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {t(project.description)}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-100 dark:bg-indigo-700 dark:text-white text-indigo-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 text-sm"
                  >
                    <FaGithub /> {t('code')}
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 text-sm"
                  >
                    <FaExternalLinkAlt /> {t('demo')}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
