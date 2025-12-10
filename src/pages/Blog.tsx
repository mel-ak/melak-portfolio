import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Blog() {
    const [selectedTag, setSelectedTag] = useState('all');

    const tags = ['all', 'backend', 'payments', 'microservices', 'devops', 'tutorial'];

    const posts = [
        {
            title: 'Building Scalable Microservices with Node.js and NestJS',
            excerpt: 'Learn how to design and implement a microservices architecture that scales with your business needs.',
            content: 'In this comprehensive guide, we explore the fundamentals of microservices architecture and how to implement it using Node.js and NestJS...',
            date: '2024-12-15',
            readTime: '8 min read',
            tags: ['backend', 'microservices'],
            author: 'Melake Sisay',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
        },
        {
            title: 'Payment Gateway Integration: Best Practices',
            excerpt: 'A deep dive into integrating payment gateways securely and efficiently in your applications.',
            content: 'Payment integration is critical for any e-commerce or fintech application. This article covers security, compliance, and implementation strategies...',
            date: '2024-12-10',
            readTime: '10 min read',
            tags: ['payments', 'backend'],
            author: 'Melake Sisay',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
        },
        {
            title: 'Docker and Kubernetes for Backend Developers',
            excerpt: 'Understanding containerization and orchestration for modern backend applications.',
            content: 'Containerization has revolutionized how we deploy applications. Learn the essentials of Docker and Kubernetes...',
            date: '2024-12-05',
            readTime: '12 min read',
            tags: ['devops', 'backend'],
            author: 'Melake Sisay',
            image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80',
        },
        {
            title: 'Building Event-Driven Architectures',
            excerpt: 'Design patterns and implementation strategies for event-driven systems.',
            content: 'Event-driven architecture is essential for building responsive, scalable systems. This guide walks through implementation patterns...',
            date: '2024-11-28',
            readTime: '9 min read',
            tags: ['microservices', 'backend'],
            author: 'Melake Sisay',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        },
        {
            title: 'Database Design for High Performance',
            excerpt: 'Optimizing database schemas and queries for maximum performance.',
            content: 'Database performance is crucial for application success. Learn optimization techniques and design patterns...',
            date: '2024-11-20',
            readTime: '11 min read',
            tags: ['backend', 'tutorial'],
            author: 'Melake Sisay',
            image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
        },
        {
            title: 'Implementing CI/CD Pipelines with GitHub Actions',
            excerpt: 'Automating your deployment process for faster and more reliable releases.',
            content: 'Continuous Integration and Deployment are essential for modern development workflows. This tutorial shows how to set up CI/CD...',
            date: '2024-11-15',
            readTime: '7 min read',
            tags: ['devops', 'tutorial'],
            author: 'Melake Sisay',
            image: 'https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?w=800&q=80',
        },
    ];

    const filteredPosts = selectedTag === 'all' 
        ? posts 
        : posts.filter(post => post.tags.includes(selectedTag));

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
                        Blog & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Insights</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Thoughts on software development, system design, and technology
                    </p>
                </motion.div>

                {/* Tag Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-6 py-3 rounded-xl font-medium transition-all capitalize ${
                                selectedTag === tag
                                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                                    : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </motion.div>

                {/* Featured Post */}
                {selectedTag === 'all' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-16"
                    >
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="p-12 text-white">
                                    <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium mb-6">
                                        Featured Post
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                        {posts[0].title}
                                    </h2>
                                    <p className="text-blue-100 mb-6 leading-relaxed">
                                        {posts[0].excerpt}
                                    </p>
                                    <div className="flex items-center space-x-6 mb-6 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{new Date(posts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{posts[0].readTime}</span>
                                        </div>
                                    </div>
                                    <Button className="bg-white text-blue-600 hover:bg-blue-50 group">
                                        Read Article
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                                <div className="h-full min-h-[400px] relative">
                                    <img
                                        src={posts[0].image}
                                        alt={posts[0].title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.slice(selectedTag === 'all' ? 1 : 0).map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-600 transition-all shadow-lg group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {post.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-800">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-blue-600" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Empty State */}
                {filteredPosts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            No posts found with this tag.
                        </p>
                    </motion.div>
                )}
            </div>
            </div>
        </div>
    );
}