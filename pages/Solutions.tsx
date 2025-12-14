import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Infinity, Cloud, ShieldCheck, Database, BrainCircuit, 
  ArrowRight, CheckCircle2, Layers, Terminal, Cpu, Zap
} from 'lucide-react';

const SOLUTIONS_DATA = [
  {
    id: 'devops',
    title: 'DevOps & Automation',
    subtitle: 'Accelerate Delivery with Precision',
    icon: Infinity,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    problem: 'Enterprises often struggle with siloed teams, manual configuration drift, and slow release cycles, leading to delayed time-to-market and unstable production environments.',
    approach: 'We implement "Everything as Code." From infrastructure provisioning to policy enforcement, we build self-service platforms that allow developers to ship features rapidly while Operations maintains strict stability and governance.',
    stack: ['Kubernetes', 'Terraform', 'Ansible', 'ArgoCD', 'Jenkins', 'Docker'],
    outcomes: [
      '95% reduction in deployment lead time',
      'Zero-downtime updates via Blue/Green strategies',
      'Fully automated disaster recovery protocols'
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Data Center Management',
    subtitle: 'Hybrid Flexibility, Optimized Cost',
    icon: Cloud,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
    problem: 'Uncontrolled cloud sprawl leads to spiraling costs (FinOps challenges) and vendor lock-in, while legacy data centers struggle to keep up with modern, dynamic workloads.',
    approach: 'We design vendor-agnostic hybrid architectures. Whether extending your on-premise VMware environment to AWS or managing multi-cloud Kubernetes clusters, we prioritize cost-efficiency, portability, and performance.',
    stack: ['AWS', 'Azure', 'Google Cloud', 'OpenShift', 'VMware', 'Linux'],
    outcomes: [
      '30-40% reduction in monthly cloud spend',
      'Seamless workload portability across providers',
      '99.99% infrastructure availability SLA'
    ]
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    subtitle: 'Defend. Detect. Remediate.',
    icon: ShieldCheck,
    iconColor: 'text-nixGreen',
    iconBg: 'bg-green-50',
    problem: 'Traditional perimeter security fails in cloud-native environments. Compliance audits (ISO 27001, PCI-DSS) are typically manual, painful, and prone to human error.',
    approach: 'We shift security left (DevSecOps). Our proprietary VulnGuard™ framework automates CIS Benchmark hardening, real-time VAPT, and continuous compliance monitoring directly within the CI/CD pipeline.',
    stack: ['VulnGuard™', 'SonarQube', 'Trivy', 'Wazuh', 'Vault', 'Falco'],
    outcomes: [
      'Continuous compliance verification (Audit-ready)',
      'Automated remediation of critical vulnerabilities',
      'Implementation of Zero Trust architecture'
    ]
  },
  {
    id: 'database',
    title: 'Database & App Management',
    subtitle: 'High Performance at Scale',
    icon: Database,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
    problem: 'Data bottlenecks, slow query performance, and the risk of data loss threaten business continuity as transaction volumes scale exponentially.',
    approach: 'We provide site reliability engineering (SRE) for your data layer. This includes automated sharding strategies, read-replica scaling, connection pooling, and chaotic testing of backup/restore procedures.',
    stack: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Kafka', 'Cassandra'],
    outcomes: [
      'Sub-millisecond query latency for critical paths',
      'RPO/RTO reduced to < 5 minutes',
      'Seamless version upgrades with no downtime'
    ]
  },
  {
    id: 'ai-ops',
    title: 'AI-Driven Monitoring & Intelligence',
    subtitle: 'From Reactive to Predictive',
    icon: BrainCircuit,
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
    problem: 'Alert fatigue causes teams to miss critical signals amidst the noise. Traditional monitoring tools lack context and predictive capabilities.',
    approach: 'We deploy full-stack observability coupled with NixOps AI agents. Our systems learn normal baselines to detect anomalies and auto-remediate known issues before they impact users.',
    stack: ['Prometheus', 'Grafana', 'ELK Stack', 'NixOps AI', 'Jaeger', 'Opentelemetry'],
    outcomes: [
      '50% reduction in Mean Time To Resolution (MTTR)',
      'Proactive anomaly detection using ML models',
      'Unified single-pane-of-glass dashboard'
    ]
  }
];

const Solutions: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-nixDark py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-nixBlue/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-nixGreen/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 animate-fade-in">
            Engineering <span className="text-nixGreen">Enterprise Excellence</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We don't just fix problems; we architect resilient, self-healing systems that drive business growth.
          </p>
        </div>
      </section>

      {/* Solutions List */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SOLUTIONS_DATA.map((solution, index) => (
              <div 
                key={solution.id} 
                className={`flex flex-col lg:flex-row gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual / Icon Side */}
                <div className="w-full lg:w-1/3 flex justify-center">
                   <div className={`p-12 rounded-3xl ${solution.iconBg} relative group`}>
                      <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-gray-200 group-hover:border-current group-hover:rotate-6 transition-all duration-500 ease-out pointer-events-none" style={{ color: 'rgba(0,0,0,0.1)' }}></div>
                      <solution.icon size={80} className={`${solution.iconColor} relative z-10 transform group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                   </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-2/3">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`h-px w-8 ${solution.iconBg.replace('bg-', 'bg-').replace('50', '500')}`}></span>
                    <span className={`text-sm font-bold uppercase tracking-wider ${solution.iconColor}`}>{solution.subtitle}</span>
                  </div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">{solution.title}</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-50 p-6 rounded-xl border border-gray-100">
                      <h4 className="flex items-center text-sm font-bold text-slate-700 mb-3 uppercase">
                        <Terminal size={16} className="mr-2 text-red-500" /> The Challenge
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{solution.problem}</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-gray-100">
                      <h4 className="flex items-center text-sm font-bold text-slate-700 mb-3 uppercase">
                        <Zap size={16} className="mr-2 text-nixGreen" /> The Nixsoft Approach
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{solution.approach}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center">
                      <Layers size={18} className="mr-2 text-slate-400" /> Tools & Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.stack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-slate-600 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center">
                      <CheckCircle2 size={18} className="mr-2 text-slate-400" /> Key Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {solution.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start text-slate-600">
                           <div className="min-w-1.5 h-1.5 rounded-full bg-nixBlue mt-2 mr-3"></div>
                           <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link to="/contact" className="inline-flex items-center text-nixBlue font-bold hover:underline">
                      Schedule a Technical Deep Dive <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-nixDark text-center relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-4 relative z-10">
           <Cpu size={48} className="text-nixGreen mx-auto mb-6 animate-pulse" />
           <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
             Solving Complex Engineering Challenges?
           </h2>
           <p className="text-slate-300 text-lg mb-8">
             Let's build a roadmap tailored to your specific infrastructure needs.
           </p>
           <Link to="/contact" className="inline-block bg-nixGreen text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-green-400 transition-colors shadow-lg shadow-green-900/20">
             Talk to an Architect
           </Link>
         </div>
      </section>
    </div>
  );
};

export default Solutions;
