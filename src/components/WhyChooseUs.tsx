
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Users, Trophy, Code, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Lightning Fast Delivery',
      description: 'We deliver quality MVPs in 2-4 weeks, not months. Our streamlined process ensures rapid time-to-market.',
      stats: '70% faster than traditional agencies'
    },
    {
      icon: Code,
      title: 'Clean, Scalable Code',
      description: 'We write maintainable code using industry best practices. Your MVP can easily scale as your business grows.',
      stats: '100% documented codebase'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'You get a dedicated team of senior developers who understand your vision and work exclusively on your project.',
      stats: '5+ years average experience'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive testing, security reviews, and performance optimization are built into our development process.',
      stats: '99.9% uptime guarantee'
    },
    {
      icon: Trophy,
      title: 'Proven Track Record',
      description: 'We\'ve helped 50+ startups successfully launch their MVPs and secure funding from top investors.',
      stats: '$2M+ raised by our clients'
    },
    {
      icon: Zap,
      title: 'Modern Tech Stack',
      description: 'We use cutting-edge technologies and frameworks to ensure your MVP is future-proof and performant.',
      stats: 'Latest tech standards'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Founders Choose{' '}
            <span className="gradient-text">StackPulse</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine speed, quality, and expertise to help you build MVPs that 
            attract users and investors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Stats */}
                <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full inline-block">
                  {benefit.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="text-6xl text-white/20 mb-4">"</div>
            <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
              StackPulse delivered our MVP in just 3 weeks. The code quality was exceptional,
              and their team understood our vision perfectly. We secured our Series A funding
              partly because of the solid foundation they built.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-white/80">CEO, TechFlow</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
