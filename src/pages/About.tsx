import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  Download,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  Heart,
  Target,
  Lightbulb,
  Users,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code Advocate",
      description: "I believe in writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Complex challenges excite me. I thrive on finding elegant solutions to difficult problems."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learner",
      description: "Technology evolves rapidly, and I'm committed to staying at the forefront of innovation."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "I value collaboration and believe great products are built by great teams."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 min-h-screen pt-24 pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Passionate full-stack developer crafting digital experiences with modern technologies
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl rotate-6 opacity-20"
              />
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <span className="text-5xl font-bold text-white">MS</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Melak Sisay</h3>
                    <p className="text-slate-600 dark:text-slate-400">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Info Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-xl border border-slate-200 dark:border-slate-700 z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Based in</p>
                  <p className="font-semibold text-slate-900 dark:text-white">Addis Ababa</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-xl border border-slate-200 dark:border-slate-700 z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Experience</p>
                  <p className="font-semibold text-slate-900 dark:text-white">3+ Years</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Crafting Digital Solutions
              </h3>

              <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
                I'm a passionate full-stack developer with expertise in modern web technologies,
                payment systems integration, and scalable microservices architecture. With over 3 years of experience,
                I've helped build robust applications that handle complex business requirements while maintaining
                clean, maintainable code.
              </p>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl"
                >
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-white">Backend Excellence:</strong> Node.js, Go, Laravel, Python
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl"
                >
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-white">Frontend Mastery:</strong> React, Vue.js, TypeScript
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl"
                >
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-white">Payment Systems:</strong> Telebirr, CBE Birr, Chapa, Stripe, PayPal
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Education</h4>
                  <p className="font-semibold text-slate-700 dark:text-slate-300 text-lg">Gondar University</p>
                  <p className="text-slate-600 dark:text-slate-400">Bachelor of Science in Information Systems</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">2018 - 2022</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69367d07bfcde9a09dd882f1/57ab486c6_MelakProfessionalResumev2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-8 py-3 gap-2 shadow-lg hover:shadow-xl transition-all">
                  <Download className="w-5 h-5" /> Download Resume
                </Button>
              </motion.a>
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="rounded-full px-8 py-3 gap-2 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">
                    Get In Touch <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12"
          >
            What Drives Me
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4"
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Touch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="mt-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              <Heart className="w-12 h-12 mx-auto mb-6 text-pink-300" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Beyond Coding</h3>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto leading-relaxed">
              When I'm not writing code, you'll find me exploring new technologies, 
              contributing to open-source projects, and sharing knowledge with the developer community. 
              I believe in continuous learning and giving back to the tech ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}