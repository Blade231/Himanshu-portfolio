import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 80 },
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'TailwindCSS', level: 85 },
    { name: 'Python', level: 70 },
    { name: 'C/C++', level: 75 },
    { name: 'Data Structures', level: 80 },
    { name: 'Git/GitHub', level: 85 },
  ];

  return (
    <section id="about" className="section bg-dark-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Full-Stack Developer with expertise in the MERN stack, dedicated to creating
            efficient, scalable, and user-friendly web applications. Currently pursuing my B.Tech in Information
            Technology, I'm always eager to learn new technologies and solve complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl opacity-70 blur-xl"></div>
            <div className="relative bg-dark-700 rounded-2xl p-6 h-full">
              <h3 className="text-2xl font-bold mb-6">My Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-600 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-dark-700 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary-500 pl-4">
                  <h4 className="text-lg font-semibold">B.Tech in Information Technology</h4>
                  <p className="text-gray-400">JSS Academy of Technical Education, Noida</p>
                  <p className="text-sm text-gray-500">Sep 2022 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-700 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: '💻',
                    title: 'Web Development',
                    description: 'Building responsive and interactive web applications using modern technologies.'
                  },
                  {
                    icon: '📱',
                    title: 'UI/UX Design',
                    description: 'Creating intuitive and engaging user experiences with clean and modern designs.'
                  },
                  {
                    icon: '🔧',
                    title: 'Problem Solving',
                    description: 'Strong analytical skills to solve complex programming challenges.'
                  },
                  {
                    icon: '🚀',
                    title: 'Continuous Learning',
                    description: 'Always exploring new technologies and best practices in web development.'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-dark-800 p-4 rounded-lg">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
