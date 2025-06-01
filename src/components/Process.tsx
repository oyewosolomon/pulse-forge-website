import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your vision, goals, and requirements. We define the scope, create wireframes, and plan the technical architecture.',
      duration: '1-2 days',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lightbulb,
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our team creates intuitive designs and interactive prototypes. We focus on user experience and ensure your MVP looks professional.',
      duration: '3-5 days',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      step: '03',
      title: 'Development & Testing',
      description: 'We build your MVP using modern technologies and best practices. Continuous testing ensures quality and reliability throughout development.',
      duration: '1-3 weeks',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Rocket,
      step: '04',
      title: 'Launch & Support',
      description: 'We deploy your MVP and provide ongoing support. You get documentation, training, and assistance to help you grow your product.',
      duration: '1-2 days',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <section id="process" className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg width=\\'60\\' height=\\'60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3e%3cdefs%3e%3cpattern id=\\'grid\\' width=\\'60\\' height=\\'60\\' patternUnits=\\'userSpaceOnUse\\'%3e%3cpath d=\\'m 60 0 l 0 60 l -60 0 l 0 -60 z\\' fill=\\'none\\' stroke=\\'%23ffffff\\' stroke-width=\\'0.5\\' opacity=\\'0.05\\'/%3e%3c/pattern%3e%3c/defs%3e%3crect width=\\'100%25\\' height=\\'100%25\\' fill=\\'url(%23grid)\\'/%3e%3c/svg%3e')] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Proven{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Development Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a streamlined process that ensures quality, speed, and transparency
              from idea to launch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start space-x-6">
                  {/* Step Number */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <step.icon className="w-6 h-6 text-cyan-400" />
                      <span className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Connecting Line (for desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-8 w-0.5 h-32 bg-gradient-to-b from-gray-600 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's discuss your MVP and get you to market fast.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Process;