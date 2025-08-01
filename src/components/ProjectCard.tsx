// src/components/ProjectCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  project: {
    name: string;
    tagline: string;
    imageUrl: string;
    techStack: string[];
    githubUrl?: string;
    liveDemoUrl?: string;
    id: string; // Used for linking to a detail page/modal
    description: string[]; // Changed from 'desription' to 'description'
  };
  onClickDetail: (projectId: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClickDetail }) => {
  return (
    <motion.div
      className="bg-light-gray-bg rounded-lg shadow-xl overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-[1.02]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={project.imageUrl}
        alt={project.name}
        className="w-full h-52  object-fill object-center"
        onError={(e) => { e.currentTarget.src = '/assets/images/default-project.png'; }} // Fallback image
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-light-blue-accent text-sm mb-4">{project.tagline}</p>
        <p className="text-gray-text text-sm mb-4 line-clamp-3">
          {project.description && project.description.length > 0 ? project.description : 'No description available.'} {/* Changed 'desription' to 'description' and simplified the check for first char */}
        </p>
        <div className="flex flex-wrap gap-2 text-xs font-semibold mb-4">
          {project.techStack.map((tech, index) => (
            <span key={index} className="bg-purple-accent bg-opacity-20 text-purple-accent px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-between gap-4 pt-4 border-t border-gray-700">
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="outline" className="flex-1 text-sm">
              <FaGithub /> GitHub
            </Button>
          )}
          {project.liveDemoUrl && (
            <Button href={project.liveDemoUrl} variant="primary" className="flex-1 text-sm">
              <FaExternalLinkAlt /> Live Demo
            </Button>
          )}
          <Button onClick={() => onClickDetail(project.id)} variant="secondary" className="flex-1 text-sm">
            Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;