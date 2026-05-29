import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
import ContactSection from '../components/home/ContactSection';
import AnalystMeetContent from '../components/investors/AnalystMeetContent';
import { INVESTORS_DATA } from '../data/investorsData';
import { motion, AnimatePresence } from 'framer-motion';
import InvestorContacts from '../components/investors/InvestorContacts';
import MaterialCreditors from '../components/investors/MaterialCreditors';
import PreferentialWarrants from '../components/investors/PreferentialWarrants';
import MaterialContracts from '../components/investors/MaterialContracts';
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  Info,
  Download,
  ArrowRight,
  BookOpen,
  Users,
  Percent,
  Award,
  Megaphone,
  FileText,
  CreditCard,
  Handshake,
  FolderOpen,
  Lock,
  BarChart3,
  GitBranch,
  Heart,
  ChevronDown,
  ChevronUp,
  Headphones,
  FileCode
} from 'lucide-react';
import './BoardManagement.css';

const GROUP_COMPANIES_DATA = [
  {
    name: "Paynext Private Limited",
    icon: "building-2",
    theme: "orange",
    docs: [
      { year: "FY 2024-2025", link: "#" },
      { year: "FY 2023-2024", link: "#" },
      { year: "FY 2022-2023", link: "#" },
      { year: "FY 2021-2022", link: "#" }
    ]
  },
  {
    name: "Sampada Infrasolutions Private Limited",
    icon: "building",
    theme: "blue",
    docs: [
      { year: "FY 2023-24", link: "#" },
      { year: "FY 2022-23", link: "#" },
      { year: "FY 2021-22", link: "#" }
    ]
  },
  {
    name: "SIP Fund Private Limited",
    icon: "trending-up",
    theme: "green",
    docs: [
      { year: "FY 2023-2024", link: "#" },
      { year: "FY 2022-2023", link: "#" },
      { year: "FY 2021-2022", link: "#" }
    ]
  },
  {
    name: "Virtual Galaxy Fintech Private Limited",
    icon: "building-2",
    theme: "purple",
    docs: [
      { year: "FY 2024-2025", link: "#" },
      { year: "FY 2023-2024", link: "#" },
      { year: "FY 2022-2023", link: "#" },
      { year: "FY 2021-2022", link: "#" }
    ]
  },
  {
    name: "Virtual Galaxy Insurance Brokers Private Limited",
    icon: "shield",
    theme: "gold",
    docs: [
      { year: "FY 2023-2024", link: "#" },
      { year: "FY 2022-2023", link: "#" },
      { year: "FY 2021-2022", link: "#" }
    ]
  }
];

const FINANCIAL_REPORTS_DATA = [
  {
    name: "Annual Reports",
    icon: "book-open",
    theme: "orange",
    docs: [
      { year: "FY 2024-2025", link: "#" },
      { year: "FY 2023-2024", link: "#" },
      { year: "FY 2022-2023", link: "#" },
      { year: "FY 2021-2022", link: "#" }
    ]
  },
  {
    name: "Quarterly Financial Results",
    icon: "trending-up",
    theme: "blue",
    docs: [
      { year: "Q3 FY 2024-25", link: "#" },
      { year: "Q2 FY 2024-25", link: "#" },
      { year: "Q1 FY 2024-25", link: "#" },
      { year: "Q4 FY 2023-24", link: "#" }
    ]
  },
  {
    name: "Shareholding Pattern",
    icon: "users",
    theme: "green",
    docs: [
      { year: "Q3 FY 2024-25", link: "#" },
      { year: "Q2 FY 2024-25", link: "#" },
      { year: "Q1 FY 2024-25", link: "#" }
    ]
  },
  {
    name: "Statutory Disclosures & Filings",
    icon: "shield",
    theme: "purple",
    docs: [
      { year: "FY 2024-2025", link: "#" },
      { year: "FY 2023-2024", link: "#" },
      { year: "FY 2022-2023", link: "#" },
      { year: "FY 2021-2022", link: "#" }
    ]
  }
];

