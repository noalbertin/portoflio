'use client'

import { useTranslation, Trans } from 'react-i18next'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('')
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

      const result = await res.json()

      if (res.ok) {
        setStatus(t('message_envoye'))
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
        setStatus(t('erreur_envoi'))
        toast.error(t('erreur_envoi'))
      }
     } catch (error) {
      setStatus(t('erreur_envoi'))
      toast.error(t('erreur_envoi'))
    }
  }


  

  return (
    <section
      id="contact"
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
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
              <Trans i18nKey="nom" />
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
              <Trans i18nKey="email" />
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
              <Trans i18nKey="message" />
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
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
