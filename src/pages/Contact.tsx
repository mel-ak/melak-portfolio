import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, MessageSquare, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS configuration is missing. Please check your environment variables.');
            }

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_name: 'Melak Sisay',
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setSubmitStatus('success');
            toast({
                title: "Message sent successfully!",
                description: "Thank you for your message. I'll get back to you soon.",
            });

            // Reset form
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');
            toast({
                title: "Failed to send message",
                description: "Please try again or contact me directly via email.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'melakesisay@gmail.com',
            link: 'mailto:melakesisay@gmail.com',
            color: 'indigo',
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+251 935 587 112',
            link: 'tel:+251935587112',
            color: 'indigo',
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'Addis Ababa, Ethiopia',
            link: null,
            color: 'indigo',
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            name: 'GitHub',
            url: 'https://github.com/mel-ak',
            color: 'slate',
        },
        {
            icon: Linkedin,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/melake-sisay-ab6a3a105/',
            color: 'blue',
        },
    ];

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
                        Get In <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Have a project in mind? Let's discuss how I can help bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.01, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="p-3 bg-indigo-100 dark:bg-indigo-950 rounded-xl"
                                >
                                    <MessageSquare className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                </motion.div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    Send a Message
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Your Name *
                                    </label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className={`w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Email Address *
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className={`w-full ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Subject *
                                    </label>
                                    <Input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Project Discussion"
                                        className={`w-full ${errors.subject ? 'border-red-500 focus:border-red-500' : ''}`}
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Message *
                                    </label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell me about your project..."
                                        rows={6}
                                        className={`w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500 ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full group ${
                                        submitStatus === 'success'
                                            ? 'bg-green-600 hover:bg-green-700'
                                            : submitStatus === 'error'
                                            ? 'bg-red-600 hover:bg-red-700'
                                            : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                                    } text-white shadow-lg hover:shadow-xl transition-all`}
                                    size="lg"
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : submitStatus === 'success' ? (
                                        <>
                                            Message Sent
                                            <CheckCircle className="w-4 h-4 ml-2" />
                                        </>
                                    ) : submitStatus === 'error' ? (
                                        <>
                                            Try Again
                                            <XCircle className="w-4 h-4 ml-2" />
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </motion.div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Contact Cards */}
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all shadow-md hover:shadow-lg"
                            >
                                <div className="flex items-start space-x-4">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.2 }}
                                        className="p-3 bg-indigo-100 dark:bg-indigo-950 rounded-xl"
                                    >
                                        <info.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                    </motion.div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                            {info.title}
                                        </h3>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-slate-600 dark:text-slate-400">
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 p-8 rounded-2xl text-white shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">
                                    Connect on Social Media
                                </h3>
                                <p className="text-indigo-100 mb-6">
                                    Follow me on social platforms for updates and insights
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group border border-white/20"
                                        >
                                            <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                            <span className="font-medium">{social.name}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Resume Download */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            className="bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-center shadow-md hover:shadow-lg transition-all"
                        >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                Download My Resume
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                                Get a detailed overview of my experience and skills
                            </p>
                            <motion.a
                                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69367d07bfcde9a09dd882f1/57ab486c6_MelakProfessionalResumev2.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button variant="outline" className="w-full group border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">
                                    <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                    Download PDF Resume
                                </Button>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Availability Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800 p-8 rounded-2xl text-center shadow-lg"
                >
                    <div className="flex items-center justify-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse" />
                        <span className="text-lg font-bold text-green-900 dark:text-green-100">
                            Available for Freelance & Contract Work
                        </span>
                    </div>
                    <p className="text-green-700 dark:text-green-300">
                        I'm currently accepting new projects. Let's work together to build something amazing!
                    </p>
                </motion.div>
                </div>
            </div>
        </div>
    );
}