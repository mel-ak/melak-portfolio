
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 mb-8 md:mb-0 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {experience.title}
          </h3>
          <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
            {experience.company}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            {experience.period}
          </p>
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
        {experience.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, techIndex) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + techIndex * 0.05 }}
            className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}