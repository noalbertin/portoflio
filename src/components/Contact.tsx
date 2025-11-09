// //components/Contact.tsx
// 'use client'

// import { useTranslation, Trans } from 'react-i18next'
// import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import toast from 'react-hot-toast'

// export default function Contact() {
//   const { t } = useTranslation()
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')
//   const [isFormValid, setIsFormValid] = useState(false)

//   useEffect(() => {
//     setIsFormValid(name.trim() !== '' && email.trim() !== '' && message.trim() !== '')
//   }, [name, email, message])

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()

//     const data = { name, email, message }

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })


//       if (res.ok) {

//         toast.success(t('message_envoye'), {
//           icon: '✔️',
//           style: {
//             background: '#22c55e',
//             color: 'white',
//             borderRadius: '8px',
//             padding: '12px 16px',
//             fontWeight: 'bold',
//           },
//         })
//         setName('')
//         setEmail('')
//         setMessage('')
//       } else {
//         toast.error(t('erreur_envoi'))
//       }
//      } catch {
//       toast.error(t('erreur_envoi'))
//     }
//   }


  

//   return (
//     <section
//       id={t('anchor.contact')}
//       className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-white dark:bg-gray-900"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="w-full max-w-2xl text-center"
//       >
//         <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-8">
//           <Trans i18nKey="contact_phrase" />
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-8 text-left">

//           {/* Floating label: Nom */}
//           <div className="relative">
//             <input
//               type="text"
//               name="name"
//               id="name"
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="peer w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Nom"
//             />
//             <label
//               htmlFor="name"
//               className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 dark:peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600"
//             >
//               <Trans i18nKey="nom" />
//             </label>
//           </div>

//           {/* Floating label: Email */}
//           <div className="relative">
//             <input
//               type="email"
//               name="email"
//               id="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="peer w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Email"
//             />
//             <label
//               htmlFor="email"
//               className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 dark:peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600"
//             >
//               <Trans i18nKey="email" />
//             </label>
//           </div>

//           {/* Floating label: Message */}
//           <div className="relative">
//             <textarea
//               name="message"
//               id="message"
//               rows={5}
//               required
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="peer w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Message"
//             ></textarea>
//             <label
//               htmlFor="message"
//               className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 dark:peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600"
//             >
//               <Trans i18nKey="message" />
//             </label>
//           </div>

//           <button
//             type="submit"
//             disabled={!isFormValid}
//             className={`px-6 py-2 rounded-lg transition ${
//               isFormValid
//                 ? 'bg-indigo-600 text-white hover:bg-indigo-700'
//                 : 'bg-gray-400 text-white cursor-not-allowed'
//             }`}
//           >
//             <Trans i18nKey="envoyer" />
//           </button>
//         </form>
//       </motion.div>
//     </section>

//   )
// }



//components/Contact.tsx
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
        {/* Particules flottantes */}
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
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-cyan-500/10 animate-pulse" />
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
          className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent"
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
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-20" />
          
          {/* Card */}
          <div className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
            {/* Cercles décoratifs comme terminal */}
            <div className="absolute top-6 left-6 flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Floating label: Nom */}
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="peer relative w-full px-4 pt-6 pb-2 rounded-lg border border-white/20 bg-white/5 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Nom"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-400"
                >
                  <Trans i18nKey="nom" />
                </label>
              </motion.div>

              {/* Floating label: Email */}
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer relative w-full px-4 pt-6 pb-2 rounded-lg border border-white/20 bg-white/5 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400"
                >
                  <Trans i18nKey="email" />
                </label>
              </motion.div>

              {/* Floating label: Message */}
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity" />
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="peer relative w-full px-4 pt-6 pb-2 rounded-lg border border-white/20 bg-white/5 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400"
                >
                  <Trans i18nKey="message" />
                </label>
              </motion.div>

              {/* Bouton d'envoi */}
              <motion.button
                type="submit"
                disabled={!isFormValid}
                whileHover={isFormValid ? { scale: 1.02, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" } : {}}
                whileTap={isFormValid ? { scale: 0.98 } : {}}
                className={`relative w-full px-8 py-4 rounded-xl font-semibold text-white overflow-hidden shadow-xl transition-all ${
                  isFormValid
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border border-white/10 cursor-pointer'
                    : 'bg-gray-600/50 border border-white/5 cursor-not-allowed'
                }`}
              >
                {isFormValid && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Trans i18nKey="envoyer" />
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>

      {/* Grille décorative en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
    </section>
  )
}