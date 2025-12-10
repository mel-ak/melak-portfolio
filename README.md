# Melak Sisay - Full Stack Developer Portfolio

A modern, professional portfolio website showcasing full stack development expertise, payment systems integration, and microservices architecture. Built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](./public/vite.svg)

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with dark/light theme support
- **Performance Optimized**: Lazy loading, code splitting, optimized images
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- **PWA Ready**: Service worker, web app manifest, offline support
- **Contact Form**: EmailJS integration with validation
- **Animations**: Framer Motion for smooth transitions
- **Error Boundaries**: Graceful error handling
- **Type Safe**: Full TypeScript coverage

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

### UI Components
- **Radix UI** - Accessible component primitives
- **Sonner** - Toast notifications
- **EmailJS** - Contact form handling

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/mel-ak/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy the example environment file and configure your EmailJS credentials:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your EmailJS configuration:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   > **Note**: Get your EmailJS credentials from [emailjs.com](https://www.emailjs.com/)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` to view the portfolio.

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── portfolio/       # Portfolio-specific components
│   └── ui/             # Generic UI components
├── pages/              # Route components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
└── utils/              # Helper functions
```

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set it up:

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Copy the service ID, template ID, and public key to your `.env` file

### Email Template Variables

The contact form sends these variables to your email template:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (recipient)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy** - Vercel will handle the build automatically

### Netlify

1. **Connect your repository** to Netlify
2. **Add environment variables** in Netlify dashboard
3. **Set build command** to `npm run build`
4. **Set publish directory** to `dist`
5. **Deploy**

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Melak Sisay**
- Website: [melak-sisay.dev](https://melak-sisay.dev)
- LinkedIn: [melake-sisay](https://www.linkedin.com/in/melake-sisay-ab6a3a105/)
- GitHub: [@mel-ak](https://github.com/mel-ak)
- Email: melakesisay@gmail.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React
- [EmailJS](https://www.emailjs.com/) - Send emails directly from JavaScript

---

⭐ **Star this repo** if you found it helpful!
