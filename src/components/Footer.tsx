//components/Footer.tsx
'use client'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative bg-gradient-to-br from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900 text-slate-600 dark:text-gray-200 py-8 border-t border-slate-200/60 dark:border-white/10 overflow-hidden transition-colors duration-300">
      {/* Particules flottantes */}
      {Array.from({ length: 10 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-indigo-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <Image
                src="/favicon.png"
                alt="Logo"
                width={35}
                height={35}
                className="relative rounded"
              />
            </motion.div>
          </motion.div>

          {/* Texte central */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-slate-600 dark:text-gray-300">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent font-semibold">
                &copy; {new Date().getFullYear()}
              </span>{' '}
              Nirindrainy Sylvano Albertin
            </p>
            <p className="text-xs text-slate-400 dark:text-gray-400 mt-1">
              {t('droit')}
            </p>
          </motion.div>

          {/* Icônes sociales */}
          <motion.div
            className="flex gap-4 text-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/noalbertin"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div className="absolute -inset-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              <FaGithub className="relative text-slate-400 dark:text-gray-400 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/no-albertin-nsa"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              <FaLinkedin className="relative text-slate-400 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </motion.a>
          </motion.div>
        </div>

        {/* Ligne décorative */}
        <motion.div
          className="mt-6 h-px bg-gradient-to-r from-transparent via-indigo-400/40 dark:via-indigo-500/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Grille décorative */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px]" />
    </footer>
  )
}