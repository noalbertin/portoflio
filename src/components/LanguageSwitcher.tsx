'use client'

import { IoLanguage } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";

const languages = ['fr', 'en', 'mg']
const languageLabels: Record<string, string> = {
  fr: 'Français',
  en: 'English',
  mg: 'Malagasy',
}

export default function LanguageSwitcher({ isMobile = false }: { isMobile?: boolean }) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 px-3 py-2 rounded-md border dark:border-gray-700 border-gray-300 text-sm 
        ${isMobile ? 'w-full justify-center' : 'justify-between'}  // Ajustement pour aligner les éléments
        dark:bg-gray-800 bg-slate-100 
        dark:text-gray-100 text-slate-800 
        hover:text-indigo-500 dark:hover:text-indigo-500 transition`}
      >
        {/* Affichage uniquement de l'icône si isMobile est true */}
        <IoLanguage className="text-lg" />
        {/* Affiche le texte seulement si ce n'est pas en mode mobile */}
        {!isMobile && (
          <span className='ml-2 hover:text-inherit dark:hover:text-inherit'>
            {languageLabels[i18n.language]}
          </span>
        )}
      </button>
    
      <AnimatePresence>
  {open && (
    <motion.ul
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`absolute ${isMobile ? 'static mt-2' : 'right-0'}
        z-50 bg-white dark:bg-gray-900 shadow-lg rounded mt-2 p-2 text-sm`}
    >
      {languages.map((lng) => (
        <li
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`cursor-pointer px-3 py-1 rounded dark:text-gray-100 text-slate-800 
            hover:text-indigo-500 dark:hover:text-indigo-500 transition ${
              i18n.language === lng ? 'font-semibold' : ''
            }`}
        >
          {languageLabels[lng]}
        </li>
      ))}
    </motion.ul>
  )}
</AnimatePresence>

    </div>
  )
}
