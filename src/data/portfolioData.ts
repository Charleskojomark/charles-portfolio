export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Backend' | 'AI' | 'DevOps';
  featured?: boolean;
  isCaseStudy?: boolean;
  githubUrl?: string;
  headline: string;
  description: string;
  metrics: string;
  architectureHighlights: string[];
  stack: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  iconName: string;
  skills: { name: string; level: string; highlight?: boolean }[];
}

export interface ServiceTier {
  id: string;
  name: string;
  timeframe: string;
  priceRange: string;
  minPrice: number;
  maxPrice: number;
  description: string;
  deliverables: string[];
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  tiers: ServiceTier[];
}

export const PROFILE = {
  name: 'Charles Kojo Mark',
  shortName: 'Charles',
  title: 'Senior Backend Engineer | AI Integration & DevOps',
  tagline: 'Python · Distributed Systems · Cloud Infrastructure · AI Systems',
  location: 'Aba, Nigeria (Remote-friendly)',
  email: 'markcharleskojo@gmail.com',
  phone: '+234 708 236 7382', // For Rate Sheet / Resume document only
  github: 'https://github.com/Charleskojomark',
  linkedin: 'https://linkedin.com/in/markcharleskojo',
  githubUsername: 'Charleskojomark',
  currentRole: 'Backend Engineer (Lead) @ Job Drone Ltd',
  availability: 'Available for high-impact contracts & senior roles',
  heroSubtext: 'Backend, AI integration, and DevOps engineer with 4+ years building high-throughput Python systems — service architecture, payment infrastructure, RAG/LLM-powered applications, CI/CD, and cloud infrastructure. Reduced latency by 40%, maintained 99.9% uptime for platforms serving 500k+ users.',
  stats: [
    { label: 'Production SLA', value: '99.9%', subtext: 'Maintained across high-scale apps' },
    { label: 'P95 Latency Reduction', value: '40%', subtext: 'Achieved via query & cache tuning' },
    { label: 'End Users Served', value: '500k+', subtext: 'Across fintech & media systems' },
    { label: 'Years Experience', value: '4+', subtext: 'Python, Cloud & AI engineering' },
    { label: 'Secure Endpoints', value: '60+', subtext: 'Zero-trust OAuth2 / RBAC / OTP' },
  ],
  education: [
    {
      degree: 'B.Tech, Software Development',
      institution: 'International University of Applied Sciences (IU), Germany',
      period: 'Aug 2022 – Jul 2025',
      focus: 'Distributed Systems, Software Architecture & Database Engineering'
    }
  ],
  certifications: [
    {
      name: 'Meta Backend Developer Professional Certificate',
      issuer: 'Meta',
      year: '2024',
      skills: 'Python, Django, Database Systems, API Design, Security'
    }
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'job-drone',
    role: 'Backend Engineer (Lead)',
    company: 'Job Drone Ltd',
    location: 'UK-based Startup (Remote)',
    period: 'Jan 2026 – Present',
    badge: 'Current / Lead',
    summary: 'Lead backend architect orchestrating automated ETL data pipelines, fault-tolerant payment rails, and zero-downtime containerized deployments on GCP.',
    bullets: [
      'Architected resilient ETL ingestion pipeline processing 100+ high-fidelity job listings/week with automated deduplication and schema normalization.',
      'Engineered Stripe & PayPal payment infrastructure featuring strict idempotency keys, atomic transaction rollbacks, and automated webhook reconciliation.',
      'Designed comprehensive authentication and authorization boundary (JWT, RBAC, OTP + Google OAuth) securing 60+ microservice endpoints.',
      'Built automated zero-downtime CI/CD pipelines deploying to GCP Cloud Run using blue-green release strategies with automated canary rollbacks.'
    ],
    stack: ['FastAPI', 'PostgreSQL', 'GCP Cloud Run', 'Docker', 'GitHub Actions', 'Stripe API', 'PayPal SDK', 'JWT/RBAC']
  },
  {
    id: 'real-naija-gist',
    role: 'Backend Engineer',
    company: 'RealNaijaGist',
    location: 'News & Entertainment Platform (Remote)',
    period: 'Jan 2023 – Present',
    badge: 'Production Scale',
    summary: 'Sole backend owner of a high-concurrency Django monolith serving hundreds of thousands of active digital media consumers.',
    bullets: [
      'Owned and modernized core Django monolith, handling high-traffic news peaks with robust query optimization and database connection pooling.',
      'Refactored PostgreSQL indexing and introduced multi-tier Redis caching, slashing database CPU load by 35% during breaking-news traffic surges.',
      'Constructed an asynchronous media processing pipeline using Cloudinary and background workers for automated image optimization and video streaming.'
    ],
    stack: ['Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Cloudinary', 'Celery', 'Nginx']
  },
  {
    id: 'ojm-electrical',
    role: 'Backend Engineer',
    company: 'OJM Electrical Company',
    location: 'Abia State, Nigeria',
    period: 'Jun 2024 – Aug 2024',
    summary: 'Engineered a specialized geolocation scheduling engine and real-time technician dispatch matching platform.',
    bullets: [
      'Engineered geolocation-based dispatch engine that calculated proximity and availability, reducing technician booking errors by 45%.',
      'Optimized P95 query latency by 40% through targeted composite indexing, query set denormalization, and Redis memory caching.',
      'Implemented Celery + Redis asynchronous messaging pipeline featuring exponential backoff retries and Dead Letter Queues (DLQ) for mission-critical notifications.'
    ],
    stack: ['Django', 'PostgreSQL', 'Redis', 'Celery', 'GeoDjango', 'REST APIs']
  },
  {
    id: 'somies-logistics',
    role: 'Backend Engineer',
    company: "Somie's Logistics",
    location: 'Lagos, Nigeria',
    period: 'Dec 2024 – Mar 2025',
    summary: 'Spearheaded automated logistics document intelligence and vector-assisted query routing pipelines.',
    bullets: [
      'Engineered an automated document ingestion pipeline processing 200+ compliance documents with semantic chunking and PostgreSQL full-text search.',
      'Created confidence-scored query routing system integrating automated LLM response generation with seamless human dispatcher fallback.',
      'Drastically reduced customer support resolution latency from multiple hours down to under 2 minutes.'
    ],
    stack: ['Python', 'PostgreSQL', 'n8n', 'Supabase', 'Semantic Embeddings', 'Vector Search']
  },
  {
    id: 'ighub',
    role: 'Backend Engineering Instructor & Curriculum Lead',
    company: 'Innovation Growth Hub',
    location: 'Aba, Nigeria',
    period: 'Aug 2024 – Present (Part-time)',
    badge: 'Mentorship',
    summary: 'Directed backend curriculum development and mentored 50+ emerging software engineers in modern distributed systems design.',
    bullets: [
      'Designed and delivered comprehensive backend syllabus covering API engineering, relational database normalization, Git CI/CD, and system architecture.',
      'Engineered custom internal LMS developer tooling to automate student code reviews and automated test verification for assignments.',
      'Mentored students into junior and mid-level engineering roles at technology firms across West Africa.'
    ],
    stack: ['FastAPI', 'Django', 'Node.js', 'PostgreSQL', 'Git Workflows', 'API Architecture']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'klinik',
    title: 'Klinik',
    category: 'AI',
    featured: true,
    githubUrl: 'https://github.com/Charleskojomark/klinik',
    headline: 'Voice-Native Clinical AI Multi-Agent System',
    description: 'Autonomous clinical consultation pipeline powered by 8 parallel LangGraph agents and Llama 3.1 70B via vLLM and ROCm on enterprise AMD MI300X accelerators.',
    metrics: '13.68s end-to-end clinical consultation pipeline • Real-time Prometheus & Grafana telemetry',
    architectureHighlights: [
      'Multi-agent graph with 8 specialized sub-agents running parallel diagnostic reasoning',
      'vLLM high-throughput inference utilizing ROCm on AMD Instinct MI300X accelerators',
      'Real-time audio streaming ingestion with low-latency structured clinical note synthesis',
      'Integrated Prometheus metrics exporter with Grafana dashboards for latency & token tracking'
    ],
    stack: ['LangGraph', 'JavaScript', 'Llama 3.1 70B', 'vLLM', 'AMD ROCm', 'Prometheus', 'Grafana']
  },
  {
    id: 'smart-doc-assistant',
    title: 'Smart Doc Assistant',
    category: 'AI',
    featured: true,
    githubUrl: 'https://github.com/Charleskojomark/smart-doc-assistant',
    headline: 'Enterprise RAG Document Intelligence System',
    description: 'High-accuracy retrieval-augmented generation (RAG) assistant designed for rapid contextual querying over dense technical and regulatory PDF documents.',
    metrics: 'Sub-second response generation via Groq inference • Pinecone vector indexing',
    architectureHighlights: [
      'Hybrid semantic retrieval combining dense vector similarity with keyword ranking',
      'Context-aware citation tracking preventing hallucinations in source extraction',
      'Groq LPU hardware acceleration paired with FastAPI asynchronous request handlers',
      'Modular document chunking with metadata enrichment for granular filtering'
    ],
    stack: ['Python', 'LlamaIndex', 'LangChain', 'Pinecone', 'Groq', 'FastAPI', 'Streamlit']
  },
  {
    id: 'gigflow',
    title: 'GigFlow',
    category: 'Backend',
    githubUrl: 'https://github.com/Charleskojomark/gigflow',
    headline: 'Freelance Marketplace REST API with Real-Time Rails',
    description: 'Production-ready backend API supporting contract negotiation, milestone escrow payments, and live bidirectional communication between clients and freelancers.',
    metrics: 'WebSocket real-time events • Paystack webhook idempotency verification',
    architectureHighlights: [
      'Real-time chat and contract status streaming utilizing Socket.io and Redis pub/sub',
      'Secure escrow workflow integrated with Paystack APIs with cryptographically verified webhooks',
      'MongoDB optimized schema with atomic transaction sessions for escrow operations',
      'Role-based access control protecting contract milestones and dispute resolution'
    ],
    stack: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'Redis', 'Socket.io', 'Paystack']
  },
  {
    id: 'fastapi-url-shortener',
    title: 'FastAPI URL Shortener',
    category: 'Backend',
    githubUrl: 'https://github.com/Charleskojomark/fastapi-url-shortener',
    headline: 'High-Throughput Shortening Engine with Sliding Window Rate Limiting',
    description: 'Low-latency link redirection engine designed for high-concurrency redirect traffic with sub-millisecond in-memory caching and real-time click telemetry.',
    metrics: '<1ms cached redirects • Base62 collision-resistant encoding',
    architectureHighlights: [
      'Two-tier caching strategy with Redis caching hot links and MongoDB for durable persistence',
      'Sliding window rate-limiting middleware in Redis to prevent link harvesting abuse',
      'JWT token authentication for developer dashboard and API key generation',
      'Real-time asynchronous analytics collecting geolocation, referrers, and user agents'
    ],
    stack: ['Python', 'FastAPI', 'MongoDB', 'Redis', 'JWT', 'Docker']
  },
  {
    id: 'django-production-starter',
    title: 'Django Production Starter',
    category: 'DevOps',
    githubUrl: 'https://github.com/Charleskojomark/django-production-starter',
    headline: 'Hardened Production-Grade Django API Boilerplate',
    description: 'Pre-configured architectural boilerplate for high-availability Django REST applications, equipped with automated testing, container orchestration, and CI/CD.',
    metrics: 'Zero-configuration Docker environment • Automated GitHub Actions CI/CD matrix',
    architectureHighlights: [
      'Dockerized multi-stage container build minimizing final image footprint',
      'Configured Celery worker & beat scheduling with Redis broker and flower monitoring',
      'Strict security headers, CORS, JWT authentication, and RBAC permission classes',
      'GitHub Actions workflow running linting, Pytest test suites, and Docker image publishing'
    ],
    stack: ['Django', 'DRF', 'PostgreSQL', 'Celery', 'Docker', 'GitHub Actions', 'Redis']
  },
  {
    id: 'system-health-monitor',
    title: 'System Health Monitor',
    category: 'DevOps',
    githubUrl: 'https://github.com/Charleskojomark/system-health-monitor',
    headline: 'Lightweight Linux Telemetry & Automated Alerting Suite',
    description: 'Zero-dependency POSIX shell monitoring daemon delivering automated server health audits, disk warnings, failed authentication alerts, and centralized log rotation.',
    metrics: '0 MB external runtime dependencies • Cron-driven automated scheduling',
    architectureHighlights: [
      'Native Linux /proc parsing for zero-overhead CPU, RAM, and swap tracking',
      'Automated SSH log anomaly detection detecting brute-force intrusions and sending instant alerts',
      'Configurable threshold triggers sending alerts via webhook (Slack/Discord) or SMTP email',
      'Automated log archiving and disk reclamation scripts ensuring 100% filesystem availability'
    ],
    stack: ['Shell', 'Bash', 'Linux Syslog', 'Cron', 'Webhook Integrations']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Languages',
    description: 'Core runtime programming languages for system development',
    iconName: 'Code',
    skills: [
      { name: 'Python', level: 'Expert (4+ yrs)', highlight: true },
      { name: 'SQL (PostgreSQL/MySQL)', level: 'Advanced', highlight: true },
      { name: 'TypeScript', level: 'Proficient' },
      { name: 'JavaScript', level: 'Proficient' },
      { name: 'Bash / Shell Scripting', level: 'Advanced', highlight: true }
    ]
  },
  {
    name: 'Frameworks',
    description: 'Application servers and API frameworks',
    iconName: 'Server',
    skills: [
      { name: 'FastAPI', level: 'Expert', highlight: true },
      { name: 'Django / DRF', level: 'Expert', highlight: true },
      { name: 'Flask', level: 'Advanced' },
      { name: 'Express.js / Node.js', level: 'Advanced' },
      { name: 'NestJS', level: 'Intermediate' }
    ]
  },
  {
    name: 'AI & LLM Orchestration',
    description: 'Modern agent frameworks, inference engines, and vector search',
    iconName: 'Cpu',
    skills: [
      { name: 'LangGraph (Multi-Agent)', level: 'Advanced', highlight: true },
      { name: 'LangChain & LlamaIndex', level: 'Advanced', highlight: true },
      { name: 'vLLM Inference Server', level: 'Advanced', highlight: true },
      { name: 'RAG Pipeline Architecture', level: 'Expert', highlight: true },
      { name: 'Pinecone Vector DB', level: 'Advanced' },
      { name: 'AMD ROCm / GPU Accelerators', level: 'Intermediate' }
    ]
  },
  {
    name: 'Databases & Storage',
    description: 'Relational, document, in-memory, and vector persistence',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL (Indexing & Schema)', level: 'Expert', highlight: true },
      { name: 'Redis (Caching & Pub/Sub)', level: 'Expert', highlight: true },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'TursoDB / LibSQL', level: 'Proficient' },
      { name: 'Elasticsearch', level: 'Proficient' },
      { name: 'Cloudinary Media CDN', level: 'Advanced' }
    ]
  },
  {
    name: 'Messaging & Async',
    description: 'Event-driven streams and background queue processing',
    iconName: 'Radio',
    skills: [
      { name: 'Celery & Celery Beat', level: 'Expert', highlight: true },
      { name: 'Redis Pub/Sub', level: 'Expert', highlight: true },
      { name: 'Apache Kafka', level: 'Advanced', highlight: true },
      { name: 'RabbitMQ', level: 'Advanced' },
      { name: 'AWS SQS', level: 'Proficient' }
    ]
  },
  {
    name: 'Cloud & DevOps',
    description: 'Container orchestration, CI/CD pipelines, and cloud infra',
    iconName: 'Cloud',
    skills: [
      { name: 'Docker & Compose', level: 'Expert', highlight: true },
      { name: 'GCP Cloud Run', level: 'Advanced', highlight: true },
      { name: 'AWS (EC2, S3, IAM, EKS)', level: 'Advanced', highlight: true },
      { name: 'Kubernetes (K8s)', level: 'Proficient' },
      { name: 'Terraform (IaC)', level: 'Advanced', highlight: true },
      { name: 'GitHub Actions CI/CD', level: 'Expert', highlight: true },
      { name: 'Nginx Reverse Proxy', level: 'Advanced' },
      { name: 'Cloudflare', level: 'Advanced' }
    ]
  },
  {
    name: 'Observability & Monitoring',
    description: 'Telemetry, structured metrics, and uptime alerting',
    iconName: 'Activity',
    skills: [
      { name: 'Prometheus', level: 'Advanced', highlight: true },
      { name: 'Grafana', level: 'Advanced', highlight: true },
      { name: 'Structured JSON Logging', level: 'Expert' },
      { name: 'Distributed Tracing (OpenTelemetry)', level: 'Proficient' },
      { name: 'Uptime & Health Auditing', level: 'Expert' }
    ]
  },
  {
    name: 'Architecture & Security',
    description: 'Design patterns, auth mechanisms, and resilience protocols',
    iconName: 'ShieldCheck',
    skills: [
      { name: 'REST & gRPC APIs', level: 'Expert', highlight: true },
      { name: 'Event-Driven Architecture', level: 'Advanced', highlight: true },
      { name: 'Idempotency Keys & DLQs', level: 'Expert', highlight: true },
      { name: 'Circuit Breaker Pattern', level: 'Advanced' },
      { name: 'OAuth2 / JWT / RBAC / OTP', level: 'Expert', highlight: true },
      { name: 'Webhook Signature Verification', level: 'Expert' },
      { name: 'Secrets Management (Vault/AWS/GCP)', level: 'Advanced' }
    ]
  },
  {
    name: 'Testing & Reliability',
    description: 'Verification, load testing, and quality guarantees',
    iconName: 'CheckCircle2',
    skills: [
      { name: 'Pytest (Unit & Integration)', level: 'Expert', highlight: true },
      { name: 'Locust Load Testing', level: 'Advanced', highlight: true },
      { name: 'Contract Testing', level: 'Proficient' },
      { name: 'Integration Testing', level: 'Expert' }
    ]
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'backend',
    title: 'Backend Development',
    kicker: '// CORE SYSTEMS & APIS',
    summary: 'High-throughput, scalable backend systems designed with rigorous testing, clean relational architecture, and strict security boundaries.',
    tiers: [
      {
        id: 'b-basic',
        name: 'Basic API Build',
        timeframe: '2–4 wks',
        priceRange: '₦250,000 – ₦400,000',
        minPrice: 250000,
        maxPrice: 400000,
        description: 'A focused, well-tested API for a single core feature set or MVP.',
        deliverables: [
          'FastAPI or Django REST architecture',
          'PostgreSQL schema & data modeling',
          'JWT authentication & basic RBAC',
          'Automated Pytest coverage (80%+)',
          'Complete OpenAPI / Swagger documentation'
        ]
      },
      {
        id: 'b-custom',
        name: 'Custom Backend System',
        timeframe: '5–8 wks',
        priceRange: '₦500,000 – ₦900,000',
        minPrice: 500000,
        maxPrice: 900000,
        popular: true,
        description: 'Multi-service backend with auth, database design, and integrations.',
        deliverables: [
          'Multi-domain service architecture',
          'Stripe/Paystack payment rails with idempotency',
          'Redis caching layer & Celery background queues',
          'Zero-trust OAuth2 / OTP auth layer',
          'Docker containerization & deployment recipe'
        ]
      },
      {
        id: 'b-enterprise',
        name: 'Enterprise Backend Architecture',
        timeframe: '8–12+ wks',
        priceRange: '₦1,100,000 – ₦2,000,000',
        minPrice: 1100000,
        maxPrice: 2000000,
        description: 'Large-scale system design for high-traffic, multi-team products.',
        deliverables: [
          'High-throughput microservices or modular monolith',
          'Database read/write splitting & connection pooling',
          'Event-driven asynchronous messaging (Kafka/RabbitMQ)',
          'Prometheus & Grafana telemetry observability',
          'High-availability SLA design (99.9% uptime target)'
        ]
      }
    ]
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    kicker: '// LLM ORCHESTRATION & RAG',
    summary: 'Production-grade AI solutions integrating LLMs, multi-agent frameworks, vector search, and hardware-accelerated inference into your product.',
    tiers: [
      {
        id: 'ai-feature',
        name: 'AI Feature Add-on',
        timeframe: '2–3 wks',
        priceRange: '₦220,000 – ₦400,000',
        minPrice: 220000,
        maxPrice: 400000,
        description: 'Bolt an AI capability onto an existing web or mobile product.',
        deliverables: [
          'LLM API integration (OpenAI, Anthropic, Groq)',
          'Prompt engineering & structured JSON outputs',
          'Fallback error handling & token rate-limiting',
          'Streaming response endpoints (SSE)',
          'Basic vector search semantic retrieval'
        ]
      },
      {
        id: 'ai-app',
        name: 'AI-Powered Application',
        timeframe: '4–7 wks',
        priceRange: '₦550,000 – ₦1,000,000',
        minPrice: 550000,
        maxPrice: 1000000,
        popular: true,
        description: 'A new application built around an AI workflow end-to-end (RAG, agents, LLM orchestration).',
        deliverables: [
          'Complete RAG pipeline with Pinecone/Qdrant',
          'Document ingestion with semantic chunking & metadata',
          'LangChain / LlamaIndex orchestration',
          'Confidence scoring & hallucination guards',
          'FastAPI asynchronous gateway & streaming client'
        ]
      },
      {
        id: 'ai-advanced',
        name: 'Advanced AI System',
        timeframe: '6–10+ wks',
        priceRange: '₦1,200,000 – ₦2,300,000',
        minPrice: 1200000,
        maxPrice: 2300000,
        description: 'Complex, production-grade AI infrastructure (multi-agent pipelines, evaluation, monitoring).',
        deliverables: [
          'Autonomous multi-agent graph (LangGraph)',
          'Self-hosted open weights (Llama 3 / vLLM acceleration)',
          'Automated evaluation harnesses (Ragas / LangSmith)',
          'Prometheus token latency & cost telemetry',
          'Human-in-the-loop review queues & safety filters'
        ]
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    kicker: '// CLOUD, AUTOMATION & RELIABILITY',
    summary: 'Cloud-native automation, reproducible infrastructure as code, CI/CD pipelines, and high-availability container orchestration.',
    tiers: [
      {
        id: 'd-deploy',
        name: 'Deployment Setup',
        timeframe: '1–2 wks',
        priceRange: '₦140,000 – ₦250,000',
        minPrice: 140000,
        maxPrice: 250000,
        description: 'Get an existing application live, securely and reliably.',
        deliverables: [
          'Docker containerization for app & workers',
          'Cloud deployment (GCP Cloud Run, AWS EC2, or DigitalOcean)',
          'SSL / TLS certificate setup & domain DNS routing',
          'Environment secrets management',
          'Basic health check endpoint & uptime alerts'
        ]
      },
      {
        id: 'd-cicd',
        name: 'CI/CD + Cloud Infrastructure',
        timeframe: '2–4 wks',
        priceRange: '₦330,000 – ₦600,000',
        minPrice: 330000,
        maxPrice: 600000,
        popular: true,
        description: 'Automated pipelines and cloud infra built cleanly from the ground up.',
        deliverables: [
          'GitHub Actions CI/CD with automated test matrix',
          'Blue-green or canary zero-downtime deployments',
          'Managed PostgreSQL/Redis cloud provisioning',
          'Docker registry image tagging & security scanning',
          'Log aggregation & Slack/Discord alerting'
        ]
      },
      {
        id: 'd-scale',
        name: 'Scalable Infrastructure',
        timeframe: '4–6 wks',
        priceRange: '₦700,000 – ₦1,400,000',
        minPrice: 700000,
        maxPrice: 1400000,
        description: 'Infra built to handle exponential growth: autoscaling, caching, redundancy.',
        deliverables: [
          'Terraform Infrastructure as Code (IaC)',
          'Kubernetes (EKS / GKE) cluster architecture',
          'Horizontal Pod Autoscaling (HPA) & ingress rules',
          'Multi-AZ database replica & PgBouncer pooling',
          'Full Prometheus & Grafana cluster dashboard'
        ]
      }
    ]
  },
  {
    id: 'bundles',
    title: 'Full-Stack + AI + DevOps Bundles',
    kicker: '// END-TO-END PRODUCT SOLUTIONS',
    summary: 'Comprehensive all-in-one engagements covering backend architecture, AI intelligence, and cloud automation in one unified delivery.',
    tiers: [
      {
        id: 'b-starter',
        name: 'Starter Bundle',
        timeframe: '4–6 wks',
        priceRange: '₦850,000 – ₦1,400,000',
        minPrice: 850000,
        maxPrice: 1400000,
        description: 'End-to-end build for early-stage products ready to launch.',
        deliverables: [
          'Complete custom backend with auth & database',
          'Single core AI capability (RAG or LLM workflow)',
          'Automated CI/CD & cloud deployment (Cloud Run/AWS)',
          'Initial production monitoring & documentation'
        ]
      },
      {
        id: 'b-growth',
        name: 'Growth Bundle',
        timeframe: '8–12 wks',
        priceRange: '₦1,700,000 – ₦2,800,000',
        minPrice: 1700000,
        maxPrice: 2800000,
        popular: true,
        description: 'Full-stack backend + AI + cloud infrastructure for scaling products.',
        deliverables: [
          'High-throughput multi-service backend with payments',
          'Advanced multi-step AI pipeline with vector search',
          'Terraform IaC + automated staging/production CI/CD',
          'Database optimization, Redis caching & telemetry'
        ]
      },
      {
        id: 'b-enterprise',
        name: 'Enterprise Bundle',
        timeframe: '12+ wks',
        priceRange: '₦3,500,000 and up',
        minPrice: 3500000,
        maxPrice: 6000000,
        description: 'Comprehensive, multi-phase engagement for large systems.',
        deliverables: [
          'Distributed event-driven architecture with Kafka/RabbitMQ',
          'Autonomous multi-agent AI system or self-hosted LLM',
          'Kubernetes multi-region cloud orchestration',
          'Comprehensive SLA guarantees, security audits & team handoff'
        ]
      }
    ]
  },
  {
    id: 'consulting',
    title: 'Hourly Consulting & Retainers',
    kicker: '// ONGOING EXPERTISE & RELIABILITY',
    summary: 'Flexible technical advisory, architecture audits, performance troubleshooting, and ongoing system maintenance.',
    tiers: [
      {
        id: 'c-adhoc',
        name: 'Ad-hoc Consulting',
        timeframe: 'Hourly / As needed',
        priceRange: '₦12,000 – ₦18,000 / hr',
        minPrice: 12000,
        maxPrice: 18000,
        description: 'Pay-as-you-go technical advice and deep problem-solving.',
        deliverables: [
          'Architecture review & bottleneck diagnosis',
          'PostgreSQL query & index performance audits',
          'AI pipeline feasibility & cost optimization',
          'Technical interview assessment support'
        ]
      },
      {
        id: 'c-maintenance',
        name: 'Maintenance Retainer',
        timeframe: 'Monthly commitment',
        priceRange: '₦160,000 – ₦300,000 / mo',
        minPrice: 160000,
        maxPrice: 300000,
        popular: true,
        description: 'Ongoing upkeep, bug fixes, dependency updates, and monitoring.',
        deliverables: [
          'Weekly dependency & security patch updates',
          'Active server health & uptime oversight',
          'Database backup verification & vacuuming',
          'Priority bug triage (guaranteed response SLA)'
        ]
      },
      {
        id: 'c-growth',
        name: 'Growth Retainer',
        timeframe: 'Monthly commitment',
        priceRange: '₦350,000 – ₦650,000 / mo',
        minPrice: 350000,
        maxPrice: 650000,
        description: 'Continuous feature development, optimization, and scaling support.',
        deliverables: [
          'Dedicated weekly engineering sprint hours',
          'Continuous API feature development & integrations',
          'Load testing & capacity scaling planning',
          'Direct Slack/Discord developer access'
        ]
      }
    ]
  }
];

export const SERVICE_NOTES = [
  'Prices depend on final scope — happy to hop on a quick discovery call to scope yours out.',
  'Prices are negotiable, especially for longer engagements or multi-month retainers.',
  '50% deposit to start, balance due on delivery or agreed sprint milestone.',
  'Third-party costs (hosting, LLM API usage, cloud servers, domain registrations) are billed separately.'
];
