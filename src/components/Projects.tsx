import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Fullstack Chat Application',
    description: 'A real-time chat application with user authentication, online status, and instant messaging capabilities.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'TailwindCSS'],
    github: 'https://github.com/Blade231/fullstack-chat-app',
    demo: '#', // Add demo link if available
    image: '/chat-app-preview.jpg' // Add image path if available
  },
  {
    title: 'E-commerce Website',
    description: 'A sustainable e-commerce platform featuring product listings, search, and shopping cart functionality.',
    technologies: ['React', 'TailwindCSS', 'Context API', 'Vercel'],
    github: 'https://github.com/Blade231/Ecommerce',
    demo: '#', // Add demo link if available
    image: '/ecommerce-preview.jpg' // Add image path if available
  }
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="section bg-dark-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 bg-dark-700 overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-700 to-dark-800">
                    <div className="text-4xl opacity-20">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-dark-700 text-primary-400 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-6">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a 
            href="https://github.com/Blade231" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center"
          >
            <FaGithub className="mr-2" /> View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
