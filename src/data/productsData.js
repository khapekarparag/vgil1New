import eBankerImg from '../assets/Products-img/e-banker.png';
import imisLogoImg from '../assets/Products-img/imis_logo.png';
import ibsLogoImg from '../assets/Products-img/ibs_logo.png';
import vpayLogoImg from '../assets/Products-img/vpay_logo.png';
import apmcLogoImg from '../assets/Products-img/apmc_logo.png';
import eAutopsyLogoImg from '../assets/Products-img/e-autopsy-logo.png';
import cyberSentinelImg from '../assets/Products-img/cyber-sentinel.png';
import conversationalAiImg from '../assets/Products-img/conversational-ai-companion-logo.png';
import transactCoreImg from '../assets/Products-img/TransactCore.png';
import auditFluxImg from '../assets/Products-img/AuditFlux.png';
import finFlowImg from '../assets/Products-img/FinFlow.png';

export const PRODUCTS_DATA = [
  {
    slug: 'core-banking-solution',
    title: 'Core Banking Solution',
    subtitle: 'Next-Generation Banking Infrastructure',
    shortDescription: 'Empower your financial institution with our robust, scalable, and secure core banking platform designed for modern banking needs.',
    icon: 'coins-solid',
    logo: eBankerImg,
    heroImage: eBankerImg,
    features: [
      {
        title: 'Seamless Scalability',
        description: 'Easily scale operations as your customer base grows without compromising performance.'
      },
      {
        title: 'Real-Time Processing',
        description: 'Ensure all transactions and account updates happen in real-time across all channels.'
      },
      {
        title: 'High Security Standards',
        description: 'Built with enterprise-grade security to protect sensitive financial data and prevent fraud.'
      }
    ],
    metrics: [
      { value: '30B+', label: 'Transactions processed' },
      { value: '200+', label: 'Total number of banks served' },
      { value: '99.9%', label: 'System uptime' },
      { value: '10ms', label: 'Avg transaction processing time' },
      { value: 'Global', label: 'Geographical coverage' },
      { value: '10M+', label: 'Accounts managed' }
    ]
  },
  {
    slug: 'mis-solution',
    title: 'MIS Solution',
    subtitle: 'Intelligent Management Information System',
    shortDescription: 'Transform raw data into actionable insights with our advanced Management Information System tailored for informed decision-making.',
    icon: 'chart-line-solid',
    logo: imisLogoImg,
    heroImage: imisLogoImg,
    features: [
      {
        title: 'Custom Dashboards',
        description: 'Create personalized views of key performance indicators and critical metrics.'
      },
      {
        title: 'Automated Reporting',
        description: 'Generate comprehensive reports on a scheduled basis, saving time and reducing human error.'
      },
      {
        title: 'Data Integration',
        description: 'Seamlessly connect multiple data sources for a unified view of organizational performance.'
      }
    ],
    metrics: [
      { value: '500+', label: 'Dashboards Created' },
      { value: '50+', label: 'Data Sources Integrated' },
      { value: '24/7', label: 'Automated Reporting' }
    ]
  },
  {
    slug: 'erp-solution',
    title: 'ERP Solution',
    subtitle: 'Unified Enterprise Resource Planning',
    shortDescription: 'Streamline your business operations across finance, HR, manufacturing, and supply chain with our comprehensive ERP platform.',
    icon: 'desktop-solid',
    logo: ibsLogoImg,
    heroImage: ibsLogoImg,
    features: [
      {
        title: 'Centralized Database',
        description: 'Eliminate data silos with a single source of truth for all your business processes.'
      },
      {
        title: 'Workflow Automation',
        description: 'Automate repetitive tasks and approval processes to increase overall efficiency.'
      },
      {
        title: 'Inventory Management',
        description: 'Track stock levels in real-time, predict demand, and optimize procurement.'
      }
    ],
    metrics: [
      { value: '30%', label: 'Operational Cost Reduction' },
      { value: '150+', label: 'Enterprise Clients' },
      { value: '99.9%', label: 'System Reliability' },
      { value: '40+', label: 'Modules Available' }
    ]
  },
  {
    slug: 'digital-payments',
    title: 'Digital Payments',
    subtitle: 'Secure and Instant Transaction Processing',
    shortDescription: 'Provide your customers with fast, secure, and flexible digital payment options to elevate the checkout and transaction experience.',
    icon: 'credit-card-solid',
    logo: vpayLogoImg,
    heroImage: vpayLogoImg,
    features: [
      {
        title: 'Multi-Channel Support',
        description: 'Accept payments via web, mobile, QR codes, and point-of-sale systems.'
      },
      {
        title: 'Fraud Detection',
        description: 'Utilize AI-driven algorithms to detect and block fraudulent transactions instantly.'
      },
      {
        title: 'Instant Settlements',
        description: 'Improve cash flow with real-time settlement and reconciliation.'
      }
    ],
    metrics: [
      { value: '5M+', label: 'Daily Transactions' },
      { value: '0.01%', label: 'Fraud Rate' },
      { value: '120+', label: 'Payment Methods' },
      { value: '<2s', label: 'Settlement Time' }
    ]
  },
  {
    slug: 'agriculture-trading',
    title: 'Agriculture Trading',
    subtitle: 'Digital Marketplace for Agri-Commodities',
    shortDescription: 'Connect farmers, traders, and buyers on a transparent digital platform designed to optimize agricultural supply chains.',
    icon: 'leaf-solid',
    logo: apmcLogoImg,
    heroImage: apmcLogoImg,
    features: [
      {
        title: 'Price Discovery',
        description: 'Provide real-time market prices to ensure fair trading and maximum profitability.'
      },
      {
        title: 'Supply Chain Tracking',
        description: 'Trace commodities from farm to fork, ensuring quality and transparency.'
      },
      {
        title: 'Smart Contracts',
        description: 'Automate agreements and payments upon successful delivery using blockchain.'
      }
    ],
    metrics: [
      { value: '1M+', label: 'Active Farmers' },
      { value: '$2B+', label: 'Traded Volume' },
      { value: '50+', label: 'Commodity Types' }
    ]
  },
  {
    slug: 'post-mortem-mgmt',
    title: 'Post-Mortem Mgmt.',
    subtitle: 'Comprehensive Autopsy and Forensic Management',
    shortDescription: 'A specialized digital solution to streamline forensic documentation, manage autopsy reports, and track evidence securely.',
    icon: 'clipboard-check-solid',
    logo: eAutopsyLogoImg,
    heroImage: eAutopsyLogoImg,
    features: [
      {
        title: 'Digital Documentation',
        description: 'Replace paper records with secure, easily searchable digital autopsy reports.'
      },
      {
        title: 'Chain of Custody',
        description: 'Track evidence and samples accurately to ensure legal integrity and compliance.'
      },
      {
        title: 'Inter-Agency Sharing',
        description: 'Securely share critical reports with law enforcement and medical authorities.'
      }
    ],
    metrics: [
      { value: '500k+', label: 'Digital Records' },
      { value: '100%', label: 'Compliance Rate' },
      { value: '200+', label: 'Agencies Connected' },
      { value: '5x', label: 'Faster Reporting' },
      { value: '0', label: 'Lost Evidence Incidents' }
    ]
  },
  {
    slug: 'end-to-end-cyber-security',
    title: 'End-to-End Cyber Security',
    subtitle: 'Proactive Threat Defense and Monitoring',
    shortDescription: 'Protect your digital assets with our comprehensive cybersecurity suite, featuring real-time monitoring and threat mitigation.',
    icon: 'shield-alt-solid',
    logo: cyberSentinelImg,
    heroImage: cyberSentinelImg,
    features: [
      {
        title: 'Continuous Monitoring',
        description: '24/7 surveillance of your network infrastructure to identify anomalies instantly.'
      },
      {
        title: 'Vulnerability Assessment',
        description: 'Regular automated scans to find and patch security weaknesses before they are exploited.'
      },
      {
        title: 'Incident Response',
        description: 'Rapid containment and recovery protocols to minimize damage during a breach.'
      }
    ],
    metrics: [
      { value: '24/7', label: 'Threat Monitoring' },
      { value: '10M+', label: 'Threats Blocked Monthly' },
      { value: '<5min', label: 'Incident Response Time' }
    ]
  },
  {
    slug: 'conversational-ai-companion',
    title: 'Conversational AI Companion',
    subtitle: 'Intelligent Customer Engagement',
    shortDescription: 'Deploy advanced AI chatbots and virtual assistants to provide 24/7 support, drive sales, and enhance user engagement.',
    icon: 'robot-solid',
    logo: conversationalAiImg,
    heroImage: conversationalAiImg,
    features: [
      {
        title: 'Natural Language Processing',
        description: 'Understand and respond to complex user queries with human-like accuracy.'
      },
      {
        title: 'Omnichannel Deployment',
        description: 'Integrate the AI companion across your website, mobile app, and social media platforms.'
      },
      {
        title: 'Learning & Adaptation',
        description: 'The AI continuously learns from interactions to improve future responses.'
      }
    ],
    metrics: [
      { value: '50M+', label: 'Conversations Handled' },
      { value: '85%', label: 'Resolution Rate' },
      { value: '40+', label: 'Languages Supported' },
      { value: '99%', label: 'Uptime' }
    ]
  },
  {
    slug: 'transact-core',
    title: 'Transact Core',
    subtitle: 'High-Volume Transaction Processing Engine',
    shortDescription: 'A robust processing engine designed to handle massive volumes of transactions with ultra-low latency and perfect accuracy.',
    icon: 'long-arrow-alt-right-solid',
    logo: transactCoreImg,
    heroImage: transactCoreImg,
    features: [
      {
        title: 'High Throughput',
        description: 'Capable of processing thousands of transactions per second under peak loads.'
      },
      {
        title: 'ACID Compliance',
        description: 'Guarantees that all transactions are processed reliably, maintaining data integrity.'
      },
      {
        title: 'Fault Tolerance',
        description: 'Built-in redundancy ensures zero downtime even during hardware failures.'
      }
    ],
    metrics: [
      { value: '100k+', label: 'TPS Capacity' },
      { value: '99.99%', label: 'Reliability Score' },
      { value: '15ms', label: 'End-to-End Latency' }
    ]
  },
  {
    slug: 'audit-flux',
    title: 'Audit Flux',
    subtitle: 'Dynamic Compliance and Auditing Software',
    shortDescription: 'Streamline your internal and external auditing processes with automated workflows, risk assessments, and compliance tracking.',
    icon: 'check-solid',
    logo: auditFluxImg,
    heroImage: auditFluxImg,
    features: [
      {
        title: 'Automated Trails',
        description: 'Automatically log user actions and system changes to create reliable audit trails.'
      },
      {
        title: 'Risk Heatmaps',
        description: 'Visualize organizational risks to prioritize auditing efforts effectively.'
      },
      {
        title: 'Regulatory Updates',
        description: 'Stay current with automated updates reflecting the latest compliance frameworks.'
      }
    ],
    metrics: [
      { value: '60%', label: 'Audit Time Saved' },
      { value: '50+', label: 'Global Frameworks' },
      { value: '100%', label: 'Traceability' }
    ]
  },
  {
    slug: 'fin-flow',
    title: 'Fin Flow',
    subtitle: 'Agile Financial Workflow Automation',
    shortDescription: 'Optimize your financial operations by automating approvals, invoice processing, and budget tracking with Fin Flow.',
    icon: 'bolt-solid',
    logo: finFlowImg,
    heroImage: finFlowImg,
    features: [
      {
        title: 'Smart Routing',
        description: 'Automatically route financial documents to the correct stakeholders for approval.'
      },
      {
        title: 'Expense Tracking',
        description: 'Monitor budgets and expenditures in real-time to prevent overspending.'
      },
      {
        title: 'ERP Integration',
        description: 'Seamlessly sync financial data with your existing enterprise resource planning software.'
      }
    ],
    metrics: [
      { value: '2M+', label: 'Invoices Processed' },
      { value: '80%', label: 'Approval Speed Increase' },
      { value: '$10B+', label: 'Managed Budget' }
    ]
  }
];
