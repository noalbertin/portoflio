//components/Header.tsx
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
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/10">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo with glow effect */}
        <motion.div
          className="relative w-32 h-8 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          />
          <a href={`#${t('anchor.apropos')}`} aria-label="Accueil" className="relative block w-full h-full">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              sizes="128px"
              className="object-cover"
              priority
            />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <a
                href={`#${t(`anchor.${item.key}`)}`}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors group"
              >
                <span className="relative z-10">{t(item.key)}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
              </a>
            </motion.li>
          ))}

          {/* Language & Theme Toggle with hover effects */}
          <li className='space-x-1'>
            <motion.div>
              <ThemeToggle />
            </motion.div>
          </li>
          <li >
            <motion.div >
              <LanguageSwitcher />
            </motion.div>
          </li>
          
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          
          <ThemeToggle />
          <LanguageSwitcher isMobile />
          <motion.button
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu with backdrop blur */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  <a
                    href={item.href}
                    className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-300 
                    hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-purple-600/20 
                    hover:text-white transition-all border border-transparent hover:border-white/10"
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