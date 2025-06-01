
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Zap, Globe, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Modern React apps with TypeScript, responsive design, and smooth animations.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable APIs, database design, and robust server architecture.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps that work seamlessly on iOS and Android.',
      technologies: ['React Native', 'Flutter', 'Expo', 'Firebase']
    },
    {
      icon: Zap,
      title: 'MVP Development',
      description: 'Rapid prototyping and MVP development to validate your ideas quickly.',
      technologies: ['Rapid Prototyping', 'User Testing', 'Analytics', 'Feedback']
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Full-stack web applications with modern architecture and best practices.',
      technologies: ['Full-Stack', 'API Design', 'Cloud Deploy', 'Performance']
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      description: 'Comprehensive testing, security audits, and performance optimization.',
      technologies: ['Unit Testing', 'Security Audit', 'Performance', 'Monitoring']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Ship Fast</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we handle every aspect of your MVP development
            so you can focus on growing your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
