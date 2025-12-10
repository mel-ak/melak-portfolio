
import { motion } from 'framer-motion';
import { 
    Code2, Database, Zap, Cloud, Shield, Settings, 
    CheckCircle2, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

export default function Services() {
    const services = [
        {
            icon: Database,
            title: 'Backend Development',
            description: 'Scalable, secure backend systems with modern frameworks and best practices.',
            features: [
                'RESTful & GraphQL API design',
                'Microservices architecture',
                'Database design & optimization',
                'Authentication & authorization',
                'Real-time communication',
            ],
            tech: ['Node.js', 'NestJS', 'Go', 'Laravel'],
            color: 'blue',
        },
        {
            icon: Zap,
            title: 'Payment Integration',
            description: 'Expert integration of payment gateways with secure transaction handling.',
            features: [
                'Multiple payment provider integration',
                'PCI DSS compliance',
                'Webhook management',
                'Subscription billing',
                'Fraud prevention',
            ],
            tech: ['Stripe', 'PayPal', 'Telebirr', 'CBE Birr'],
            color: 'green',
        },
        {
            icon: Code2,
            title: 'Full Stack Development',
            description: 'Complete web applications from frontend to backend with modern technologies.',
            features: [
                'Responsive UI/UX design',
                'Single Page Applications',
                'Progressive Web Apps',
                'Real-time features',
                'Third-party integrations',
            ],
            tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
            color: 'purple',
        },
        {
            icon: Settings,
            title: 'System Architecture',
            description: 'Designing scalable, maintainable system architectures for complex applications.',
            features: [
                'Microservices design',
                'Event-driven architecture',
                'API gateway patterns',
                'Service mesh implementation',
                'System documentation',
            ],
            tech: ['Docker', 'Kubernetes', 'RabbitMQ', 'Redis'],
            color: 'orange',
        },
        {
            icon: Cloud,
            title: 'Cloud & DevOps',
            description: 'Cloud infrastructure setup, deployment automation, and CI/CD pipelines.',
            features: [
                'AWS infrastructure setup',
                'CI/CD pipeline configuration',
                'Container orchestration',
                'Monitoring & logging',
                'Auto-scaling configuration',
            ],
            tech: ['AWS', 'Docker', 'GitHub Actions', 'Terraform'],
            color: 'indigo',
        },
        {
            icon: Shield,
            title: 'API Development',
            description: 'Secure, well-documented APIs with comprehensive testing and monitoring.',
            features: [
                'RESTful API design',
                'GraphQL implementation',
                'API documentation',
                'Rate limiting & throttling',
                'API versioning',
            ],
            tech: ['OpenAPI', 'Swagger', 'Postman', 'GraphQL'],
            color: 'red',
        },
    ];

    const process = [
        {
            step: '01',
            title: 'Discovery & Planning',
            description: 'Understanding your requirements, technical needs, and business goals.',
        },
        {
            step: '02',
            title: 'Architecture & Design',
            description: 'Designing scalable system architecture with best practices and patterns.',
        },
        {
            step: '03',
            title: 'Development & Testing',
            description: 'Building robust solutions with comprehensive testing and quality assurance.',
        },
        {
            step: '04',
            title: 'Deployment & Support',
            description: 'Smooth deployment to production with ongoing maintenance and support.',
        },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 py-20">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                        Services I <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Offer</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Comprehensive development services to bring your ideas to life
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-600 transition-all"
                        >
                            <div className={`w-16 h-16 bg-${service.color}-100 dark:bg-${service.color}-950 rounded-2xl flex items-center justify-center mb-6`}>
                                <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                {service.title}
                            </h3>
                            
                            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                                    What's Included:
                                </h4>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                                {service.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Process Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            How I Work
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            A streamlined process for successful project delivery
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-2xl font-bold rounded-2xl mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        {item.description}
                                    </p>
                                </div>
                                {index < process.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent -translate-x-1/2" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-blue-600 to-indigo-600 p-12 rounded-3xl text-center text-white"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Let's discuss how I can help you build scalable, secure solutions for your business.
                    </p>
                    <Link to={createPageUrl('Contact')}>
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 group">
                            Get In Touch
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
            </div>
        </div>
    );
}