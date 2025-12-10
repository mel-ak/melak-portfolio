import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ChevronRight, Zap, Layers, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const blogPost = {
  title: 'Building Scalable Microservices with Node.js and NestJS',
  excerpt: 'Learn how to design and implement a microservices architecture that scales with your business needs using Node.js and NestJS.',
  date: '2024-12-15',
  readTime: '15 min read',
  author: 'Melake Sisay',
  image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
  tags: ['backend', 'microservices', 'nestjs', 'nodejs'],
  content: {
    introduction: {
      title: 'Introduction',
      content: `Modern applications often outgrow monolithic architectures: as features increase, teams expand, and performance demands grow, a monolith becomes harder to maintain, slower to evolve, and more brittle under load. That's where microservices come in — splitting a large application into smaller, independently deployable services, each responsible for a specific business domain.

With NestJS, a progressive framework for Node.js built on TypeScript and inspired by Angular's modular structure, building microservices becomes organized, maintainable, and scalable. NestJS brings built-in support for different communication transports (HTTP, message-based, gRPC, etc.) and encourages modular design, which fits microservices architecture well.

In this post, we'll explore how to design and implement a scalable microservices architecture using Node.js + NestJS, covering design principles, inter-service communication patterns, data management, deployment, and best practices.`
    },
    benefits: {
      title: 'Why Use Microservices and Why NestJS',
      subsections: [
        {
          title: 'Benefits of Microservices (vs Monolith)',
          content: [
            '**Loose coupling & service autonomy** — Each service is independent: a failure or update in one doesn\'t necessarily impact others. This keeps systems resilient.',
            '**Independent scalability** — You can scale only the services that need more resources, rather than the entire application.',
            '**Polyglot persistence** — Microservices allow different services to use different data stores if needed (SQL, NoSQL, in-memory cache, etc.), depending on their requirements.',
            '**Faster development & deployment cycles** — Smaller codebases per service, independent deployments, easier testing; teams can own services separately.'
          ]
        },
        {
          title: 'Why NestJS Fits Perfectly',
          content: [
            '**Modular architecture & Dependency Injection** — NestJS uses modules and DI, which helps organize services, enforce separation of concerns, and make components swappable and testable.',
            '**Built-in support for multiple transport layers** — Whether you want HTTP REST, message queues (RabbitMQ, Kafka), or gRPC, NestJS supports inter-service communication.',
            '**Flexibility to choose communication and data strategies** — You can combine event-driven communication, caching, asynchronous processing, and other patterns depending on your use case.'
          ]
        }
      ]
    },
    architecture: {
      title: 'High-Level Architecture Overview',
      content: `Here's a typical high-level architecture for a Node.js + NestJS microservices system:

Each microservice is self-contained, with its own data store. Services communicate via message brokers (for async/event-driven flows) or via RPC/HTTP/gRPC (for synchronous needs). An API Gateway serves as the external entry point, handles routing, authentication/authorization, rate limiting, request transformation, etc.

This separation ensures clear boundaries, maintainability, and scalability.`,
      diagram: {
        title: 'Architecture Diagram',
        description: 'Client → API Gateway → Microservices → Databases/Message Broker/Cache',
        components: [
          { name: 'API Gateway / Edge Service', description: 'NestJS HTTP service handling external requests' },
          { name: 'Auth Service', description: 'Handles login, JWT, user identity' },
          { name: 'User Service', description: 'Manages user profile data' },
          { name: 'Order Service', description: 'Handles orders, purchases' },
          { name: 'Payment Service', description: 'Handles payments, transactions' },
          { name: 'Notification Service', description: 'Email, SMS, push notifications' }
        ]
      }
    },
    design: {
      title: 'Designing Microservices with NestJS — Step by Step',
      steps: [
        {
          number: '1',
          title: 'Define Service Boundaries (Domain-Driven Design)',
          content: `Use Domain-Driven Design (DDD) to define "bounded contexts"—each service should focus on one business capability (e.g. User, Auth, Orders, Payments).

- Avoid sharing databases across services unless absolutely necessary. Each microservice should own its data.
- Design clear API contracts for each service: what endpoints/events it exposes, what input/output formats, and how it behaves.`
        },
        {
          number: '2',
          title: 'Set up NestJS Projects & Modules',
          content: `Create each microservice as a separate NestJS project (or sub-project) — you can use a monorepo structure (shared types/dependencies) or separate repos depending on team size and preferences.

- For each service, use modules to organize features (e.g. controllers, services, repositories).
- Use NestJS's dependency injection (DI) system so that dependencies are injected rather than hard-coded.`
        },
        {
          number: '3',
          title: 'Communication Patterns Between Services',
          content: `Depending on your requirements (synchronous vs asynchronous, performance, coupling), choose communication patterns wisely:

**Message-based / Event-driven Communication**
- Use message brokers — e.g. Apache Kafka, RabbitMQ, Redis — to implement asynchronous, event-driven communication.
- Services can emit "UserCreated", "OrderPlaced", or "PaymentProcessed" events, which other services listen to.

**Synchronous / RPC / gRPC Communication**
- For operations that require immediate response (e.g. authentication, real-time data fetch), you can use HTTP/REST or gRPC for low-latency, strongly typed internal calls.
- Use synchronous calls sparingly; overusing sync calls undermines the resilience benefits of microservices.`
        },
        {
          number: '4',
          title: 'Data Management & Persistence',
          content: `Give each service its own database (or data store) to avoid coupling through shared schema:

- Choose the database type based on service needs: relational (PostgreSQL, MySQL), NoSQL (MongoDB, Cassandra), or in-memory (Redis) for caching.
- For operations that span multiple services, consider patterns such as event sourcing, sagas, or compensating transactions — accept eventual consistency.`
        },
        {
          number: '5',
          title: 'Configuration, Deployment, and Orchestration',
          content: `Use environment variables or a configuration module to manage environment-specific settings:

- Containerize services using Docker, ensuring each runs in a self-contained environment.
- For orchestration in production, tools like Kubernetes are often used.
- Set up CI/CD pipelines to automate testing, building, deployment.`
        },
        {
          number: '6',
          title: 'Observability, Monitoring & Logging',
          content: `Use centralized logging so that logs from different services are aggregated and searchable:

- Implement distributed tracing and monitoring to track request flows, measure latency, detect bottlenecks.
- Plan for failures: timeouts, retries, circuit breaker patterns, graceful degradation.`
        }
      ]
    },
    example: {
      title: 'Example: What a Simple Microservices Setup Looks Like',
      content: `Here's a sketch of what code structure and setup might look like for a simple "Order → Payment → Notification" flow:`,
      flow: [
        {
          service: 'API Gateway (NestJS HTTP service)',
          description: 'Accepts client requests (e.g. "create order"), validates/authenticates request, then forwards to Order Service'
        },
        {
          service: 'Order Service',
          description: 'Creates new order record in its own database, emits an "OrderCreated" event via message broker'
        },
        {
          service: 'Payment Service',
          description: 'Listens for "OrderCreated" events, processes payment, emits "PaymentProcessed" event'
        },
        {
          service: 'Notification Service',
          description: 'Subscribes to events like "OrderCreated", "PaymentProcessed", sends email / SMS / push notification to user'
        }
      ],
      infrastructure: [
        'Kafka or RabbitMQ broker',
        'Redis (for caching or shared state)',
        'Individual service containers'
      ]
    },
    challenges: {
      title: 'Challenges, Trade-offs & When to Use (or Not Use) Microservices',
      challenges: [
        {
          title: 'Complexity',
          description: 'Microservices introduce distributed system challenges: network failures, message ordering, data consistency, versioning, monitoring overhead, testing complexity.'
        },
        {
          title: 'Overhead',
          description: 'For small applications or teams, the overhead of building/maintaining multiple services may not be worth it.'
        },
        {
          title: 'Data consistency',
          description: 'Without careful design (sagas, eventual consistency, compensating transactions), distributed data may end up inconsistent.'
        },
        {
          title: 'Testing and deployment complexity',
          description: 'Each service needs its own tests, and integration testing becomes harder. Observability, logging, tracing must be well-planned.'
        }
      ],
      recommendation: `Therefore: microservices are powerful — but should be adopted when the benefits (scalability, modularity, team autonomy, performance) outweigh the added complexity. For small/simple apps, a well-structured modular monolith may still be the better choice.`
    },
    bestPractices: {
      title: 'Best Practices & Recommendations',
      practices: [
        'Use Domain-Driven Design (DDD) to define service boundaries.',
        'Keep services loosely coupled, with separate codebases and databases.',
        'Use a mixture of synchronous (gRPC/HTTP) and asynchronous (message broker, event-driven) communication depending on use case.',
        'Containerize services and use orchestration (Docker, Kubernetes) to enable scaling, portability, and easy deployment.',
        'Implement centralized configuration management, environment-based configs.',
        'Invest in observability from the start: logging, tracing, metrics, monitoring.',
        'Design for resilience: handle failures gracefully, use timeouts, retries, circuit-breakers.',
        'Automate CI/CD pipelines for testing, building, deployment and rollback.'
      ]
    },
    conclusion: {
      title: 'Conclusion & When to Use This Architecture',
      content: `Using Node.js + NestJS to build a microservices architecture gives you a powerful, flexible, and scalable foundation — especially valuable for growing applications, teams working on multiple domains, or systems expected to scale traffic.

However — microservices are not a silver bullet. They come with complexity. If your application is small or unlikely to grow significantly, or if your team is small, a modular monolith may be better and simpler. Only introduce microservices when there's a clear need: high scalability requirements, team autonomy, or complex domain separation.

If you decide to go microservices — following the best practices above will give you a strong, maintainable architecture that can grow with your business needs.`
    },
    furtherReading: {
      title: 'Suggested Further Reading & Templates',
      resources: [
        {
          title: 'NestJS Microservices Tutorial',
          description: 'A recent example tutorial building a NestJS microservices architecture with Kafka and Redis',
          link: '#'
        },
        {
          title: 'Production-Ready Reference Architecture',
          description: 'A production-ready reference architecture built with NestJS, gRPC, PostgreSQL, Redis, and API Gateway',
          link: '#'
        },
        {
          title: 'Official NestJS Documentation',
          description: 'Official NestJS documentation on microservices and transport layers',
          link: '#'
        }
      ]
    }
  }
};

