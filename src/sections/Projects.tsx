// src/sections/Projects.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button'; // Assuming you have this
import { projectsData } from '../data/portfolioData';
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaUser, FaCheckCircle } from 'react-icons/fa';

// Project Detail Modal Component
interface ProjectModalProps {
  project: typeof projectsData[0];
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-blue bg-opacity-90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-dark-blue rounded-lg shadow-2xl p-6 md:p-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
        initial={{ y: 50, scale: 0.9 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 50, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-text hover:text-white text-3xl transition-colors duration-300"
        >
          &times;
        </button>
        <h2 className="text-3xl md:text-4xl font-bold text-light-blue-accent mb-4">{project.name}</h2>
        <p className="text-xl text-teal-accent mb-6">{project.tagline}</p>

        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-64 object-cover rounded-md mb-6 border border-gray-700"
          onError={(e) => { e.currentTarget.src = '/assets/images/default-project.png'; }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-text mb-6">
          <p className="flex items-center gap-2"><FaCalendarAlt className="text-purple-accent" /> <span className="font-semibold text-white">Date:</span> {project.dateRange}</p>
          {project.yourRole && <p className="flex items-center gap-2"><FaUser className="text-purple-accent" /> <span className="font-semibold text-white">My Role:</span> {project.yourRole}</p>}
        </div>

        <h3 className="text-2xl font-semibold text-white mb-3">Overview</h3>
        {project.description.map((paragraph, index) => (
          <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
        ))}

        <h3 className="text-2xl font-semibold text-white mb-3">Tech Stack</h3>
        <div className="flex flex-wrap gap-3 mb-6">
          {project.techStack.map((tech, index) => {
            const Icon = project.techIcons ? project.techIcons[index] : null;
            return (
              <span key={index} className="bg-purple-accent bg-opacity-20 text-purple-accent px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                {Icon && <Icon className="w-4 h-4" />} {tech}
              </span>
            );
          })}
        </div>

        {project.features && project.features.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-white mb-3">Features</h3>
            <ul className="list-disc list-inside mb-6">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 mb-2">
                  <FaCheckCircle className="text-teal-accent mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {project.impact && project.impact.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-white mb-3">Impact & Results</h3>
            <ul className="list-disc list-inside mb-6">
              {project.impact.map((impactPoint, index) => (
                <li key={index} className="flex items-start gap-2 mb-2">
                  <FaCheckCircle className="text-teal-accent mt-1 flex-shrink-0" />
                  <span>{impactPoint}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="flex flex-wrap justify-center gap-4 mt-6 border-t border-gray-700 pt-6">
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="outline">
              <FaGithub /> View Code on GitHub
            </Button>
          )}
          {project.liveDemoUrl && (
            <Button href={project.liveDemoUrl} variant="primary">
              <FaExternalLinkAlt /> Live Demo
            </Button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};


const Projects: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleOpenModal = (id: string) => {
    setSelectedProjectId(id);
  };

  const handleCloseModal = () => {
    setSelectedProjectId(null);
  };

  const selectedProject = projectsData.find(p => p.id === selectedProjectId);

  return (
    <section id="projects" className="py-16 md:py-24 bg-dark-blue">
      <div className="container mx-auto px-6">
        <SectionHeader title="My Projects" subtitle="Showcasing My Innovations" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClickDetail={handleOpenModal}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;