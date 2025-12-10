import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Smartphone,
  ChevronDown,
  Sparkles,
  Globe,
  Shield
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -30]));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const coreTechnologies = [
    { icon: Code2, name: 'Frontend', gradient: 'from-indigo-600 to-cyan-600' },
    { icon: Database, name: 'Backend', gradient: 'from-purple-600 to-pink-600' },
    { icon: Globe, name: 'Full Stack', gradient: 'from-green-600 to-teal-600' },
    { icon: Shield, name: 'Security', gradient: 'from-red-600 to-orange-600' },
  ];

    return (
    <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
        </motion.div>

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-16 relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-6 border border-indigo-200 dark:border-indigo-700"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  Available for Freelance Projects
                </span>
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </motion.div>

              <motion.h1
                style={{ y: textY }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6"
              >
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
                  Melak Sisay
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl"
              >
                Full Stack Developer specializing in modern web technologies, payment systems,
                and scalable microservices architecture.
              </motion.p>

              {/* Core Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {coreTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 bg-gradient-to-r ${tech.gradient} text-white rounded-full text-sm font-semibold shadow-lg flex items-center gap-2`}
                  >
                    <tech.icon className="w-4 h-4" />
                    {tech.name}
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/contact" aria-label="Navigate to contact page">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-8 py-3 gap-2 shadow-lg hover:shadow-xl transition-all" aria-describedby="contact-button-desc">
                    Get In Touch <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Button>
                  <span id="contact-button-desc" className="sr-only">Open contact form to get in touch</span>
                </Link>
                <a
                  href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69367d07bfcde9a09dd882f1/57ab486c6_MelakProfessionalResumev2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Melak Sisay's professional resume (opens in new tab)"
                >
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-3 gap-2 border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all">
                    <Download className="w-5 h-5" aria-hidden="true" /> Download CV
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Follow me:</span>
                <div className="flex gap-4" role="list" aria-label="Social media links">
                  <a
                    href="https://github.com/mel-ak"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Melak Sisay's GitHub profile (opens in new tab)"
                    className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <Github className="w-6 h-6" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/melake-sisay-ab6a3a105/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Melak Sisay's LinkedIn profile (opens in new tab)"
                    className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <Linkedin className="w-6 h-6" aria-hidden="true" />
                  </a>
                  <a
                    href="mailto:melakesisay@gmail.com"
                    aria-label="Send email to Melak Sisay"
                    className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main Profile Card */}
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-indigo-600/10 dark:from-indigo-600/20 dark:via-purple-600/20 dark:to-indigo-600/20" />
                  <div className="relative p-8">
                    {/* Profile Avatar */}
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-5xl font-bold text-white">M</span>
                    </div>

                    {/* Profile Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Melak Sisay</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">Full Stack Developer</p>

                      {/* Tech Icons */}
                      <div className="flex justify-center gap-4 mb-6">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                          <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                          <Database className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Achievement Badges */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
                >
                  ⭐ 3+ Years Exp
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
                >
                  🚀 20+ Projects
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
            >
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-20 bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-900"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '3+', label: 'Years Experience', icon: '👨‍💻' },
              { value: '20+', label: 'Projects Completed', icon: '🚀' },
              { value: '10+', label: 'Payment Integrations', icon: '💳' },
              { value: '100%', label: 'Client Satisfaction', icon: '⭐' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-slate-200 dark:border-slate-700">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-20 md:py-28 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and bring your ideas to life. I'm always excited
                to work on challenging problems and create impactful solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 gap-2">
                    Start a Project <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full px-8">
                    View My Work
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}