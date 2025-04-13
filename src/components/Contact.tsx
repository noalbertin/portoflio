'use client'

import { useTranslation, Trans } from 'react-i18next'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function Contact() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(name.trim() !== '' && email.trim() !== '' && message.trim() !== '')
  }, [name, email, message])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = { name, email, message }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })


      if (res.ok) {

        toast.success(t('message_envoye'), {
          icon: '✔️',
          style: {
            background: '#22c55e',
            color: 'white',
            borderRadius: '8px',
            padding: '12px 16px',
            fontWeight: 'bold',
          },
        })
        setName('')
        setEmail('')
        setMessage('')
      } else {
        toast.error(t('erreur_envoi'))
      }
     } catch {
      toast.error(t('erreur_envoi'))
    }
  }


  

  return (
    <section
      id={t('anchor.contact')}
      className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-white dark:bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-8">
          <Trans i18nKey="contact_phrase" />
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8 text-left">

          {/* Floating label: Nom */}
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="peer w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Nom"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 dark:peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600"
            >
              <Trans i18nKey="nom" />
            </label>
          </div>

          {/* Floating label: Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 dark:peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600"
            >
              <Trans i18nKey="email" />
            </label>
          </div>

          {/* Floating label: Message */}
          <div className="relative">
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="peer w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Message"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 dark:peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600"
            >
              <Trans i18nKey="message" />
            </label>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`px-6 py-2 rounded-lg transition ${
              isFormValid
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-400 text-white cursor-not-allowed'
            }`}
          >
            <Trans i18nKey="envoyer" />
          </button>
        </form>
      </motion.div>
    </section>

  )
}