const POLICIES_DATA = [
  {
    name: "Dividend Distribution Policy",
    icon: "percent",
    sections: [
      {
        title: "1. INTRODUCTION",
        text: "In terms of the Securities and Exchange Board of India (Depositories and Participants) Regulations, 2018, the disclosure requirements and corporate governance norms as specified for SME listed companies shall mutatis mutandis apply to Virtual Galaxy Infotech Limited (hereinafter referred to as \"the Company\"). Accordingly, this Dividend Distribution Policy (hereinafter referred to as \"this Policy\") is framed for voluntary adoption of practices applicable to SME listed companies under the Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015 (\"LODR Regulations\") as amended from time to time."
      },
      {
        title: "2. OBJECTIVE",
        text: "The objective of this Policy is to lay down the parameters to be considered by the Board of Directors of the Company before declaring or recommending dividend to its shareholders for a financial year. Dividend for the purpose of this Policy shall include Interim Dividend."
      },
      {
        title: "3. PARAMETERS TO BE CONSIDERED WHILE DECLARING OR RECOMMENDING DIVIDEND",
        text: "The Board of Directors of the Company shall generally consider the following parameters while declaring or recommending dividend to shareholders:",
        subsections: [
          {
            title: "3.1 Financial Factors:",
            bullets: [
              "Current year's profit arrived at after providing for depreciation in accordance with the provisions of Section 123 and other applicable provisions, if any, of the Companies Act, 2013 read with the Rules issued thereunder; and/or",
              "Profit from any of the previous financial year(s) arrived at after providing for depreciation in accordance with the provisions of Section 123 and other applicable provisions, if any, of the Companies Act, 2013 read with the Rules issued thereunder;",
              "Fund requirements to finance the working capital needs of the business;",
              "Fund requirements to meet expense to upgrade and maintain the infrastructure of the Company;",
              "Investment opportunities in subsidiaries/ associates/ joint ventures, mergers and acquisitions;",
              "Optimal free cash to fund any exigencies, if any;",
              "Any other relevant factors or events."
            ]
          },
          {
            title: "3.2 Internal / External Factors:",
            bullets: [
              "Internal factors such as business expansion plan, investment plans, contractual restrictions, or other strategic priorities as may be considered prudent by the Board;",
              "External factors such as market conditions, macro-economic environment, competition intensity, technological changes, regulatory changes, adherence to requirements stipulated under the regulations formulated by the Securities and Exchange Board of India, the Companies Act, 2013 and rules thereunder, as amended from time to time, taxation;",
              "Any other factors or events considered relevant by the Board."
            ]
          }
        ]
      },
      {
        title: "4. CIRCUMSTANCES UNDER WHICH THE SHAREHOLDERS MAY OR MAY NOT EXPECT DIVIDEND",
        paragraphs: [
          "The Board of Directors of the Company, while declaring or recommending dividend shall ensure compliance with statutory requirements under applicable laws including the provisions of the Companies Act, 2013 and LODR Regulations. The Board of Directors, while determining the dividend to be declared or recommended, shall take into consideration the advice of the management of the Company and the planned and further investments for growth apart from other parameters set out in this Policy.",
          "Dividend for any financial year shall generally be paid once a year, out of net profit earned during the said year. However, the Board may at its discretion, declare interim dividend and may also declare dividend out of retained earnings.",
          "The Board of Directors of the Company may not declare or recommend dividend for a particular period if it is of the view that it would be prudent to conserve capital due to circumstances or factors such as adverse market conditions, business uncertainty, inadequacy of profits earned during the fiscal year, inadequacy of cash balance, large forthcoming capital requirements which are best funded through internal accruals, regulatory / market exigencies, changing regulations, etc.",
          "The Board of Directors may in extraordinary circumstances, deviate from the parameters listed in this Policy."
        ]
      },
      {
        title: "5. POLICY AS TO HOW THE RETAINED EARNINGS SHALL BE UTILIZED",
        text: "The profits earned by the Company can either be retained in the business or used for various purposes as outlined below or it can be distributed to the shareholders.",
        bullets: [
          "Fund requirements to maintain Net Worth of the Company as prescribed by regulators from time to time;",
          "Fund requirements to finance the working capital needs of the business;",
          "Fund requirements to meet expense to upgrade and maintain the infrastructure of the Company;",
          "Fund requirements for development / enhancement of products and services;",
          "Fund requirements to maintain and improve security of client data and transactions;",
          "Investment opportunities in subsidiaries / associates / joint ventures, mergers and acquisitions;",
          "Optimal free cash to fund any exigencies, if any;",
          "Any other relevant factors or events."
        ]
      },
      {
        title: "6. PROVISIONS IN REGARD TO VARIOUS CLASSES OF SHARES",
        text: "The provisions contained in this policy shall apply to all classes of Shares of the Company. It may be noted that currently the Company has only one class of shares, namely, Equity Shares."
      },
      {
        title: "7. DISCLOSURES",
        text: "The Policy shall be disclosed on the website of the Company i.e. at https://www.vgipl.com/"
      },
      {
        title: "8. AMENDMENT AND CONFLICT",
        text: "The adequacy of this Policy shall be reviewed and reassessed periodically, based on the changes that may be brought about due to any regulatory amendments or otherwise. In the event of any conflict between the provisions of this policy and of the Companies Act, 2013 and the LODR Regulations, or any other statutory enactments, rules, the provisions of such Act or LODR Regulations or statutory enactments, rules etc. including any amendments/modifications thereto shall prevail over this Policy."
      }
    ]
  },
  {
    name: "Familiarization Programme of ID",
    icon: "award",
    sections: [
      {
        title: "Preamble",
        text: "The Companies Act, 2013, read with Regulation 25(7) of the SEBI Listing Regulations places increased responsibilities on Independent Directors of the Company. In accordance with the requirements of this Regulation, the Company needs to familiarize the Independent Directors (here in after referred as \"Directors\") through Familiarization Programme (here in after referred as \"Programme\") and provide an insight into the Company to enable the Directors to understand the business of the Company in depth and its strategy, operations and functions whereby they can contribute significantly to the growth of the Company."
      },
      {
        title: "APPLICABILITY",
        text: "This Policy applies to the Independent Directors of Virtual Galaxy Infotech Limited."
      },
      {
        title: "Purpose & Objective",
        text: "By means of the Programme, the Company intends to achieve the following objectives:",
        bullets: [
          "1. To appraise the Directors about the operating system of the Company for its business operations;",
          "2. To inform them of all the laws, rules, regulations and guidelines applicable to the Company;",
          "3. To make them aware of the rules, responsibilities, liabilities pursuant to the Listing Agreement and the Companies Act, 2013 and Rules made thereunder;",
          "4. To generate and obtain valuable and informed decision from the Directors on the matters to be brought or discussed at the Board Meetings."
        ]
      },
      {
        title: "Contents of the Programme",
        text: "The basic theme of the programme would, inter alia, include –",
        bullets: [
          "1. Roles, Rights, Duties, Responsibilities and Liabilities of the Directors;",
          "2. Business Model of the Company thereby including the nature of industry in which the Company falls, its product and services, geographical area of operation of the Company;",
          "3. Management Techniques.",
          "4. Visit to the operating units to make them understand the operations, etc."
        ]
      },
      {
        title: "Amendment",
        text: "Any change in the Policy shall be approved by the Board. The Board shall have the right to withdraw and/or amend any part of this Policy or the entire Policy, at any time, as it deems fit, or from time to time, and the decision of the Board in this respect shall be final and binding. Any subsequent amendment/modification in the Act or the rules framed thereunder or the SEBI Listing Regulations and/or any other laws in this regard shall automatically apply to this Policy."
      },
      {
        title: "Interpretation",
        text: "In any circumstance where the terms of this Policy are inconsistent with any existing or newly enacted law, rule, regulation or standard governing the Company, the said law, rule, regulation or standard will take precedence over this Policy."
      },
      {
        title: "Compliance",
        text: "The Compliance Officer shall be responsible for supervision of the Policy. Any queries regarding the policy shall be referred to the Compliance Officer, who is in charge of administering, enforcing and updating the Policy."
      },
      {
        title: "Program and Disclosure",
        text: "Requisite disclosure in the website of the Company would be made as and when such programmes conducted"
      }
    ]
  },
  {
    name: "Nomination and Remuneration Committee (Term of Reference, Procedure and Policies)",
    icon: "users",
    sections: [
      {
        title: "1. OBJECTIVE AND SCOPE",
        text: "To outline criteria and processes for appointment, evaluation, and remuneration of Board Directors, Key Managerial Personnel (KMP), and the senior management team."
      },
      {
        title: "2. APPOINTMENT AND REMUNERATION CORE CRITERIA",
        bullets: [
          "Identification of qualified personnel possessing academic excellence, domain leadership, integrity, and operational capability.",
          "Ensuring a balanced mix of executive fixed pay, performance variables, and retirement benefits.",
          "Periodic evaluation of performance indicators, ensuring accountability, alignment, and alignment with corporate growth objectives."
        ]
      }
    ]
  },
  {
    name: "Vigil Mechanism and Whistle Blower Policy",
    icon: "megaphone",
    sections: [
      {
        title: "1. VIGIL FRAMEWORK",
        text: "Virtual Galaxy is committed to maintaining the highest ethical standards. This mechanism offers a safe channel for directors, employees, and suppliers to voice genuine concerns regarding financial malpractices, code violations, or corporate misconduct."
      },
      {
        title: "2. POLICY SAFEGUARDS & ACCESS",
        bullets: [
          "Complete confidentiality of the whistle blower, with strict locks on disclosure of identity.",
          "Absolute protection against victimisation, harassment, or retaliatory personnel actions.",
          "Direct, unimpeded access to the Chairperson of the Audit Committee for material complaints."
        ]
      }
    ]
  },
  {
    name: "Code of Conduct for Board Members and Senior Management Personnel",
    icon: "shield-check",
    sections: [
      {
        title: "1. ETHICAL PRINCIPLES",
        text: "Fiduciary duties of honesty, professional loyalty, transparency, and complete compliance with local laws and regulations govern the conduct of directors and senior corporate leadership."
      },
      {
        title: "2. CORE STANDARDS",
        bullets: [
          "Avoiding conflict of interest between personal affairs and official company operations.",
          "Preventing personal benefit from corporate business opportunities or corporate assets.",
          "Strict preservation of confidential company information, customer profiles, and product development intellectual property."
        ]
      }
    ]
  },
  {
    name: "Code of Practices and Procedures for Fair Disclosure of Unpublished Price Sensitive Information",
    icon: "file-text",
    sections: [
      {
        title: "1. PROTOCOLS",
        text: "Details policies to ensure immediate, uniform, and fair public disclosure of Unpublished Price Sensitive Information (UPSI) to prevent selective trading or market manipulation."
      },
      {
        title: "2. KEY RULES",
        bullets: [
          "Immediate dissemination of price-sensitive disclosures to the stock exchange.",
          "Directing all disclosures through the designated Chief Investor Relations Officer.",
          "Timely, accurate responses to market rumors and regulatory queries."
        ]
      }
    ]
  },
  {
    name: "Criteria / Policy of Making Payments to Non-Executive Directors",
    icon: "credit-card",
    sections: [
      {
        title: "1. COMPENSATION",
        text: "Enforces a structured framework to attract and retain global directors of high repute by offering competitive and transparent compensation."
      },
      {
        title: "2. REVENUE COMPONENTS",
        bullets: [
          "Sitting fees for board, committee, and statutory shareholder meetings.",
          "Travel, accommodation, and administrative expense reimbursements incurred on official corporate duty.",
          "Performance-linked commissions subject to board approvals and shareholder thresholds."
        ]
      }
    ]
  },
  {
    name: "Policy on Materiality of Related Party Transactions",
    icon: "handshake",
    sections: [
      {
        title: "1. PURPOSE",
        text: "Ensures that all transactions between the company and related parties are conducted on arm's length terms, protecting minority shareholder interests."
      },
      {
        title: "2. APPROVAL PATHWAYS",
        bullets: [
          "Audit Committee pre-clearance required for all Related Party Transactions (RPTs).",
          "Board approval required for transactions that fall outside the ordinary course of business.",
          "Shareholder approval required if the transaction value exceeds SEBI materiality limits."
        ]
      }
    ]
  },
  {
    name: "Policy on Preservation and Archival of Documents",
    icon: "folder-open",
    sections: [
      {
        title: "1. ARCHIVAL MANAGEMENT",
        text: "Details preservation timelines for physical and digital records of business activities, financial books, and compliance history."
      },
      {
        title: "2. CLASSIFICATION",
        bullets: [
          "Permanent Records: Constitution papers, register of members, corporate deeds, board meeting minutes.",
          "Temporary Records (8-Year Preservation): Tax records, trade documents, vouchers, employee filings.",
          "Digital Archival: Automated database backup schedules and secure off-site server storage."
        ]
      }
    ]
  },
  {
    name: "Policy on Prevention of Sexual Harassment at Workplace (POSH)",
    icon: "file-code",
    sections: [
      {
        title: "1. SAFE WORKING ENVIRONMENT",
        text: "Commitment to zero-tolerance towards sexual harassment. Provides a working environment that enables employees to work without fear of prejudice, gender bias, and harassment."
      },
      {
        title: "2. ICC REDRESSAL PATHWAY",
        bullets: [
          "Internal Complaints Committee (ICC) constituted at all operational divisions.",
          "Strict adherence to natural justice, safety, and confidentiality of the complainant.",
          "Time-bound investigation processes, concluding with immediate disciplinary action for violations."
        ]
      }
    ]
  },
  {
    name: "Policy for Disclosure of Material Events or Information and Disclosure & Determination of Materiality of Events or Information",
    icon: "file-text",
    sections: [
      {
        title: "1. SEBI ALIGNMENT",
        text: "Defines criteria to identify and disclose material corporate developments to stock exchanges under SEBI LODR Regulations."
      },
      {
        title: "2. NOTIFICATION SCHEDULES",
        bullets: [
          "Disclosing material corporate events within 24 hours of occurrence.",
          "Disclosing financial results, dividends, and key appointments immediately.",
          "Regular tracking and updates on outstanding material cases."
        ]
      }
    ]
  },
  {
    name: "Terms and Conditions of Appointment of Independent Directors",
    icon: "users",
    sections: [
      {
        title: "1. ENGAGEMENT TERMS",
        text: "Independent Directors are appointed for a fixed tenure, subject to annual performance evaluation, corporate requirements, and statutory limits."
      },
      {
        title: "2. EXPECTATIONS & DUTIES",
        bullets: [
          "Expected to devote sufficient time to board preparation and active committee participation.",
          "Must satisfy SEBI independence guidelines and criteria throughout their tenure.",
          "Providing independent oversight, objective strategic inputs, and risk controls."
        ]
      }
    ]
  },
  {
    name: "Prohibition of Insider Trading Policy",
    icon: "lock",
    sections: [
      {
        title: "1. TRADING LIMITS",
        text: "Prohibits employees, directors, and designated connected persons from buying or selling company securities while possessing Unpublished Price Sensitive Information (UPSI)."
      },
      {
        title: "2. COMPLIANCE CONTROLS",
        bullets: [
          "Trading window closures during sensitive financial events, acquisitions, or board decisions.",
          "Compulsory trade pre-clearances for transactions exceeding board thresholds.",
          "Prompt notification of trades to SEBI compliance officers."
        ]
      }
    ]
  },
  {
    name: "Policy on Identification of Group Companies, Material Creditors and Material Litigations",
    icon: "bar-chart",
    sections: [
      {
        title: "1. IDENTIFICATION THRESHOLDS",
        text: "Establishes quantitative thresholds to identify group companies, material creditors, and pending litigations for financial disclosure."
      },
      {
        title: "2. DISCLOSURE LIMITS",
        bullets: [
          "Material litigations: Cases exceeding 1% of consolidated profit after tax are disclosed.",
          "Material creditors: Dues exceeding 10% of total trade payables are listed.",
          "Group companies: Companies defined as subsidiaries or joint venture partners are disclosed."
        ]
      }
    ]
  },
  {
    name: "Policy for determining Material Subsidiaries and Governance Framework in Relation Thereto",
    icon: "git-branch",
    sections: [
      {
        title: "1. DEFINITION",
        text: "Determines materiality of subsidiary companies to ensure structured corporate governance across the Virtual Galaxy group."
      },
      {
        title: "2. GOVERNANCE CONTROLS",
        bullets: [
          "Appointing at least one Independent Director from the parent company to the board of the material subsidiary.",
          "Presenting financial statements and key accounts of subsidiaries to the parent's Audit Committee.",
          "Mandatory board resolutions for the sale or transfer of material subsidiary assets."
        ]
      }
    ]
  },
  {
    name: "Policy on Corporate Social Responsibility (CSR)",
    icon: "heart",
    sections: [
      {
        title: "1. CSR MANDATE",
        text: "Guides social, environmental, and corporate community initiatives aligned with sustainable development goals and CSR regulations."
      },
      {
        title: "2. IMPLEMENTATION & BUDGET",
        bullets: [
          "CSR Committee plans budgets and monitors projects.",
          "CSR spends focused on local communities around business hubs.",
          "Annual CSR report detailing projects and audits."
        ]
      }
    ]
  }
];

