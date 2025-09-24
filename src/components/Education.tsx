import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'JSS Academy of Technical Education, Noida',
    year: '2022 - Present',
    description: 'Currently pursuing my Bachelor\'s degree with a focus on software development, data structures, and algorithms.',
    courses: [
      'Data Structures and Algorithms',
      'Database Management Systems',
      'Web Technologies',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering'
    ]
  },
  // Add more education entries if needed
];

const certifications = [
  {
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    year: '2023',
    description: 'Comprehensive full-stack web development course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.'
  },
  // Add more certifications if available
];

export default function Education() {
  return (
    <section id="education" className="section bg-dark-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            My academic journey and professional certifications that have shaped my skills and knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <FaGraduationCap className="text-primary-400 mr-3" />
              Education
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 w-0.5 h-full bg-dark-600"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative pl-16 pb-10 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-10 h-10 rounded-full bg-dark-700 border-2 border-primary-500 flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  </div>
                  
                  <div className="bg-dark-700 rounded-xl p-6 hover:bg-dark-600 transition-colors duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <p className="text-primary-400">{edu.institution}</p>
                      </div>
                      <span className="bg-dark-800 text-sm text-gray-400 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    
                    <p className="mt-3 text-gray-300">{edu.description}</p>
                    
                    <div className="mt-4">
                      <h5 className="font-semibold text-gray-300 mb-2">Key Courses:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span 
                            key={i}
                            className="text-xs bg-dark-800 text-gray-300 px-3 py-1 rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.length > 0 ? (
                certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-dark-700 rounded-xl p-6 hover:bg-dark-600 transition-colors duration-300 border-l-4 border-primary-500"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-bold">{cert.title}</h4>
                      <span className="bg-dark-800 text-sm text-gray-400 px-3 py-1 rounded-full">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-primary-400 mb-2">{cert.issuer}</p>
                    <p className="text-gray-300">{cert.description}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400">More certifications coming soon!</p>
                </div>
              )}
              
              <div className="mt-8 text-center">
                <a 
                  href="https://www.linkedin.com/in/himanshu-singh-05a67926a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                >
                  View all certifications on LinkedIn
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
