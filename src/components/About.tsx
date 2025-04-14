'use client'

import { useTranslation, Trans } from 'react-i18next'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {

    const { t } = useTranslation()
    
  return (
    <section
      id={t('anchor.apropos')}
      className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Photo section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] rounded-2xl overflow-hidden border-4 border-indigo-500/20 shadow-xl dark:shadow-indigo-500/10">
            <Image
              src="/sary.png"
              alt="Photo de profil"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 400px"
              priority
            />
          </div>

        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
            Nirindrainy Sylvano Albertin
          </h2>

          
          
          <p className="text-md sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <Trans
              i18nKey="intro1"
              components={{
                1: (
                  <a
                    href="https://eni.mg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-700"
                  />
                ),
                2: <span className="font-semibold text-indigo-600 dark:text-indigo-400" />
              }}
            />
          </p>

          
          <p className="text-md sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <Trans
              i18nKey="intro2"
              components={{
                1: <span className="font-semibold text-indigo-600 dark:text-indigo-400" />
              }}
            />
          </p>
          
          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg"
              onClick={() => {

                const link = document.createElement('a');
                
                link.href = '/cv/Nirindrainy_Sylvano_Albertin_CV.pdf'; 
                link.download = 'Nirindrainy_Sylvano_Albertin_CV.pdf'; 
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              {t('download_cv')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}