const ANNUAL_RETURNS_DATA = [
  { title: "Form MGT-7 for the financial year ending on 2025", link: "#" },
  { title: "Form MGT-7 for the financial year ending on 2024", link: "#" },
  { title: "Form MGT-7 for the financial year ending on 2023", link: "#" },
  { title: "Form MGT-7 for the financial year ending on 2022", link: "#" },
  { title: "Form MGT-7 for the financial year ending on 2020", link: "#" }
];

const getCompanyIcon = (iconName) => {
  switch (iconName) {
    case 'trending-up':
      return <TrendingUp className="company-icon-svg" />;
    case 'shield':
      return <ShieldCheck className="company-icon-svg" />;
    case 'book-open':
      return <BookOpen className="company-icon-svg" />;
    case 'users':
      return <Users className="company-icon-svg" />;
    case 'building':
    case 'building-2':
    default:
      return <Building2 className="company-icon-svg" />;
  }
};

const getPolicyIcon = (iconName) => {
  switch (iconName) {
    case 'percent':
      return <Percent className="policy-icon-svg" />;
    case 'award':
      return <Award className="policy-icon-svg" />;
    case 'users':
      return <Users className="policy-icon-svg" />;
    case 'megaphone':
      return <Megaphone className="policy-icon-svg" />;
    case 'shield-check':
      return <ShieldCheck className="policy-icon-svg" />;
    case 'file-text':
      return <FileText className="policy-icon-svg" />;
    case 'credit-card':
      return <CreditCard className="policy-icon-svg" />;
    case 'handshake':
      return <Handshake className="policy-icon-svg" />;
    case 'folder-open':
      return <FolderOpen className="policy-icon-svg" />;
    case 'lock':
      return <Lock className="policy-icon-svg" />;
    case 'bar-chart':
      return <BarChart3 className="policy-icon-svg" />;
    case 'git-branch':
      return <GitBranch className="policy-icon-svg" />;
    case 'heart':
      return <Heart className="policy-icon-svg" />;
    case 'file-code':
    default:
      return <FileCode className="policy-icon-svg" />;
  }
};

