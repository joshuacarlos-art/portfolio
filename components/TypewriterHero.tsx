'use client'

import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import { ChevronDown, Mouse } from 'lucide-react'

export default function TypewriterHero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      
      <div className="container mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text animate-gradient">
                Alex Developer
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl mb-8 h-12 font-mono">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    '3D Web Specialist',
                    'UI/UX Designer',
                    'React Expert',
                    'Next.js Wizard',
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 70,
                }}
              />
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Crafting immersive digital experiences with cutting-edge technologies.
              Specializing in 3D web applications, interactive interfaces, and scalable solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Projects
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors duration-300"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
 
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors"
        >
          <Mouse className="w-5 h-5" />
          <span className="text-sm">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </motion.div>
    </div>
  )
}