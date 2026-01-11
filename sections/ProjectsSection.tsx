'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Save } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [formData, setFormData] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    tags: [],
    github: '',
    demo: '',
  });

  const openModal = () => {
    setFormData({
      title: '',
      description: '',
      tags: [],
      github: '',
      demo: '',
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewTag('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProject: Project = {
      ...formData,
      id: Date.now(),
    };
    setProjects([...projects, newProject]);
    
    closeModal();
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(proj => proj.id !== id));
    }
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()],
      });
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove),
    });
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">My </span>
                <span className="text-white">Projects</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mt-4"></div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
              className="clean-button flex items-center gap-2 px-6 py-3"
            >
              <Plus className="w-5 h-5" />
              <span>Add Project</span>
            </motion.button>
          </div>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcase your work - add projects to display them here
          </p>
        </motion.div>

        {/* Empty State */}
        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <Plus className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">No projects yet</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Add your first project to showcase your work and skills to visitors
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
              className="clean-button flex items-center gap-3 px-8 py-4 mx-auto text-lg"
            >
              <Plus className="w-6 h-6" />
              <span>Add Your First Project</span>
            </motion.button>
          </motion.div>
        ) : (
          /* Projects Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -top-3 -right-3 z-10">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDelete(project.id)}
                    className="w-10 h-10 bg-red-500/90 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.button>
                </div>

                <div className="h-full clean-glass rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 border border-transparent">
                  <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/10 select-none">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 text-white rounded-full text-xs border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 clean-button flex items-center justify-center gap-2 py-3 text-sm"
                      >
                        <span>View Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 clean-button flex items-center justify-center gap-2 py-3 text-sm"
                      >
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Add Project Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="clean-glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">
                    Add New Project
                  </h3>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">Project Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full clean-input"
                      placeholder="Enter project title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Description *</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full clean-input min-h-[120px] resize-none"
                      placeholder="Describe your project..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Tags</label>
                    <div className="flex gap-2 mb-3">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        className="flex-1 clean-input"
                        placeholder="Add technology or skill (e.g., React, Node.js, Design)"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      />
                      <button
                        type="button"
                        onClick={addTag}
                        className="clean-button px-4"
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.map((tag) => (
                        <div
                          key={tag}
                          className="px-3 py-1 bg-white/10 text-white rounded-full text-sm border border-white/20 flex items-center gap-2"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="hover:text-red-400 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2">GitHub Repository URL *</label>
                      <input
                        type="url"
                        value={formData.github}
                        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                        className="w-full clean-input"
                        placeholder="https://github.com/username/project"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Live Demo URL *</label>
                      <input
                        type="url"
                        value={formData.demo}
                        onChange={(e) => setFormData({ ...formData, demo: e.target.value })}
                        className="w-full clean-input"
                        placeholder="https://project-demo.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-gray-700">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 clean-button py-3"
                    >
                      Cancel
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 clean-button py-3 bg-gradient-to-r from-white to-gray-400 text-gray-900 font-semibold flex items-center justify-center gap-2"
                    >
                      <Save className="w-5 h-5" />
                      <span>Add Project</span>
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}