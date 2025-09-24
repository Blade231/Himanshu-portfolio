import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#0a0a0a)]"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-primary-400">Himanshu Singh</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl text-gray-300 mb-6 font-medium">
              MERN Stack Developer | Python & DSA Enthusiast
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              I'm a Full Stack Developer with expertise in JavaScript, React.js, Node.js, and MongoDB. 
              Passionate about building responsive, user-centric web applications with intuitive UI/UX design.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="btn btn-primary"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="btn btn-outline"
              >
                View My Work
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <a 
                href="https://github.com/Blade231" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/himanshu-singh-05a67926a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:Himanshukandiyal98@gmail.com" 
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-span-5 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl opacity-70 blur-xl"></div>
              <div className="relative bg-dark-700 rounded-2xl p-1">
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-gray-400">himanshu@portfolio: ~</div>
                  </div>
                  <div className="font-mono text-sm text-gray-300 space-y-2">
                    <p><span className="text-primary-400">$</span> whoami</p>
                    <p className="ml-4">Himanshu Singh</p>
                    <p><span className="text-primary-400">$</span> cat about.txt</p>
                    <p className="ml-4">Full Stack Developer</p>
                    <p className="ml-4">MERN Stack | Python | DSA</p>
                    <p className="ml-4">4th Year IT Student</p>
                    <p><span className="text-primary-400">$</span> <span className="animate-pulse">_</span></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="animate-bounce inline-block">
          <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center items-start p-2">
            <motion.div 
              className="w-1 h-3 bg-gray-400 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </a>
      </div>
    </section>
  );
}
