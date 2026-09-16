import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { PROFILE, PROJECTS } from '../data/portfolioData';
import { triggerRateSheetDownload } from '../utils/pdfDownload';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onOpenQuoteModal,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'system.init()',
      output: (
        <div className="text-cyber-muted space-y-1">
          <p className="text-cyber-teal font-bold">
            CKM Distributed Systems Telemetry Console [v2.6.4]
          </p>
          <p>Connected to node: <span className="text-cyber-green">europe-west1-prod-01</span> (RTT: 14.2ms)</p>
          <p>Type <span className="text-cyber-teal font-semibold">&apos;help&apos;</span> for available commands.</p>
        </div>
      ),
    },
  ]);
  const [commandIndex, setCommandIndex] = useState(-1);
  const [enteredCommands, setEnteredCommands] = useState<string[]>([]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Global key listener for Ctrl + ~ to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === '~')) {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    setEnteredCommands((prev) => [...prev, cmdStr]);
    setCommandIndex(-1);

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-cyber-muted">
            <p className="text-cyber-text font-bold mb-1">// AVAILABLE COMMANDS:</p>
            <p><span className="text-cyber-teal font-mono">whoami</span> — Display engineer identity & credentials</p>
            <p><span className="text-cyber-teal font-mono">skills</span> — List primary backend & AI capabilities</p>
            <p><span className="text-cyber-teal font-mono">projects</span> — View flagship systems & repos</p>
            <p><span className="text-cyber-teal font-mono">curl /v1/health</span> — Ping telemetry health check endpoint</p>
            <p><span className="text-cyber-teal font-mono">rates</span> — Print service packages & NGN rate sheet</p>
            <p><span className="text-cyber-teal font-mono">download-rates</span> — Download official PDF rate sheet</p>
            <p><span className="text-cyber-teal font-mono">quote</span> — Open project scope & quote form</p>
            <p><span className="text-cyber-teal font-mono">contact</span> — Reach out via email, GitHub or LinkedIn</p>
            <p><span className="text-cyber-teal font-mono">clear</span> — Flush console screen</p>
            <p><span className="text-cyber-teal font-mono">exit</span> — Close terminal</p>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="text-cyber-muted space-y-1">
            <p className="text-white font-bold">{PROFILE.name}</p>
            <p className="text-cyber-teal">{PROFILE.title}</p>
            <p>{PROFILE.location}</p>
            <p className="text-xs text-cyber-text mt-2 max-w-xl">{PROFILE.heroSubtext}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2">
            <p className="text-cyber-teal font-bold">// CORE RUNTIMES & PLATFORMS:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-xs text-cyber-muted">
              <span>• Python (FastAPI / Django)</span>
              <span>• LangGraph Multi-Agent</span>
              <span>• vLLM & AMD ROCm</span>
              <span>• PostgreSQL / Redis</span>
              <span>• Apache Kafka / Celery</span>
              <span>• Docker / K8s / Terraform</span>
              <span>• GCP Cloud Run / AWS</span>
              <span>• Prometheus & Grafana</span>
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2">
            <p className="text-cyber-teal font-bold">// FLAGSHIP REPOSITORIES:</p>
            {PROJECTS.slice(0, 4).map((p) => (
              <div key={p.id} className="text-xs">
                <span className="text-cyber-green font-bold">{p.title}</span> ({p.category}):{' '}
                <span className="text-cyber-muted">{p.headline}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'curl /v1/health':
      case 'curl /health':
      case 'health':
        output = (
          <pre className="text-xs font-mono text-cyber-green bg-cyber-bg p-3 rounded border border-cyber-border overflow-x-auto">
{`HTTP/2 200 OK
date: ${new Date().toUTCString()}
content-type: application/json; charset=utf-8
x-latency: 12ms

{
  "status": "healthy",
  "system": "charles-api-mesh",
  "uptime_sla": "99.9%",
  "p95_latency_reduction": "40%",
  "active_services": ["job-drone-etl", "klinik-vllm", "realnaijagist-cache"],
  "database": "postgres-primary-active",
  "event_broker": "kafka-cluster-synced",
  "engineer": "Charles Kojo Mark"
}`}
          </pre>
        );
        break;

      case 'rates':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-cyber-teal font-bold">// SERVICE PACKAGES (2026):</p>
            <p>1. Backend Development: ₦250,000 – ₦2,000,000</p>
            <p>2. AI Integration: ₦220,000 – ₦2,300,000</p>
            <p>3. DevOps & Cloud Infra: ₦140,000 – ₦1,400,000</p>
            <p>4. Full-Stack Bundles: ₦850,000 – ₦3,500,000+</p>
            <p>5. Retainers: ₦160,000 – ₦650,000/mo (Hourly: ₦12,000–₦18,000/hr)</p>
            <p className="text-cyber-indigo">Type &apos;download-rates&apos; to get the official PDF.</p>
          </div>
        );
        break;

      case 'download-rates':
        triggerRateSheetDownload();
        output = (
          <p className="text-cyber-green">
            ✓ Triggered download: Charles-Kojo-Mark-Rate-Sheet-2026.pdf
          </p>
        );
        break;

      case 'quote':
        onOpenQuoteModal();
        output = <p className="text-cyber-teal">✓ Opened project quote calculator modal.</p>;
        break;

      case 'contact':
        output = (
          <div className="text-xs space-y-1">
            <p>Email: <a href={`mailto:${PROFILE.email}`} className="text-cyber-teal underline">{PROFILE.email}</a></p>
            <p>GitHub: <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-cyber-teal underline">{PROFILE.github}</a></p>
            <p>LinkedIn: <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-cyber-teal underline">{PROFILE.linkedin}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInput('');
        return;

      default:
        output = (
          <p className="text-red-400">
            command not found: {cmdStr}. Type <span className="text-cyber-teal">&apos;help&apos;</span> for valid commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (enteredCommands.length > 0) {
        const nextIdx = commandIndex === -1 ? enteredCommands.length - 1 : Math.max(0, commandIndex - 1);
        setCommandIndex(nextIdx);
        setInput(enteredCommands[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex !== -1) {
        const nextIdx = commandIndex + 1;
        if (nextIdx < enteredCommands.length) {
          setCommandIndex(nextIdx);
          setInput(enteredCommands[nextIdx]);
        } else {
          setCommandIndex(-1);
          setInput('');
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative max-w-3xl w-full h-[540px] max-h-[90vh] flex flex-col rounded-xl bg-cyber-bg border border-cyber-border shadow-2xl overflow-hidden font-mono text-xs">
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-cyber-card border-b border-cyber-border select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="ml-3 flex items-center gap-1.5 text-cyber-muted text-[11px]">
              <TerminalIcon className="w-3.5 h-3.5 text-cyber-teal" />
              <span>charles@prod-mesh:~ (zsh)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-cyber-muted">
            <span className="text-[10px] hidden sm:inline">Press Esc or Ctrl+~ to close</span>
            <button
              onClick={onClose}
              className="p-1 hover:text-white transition-colors"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-cyber-bg/95">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-cyber-teal">
                <span>charles@prod-mesh:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Rail */}
        <div className="p-3 bg-cyber-surface border-t border-cyber-border flex items-center gap-2">
          <span className="text-cyber-teal font-bold">charles@prod-mesh:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'whoami', 'curl /v1/health'..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-cyber-muted/60"
          />
        </div>
      </div>
    </div>
  );
};
