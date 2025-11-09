// //components/Footer.tsx
// 'use client'
// import { Trans } from 'react-i18next'
// import { FaGithub, FaLinkedin } from 'react-icons/fa'
// import Image from 'next/image'

// export default function Footer() {


//   return (
//     <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 border-t border-gray-200 dark:border-gray-700">
//       <div className="max-w-6xl mx-auto px-4 flex justify-center items-center gap-6 text-center flex-wrap">
//         {/* Logo */}
//         <Image
//           src="/favicon.png"
//           alt="Logo"
//           width={30}
//           height={30}
//           className="rounded"
//         />

//         {/* Texte */}
//         <p className="text-sm font-medium">
//           &copy; {new Date().getFullYear()} Nirindrainy Sylvano Albertin.{' '}
//           <Trans i18nKey="droit" />
//         </p>

//         {/* Icônes */}
//         <div className="flex gap-4 text-xl">
//           <a
//             href="https://github.com/noalbertin"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-indigo-600 hover:scale-110 transition-transform duration-200"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/no-albertin-nsa"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-indigo-600 hover:scale-110 transition-transform duration-200"
//           >
//             <FaLinkedin />
//           </a>
//         </div>
//       </div>
//     </footer>


//   )
// }

//components/Footer.tsx
'use client'
import { Trans } from 'react-i18next'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-gray-200 py-8 border-t border-white/10 overflow-hidden">
      {/* Particules flottantes subtiles */}
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
          {/* Logo avec effet glow */}
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
            <p className="text-sm font-medium text-gray-300">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                &copy; {new Date().getFullYear()}
              </span>{' '}
              Nirindrainy Sylvano Albertin
            </p>
            <p className="text-xs text-gray-400 mt-1">
              <Trans i18nKey="droit" />
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
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"
              />
              <FaGithub className="relative text-gray-400 group-hover:text-white transition-colors duration-300" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/no-albertin-nsa"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"
              />
              <FaLinkedin className="relative text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </motion.a>
          </motion.div>
        </div>

        {/* Ligne décorative en bas */}
        <motion.div
          className="mt-6 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Grille décorative subtile */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px]" />
    </footer>
  )
}