function InvestorSingle() {
  const { slug } = useParams();
  const investorData = INVESTORS_DATA.find(i => i.slug === slug);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!investorData) {
    return <Navigate to="/404" />;
  }

  const isGroupCompanies = slug === 'group-companies';
  const isFinancialReports = slug === 'financial-information-reports';
  const isCorporateGovernance = slug === 'corporate-governance';
  const isDocDashboard = isGroupCompanies || isFinancialReports;
  const dashboardData = isGroupCompanies ? GROUP_COMPANIES_DATA : FINANCIAL_REPORTS_DATA;

  if (slug === 'investor-contacts-grievances') {
    return <InvestorContacts />;
  }

  if (slug === 'material-creditors') {
    return <MaterialCreditors />;
  }

  if (slug === 'preferential-allotment-warrants') {
    return <PreferentialWarrants />;
  }

  if (slug === 'material-contracts') {
    return <MaterialContracts />;
  }

  return (
    <div className="board-mgmt-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="container">
          {/* Breadcrumbs */}
          <div className="row mb-3">
            <div className="col-12 text-left">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0 m-0" style={{ fontSize: '13px' }}>
                  <li className="breadcrumb-item"><Link to="/" className="text-secondary hover:text-[#ff4d00] transition-colors no-underline">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/investors/board-and-management" className="text-secondary hover:text-[#ff4d00] transition-colors no-underline">Investors</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <span className="text-primary font-weight-bold">
                      {isCorporateGovernance ? "Policies" : investorData.title}
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            {/* Left Column: Text */}
            <div className="col-lg-7 col-12 text-left effect-fade-up">
              <div className="tag-badge">
                <span className="tag-dot" />
                <span className="tag-text">Investor Relations</span>
              </div>
              <h1 className="hero-title">
                {isCorporateGovernance ? (
                  <>
                    <span>Policies</span>
                  </>
                ) : (
                  <>
                    <span>{investorData.title.split(' ')[0]}</span>{' '}
                    <span className="highlight">{investorData.title.split(' ').slice(1).join(' ')}</span>
                  </>
                )}
                <div className="hero-title-underline"></div>
              </h1>
              <p className="hero-desc">
                {isCorporateGovernance 
                  ? "Our policies ensure transparency, accountability, and responsible governance across all operations."
                  : investorData.desc
                }
              </p>
            </div>

            {/* Right Column: Logo/Illustration */}
            <div className="col-lg-5 col-12 text-center mt-4 mt-lg-0 effect-fade-up" style={{ animationDelay: '0.1s' }}>
              {investorData.logo && (
                <div className="hero-img-wrap" style={{ maxWidth: '280px' }}>
                  <img src={investorData.logo} alt={`${investorData.title} Logo`} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid / Disclosures Section */}
      <section className="explore-section">
        <div className="container">
          <div className="explore-divider"></div>
          
          {isCorporateGovernance ? (
            /* CORPORATE GOVERNANCE CUSTOM ACCORDION & RETURNS VIEW */
            <div className="policies-page-container">
              
              {/* Company Policies Section */}
              <div className="policies-section-block">
                <h3 className="explore-label text-left mb-3">Company Policies</h3>
                <div className="policies-accordion-list">
                  {POLICIES_DATA.map((policy, idx) => {
                    const isOpen = activeAccordion === idx;
                    return (
                      <div 
                        key={idx} 
                        className={`policy-accordion-card effect-fade-up ${isOpen ? 'is-open' : ''}`}
                        style={{ animationDelay: `${idx * 0.04}s` }}
                      >
                        <button
                          className="policy-accordion-header"
                          onClick={() => setActiveAccordion(isOpen ? null : idx)}
                          aria-expanded={isOpen}
                        >
                          <div className="policy-header-left">
                            <div className="policy-brand-icon-wrap">
                              {getPolicyIcon(policy.icon)}
                            </div>
                            <span className="policy-title-text">{policy.name}</span>
                          </div>
                          <div className="policy-header-right">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 accordion-chevron-icon" />
                            ) : (
                              <ChevronDown className="w-5 h-5 accordion-chevron-icon" />
                            )}
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 }
                              }}
                              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                              className="policy-accordion-content-wrap"
                            >
                              <div className="policy-accordion-content">
                                {policy.sections && policy.sections.map((sec, secIdx) => (
                                  <div key={secIdx} className="policy-section-block-inner mb-4">
                                    <h4 className="policy-section-title">{sec.title}</h4>
                                    {sec.text && <p className="policy-section-text">{sec.text}</p>}
                                    {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                                      <p key={pIdx} className="policy-section-text">{p}</p>
                                    ))}
                                    {sec.bullets && (
                                      <ul className="policy-section-bullets" style={{ listStyleType: /^\d+\./.test(sec.bullets[0]) ? 'none' : 'disc', paddingLeft: /^\d+\./.test(sec.bullets[0]) ? '0' : '20px' }}>
                                        {sec.bullets.map((bullet, bIdx) => (
                                          <li key={bIdx} className="policy-section-bullet-item">{bullet}</li>
                                        ))}
                                      </ul>
                                    )}
                                    {sec.subsections && sec.subsections.map((sub, subIdx) => (
                                      <div key={subIdx} className="policy-subsection-block mt-3">
                                        <h5 className="policy-subsection-title">{sub.title}</h5>
                                        {sub.bullets && (
                                          <ul className="policy-section-bullets" style={{ listStyleType: /^\d+\./.test(sub.bullets[0]) ? 'none' : 'disc', paddingLeft: /^\d+\./.test(sub.bullets[0]) ? '0' : '20px' }}>
                                            {sub.bullets.map((sBullet, sbIdx) => (
                                              <li key={sbIdx} className="policy-section-bullet-item">{sBullet}</li>
                                            ))}
                                          </ul>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Annual Returns Section */}
              <div className="policies-section-block mt-5">
                <h3 className="explore-label text-left mb-3">Annual Returns</h3>
                <div className="annual-returns-list">
                  {ANNUAL_RETURNS_DATA.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="return-row-card effect-fade-up"
                      style={{ animationDelay: `${idx * 0.08}s` }}
                    >
                      <div className="return-row-left">
                        <div className="return-doc-icon">
                          <FileText className="w-6 h-6" />
                        </div>
                        <span className="return-title-text">{item.title}</span>
                      </div>
                      <div className="return-row-right">
                        <a href={item.link} className="btn-return-download">
                          <span className="btn-return-download-icon-wrap">
                            <Download className="w-3.5 h-3.5" />
                          </span>
                          Download
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Support Banner */}
              <div 
                className="investor-help-banner effect-fade-up mt-5" 
                style={{ animationDelay: '0.2s' }}
              >
                <div className="help-banner-left">
                  <div className="help-banner-icon-wrap">
                    <Headphones className="help-banner-icon" />
                  </div>
                  <div className="help-banner-text">
                    <h4 className="help-banner-title">Need any help?</h4>
                    <p className="help-banner-desc">
                      If you need any specific document or have any queries, feel free to contact our investor relations team.
                    </p>
                  </div>
                </div>
                <div className="help-banner-right">
                  <Link to="/contact" className="btn-help-banner-cta">
                    Get in Touch
                    <span className="btn-help-banner-icon-wrap">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ) : slug === 'investor-analyst-meet' ? (
            /* ANALYST MEET CUSTOM ROW/CARD VIEW */
            <AnalystMeetContent />
          ) : isDocDashboard ? (
            /* GROUP COMPANIES & FINANCIAL REPORTS CUSTOM VIEW */
            <div className="group-companies-container">
              <div className="company-rows-list">
                {dashboardData.map((company, idx) => (
                  <div
                    key={idx}
                    className="company-row-card effect-fade-up"
                    style={{ animationDelay: `${idx * 0.08}s` }}
                  >
                    <div className="company-info-col">
                      <div className={`company-brand-icon theme-${company.theme}`}>
                        {getCompanyIcon(company.icon)}
                      </div>
                      <h3 className="company-name">{company.name}</h3>
                    </div>

                    <div className="company-vertical-divider"></div>

                    <div className="company-docs-col">
                      {company.docs.map((doc, docIdx) => (
                        <div key={docIdx} className="fy-doc-card">
                          <div className="fy-doc-info">
                            <span className="fy-doc-year">{doc.year}</span>
                            <span className="fy-doc-label">PDF</span>
                          </div>
                          <a
                            href={doc.link}
                            className="fy-doc-download-btn"
                            aria-label={`Open ${doc.year} report for ${company.name}`}
                          >
                            <FileText className="fy-download-icon" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Support Banner */}
              <div
                className="investor-help-banner effect-fade-up"
                style={{ animationDelay: `${dashboardData.length * 0.08}s` }}
              >
                <div className="help-banner-left">
                  <div className="help-banner-icon-wrap">
                    <Info className="help-banner-icon" />
                  </div>
                  <div className="help-banner-text">
                    <h4 className="help-banner-title">Need any help?</h4>
                    <p className="help-banner-desc">
                      If you need any specific document or have any queries, feel free to contact our investor relations team.
                    </p>
                  </div>
                </div>
                <div className="help-banner-right">
                  <Link to="/contact" className="btn-help-banner-cta">
                    Get in Touch
                    <span className="btn-help-banner-icon-wrap">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ) : investorData.gridItems && investorData.gridItems.length > 0 ? (
            <div>
              <div className="explore-label">Governance Options</div>
              <h2 className="explore-title">
                Select a section to view detailed corporate registers, <br />
                committee allocations, and compliance documents.
              </h2>
              
              <div className="row justify-content-center g-4">
                {investorData.gridItems.map((item, index) => (
                  <div className="col-md-6 col-lg-3 mb-24 effect-fade-up" style={{ animationDelay: `${index * 0.08}s` }} key={index}>
                    <a href={item.link} className="mgmt-card" style={{ padding: '30px 24px' }}>
                      <div className="mgmt-card-title" style={{ marginTop: '0', fontSize: '16px' }}>{item.title}</div>
                      <div className="mgmt-card-action" style={{ marginTop: '16px' }}>
                        View Document
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="explore-label">Governance Disclosures</div>
              <h2 className="explore-title">
                Official corporate reports, statutory filings, and compliance disclosures <br />
                for Virtual Galaxy Infotech Limited.
              </h2>
              
              <div className="row justify-content-center effect-fade-up">
                <div className="col-lg-8">
                  <div className="p-5 bg-light border border-slate-100 text-center" style={{ borderRadius: '20px' }}>
                    <p className="text-secondary mb-0" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                      There are currently no active document files listed in this category. For archival records, statutory copies, or specific queries, please contact our Compliance Officer at the Investor Relations office.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <ContactSection />
    </div>
  );
}

export default InvestorSingle;
