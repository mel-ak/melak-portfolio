
import { motion } from 'framer-motion';
import SectionHeading from '@/components/portfolio/SectionHeading';
import SkillCard from '@/components/portfolio/SkillCard';
import TechCloud from '@/components/portfolio/TechCloud';
import { 
  Server, 
  Layout, 
  Database, 
  Cloud, 
  CreditCard, 
  GitBranch,
  Boxes,
  Shield
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Server,
      title: "Backend Development",
      color: "from-indigo-500 to-indigo-600",
      skills: ["Node.js", "TypeScript", "NestJS", "Go Fiber", "Gin", "Laravel", "PHP", "Python", "FastAPI"]
    },
    {
      icon: Layout,
      title: "Frontend Development",
      color: "from-purple-500 to-pink-600",
      skills: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "Alpine.js", "Livewire", "HTML/CSS"]
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-green-500 to-emerald-600",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis", "Database Design"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "from-orange-500 to-red-600",
      skills: ["AWS", "Docker", "CI/CD", "Kubernetes", "GitHub Actions", "Linux"]
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      color: "from-cyan-500 to-blue-600",
      skills: ["Telebirr", "CBE Birr", "Chapa", "Stripe", "PayPal", "Amole", "Wise"]
    },
    {
      icon: Boxes,
      title: "Architecture",
      color: "from-rose-500 to-pink-600",
      skills: ["Microservices", "Event-Driven", "RESTful APIs", "GraphQL", "gRPC", "System Design"]
    },
    {
      icon: GitBranch,
      title: "Version Control & PM",
      color: "from-slate-500 to-slate-700",
      skills: ["Git", "GitHub", "GitLab", "Jira", "Agile", "SDLC"]
    },
    {
      icon: Shield,
      title: "Security & Auth",
      color: "from-amber-500 to-orange-600",
      skills: ["JWT", "OAuth 2.0", "RBAC", "Data Protection", "API Security"]
    }
  ];

  const proficiencyLevels = [
    { name: "Node.js / TypeScript", level: 95 },
    { name: "React / Next.js", level: 90 },
    { name: "Go (Fiber/Gin)", level: 85 },
    { name: "Laravel / PHP", level: 90 },
    { name: "PostgreSQL / MySQL", level: 88 },
    { name: "AWS / Docker", level: 82 },
    { name: "Payment Integration", level: 95 },
    { name: "System Design", level: 85 },
  ];

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
            title="Skills & Expertise"
            subtitle="Technologies and tools I use to bring ideas to life"
          />
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Proficiency Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 mb-20 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Proficiency Levels
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {proficiencyLevels.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-slate-900 dark:text-white text-base">{skill.name}</span>
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, type: "spring" }}
                    className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-full shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12"
          >
            Tech Stack Cloud
          </motion.h3>
          <TechCloud />
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Programming Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["JavaScript", "TypeScript", "Python", "Go", "PHP", "C++", "Java", "C#"].map((lang, index) => (
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-lg font-medium hover:bg-white/20 transition-all cursor-default border border-white/20 shadow-lg"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}