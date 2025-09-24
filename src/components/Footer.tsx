import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">
              Himanshu<span className="text-primary-400">.</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Full Stack Developer passionate about creating beautiful and functional web applications.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Blade231" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/himanshu-singh-05a67926a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:Himanshukandiyal98@gmail.com" 
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-dark-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Himanshu Singh. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-gray-500 hover:text-primary-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-primary-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-primary-400 text-sm transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
