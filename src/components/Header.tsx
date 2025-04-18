'use client'

import ThemeToggle from './ThemeToggle'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const navItems = [
  { key: 'apropos', href: '#apropos' },
  { key: 'competences', href: '#competences' },
  { key: 'projets', href: '#projets' },
  { key: 'contact', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          className="relative w-32 h-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href={`#${t('anchor.apropos')}`} aria-label="Accueil">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-cover"
              priority
            />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-4">
        {navItems.map((item, index) => (
          <motion.li key={index}>
            <a
              href={`#${t(`anchor.${item.key}`)}`}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-500 transition-colors"
            >
              {t(item.key)}
            </a>
          </motion.li>
        ))}


          {/* Language & Theme Toggle */}
          <li>
            <LanguageSwitcher />
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <LanguageSwitcher isMobile />
          <ThemeToggle />
          <button
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <motion.li
                  key={item.key}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  <a
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 
                    hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {t(item.key)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
