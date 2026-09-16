import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicAssetsDir = path.resolve(__dirname, '../public/assets');
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

const pageWidth = 210;
const pageHeight = 297;
const margin = 14;
const contentWidth = pageWidth - margin * 2;

// Background
doc.setFillColor(10, 14, 20); // #0A0E14
doc.rect(0, 0, pageWidth, pageHeight, 'F');

// Top Border Brand Accent
doc.setFillColor(34, 211, 238); // Teal
doc.rect(0, 0, pageWidth, 4, 'F');

// Header
doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.setTextColor(229, 231, 235); // #E5E7EB
doc.text('CHARLES KOJO MARK', margin, 18);

doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(34, 211, 238); // Teal
doc.text('SENIOR BACKEND ENGINEER | AI INTEGRATION & DEVOPS', margin, 24);

doc.setFontSize(8.5);
doc.setTextColor(156, 163, 175); // #9CA3AF
doc.text('Python · Distributed Systems · Cloud Infrastructure · LLM/RAG Pipelines', margin, 29);

// Contact Info Box (Right side of header)
doc.setFontSize(8);
doc.setTextColor(229, 231, 235);
doc.text('Email: markcharleskojo@gmail.com', pageWidth - margin - 65, 16);
doc.text('Phone: +234 708 236 7382', pageWidth - margin - 65, 21);
doc.text('GitHub: github.com/Charleskojomark', pageWidth - margin - 65, 26);
doc.text('LinkedIn: linkedin.com/in/markcharleskojo', pageWidth - margin - 65, 31);

// Horizontal Rule
doc.setDrawColor(31, 41, 55);
doc.setLineWidth(0.5);
doc.line(margin, 35, pageWidth - margin, 35);

// Title of Document
doc.setFont('helvetica', 'bold');
doc.setFontSize(12);
doc.setTextColor(99, 102, 241); // Indigo
doc.text('SERVICE PACKAGES & OFFICIAL RATE SHEET (2026)', margin, 42);

let y = 48;

const categories = [
  {
    title: '1. BACKEND DEVELOPMENT',
    tiers: [
      { name: 'Basic API Build', time: '2–4 wks', price: 'NGN 250,000 – 400,000', desc: 'Focused, well-tested API for single core feature set/MVP (FastAPI/Django, Postgres, JWT).' },
      { name: 'Custom Backend System', time: '5–8 wks', price: 'NGN 500,000 – 900,000', desc: 'Multi-service backend with auth, payments (Stripe/Paystack), Redis caching, Celery queues.' },
      { name: 'Enterprise Backend Architecture', time: '8–12+ wks', price: 'NGN 1,100,000 – 2,000,000', desc: 'High-throughput system design, DB read/write replicas, Kafka/RabbitMQ, Prometheus telemetry.' }
    ]
  },
  {
    title: '2. AI INTEGRATION & LLM ORCHESTRATION',
    tiers: [
      { name: 'AI Feature Add-on', time: '2–3 wks', price: 'NGN 220,000 – 400,000', desc: 'Bolt an AI capability onto an existing product (OpenAI/Anthropic/Groq APIs, structured JSON).' },
      { name: 'AI-Powered Application', time: '4–7 wks', price: 'NGN 550,000 – 1,000,000', desc: 'End-to-end AI application (RAG, Pinecone vector search, LangChain/LlamaIndex, confidence scoring).' },
      { name: 'Advanced AI System', time: '6–10+ wks', price: 'NGN 1,200,000 – 2,300,000', desc: 'Multi-agent pipelines (LangGraph), self-hosted open weights (vLLM/ROCm), eval harnesses.' }
    ]
  },
  {
    title: '3. DEVOPS & INFRASTRUCTURE',
    tiers: [
      { name: 'Deployment Setup', time: '1–2 wks', price: 'NGN 140,000 – 250,000', desc: 'Docker containerization, GCP Cloud Run / AWS EC2 deployment, TLS/SSL, automated health checks.' },
      { name: 'CI/CD + Cloud Infrastructure', time: '2–4 wks', price: 'NGN 330,000 – 600,000', desc: 'GitHub Actions CI/CD with automated test matrix, blue-green deploys, container registry & secrets.' },
      { name: 'Scalable Infrastructure', time: '4–6 wks', price: 'NGN 700,000 – 1,400,000', desc: 'Terraform IaC, Kubernetes (EKS/GKE), Horizontal Pod Autoscaling, multi-AZ DB replicas, PgBouncer.' }
    ]
  },
  {
    title: '4. FULL-STACK + AI + DEVOPS BUNDLES',
    tiers: [
      { name: 'Starter Bundle', time: '4–6 wks', price: 'NGN 850,000 – 1,400,000', desc: 'End-to-end build for early products: custom backend + core AI feature + CI/CD cloud deployment.' },
      { name: 'Growth Bundle', time: '8–12 wks', price: 'NGN 1,700,000 – 2,800,000', desc: 'Full-stack multi-service backend + advanced RAG AI pipeline + Terraform IaC + telemetry.' },
      { name: 'Enterprise Bundle', time: '12+ wks', price: 'NGN 3,500,000 and up', desc: 'Distributed event-driven architecture, autonomous multi-agent AI system, multi-region cloud cluster.' }
    ]
  },
  {
    title: '5. HOURLY CONSULTING & RETAINERS',
    tiers: [
      { name: 'Ad-hoc Consulting', time: 'Hourly', price: 'NGN 12,000 – 18,000 / hr', desc: 'Pay-as-you-go technical advisory, architecture audits, DB query & indexing troubleshooting.' },
      { name: 'Maintenance Retainer', time: 'Monthly', price: 'NGN 160,000 – 300,000 / mo', desc: 'Continuous upkeep, security updates, dependency patches, uptime auditing, priority bug fixes.' },
      { name: 'Growth Retainer', time: 'Monthly', price: 'NGN 350,000 – 650,000 / mo', desc: 'Dedicated weekly sprint hours for feature development, capacity scaling, and direct Slack support.' }
    ]
  }
];

