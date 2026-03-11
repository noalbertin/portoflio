//components/Contact.tsx
'use client'

import { useTranslation, Trans } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  useEffect(() => {
    setIsFormValid(
      name.trim() !== '' &&
      email.trim() !== '' &&
      message.trim() !== '' &&
      recaptchaValue !== null
    )
  }, [name, email, message, recaptchaValue])

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!recaptchaValue) {
      toast.error(t('erreur_recaptcha') || 'Veuillez valider le reCAPTCHA')
      return
    }
    setIsSubmitting(true)
    try {
      const data = { name, email, message, recaptchaToken: recaptchaValue }
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        setRecaptchaValue(null)
        recaptchaRef.current?.reset()
      } else {
        const errorData = await res.json()
        toast.error(errorData.message || t('erreur_envoi'))
      }
    } catch (error) {
      console.error('Erreur:', error)
      toast.error(t('erreur_envoi'))
    } finally {
      setIsSubmitting(false)
    }
  }

  // Shared input classes
  const inputBase =
    'peer relative w-full px-4 pt-6 pb-2 rounded-lg border bg-white/60 dark:bg-white/5 text-slate-800 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:border-transparent transition-all border-slate-200 dark:border-white/20 focus:ring-indigo-500'

  return (
    <section
      id={t('anchor.contact')}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 transition-colors duration-300"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900 transition-colors duration-300">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-25, 25, -25],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-cyan-500/5 dark:from-purple-500/10 dark:via-indigo-500/10 dark:to-cyan-500/10 animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-2xl"
      >
        {/* Titre */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 via-indigo-700 to-purple-700 dark:from-white dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Trans i18nKey="contact_phrase" />
        </motion.h2>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-10 dark:opacity-20" />

          {/* Card */}
          <div className="relative p-8 bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-md dark:shadow-2xl transition-colors duration-300">
            {/* Cercles décoratifs */}
            <div className="absolute top-6 left-6 flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400/80 dark:bg-red-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/80 dark:bg-yellow-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/80 dark:bg-green-500/60"></div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">

              {/* Nom */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-15 dark:group-hover:opacity-20 transition-opacity" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputBase}
                  placeholder="Nom"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-slate-400 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400"
                >
                  <Trans i18nKey="nom" />
                </label>
              </motion.div>

              {/* Email */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-15 dark:group-hover:opacity-20 transition-opacity" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${inputBase} focus:ring-purple-500`}
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-slate-400 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-600 dark:peer-focus:text-purple-400"
                >
                  <Trans i18nKey="email" />
                </label>
              </motion.div>

              {/* Message */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-15 dark:group-hover:opacity-20 transition-opacity" />
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputBase} focus:ring-cyan-500 resize-none`}
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-slate-400 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-600 dark:peer-focus:text-cyan-400"
                >
                  <Trans i18nKey="message" />
                </label>
              </motion.div>

              {/* reCAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={handleRecaptchaChange}
                  theme="light"
                />
              </div>

              {/* Bouton d'envoi */}
              <motion.button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                whileHover={isFormValid && !isSubmitting ? { scale: 1.02, boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)" } : {}}
                whileTap={isFormValid && !isSubmitting ? { scale: 0.98 } : {}}
                className={`relative w-full px-8 py-4 rounded-xl font-semibold text-white overflow-hidden shadow-xl transition-all ${
                  isFormValid && !isSubmitting
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border border-indigo-400/20 dark:border-white/10 cursor-pointer'
                    : 'bg-slate-300 dark:bg-gray-600/50 border border-slate-300/50 dark:border-white/5 cursor-not-allowed text-slate-500 dark:text-gray-400'
                }`}
              >
                {isFormValid && !isSubmitting && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>{t('envoi_en_cours')}</span>
                    </>
                  ) : (
                    <Trans i18nKey="envoyer" />
                  )}
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>

      {/* Grille décorative */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
    </section>
  )
}