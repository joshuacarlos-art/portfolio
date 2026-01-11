'use client';

import { motion } from 'framer-motion';
import { User, MapPin, Mail, Calendar, ChevronRight, ChevronLeft, Code, Briefcase } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [flippedPersonal, setFlippedPersonal] = useState(false);
  const [flippedSkills, setFlippedSkills] = useState(false);

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="text-white">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer creating digital experiences that matter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {/* Personal Info Flip Box */}
<div className="perspective-1000 h-[400px]">
  <motion.div
    className="relative w-full h-full"
    animate={{ rotateY: flippedPersonal ? 180 : 0 }}
    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    style={{ transformStyle: 'preserve-3d' }}
  >
    {/* Front - Personal Info */}
    <div 
      className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden cursor-pointer"
      style={{ backfaceVisibility: 'hidden' }}
      onClick={() => setFlippedPersonal(true)}
    >
      <div className="clean-glass rounded-2xl p-8 h-full flex flex-col items-center justify-center relative">
        <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-gray-800 to-white flex items-center justify-center">
          <User className="w-12 h-12 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          Joshua Carlos Gonzales
        </h3>
        <p className="text-gray-300 mb-6 text-center leading-relaxed">
          Passionate Full Stack Developer with 5+ years of experience creating 
          immersive web experiences.
        </p>
        <div className="space-y-3 w-full">
          <div className="flex items-center gap-3 text-gray-300">
            <MapPin className="w-5 h-5 text-white flex-shrink-0" />
            <span>Philippines</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <Mail className="w-5 h-5 text-white flex-shrink-0" />
            <span className="truncate">joshua@example.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <Calendar className="w-5 h-5 text-white flex-shrink-0" />
            <span>5+ Years Experience</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-gray-400 text-sm group">
          <span>Click to flip</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>

    {/* Back - Detailed Bio */}
    <div 
      className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden"
      style={{ 
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)'
      }}
    >
      <div className="clean-glass rounded-2xl p-8 h-full flex flex-col">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setFlippedPersonal(false);
          }}
          className="self-start mb-4 text-white hover:text-gray-300 transition-colors flex items-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back</span>
        </button>
        
        <div className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
            <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-gray-800 to-white flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Professional Journey</h3>
            
            <div className="space-y-6">
              {/* Experience Timeline */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Career Timeline
                </h4>
                <div className="relative pl-6 border-l border-gray-700 space-y-6">
                  {[
                    {
                      year: "2020 - Present",
                      title: "Senior Full Stack Developer",
                      company: "Tech Innovations Inc.",
                      description: "Led a team of 5 developers in building scalable SaaS platforms. Implemented microservices architecture and improved system performance by 40%."
                    },
                    {
                      year: "2018 - 2020",
                      title: "Frontend Developer",
                      company: "Digital Solutions Co.",
                      description: "Developed responsive web applications using React and TypeScript. Collaborated with UX designers to create intuitive user interfaces."
                    },
                    {
                      year: "2017 - 2018",
                      title: "Junior Web Developer",
                      company: "Web Creators Agency",
                      description: "Built and maintained client websites. Gained experience in full-stack development and project management."
                    }
                  ].map((experience, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-2.5 top-2 w-4 h-4 bg-gradient-to-r from-gray-800 to-white rounded-full border-2 border-gray-900"></div>
                      <div className="ml-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <span className="text-blue-400 font-medium">{experience.year}</span>
                          <span className="text-white font-semibold">{experience.title}</span>
                          <span className="text-gray-400 text-sm">@{experience.company}</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Education
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      degree: "Bachelor of Science in Computer Science",
                      school: "University of Technology",
                      year: "2013 - 2017",
                      achievements: ["Graduated Magna Cum Laude", "President of Coding Club", "Published research on AI algorithms"]
                    }
                  ].map((edu, index) => (
                    <div key={index} className="clean-glass p-4 rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <h5 className="text-white font-semibold">{edu.degree}</h5>
                        <span className="text-green-400 text-sm">{edu.year}</span>
                      </div>
                      <p className="text-gray-400 mb-3">{edu.school}</p>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Philosophy */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Development Philosophy
                </h4>
                <div className="clean-glass p-5 rounded-lg">
                  <p className="text-gray-300 mb-4">
                    I believe in building software that not only functions flawlessly but also 
                    delivers exceptional user experiences. My approach combines technical 
                    excellence with empathy for end-users.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {[
                      "Clean, maintainable code",
                      "User-centric design",
                      "Agile methodology",
                      "Continuous learning",
                      "Team collaboration",
                      "Problem-solving mindset"
                    ].map((principle, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hobbies & Interests */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Beyond Coding
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: "📚", label: "Tech Books" },
                    { icon: "🎮", label: "Game Dev" },
                    { icon: "✍️", label: "Blogging" },
                    { icon: "🎵", label: "Music" },
                    { icon: "🌱", label: "Gardening" },
                    { icon: "✈️", label: "Travel" }
                  ].map((hobby, index) => (
                    <div 
                      key={index} 
                      className="clean-glass px-4 py-3 rounded-lg flex items-center gap-3 hover:scale-105 transition-transform"
                    >
                      <span className="text-xl">{hobby.icon}</span>
                      <span className="text-gray-300 text-sm">{hobby.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="pt-8 mt-6 border-t border-gray-700">
              <p className="text-center text-gray-400 text-sm">
                Scroll to see more details about my journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</div>

          {/* Skills Flip Box */}
          <div className="perspective-1000 h-[400px]">
            <motion.div
              className="relative w-full h-full"
              animate={{ rotateY: flippedSkills ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front - Skills Overview */}
              <div 
                className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden cursor-pointer"
                style={{ backfaceVisibility: 'hidden' }}
                onClick={() => setFlippedSkills(true)}
              >
                <div className="clean-glass rounded-2xl p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
                  
                  <div className="space-y-6 flex-1">
                    {[
                      { title: 'Frontend', percent: 90, color: 'from-blue-400 to-cyan-400' },
                      { title: 'Backend', percent: 85, color: 'from-green-400 to-emerald-400' },
                     
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-white font-medium">{skill.title}</span>
                          <span className="text-white">{skill.percent}%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percent}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-gray-700 mt-4">
                    <div className="flex items-center justify-between group">
                      <span className="text-white font-medium group-hover:text-gray-300 transition-colors">
                        View Details
                      </span>
                      <ChevronRight className="w-5 h-5 text-white transform group-hover:translate-x-2 transition-transform" />
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      Click to see detailed breakdown
                    </p>
                  </div>
                </div>
              </div>

              {/* Back - Detailed Skills */}
              <div 
                className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <div className="clean-glass rounded-2xl p-8 h-full flex flex-col">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlippedSkills(false);
                    }}
                    className="self-start mb-6 text-white hover:text-gray-300 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <div className="flex-1 overflow-y-auto pr-2">
                    <h3 className="text-2xl font-bold text-white mb-6">Skills Breakdown</h3>
                    
                    <div className="space-y-6">
                      {[
                        { 
                          category: 'Frontend',
                          skills: [
                            { name: 'React/Next.js', level: 'Expert' },
                            { name: 'TypeScript', level: 'Advanced' },
                            { name: 'Tailwind CSS', level: 'Expert' },
                            
                          ]
                        },
                        { 
                          category: 'Backend',
                          skills: [
                            { name: 'Node.js/Express', level: 'Expert' },
                            { name: 'MongoDB', level: 'Advanced' },
                           
                          ]
                        },
                     
                      ].map((group, groupIndex) => (
                        <div key={groupIndex} className="space-y-3">
                          <h4 className="text-lg font-semibold text-white">{group.category}</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {group.skills.map((skill, skillIndex) => (
                              <div 
                                key={skillIndex} 
                                className="clean-glass p-3 rounded-lg border border-gray-700"
                              >
                                <p className="text-white font-medium text-sm">{skill.name}</p>
                                <p className="text-gray-400 text-xs mt-1">{skill.level}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-700 mt-4">
                    <p className="text-sm text-gray-400 text-center">
                      Click anywhere to flip back
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}