categories.forEach((cat) => {
  // Category Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(34, 211, 238); // Teal
  doc.text(cat.title, margin, y);
  y += 4.5;

  cat.tiers.forEach((tier) => {
    // Card Background
    doc.setFillColor(17, 24, 39); // #111827
    doc.roundedRect(margin, y, contentWidth, 8, 1, 1, 'F');
    doc.setDrawColor(31, 41, 55);
    doc.roundedRect(margin, y, contentWidth, 8, 1, 1, 'D');

    // Tier Name & Timeframe
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(243, 244, 246);
    doc.text(tier.name, margin + 2.5, y + 3.6);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(156, 163, 175);
    doc.text(`(${tier.time})`, margin + 45, y + 3.6);

    // Price
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(52, 211, 153); // Green
    doc.text(tier.price, pageWidth - margin - 48, y + 3.6);

    // One-line Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(156, 163, 175);
    doc.text(tier.desc, margin + 2.5, y + 6.8);

    y += 9.5;
  });

  y += 1.5;
});

// Notes Block
y += 1;
doc.setFillColor(22, 31, 48); // #161F30
doc.roundedRect(margin, y, contentWidth, 19, 1.5, 1.5, 'F');
doc.setDrawColor(99, 102, 241);
doc.setLineWidth(0.3);
doc.roundedRect(margin, y, contentWidth, 19, 1.5, 1.5, 'D');

doc.setFont('helvetica', 'bold');
doc.setFontSize(7.5);
doc.setTextColor(99, 102, 241); // Indigo
doc.text('ENGAGEMENT TERMS & NOTES', margin + 3, y + 4.5);

doc.setFont('helvetica', 'normal');
doc.setFontSize(6.5);
doc.setTextColor(209, 213, 219);
const notes = [
  '• Scope & Pricing: Final prices depend on agreed technical scope. Flexible discovery call available prior to kickoff.',
  '• Negotiation: Favorable terms and discounts available for multi-month retainers or multi-phase enterprise builds.',
  '• Billing Schedule: 50% deposit upon contract signing; balance due upon delivery or sprint milestone acceptance.',
  '• Third-Party Costs: Cloud hosting (AWS, GCP), LLM token consumption (OpenAI, Anthropic), and domain registrations billed separately.'
];

let noteY = y + 8;
notes.forEach(note => {
  doc.text(note, margin + 3, noteY);
  noteY += 3.2;
});

// Footer
doc.setFont('helvetica', 'normal');
doc.setFontSize(7);
doc.setTextColor(107, 114, 128);
doc.text('// Generated from charleskojomark.dev • Verified Rate Sheet 2026 • Confidential', margin, pageHeight - 6);
doc.text('Aba, Nigeria & Remote Worldwide', pageWidth - margin - 45, pageHeight - 6);

const outputPath = path.resolve(publicAssetsDir, 'charles-kojo-mark-rate-sheet.pdf');
const pdfBytes = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfBytes));

console.log(`Successfully generated rate sheet PDF at: ${outputPath}`);
