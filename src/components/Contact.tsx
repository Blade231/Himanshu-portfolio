import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would typically send the form data to your backend or email service
      console.log('Form submitted:', data);
      
      // For demo purposes, we'll just show an alert
      alert('Thank you for your message! I will get back to you soon.');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="section bg-dark-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-dark-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-dark-700 p-3 rounded-lg text-primary-400">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-100">Location</h4>
                  <p className="text-gray-400">Noida, Uttar Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dark-700 p-3 rounded-lg text-primary-400">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-100">Email</h4>
                  <a 
                    href="mailto:Himanshukandiyal98@gmail.com" 
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    Himanshukandiyal98@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dark-700 p-3 rounded-lg text-primary-400">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-100">Phone</h4>
                  <a 
                    href="tel:+91XXXXXXXXXX" 
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    +91 XXXXXXXXXX
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-semibold text-gray-100 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Blade231" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-dark-700 hover:bg-primary-500 text-white p-3 rounded-full transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/himanshu-singh-05a67926a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-dark-700 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 bg-dark-700 border ${errors.name ? 'border-red-500' : 'border-dark-600'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`w-full px-4 py-3 bg-dark-700 border ${errors.email ? 'border-red-500' : 'border-dark-600'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject')}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full px-4 py-3 bg-dark-700 border ${errors.message ? 'border-red-500' : 'border-dark-600'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors resize-none`}
                  placeholder="Hi Himanshu, I'd like to discuss a project..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary mt-2"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
