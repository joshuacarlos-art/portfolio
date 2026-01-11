'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Server, Database, Smartphone, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code className="w-8 h-8" />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
    color: 'from-gray-700 to-white'
  },
  {
    title: 'Backend',
    icon: <Server className="w-8 h-8" />,
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', ],
    color: 'from-gray-700 to-white'
  },
  {
    title: 'Database',
    icon: <Database className="w-8 h-8" />,
    skills: ['MongoDB', 'MySQL', ],
    color: 'from-gray-700 to-white'
  },
  {
    title: 'Design',
    icon: <Palette className="w-8 h-8" />,
    skills: [ 'Wireframing'],
    color: 'from-gray-700 to-white'
  },
  
  
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="text-white">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full clean-glass rounded-2xl p-6 hover:border-white/30 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-white/10 text-white rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}