

import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
  ];

  const services = [
    'Backend Development',
    'Payment Integration',
    'API Development',
    'System Architecture',
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Addis Ababa, Ethiopia', link: null },
    { icon: Phone, text: '+251 935 587 112', link: 'tel:+251935587112' },
    { icon: Mail, text: 'melakesisay@gmail.com', link: 'mailto:melakesisay@gmail.com' },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/mel-ak',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/melake-sisay-ab6a3a105/',
    },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4">Melak Sisay</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Full Stack Developer specializing in payment systems, microservices architecture, and scalable web applications.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-slate-300">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <div className="flex items-start space-x-3">
                      <info.icon className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                      <div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-slate-300 hover:text-white transition-colors"
                          >
                            {info.text}
                          </a>
                        ) : (
                          <span className="text-slate-300">{info.text}</span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">
                © 2025 Melak Sisay. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-slate-400">
                <span>Built with</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-slate-800 rounded text-xs font-medium">React</span>
                  <span>&</span>
                  <span className="px-2 py-1 bg-slate-800 rounded text-xs font-medium">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}