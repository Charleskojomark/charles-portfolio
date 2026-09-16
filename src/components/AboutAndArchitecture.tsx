import React, { useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import { Layers, Cpu, Server, Award, GraduationCap } from 'lucide-react';

interface LayerData {
  id: string;
  name: string;
  sub: string;
  color: string;
  glow: string;
  technologies: string[];
  protocols: string[];
  responsibilities: string;
  metrics: string;
}

const ARCHITECTURE_LAYERS: LayerData[] = [
  {
    id: 'layer-ingestion',
    name: '04 // Client & Ingestion Layer',
    sub: 'Real-time Audio, REST Requests & Webhook Events',
    color: 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40',
    glow: 'shadow-[0_0_20px_rgba(37,99,235,0.2)]',
    technologies: ['WebRTC Audio Stream', 'WebSocket (Socket.io)', 'HTTP/2 REST Clients', 'Stripe/Paystack Webhooks'],
    protocols: ['TLS 1.3', 'WSS', 'SSE', 'JSON / Protobuf'],
    responsibilities: 'Low-latency packet reception, voice consultation audio streaming, and webhook signature verification.',
    metrics: '<15ms edge latency via Cloudflare edge routing'
  },
  {
    id: 'layer-gateway',
    name: '03 // API Gateway & Security Perimeter',
    sub: 'Zero-Trust Auth, Token Bucket Rate Limiting & Routing',
    color: 'border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/40',
    glow: 'shadow-[0_0_20px_rgba(99,102,241,0.2)]',
    technologies: ['Nginx Reverse Proxy', 'FastAPI Middleware', 'JWT / RBAC / OTP', 'Google OAuth2', 'Cloudflare WAF'],
    protocols: ['Bearer Token', 'mTLS', 'HMAC-SHA256 Signatures'],
    responsibilities: 'Granular route guarding across 60+ endpoints, cryptographic webhook authentication, and sliding-window rate limiting.',
    metrics: '100% rejection of unauthorized payloads, <2ms auth overhead'
  },
  {
    id: 'layer-compute',
    name: '02 // Core Services & AI Multi-Agent Engine',
    sub: 'High-Throughput Python Services & Autonomous LLMs',
    color: 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/40',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)]',
    technologies: ['FastAPI Services', 'Django Monolith & DRF', 'LangGraph (8 Parallel Agents)', 'vLLM on AMD MI300X', 'Celery Workers'],
    protocols: ['AsyncIO', 'vLLM OpenAI-Compatible API', 'Celery AMQP/Redis Protocol'],
    responsibilities: 'Clinical diagnostic reasoning, RAG semantic synthesis, financial transaction processing with idempotency, and background task queues.',
    metrics: '13.68s full consultation pipeline, 40% P95 latency reduction'
  },
  {
    id: 'layer-persistence',
    name: '01 // Persistence & Distributed Storage',
    sub: 'ACID Relational Storage, Vector Indexes & Memory Cache',
    color: 'border-amber-500 text-amber-600 dark:text-amber-400 bg-amber-50/80 dark:bg-amber-950/40',
    glow: 'shadow-[0_0_20px_rgba(245,158,11,0.2)]',
    technologies: ['PostgreSQL (PgBouncer Pooling)', 'Redis (Caching & Pub/Sub)', 'Pinecone Vector DB', 'MongoDB'],
    protocols: ['PostgreSQL Wire Protocol', 'RESP (Redis)', 'Vector Search REST'],
    responsibilities: 'Durable ACID state, sub-millisecond cached lookups, robust database connection pooling, and dense vector similarity search.',
    metrics: '35% database CPU reduction, 99.9% persistence availability'
  }
];

export const AboutAndArchitecture: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>('layer-compute');

  const selectedLayerData = ARCHITECTURE_LAYERS.find((l) => l.id === activeLayer) || ARCHITECTURE_LAYERS[0];

  return (
    <section id="about" className="relative py-20 sm:py-24 border-b border-slate-200 dark:border-cyber-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="font-mono text-xs text-cyber-blue font-semibold tracking-widest uppercase mb-2">
              // 01 — SYSTEMS ARCHITECTURE & BIO
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
              Behind the Architecture
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-600 dark:text-cyber-muted max-w-md">
            $ cat /etc/engineer-profile.json // 4+ years designing fault-tolerant backends, cloud infrastructure & enterprise AI systems
          </p>
        </div>

        {/* 2-Column Grid: Narrative Bio + 3D Isometric Architecture Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-white dark:bg-cyber-card/90 border border-slate-200 dark:border-cyber-border backdrop-blur-md shadow-card-light dark:shadow-card-dark">
              <h3 className="text-base font-mono font-semibold text-cyber-blue mb-3 flex items-center gap-2">
                <Server className="w-4 h-4" />
                <span>Engineer Philosophy</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-cyber-muted leading-relaxed mb-4 font-sans">
                I approach software through the lens of distributed resilience. Whether building
                high-throughput transaction rails processing Stripe/Paystack payments with strict idempotency,
                or orchestrating 8-agent LangGraph pipelines running on AMD MI300X accelerators, my priority is always
                the same: <strong className="text-slate-900 dark:text-white font-semibold">predictable latency, zero data loss, and ironclad observability</strong>.
              </p>
              <p className="text-sm text-slate-600 dark:text-cyber-muted leading-relaxed font-sans">
                As Backend Lead at Job Drone and sole backend owner of high-traffic platforms like RealNaijaGist,
                I don’t just write endpoints — I architect the entire lifecycle from PostgreSQL schema optimization
                and Redis cache layering to Dockerized Cloud Run deployments and automated GitHub Actions pipelines.
              </p>
            </div>

            {/* Education & Certifications Cards */}
            <div className="space-y-4">
              {/* Education */}
              <div className="p-5 rounded-xl bg-white dark:bg-cyber-card/60 border border-slate-200 dark:border-cyber-border shadow-card-light dark:shadow-card-dark">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-cyber-surface border border-blue-200 dark:border-cyber-border text-cyber-blue">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-500 dark:text-cyber-muted uppercase tracking-wider block font-medium">Education</span>
                    <h4 className="text-sm font-bold font-heading text-slate-900 dark:text-white mt-0.5">
                      {PROFILE.education[0].degree}
                    </h4>
                    <p className="text-xs text-cyber-blue font-mono font-medium mt-0.5">
                      {PROFILE.education[0].institution}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-cyber-muted mt-1 font-sans">
                      {PROFILE.education[0].period} • {PROFILE.education[0].focus}
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="p-5 rounded-xl bg-white dark:bg-cyber-card/60 border border-slate-200 dark:border-cyber-border shadow-card-light dark:shadow-card-dark">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-cyber-surface border border-indigo-200 dark:border-cyber-border text-indigo-600 dark:text-indigo-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-500 dark:text-cyber-muted uppercase tracking-wider block font-medium">Verified Certification</span>
                    <h4 className="text-sm font-bold font-heading text-slate-900 dark:text-white mt-0.5">
                      {PROFILE.certifications[0].name}
                    </h4>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono font-medium mt-0.5">
                      Issued by {PROFILE.certifications[0].issuer} ({PROFILE.certifications[0].year})
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-cyber-muted mt-1 font-sans">
                      {PROFILE.certifications[0].skills}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Isometric Architecture Stack Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-cyber-card/90 border border-slate-200 dark:border-cyber-border backdrop-blur-md shadow-card-light dark:shadow-card-dark">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-cyber-blue font-semibold">
                  <Layers className="w-4 h-4" />
                  <span className="uppercase tracking-wider">Interactive 4-Tier Stack Architecture</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-cyber-muted">
                  Tap to inspect
                </span>
              </div>

              {/* 3D Isometric Stack Slices */}
              <div className="space-y-2.5 my-5">
                {ARCHITECTURE_LAYERS.map((layer) => {
                  const isActive = activeLayer === layer.id;
                  return (
                    <div
                      key={layer.id}
                      onClick={() => setActiveLayer(layer.id)}
                      className={`cursor-pointer p-3.5 sm:p-4 rounded-lg border transition-all duration-300 font-mono ${
                        isActive
                          ? `${layer.color} ${layer.glow} translate-x-1 sm:translate-x-2 border-l-4`
                          : 'border-slate-200 dark:border-cyber-border bg-slate-50/60 dark:bg-cyber-surface/40 hover:bg-slate-100 dark:hover:bg-cyber-surface/80 text-slate-600 dark:text-cyber-muted'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-xs font-bold">{layer.name}</span>
                        <span className="text-[11px] opacity-80">{layer.sub}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selected Tier Deep-Dive Inspector */}
              <div className="p-4 sm:p-5 rounded-lg bg-slate-50 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border mt-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 border-b border-slate-200 dark:border-cyber-border/60 pb-2.5 gap-2">
                  <h4 className="text-xs font-mono font-bold text-cyber-blue flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>LAYER INSPECTOR // {selectedLayerData.name}</span>
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-cyber-blue/10 text-cyber-blue border border-blue-200 dark:border-cyber-blue/30 font-semibold self-start sm:self-auto">
                    {selectedLayerData.metrics}
                  </span>
                </div>

                <p className="text-xs text-slate-700 dark:text-cyber-text leading-relaxed mb-4 font-sans">
                  {selectedLayerData.responsibilities}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-cyber-muted uppercase block mb-1.5 font-semibold">
                      Component Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedLayerData.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-800 dark:text-cyber-text font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-cyber-muted uppercase block mb-1.5 font-semibold">
                      Wire Protocols & Standards:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedLayerData.protocols.map((proto) => (
                        <span
                          key={proto}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-blue-700 dark:text-blue-400 font-medium"
                        >
                          {proto}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
