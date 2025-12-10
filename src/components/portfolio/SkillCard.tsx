import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  color: string;
  delay: number;
}

export default function SkillCard({ icon: Icon, title, skills, color, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring" }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all"
    >
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mb-4 text-white shadow-md`}
      >
        <Icon className="w-6 h-6" />
      </motion.div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + index * 0.05 }}
            className="text-slate-600 dark:text-slate-400 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0" />
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}