export default function BlogPost() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        text: blogPost.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleBookmark = () => {
    // Implement bookmark functionality
    console.log('Bookmark functionality to be implemented');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24 sm:pt-20">
      {/* Hero Header */}
      <div className="relative h-96 sm:h-[450px] overflow-hidden">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-8">
            <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="px-4 sm:px-6 lg:px-8"
            >
              <Link to="/blog" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                  {blogPost.title}
                </h1>

                <p className="text-xl sm:text-2xl text-white/95 mb-8 max-w-4xl leading-relaxed">
                  {blogPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2.5 bg-white/10 px-3 py-2 rounded-full">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-medium">{blogPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/10 px-3 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{new Date(blogPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/10 px-3 py-2 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{blogPost.readTime}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20">
        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-2xl p-6 sm:p-8 mb-12 border border-slate-200 dark:border-slate-800 shadow-sm"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-600 rounded-full" />
            Table of Contents
          </h3>
          <nav className="grid sm:grid-cols-2 gap-2">
            {Object.entries(blogPost.content).map(([key, section], index) => (
              <a
                key={key}
                href={`#${key}`}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 group"
              >
                <span className="text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:scale-110 transition-transform">
                  {index + 1}.
                </span>
                <span className="text-sm font-medium">{section.title}</span>
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Introduction */}
        <motion.section
          id="introduction"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16 scroll-mt-24"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
            {blogPost.content.introduction.title}
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-slate-900 prose-headings:dark:text-white prose-p:text-slate-700 prose-p:dark:text-slate-300 prose-p:leading-relaxed prose-strong:text-slate-900 prose-strong:dark:text-white">
            {blogPost.content.introduction.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          id="benefits"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16 scroll-mt-24"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
            {blogPost.content.benefits.title}
          </h2>
          
          <div className="space-y-8">
            {blogPost.content.benefits.subsections.map((subsection, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
                  {subsection.title}
                </h3>
                <ul className="space-y-4">
                  {subsection.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Architecture Overview */}
        <motion.section
          id="architecture"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            {blogPost.content.architecture.title}
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            {blogPost.content.architecture.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Architecture Diagram */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              {blogPost.content.architecture.diagram.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {blogPost.content.architecture.diagram.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {blogPost.content.architecture.diagram.components.map((component, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{component.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Design Steps */}
        <motion.section
          id="design"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {blogPost.content.design.title}
          </h2>
          
          <div className="space-y-8">
            {blogPost.content.design.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      {step.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                {index < blogPost.content.design.steps.length - 1 && (
                  <div className="ml-6 mt-4 w-0.5 h-8 bg-slate-200 dark:bg-slate-700" />
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Example Section */}
        <motion.section
          id="example"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            {blogPost.content.example.title}
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            {blogPost.content.example.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Flow Diagram */}
          <div className="space-y-4 mb-8">
            {blogPost.content.example.flow.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{item.service}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
                {index < blogPost.content.example.flow.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-slate-400" />
                )}
              </div>
            ))}
          </div>

          {/* Infrastructure */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Shared Infrastructure (Docker Compose)</h4>
            <ul className="space-y-2">
              {blogPost.content.example.infrastructure.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Challenges Section */}
        <motion.section
          id="challenges"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {blogPost.content.challenges.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {blogPost.content.challenges.challenges.map((challenge, index) => (
              <div key={index} className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">{challenge.title}</h3>
                <p className="text-red-800 dark:text-red-200">{challenge.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-800">
            <p className="text-amber-800 dark:text-amber-200 font-medium">
              {blogPost.content.challenges.recommendation}
            </p>
          </div>
        </motion.section>

        {/* Best Practices */}
        <motion.section
          id="bestPractices"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {blogPost.content.bestPractices.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {blogPost.content.bestPractices.practices.map((practice, index) => (
              <div key={index} className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">{practice}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          id="conclusion"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            {blogPost.content.conclusion.title}
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {blogPost.content.conclusion.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Further Reading */}
        <motion.section
          id="furtherReading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {blogPost.content.furtherReading.title}
          </h2>
          
          <div className="space-y-4">
            {blogPost.content.furtherReading.resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="block bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-600 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{resource.description}</p>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-16"
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Button
                onClick={handleShare}
                variant="outline"
                size="sm"
                className="gap-2 rounded-full border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
              >
                <Share2 className="w-4 h-4" />
                Share Article
              </Button>
              <Button
                onClick={handleBookmark}
                variant="outline"
                size="sm"
                className="gap-2 rounded-full border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
              >
                <Bookmark className="w-4 h-4" />
                Save for Later
              </Button>
            </div>
            
            <Link to="/blog">
              <Button variant="outline" size="sm" className="gap-2 rounded-full border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-600 dark:hover:border-blue-400 transition-all">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </motion.div>
      </article>

      {/* Related Articles */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pb-16 sm:pb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Continue Reading</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore more articles about backend development, microservices, and modern software architecture
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-600 transition-all shadow-sm hover:shadow-lg group cursor-pointer">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              <Database className="w-4 h-4" />
              Backend Development
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Payment Gateway Integration: Best Practices
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              A deep dive into integrating payment gateways securely and efficiently in your applications.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span>10 min read</span>
                <span>•</span>
                <span>Dec 10, 2024</span>
              </div>
              <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 hover:border-green-600 dark:hover:border-green-600 transition-all shadow-sm hover:shadow-lg group cursor-pointer">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              DevOps & Architecture
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
              Docker and Kubernetes for Backend Developers
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Understanding containerization and orchestration for modern backend applications.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span>12 min read</span>
                <span>•</span>
                <span>Dec 5, 2024</span>
              </div>
              <ChevronRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
