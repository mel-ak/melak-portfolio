
import { motion } from 'framer-motion';

export default function TechCloud() {
  const techs = [
    'Node.js', 'React', 'Next.js', 'TypeScript', 'Go', 'Laravel', 'PHP', 'Python',
    'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
    'Stripe', 'Telebirr', 'Chapa', 'GraphQL', 'REST API', 'Microservices',
    'NestJS', 'FastAPI', 'Tailwind CSS', 'Redux', 'Git', 'CI/CD'
  ];

  const getRandomDelay = (index: number) => index * 0.05;
  const getRandomSize = (index: number) => {
    const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl'];
    return sizes[index % sizes.length];
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {techs.map((tech, index) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            delay: getRandomDelay(index),
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
          className={`px-4 py-2 md:px-5 md:py-2.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium shadow-md hover:shadow-lg border border-indigo-200 dark:border-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all cursor-default ${getRandomSize(index)}`}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}