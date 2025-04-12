'use client'
import { useTranslation, Trans } from 'react-i18next'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center gap-6 text-center flex-wrap">
        {/* Logo */}
        <Image
          src="/favicon.png"
          alt="Logo"
          width={30}
          height={30}
          className="rounded"
        />

        {/* Texte */}
        <p className="text-sm font-medium">
          &copy; {new Date().getFullYear()} Nirindrainy Sylvano Albertin.{' '}
          <Trans i18nKey="droit" />
        </p>

        {/* Icônes */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/noalbertin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 hover:scale-110 transition-transform duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/no-albertin-nsa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>


  )
}
