
import { motion } from 'framer-motion';
import SectionHeading from '@/components/portfolio/SectionHeading';
import ExperienceCard from '@/components/portfolio/ExperienceCard';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer / Laravel Heavily",
      company: "Tibeb Technology PLC",
      period: "October 2024 - Present",
      description: "Collaborating with stakeholders to gather requirements, documenting technical specifications, and designing web applications using Laravel with PostgreSQL and MySQL. Implementing responsive frontend solutions and maintaining awareness of current design trends in the Ethiopian market.",
      technologies: ["Laravel", "PostgreSQL", "MySQL", "PHP", "Frontend Technologies"]
    },
    {
      title: "Fintech Manager / Payment Gateway Manager",
      company: "Kegeberew Technology Solutions",
      period: "July 2024 - October 2024",
      description: "Designed and implemented software architecture for fintech solutions, enhancing payment gateway efficiency and regulatory compliance. Led microservices development and data analytics initiatives to drive business growth in agile project management environment.",
      technologies: ["Microservices", "Payment Gateways", "API Design", "Agile", "Data Analytics"]
    },
    {
      title: "Backend Developer",
      company: "PurposeBlack Eth",
      period: "January 2024 - June 2024",
      description: "Enhanced client satisfaction by resolving operational issues and integrating third-party payment APIs. Built secure, scalable cloud-based architectures and reusable code libraries while collaborating with cross-functional teams to optimize payment processing.",
      technologies: ["Node.js", "AWS", "Third-party APIs", "Security", "Cloud Architecture"]
    },
    {
      title: "Full Stack Software Developer",
      company: "Hikel Technologies LLC",
      period: "May 2022 - December 2023",
      description: "Enhanced user experience through responsive designs and robust back-end systems. Integrated payment gateways, mentored junior developers, and contributed to scalable cloud solutions. Participated extensively in code reviews, debugging, and database design.",
      technologies: ["React", "Node.js", "Payment Integration", "PostgreSQL", "Cloud Solutions"]
    }
  ];

  const education = {
    degree: "Bachelor of Science in Information Systems",
    institution: "Gondar University",
    description: "Comprehensive program covering coding, programming, system design, and project management. Equipped with technical skills necessary to develop and optimize complex software systems and applications."
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors pt-24 pb-16 min-h-screen">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Professional Experience"
            subtitle="My journey in software development and fintech solutions"
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-12"
        >
          {/* Central Line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-500 to-indigo-300 dark:from-indigo-600 dark:via-purple-500 dark:to-indigo-800" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative md:flex md:items-center"
              >
                <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <ExperienceCard
                    experience={exp}
                    index={index}
                  />
                </div>
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 md:p-8 text-white shadow-lg hover:shadow-xl transition-all"
          >
            <Briefcase className="w-10 h-10 mb-4 opacity-90" />
            <h4 className="text-3xl md:text-4xl font-bold mb-2">20+</h4>
            <p className="text-indigo-100 text-sm md:text-base">Projects Delivered</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 md:p-8 text-white shadow-lg hover:shadow-xl transition-all"
          >
            <Award className="w-10 h-10 mb-4 opacity-90" />
            <h4 className="text-3xl md:text-4xl font-bold mb-2">10+</h4>
            <p className="text-purple-100 text-sm md:text-base">Payment Integrations</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white shadow-lg hover:shadow-xl transition-all"
          >
            <GraduationCap className="w-10 h-10 mb-4 opacity-90" />
            <h4 className="text-3xl md:text-4xl font-bold mb-2">3+</h4>
            <p className="text-indigo-100 text-sm md:text-base">Years of Experience</p>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Education
          </h3>
          
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all"
          >
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.4 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg"
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {education.degree}
                </h4>
                <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                  {education.institution}
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {education.description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-900 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Microservices Architecture",
              "Payment Gateway Integration",
              "RESTful API Design",
              "Cloud Infrastructure (AWS)",
              "Database Optimization",
              "Security & Authentication",
              "Agile Methodologies",
              "Team Leadership",
              "Technical Documentation",
              "System Design",
              "Code Review",
              "Performance Optimization"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring" }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all cursor-default border border-white/20"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}