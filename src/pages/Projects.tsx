import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filters = [
        { id: 'all', name: 'All Projects' },
        { id: 'payment', name: 'Payment Systems' },
        { id: 'microservices', name: 'Microservices' },
        { id: 'fullstack', name: 'Full Stack' },
        { id: 'tools', name: 'Developer Tools' },
    ];

    const projects = [
        {
            title: 'Kpay Payment Gateway',
            category: 'payment',
            description: 'Comprehensive payment gateway system supporting multiple African payment providers including Telebirr, CBE Birr, and Chapa.',
            features: [
                'Multi-provider payment integration',
                'Real-time transaction processing',
                'Webhook management',
                'Merchant dashboard',
                'Compliance and security standards',
            ],
            tech: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'AWS'],
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
            color: 'blue',
        },
        {
            title: 'MojoPay Microservices System',
            category: 'microservices',
            description: 'Scalable microservices-based payment processing platform with event-driven architecture.',
            features: [
                'Microservices architecture',
                'Event-driven communication',
                'Distributed transaction handling',
                'Service orchestration',
                'High availability design',
            ],
            tech: ['Go Fiber', 'Node.js', 'RabbitMQ', 'PostgreSQL', 'Docker', 'Kubernetes'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            color: 'purple',
        },
        {
            title: 'Marketplace-as-a-Service Platform',
            category: 'fullstack',
            description: 'White-label e-commerce platform enabling businesses to launch their own marketplaces quickly.',
            features: [
                'Multi-tenant architecture',
                'Vendor management system',
                'Product catalog management',
                'Order processing & fulfillment',
                'Payment gateway integration',
            ],
            tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS S3'],
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
            color: 'green',
        },
        {
            title: 'ERP Reporting System',
            category: 'fullstack',
            description: 'Enterprise resource planning system with advanced reporting and analytics for textile manufacturing.',
            features: [
                'Real-time data analytics',
                'Custom report generation',
                'Inventory management',
                'Production tracking',
                'Financial reporting',
            ],
            tech: ['Laravel', 'Vue.js', 'MySQL', 'Chart.js', 'Redis'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            color: 'orange',
        },
        {
            title: 'Centwork Job & Engagement Platform',
            category: 'fullstack',
            description: 'Comprehensive platform connecting employers with talent, featuring job listings and engagement tools.',
            features: [
                'Job posting and search',
                'Applicant tracking system',
                'Real-time messaging',
                'Profile management',
                'Matching algorithm',
            ],
            tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
            image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
            color: 'indigo',
        },
        {
            title: 'Ethiopian Calendar Library',
            category: 'tools',
            description: 'Open-source NPM package for Ethiopian calendar conversion and date manipulation.',
            features: [
                'Gregorian to Ethiopian conversion',
                'Date manipulation utilities',
                'Localization support',
                'TypeScript support',
                'Comprehensive documentation',
            ],
            tech: ['TypeScript', 'Node.js', 'Jest', 'NPM'],
            image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80',
            color: 'teal',
        },
    ];

    const filteredProjects = useMemo(() => {
        let filtered = activeFilter === 'all'
            ? projects
            : projects.filter(project => project.category === activeFilter);

        if (searchTerm) {
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        return filtered;
    }, [activeFilter, searchTerm]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors py-20">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                        Featured <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        A showcase of complex systems, payment integrations, and scalable architectures
                    </p>
                </motion.div>

                {/* Filters and Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-16"
                >
                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="relative max-w-md w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 z-10" />
                            <Input
                                type="text"
                                placeholder="Search projects by name, description, or tech..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-10 py-3 rounded-full border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500 bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow"
                            />
                            {searchTerm && (
                                <motion.button
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </motion.button>
                            )}
                        </div>
                    </motion.div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                    <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 mr-4">
                        <Filter className="w-5 h-5" />
                        <span className="font-medium">Filter:</span>
                    </div>
                    {filters.map((filter, index) => (
                        <motion.button
                            key={filter.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setActiveFilter(filter.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                activeFilter === filter.id
                                    ? 'bg-indigo-600 text-white shadow-lg'
                                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                            }`}
                        >
                            {filter.name}
                        </motion.button>
                    ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all shadow-lg hover:shadow-xl"
                            >
                                {/* Project Image */}
                                <div className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-800 group">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${
                                        project.color === 'blue' ? 'from-indigo-600/60 via-indigo-600/20 to-transparent' :
                                        project.color === 'purple' ? 'from-purple-600/60 via-purple-600/20 to-transparent' :
                                        project.color === 'green' ? 'from-green-600/60 via-green-600/20 to-transparent' :
                                        project.color === 'orange' ? 'from-orange-600/60 via-orange-600/20 to-transparent' :
                                        project.color === 'indigo' ? 'from-indigo-600/60 via-indigo-600/20 to-transparent' :
                                        'from-teal-600/60 via-teal-600/20 to-transparent'
                                    } transition-opacity duration-300 group-hover:opacity-80`} />
                                </div>

                                {/* Project Content */}
                                <div className="p-6 md:p-8">
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm md:text-base">
                                        {project.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                                            Key Features:
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.features.slice(0, 3).map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                                                    className="text-sm text-slate-600 dark:text-slate-400 flex items-start"
                                                >
                                                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 + idx * 0.03 }}
                                                whileHover={{ scale: 1.1 }}
                                                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                                                    project.color === 'blue' ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300' :
                                                    project.color === 'purple' ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300' :
                                                    project.color === 'green' ? 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300' :
                                                    project.color === 'orange' ? 'bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300' :
                                                    project.color === 'indigo' ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' :
                                                    'bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300'
                                                }`}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1"
                                        >
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full group border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                                View Details
                                            </Button>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* No Results */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-20"
                    >
                        <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                            <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
                                <Search className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                No Projects Found
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Try adjusting your search or filter criteria.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setActiveFilter('all');
                                }}
                                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
                            >
                                Clear Filters
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
            </div>
        </div>
    );
}