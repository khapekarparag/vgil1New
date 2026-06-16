import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal as TerminalIcon, Cpu, Network, Bot, Sparkles, Send, ShieldAlert, 
  Sliders, Database, Play, RefreshCw, Layers, CheckCircle2, 
  X, RefreshCcw, HelpCircle, ArrowRight, Activity, ArrowLeft,
  Server, Workflow, BrainCircuit, ShieldCheck, Zap, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

function AIPage() {
  // SEO Protection: Prevent search indexing
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]');
    let existed = !!meta;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.appendChild(meta);
    }
    const previousContent = meta.content;
    meta.content = 'noindex, nofollow';

    const previousTitle = document.title;
    document.title = 'VGIL // AI Solutions';

    return () => {
      if (existed) {
        meta.content = previousContent;
      } else {
        meta.remove();
      }
      document.title = previousTitle;
    };
  }, []);

  // Slide state for Hero
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: "Str(AI)tegy for Enterprise Success",
      desc: "We don’t just implement AI, we optimize your core business processes for maximum efficiency and growth.",
      btnText: "Explore AI Solutions",
      btnLink: "#hype"
    },
    {
      title: "Intelligence That Unlocks Real Business Growth",
      desc: "Designed to explore, built to innovate, and crafted to scale — Virtual Galaxy empowers your business with next-gen intelligence.",
      btnText: "Learn more",
      btnLink: "#layers"
    },
    {
      title: "Reimagining Tomorrow with AI Today.",
      desc: "Building intelligent systems that power the next era of business evolution",
      btnText: "Get Started",
      btnLink: "#lab"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Interactive AI Parameters (Neural Lab)
  const [learningRate, setLearningRate] = useState(0.001);
  const [contextWindow, setContextWindow] = useState(8192);
  const [temperature, setTemperature] = useState(0.7);
  const [neuralDensity, setNeuralDensity] = useState(94);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Terminal Console State
  const [history, setHistory] = useState([
    { type: 'system', text: 'VGIL COGNITIVE SYSTEMS v4.2.9 // NEURAL HUB' },
    { type: 'system', text: 'SECURE LINK: ESTABLISHED' },
    { type: 'system', text: 'ROBOTS REGISTRY: NOINDEX, NOFOLLOW APPLIED' },
    { type: 'info', text: 'Type "help" to list available mainframe commands, or click the shortcuts below.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  // Auto-scroll terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Derived Performance Metrics
  const calculatedLatency = Math.round((temperature * 12) + (100 - neuralDensity) * 0.8 + 8);
  const calculatedThroughput = Math.round((neuralDensity * 125) / (learningRate * 1000 + 1));
  const calculatedCoherence = Math.round((1 - Math.abs(0.5 - temperature)) * 100);

  // Run mock optimization
  const triggerOptimization = () => {
    if (isOptimizing) return;
    setIsOptimizing(true);
    
    setHistory(prev => [
      ...prev,
      { type: 'command', text: 'optimize --force' },
      { type: 'system', text: 'Initializing neural pathway pruning sequence...' }
    ]);

    let step = 0;
    const interval = setInterval(() => {
      if (step === 0) {
        setHistory(prev => [...prev, { type: 'info', text: '-> Recalibrating node weights...' }]);
      } else if (step === 1) {
        setHistory(prev => [...prev, { type: 'info', text: '-> Clearing dead synapses...' }]);
      } else if (step === 2) {
        setHistory(prev => [...prev, { type: 'info', text: '-> Aligning semantic vectors...' }]);
      } else if (step === 3) {
        setHistory(prev => [
          ...prev, 
          { type: 'success', text: 'System Optimization Complete! Hyperparameters synchronized.' }
        ]);
        setIsOptimizing(false);
        clearInterval(interval);
      }
      step++;
    }, 800);
  };

  // Process terminal command
  const handleCommandSubmit = (e) => {
    e?.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'command', text: cmd }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'info',
          text: 'Available Mainframe Commands:\n' +
                '  about     - Learn about VGIL Virtual Galaxy AI architectures\n' +
                '  status    - View quantum node diagnostics and coherence levels\n' +
                '  agents    - Review active AI subroutines and background workers\n' +
                '  neural    - Run simulated synaptic feedback assessment\n' +
                '  optimize  - Trigger dynamic calibration sequence\n' +
                '  clear     - Clean terminal logs and screen buffer'
        });
        break;
      case 'about':
        newHistory.push({
          type: 'info',
          text: 'VGIL (Virtual Galaxy) Neural Architectures represent the frontier of cognitive engineering.\n' +
                'By blending multi-agent orchestration, advanced Retrieval-Augmented Generation, and secure ' +
                'on-prem transactional intelligence, we build robust digital minds that power global systems.'
        });
        break;
      case 'status':
        newHistory.push({
          type: 'info',
          text: `SYSTEM DIAGNOSTICS:\n` +
                `  - Core Temperature: Nominal (${(25 + temperature * 15).toFixed(1)}°C)\n` +
                `  - Coherence Rate: ${calculatedCoherence}%\n` +
                `  - Active Node Clusters: 1,024 / 1,024\n` +
                `  - Quantum Latency: ${calculatedLatency}ms\n` +
                `  - Encryption Index: AES-GCM-256 (Enforced)`
        });
        break;
      case 'agents':
        newHistory.push({
          type: 'info',
          text: 'ACTIVE COGNITIVE AGENTS:\n' +
                '  [1] Transact-Core-V4 (Idle) - Transaction anomaly watchdog.\n' +
                '  [2] Conversational-Companion (Active) - Handling user query parsing.\n' +
                '  [3] Audit-Flux-Sentinel (Monitoring) - Smart-contract validity audit.\n' +
                '  [4] Fin-Flow-Optimizer (Active) - Dynamic asset routing modeling.'
        });
        break;
      case 'neural':
        newHistory.push({
          type: 'info',
          text: 'Synaptic network trace initiated...\n' +
                '  [PATHWAY A]: Core Node -> Layer 2 Node -> Active. Weight = 0.982\n' +
                '  [PATHWAY B]: Attention Matrix -> Semantic Store -> Active. Weight = 0.871\n' +
                '  [PATHWAY C]: Context Window -> Model Head -> Active. Weight = 0.994\n' +
                'Dynamic route health score: 99.8%'
        });
        break;
      case 'optimize':
        setTimeout(() => triggerOptimization(), 10);
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of valid operations.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleShortcutClick = (cmd) => {
    setInputVal(cmd);
    setTimeout(() => {
      const input = document.getElementById('terminal-input');
      if (input) {
        input.focus();
      }
    }, 50);
  };

  return (
    <div className="neural-lab-wrapper">
      <style>
        {`
          .neural-lab-wrapper {
            background-color: #06070a;
            background-image: 
              radial-gradient(at 0% 0%, rgba(189, 0, 255, 0.08) 0px, transparent 50%),
              radial-gradient(at 100% 50%, rgba(0, 240, 255, 0.08) 0px, transparent 50%),
              radial-gradient(at 50% 100%, rgba(239, 68, 68, 0.05) 0px, transparent 50%),
              linear-gradient(rgba(255, 255, 255, 0.002) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.002) 1px, transparent 1px);
            background-size: 100% 100%, 100% 100%, 100% 100%, 50px 50px, 50px 50px;
            color: #e2e8f0;
            font-family: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            min-height: 100vh;
            padding: 120px 0 0;
            overflow: hidden;
            position: relative;
          }

          .neon-glow-header {
            text-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
          }

          .glass-panel {
            background: rgba(13, 16, 26, 0.65);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
            padding: 30px;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }

          .glass-panel:hover {
            border-color: rgba(0, 240, 255, 0.25);
            box-shadow: 0 15px 40px rgba(0, 240, 255, 0.1);
          }

          .cyber-badge {
            background: linear-gradient(135deg, rgba(189, 0, 255, 0.2), rgba(0, 240, 255, 0.2));
            border: 1px solid rgba(0, 240, 255, 0.4);
            border-radius: 9999px;
            color: #00f0ff;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.15em;
            padding: 4px 12px;
            text-transform: uppercase;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }

          .custom-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: #1e293b;
            outline: none;
            transition: background 0.3s;
          }

          .custom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #ff3b30;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(255, 59, 48, 0.6);
            transition: transform 0.2s;
          }

          .custom-slider::-webkit-slider-thumb:hover {
            transform: scale(1.25);
          }

          .terminal-window {
            background: #06070a;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            font-family: 'Fira Code', 'Courier New', Courier, monospace;
            display: flex;
            flex-direction: column;
            height: 400px;
            box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.9);
          }

          .terminal-header {
            background: #0e111a;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            padding: 10px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .dot-container {
            display: flex;
            gap: 6px;
          }

          .window-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }

          .window-dot.red { background: #ef4444; }
          .window-dot.yellow { background: #f59e0b; }
          .window-dot.green { background: #10b981; }

          .terminal-content {
            flex: 1;
            overflow-y: auto;
            padding: 16px;
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .terminal-input-row {
            display: flex;
            align-items: center;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            background: #0b0d14;
            padding: 12px 16px;
          }

          .prompt-symbol {
            color: #ff3b30;
            font-weight: bold;
            margin-right: 8px;
          }

          .terminal-input-element {
            background: transparent;
            border: none;
            color: #ffffff;
            font-family: inherit;
            font-size: 0.9rem;
            width: 100%;
            outline: none;
          }

          .shortcut-pill {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            color: #94a3b8;
            cursor: pointer;
            font-family: 'Fira Code', monospace;
            font-size: 0.75rem;
            padding: 6px 12px;
            transition: all 0.2s ease;
          }

          .shortcut-pill:hover {
            background: rgba(255, 59, 48, 0.08);
            border-color: rgba(255, 59, 48, 0.4);
            color: #ff3b30;
            box-shadow: 0 0 10px rgba(255, 59, 48, 0.1);
          }

          .interactive-btn {
            background: linear-gradient(135deg, #ff3b30, #bd00ff);
            border: none;
            border-radius: 8px;
            color: #ffffff;
            cursor: pointer;
            font-weight: 600;
            padding: 12px 24px;
            transition: opacity 0.2s, transform 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 0 15px rgba(255, 59, 48, 0.2);
          }

          .interactive-btn:hover {
            opacity: 0.9;
            transform: translateY(-2px);
            box-shadow: 0 0 20px rgba(255, 59, 48, 0.35);
          }

          .glow-ring {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            pointer-events: none;
            z-index: 0;
          }

          .glow-ring-1 {
            width: 400px;
            height: 400px;
            background: rgba(189, 0, 255, 0.08);
            top: 20%;
            left: -10%;
          }

          .glow-ring-2 {
            width: 400px;
            height: 400px;
            background: rgba(0, 240, 255, 0.08);
            bottom: 20%;
            right: -10%;
          }

          .hero-slider-height {
            min-height: 500px;
            display: flex;
            align-items: center;
          }

          .layer-card {
            background: rgba(18, 20, 29, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 24px;
            padding: 40px 30px;
            height: 100%;
            transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          }

          .layer-card:hover {
            transform: translateY(-5px);
            border-color: rgba(255, 59, 48, 0.3);
            box-shadow: 0 15px 35px rgba(255, 59, 48, 0.08);
          }

          .industry-card {
            background: rgba(13, 16, 26, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 16px;
            padding: 24px;
            transition: all 0.3s ease;
            height: 100%;
          }

          .industry-card:hover {
            border-color: #ff3b30;
            background: rgba(255, 59, 48, 0.03);
          }
        `}
      </style>

      {/* Decorative Glow Background Spheres */}
      <div className="glow-ring glow-ring-1"></div>
      <div className="glow-ring glow-ring-2"></div>

      {/* SECTION 1: HERO CAROUSEL */}
      <section className="position-relative overflow-hidden mb-80" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '40px' }}>
        <div className="container">
          <div className="row align-items-center hero-slider-height">
            <div className="col-lg-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="d-flex mb-3">
                    <span className="cyber-badge">
                      <Sparkles size={12} className="me-2" />
                      Virtual Galaxy AI
                    </span>
                  </div>
                  <h1 className="fw-bold text-white mb-20 neon-glow-header" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                    {slides[activeSlide].title}
                  </h1>
                  <p className="mb-40" style={{ color: '#94a3b8', fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px' }}>
                    {slides[activeSlide].desc}
                  </p>
                  <div className="d-flex gap-16 align-items-center">
                    <a href={slides[activeSlide].btnLink} className="tf-btn" style={{ textDecoration: 'none' }}>
                      {slides[activeSlide].btnText}
                    </a>
                    <div className="d-flex gap-8">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveSlide(index)}
                          style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: activeSlide === index ? '#ff3b30' : 'rgba(255, 255, 255, 0.2)',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            transition: 'background 0.3s ease'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="col-lg-5 d-none d-lg-block">
              <div className="position-relative d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
                <div style={{
                  position: 'absolute',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(255,59,48,0.2), rgba(189,0,255,0.2))',
                  filter: 'blur(40px)',
                  animation: 'pulse 4s infinite alternate'
                }} />
                <BrainCircuit size={200} className="text-brand" style={{ opacity: 0.85, zIndex: 1 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BEYOND AI HYPE */}
      <section className="section-spacing-lg mb-80" id="hype">
        <div className="container">
          <div className="glass-panel" style={{ borderLeft: '4px solid #ff3b30' }}>
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="heading-sub fw-semibold text-brand mb-15">Quantum Flow Engine</div>
                <h2 className="fw-bold text-white mb-20" style={{ fontSize: '2.2rem' }}>
                  Beyond AI Hype: Software That Actually Ships
                </h2>
                <h5 className="fw-semibold text-light mb-20" style={{ lineHeight: '1.5', color: '#cbd5e1' }}>
                  AI is trending. Impact is missing. We bridge the gap—turning ideas into intelligent, scalable systems.
                </h5>
                <p className="text-secondary mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  Because real transformation isn’t about tools—it’s about systems, strategy, and scale. At Virtual Galaxy, we turn AI into real business results with our AI Quantum Flow Engine.
                </p>
              </div>
              <div className="col-lg-4 text-center mt-30 mt-lg-0">
                <div style={{ display: 'inline-flex', padding: '30px', borderRadius: '50%', background: 'rgba(255,59,48,0.06)' }}>
                  <Zap size={64} className="text-brand animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THREE LAYERS OF AI */}
      <section className="section-spacing-lg mb-80" id="layers">
        <div className="container">
          <div className="heading-section center mb-60">
            <div className="heading-sub fw-semibold text-brand">The Architecture</div>
            <h2 className="heading-title text-white">The AI Quantum Flow Engine Layers</h2>
            <p className="mx-auto text-secondary mt-15" style={{ maxWidth: '600px', fontSize: '1.05rem' }}>
              We orchestrate AI solutions through three discrete layers to ensure security, high performance, and domain alignment.
            </p>
          </div>

          <div className="row">
            {/* Layer 1: Infrastructure */}
            <div className="col-lg-4 col-md-6 mb-24 mb-lg-0">
              <div className="layer-card">
                <div className="mb-20" style={{ display: 'inline-flex', padding: '12px', borderRadius: '12px', background: 'rgba(255,59,48,0.08)' }}>
                  <Server className="text-brand" size={28} />
                </div>
                <h4 className="fw-bold text-white mb-15" style={{ fontSize: '20px' }}>AI Infrastructure Layer</h4>
                <p className="text-secondary mb-0" style={{ fontSize: '14px', lineHeight: '1.6', color: '#94a3b8' }}>
                  The foundation that powers scalable, secure, and high-performance AI systems. It enables organizations to manage compute efficiently while maintaining cost visibility and operational control. With cloud-flexible architecture and optimized resource utilization, it ensures consistent performance across workloads. Built-in governance, monitoring, and security frameworks provide reliability and compliance, allowing businesses to scale AI initiatives confidently without compromising on efficiency or control.
                </p>
              </div>
            </div>

            {/* Layer 2: Orchestration */}
            <div className="col-lg-4 col-md-6 mb-24 mb-lg-0">
              <div className="layer-card">
                <div className="mb-20" style={{ display: 'inline-flex', padding: '12px', borderRadius: '12px', background: 'rgba(189,0,255,0.08)' }}>
                  <Workflow className="text-violet-500" size={28} style={{ color: '#a855f7' }} />
                </div>
                <h4 className="fw-bold text-white mb-15" style={{ fontSize: '20px' }}>AI Orchestration Layer</h4>
                <p className="text-secondary mb-0" style={{ fontSize: '14px', lineHeight: '1.6', color: '#94a3b8' }}>
                  The layer that brings together agents, workflows, and systems into a unified, intelligent ecosystem. It streamlines operations by enabling seamless coordination across teams and technologies. Automated workflows enhance scalability while reducing manual effort, ensuring faster execution. With real-time synchronization and centralized visibility, organizations can manage complex processes effortlessly, improving efficiency, collaboration, and decision-making across the entire AI lifecycle.
                </p>
              </div>
            </div>

            {/* Layer 3: Insight */}
            <div className="col-lg-4 col-md-12">
              <div className="layer-card">
                <div className="mb-20" style={{ display: 'inline-flex', padding: '12px', borderRadius: '12px', background: 'rgba(0,240,255,0.08)' }}>
                  <Layers className="text-cyan-500" size={28} style={{ color: '#06b6d4' }} />
                </div>
                <h4 className="fw-bold text-white mb-15" style={{ fontSize: '20px' }}>AI Insight Layer</h4>
                <p className="text-secondary mb-0" style={{ fontSize: '14px', lineHeight: '1.6', color: '#94a3b8' }}>
                  Where raw data evolves into meaningful, business-aware intelligence. This layer unifies data from multiple sources, creating a consistent and reliable foundation for insights. By centralizing knowledge and eliminating silos, it enables systems to understand business context more effectively. The result is adaptive, context-driven intelligence that aligns with business goals, empowering smarter decisions and delivering deeper, more relevant insights across operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INDUSTRY EXPERIENCES */}
      <section className="section-spacing-lg mb-80" style={{ background: 'rgba(255, 255, 255, 0.01)', padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container py-40">
          <div className="heading-section center mb-60">
            <div className="heading-sub fw-semibold text-brand">Vertical Solutions</div>
            <h2 className="heading-title text-white">Experience What VGIL AI Can Do for Your Industry</h2>
            <p className="mx-auto text-secondary mt-15" style={{ maxWidth: '600px', fontSize: '1.05rem' }}>
              Discover how we create measurable business value through transformation and cutting-edge technology.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-24 mb-lg-0">
              <div className="industry-card d-flex flex-column justify-content-between">
                <div>
                  <div className="fw-bold text-brand mb-15" style={{ fontSize: '1.5rem', fontFamily: 'monospace' }}>01</div>
                  <h5 className="fw-bold text-white mb-15">Transforming Core Banking Solution for Digital Finance</h5>
                  <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    Seamless integration of automated compliance, real-time risk checks, and predictive transactional models into banking environments.
                  </p>
                </div>
                <Link to="/products/transact-core" className="text-brand fw-semibold d-flex align-items-center gap-8 mt-20" style={{ textDecoration: 'none', fontSize: '0.9rem' }}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24 mb-lg-0">
              <div className="industry-card d-flex flex-column justify-content-between">
                <div>
                  <div className="fw-bold text-brand mb-15" style={{ fontSize: '1.5rem', fontFamily: 'monospace' }}>02</div>
                  <h5 className="fw-bold text-white mb-15">Re(AI)powering Hi-Tech with End-to-End Cybersecurity</h5>
                  <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    Intelligent anomaly warning networks, SSO/SAML integration, and robust defensive security protocols protecting enterprise networks.
                  </p>
                </div>
                <Link to="/products/audit-flux" className="text-brand fw-semibold d-flex align-items-center gap-8 mt-20" style={{ textDecoration: 'none', fontSize: '0.9rem' }}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="industry-card d-flex flex-column justify-content-between">
                <div>
                  <div className="fw-bold text-brand mb-15" style={{ fontSize: '1.5rem', fontFamily: 'monospace' }}>03</div>
                  <h5 className="fw-bold text-white mb-15">Conversational AI Companion for Smarter Experiences</h5>
                  <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    Contextual enterprise RAG chatbots delivering instant, cited answers from internal knowledge sources for support and internal teams.
                  </p>
                </div>
                <Link to="/products/conversational-ai-companion" className="text-brand fw-semibold d-flex align-items-center gap-8 mt-20" style={{ textDecoration: 'none', fontSize: '0.9rem' }}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-50">
            <h5 className="text-light fw-medium" style={{ letterSpacing: '0.02em', color: '#cbd5e1' }}>
              Take a closer look at how we’re redefining what’s possible with technology.
            </h5>
          </div>
        </div>
      </section>

      {/* SECTION 5: TRUSTED PARTNERS */}
      <section className="section-spacing-lg mb-80">
        <div className="container">
          <div className="heading-section center mb-48">
            <div className="heading-sub fw-semibold text-brand">Partnerships</div>
            <h2 className="heading-title text-white">Our Trusted Partners</h2>
          </div>
          <div className="glass-panel text-center">
            <p className="mx-auto mb-40 text-secondary" style={{ maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.7' }}>
              With a focused hyperscale team, we work closely with leading platform partners to deliver AI-driven solutions that accelerate innovation and create real business impact.
            </p>
            {/* Partners Logo Simulation */}
            <div className="row justify-content-center align-items-center g-4 flex-wrap" style={{ opacity: 0.6 }}>
              {['AWS Cloud', 'Microsoft Azure', 'Google Cloud', 'NVIDIA AI', 'OpenAI', 'RedHat Enterprise'].map((p, idx) => (
                <div className="col-6 col-md-4 col-lg-2" key={idx}>
                  <div style={{
                    padding: '15px 10px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(255,255,255,0.02)',
                    color: '#94a3b8',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.05em'
                  }}>
                    {p}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: INTERACTIVE NEURAL LAB */}
      <section className="section-spacing-lg mb-80" id="lab">
        <div className="container relative z-10">
          
          <div className="text-center mb-40">
            <div className="d-flex justify-content-center mb-3">
              <span className="cyber-badge">
                <ShieldAlert size={14} className="text-cyan-400" />
                SEO PROTECTED // SECURE ZONE
              </span>
            </div>
            <h2 className="fw-bold text-white mb-2 neon-glow-header" style={{ fontSize: '2.5rem', letterSpacing: '-0.02em' }}>
              Virtual Galaxy <span className="text-brand">Neural Lab</span>
            </h2>
            <p className="mx-auto" style={{ maxWidth: '600px', color: '#94a3b8', fontSize: '1.05rem' }}>
              Protected mainframe environment for model evaluation, neural path auditing, and autonomous agent orchestration.
            </p>
          </div>

          {/* Dashboard Content Grid */}
          <div className="row g-4 justify-content-center">
            
            {/* LEFT COLUMN: Controls & HUD metrics */}
            <div className="col-lg-4 col-md-5 d-flex flex-column gap-4">
              
              {/* HUD Diagnostic Stats */}
              <div className="glass-panel">
                <h4 className="fs-5 fw-bold text-white mb-20 d-flex align-items-center gap-8" style={{ fontSize: '18px' }}>
                  <Activity size={18} className="text-brand" />
                  Real-Time Health
                </h4>
                
                <div className="d-flex flex-column gap-3">
                  <div>
                    <div className="d-flex justify-content-between text-xs mb-1" style={{ fontSize: '0.85rem' }}>
                      <span style={{ color: '#94a3b8' }}>Network Coherence</span>
                      <span style={{ color: '#10b981', fontWeight: 600 }}>{calculatedCoherence}%</span>
                    </div>
                    <div style={{ height: '6px', background: '#1e293b', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${calculatedCoherence}%`, height: '100%', background: 'linear-gradient(90deg, #bd00ff, #10b981)', borderRadius: '3px' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="d-flex justify-content-between text-xs mb-1" style={{ fontSize: '0.85rem' }}>
                      <span style={{ color: '#94a3b8' }}>Quantum Latency</span>
                      <span style={{ color: calculatedLatency > 20 ? '#f59e0b' : '#ff3b30', fontWeight: 600 }}>{calculatedLatency}ms</span>
                    </div>
                    <div style={{ height: '6px', background: '#1e293b', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${Math.min(100, calculatedLatency * 2.5)}%`, height: '100%', background: 'linear-gradient(90deg, #ff3b30, #f59e0b)', borderRadius: '3px' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="d-flex justify-content-between text-xs mb-1" style={{ fontSize: '0.85rem' }}>
                      <span style={{ color: '#94a3b8' }}>Synapse Throughput</span>
                      <span style={{ color: '#bd00ff', fontWeight: 600 }}>{calculatedThroughput.toLocaleString()} tok/s</span>
                    </div>
                    <div style={{ height: '6px', background: '#1e293b', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${Math.min(100, (calculatedThroughput / 1200) * 100)}%`, height: '100%', background: 'linear-gradient(90deg, #ff3b30, #bd00ff)', borderRadius: '3px' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neural Parameters Tuning */}
              <div className="glass-panel">
                <h4 className="fs-5 fw-bold text-white mb-20 d-flex align-items-center gap-8" style={{ fontSize: '18px' }}>
                  <Sliders size={18} className="text-brand" />
                  Hyperparameter Tuning
                </h4>

                <div className="d-flex flex-column gap-4">
                  <div>
                    <div className="d-flex justify-content-between mb-2">
                      <label style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Learning Rate (α)</label>
                      <span className="font-monospace" style={{ fontSize: '0.9rem', color: '#ff3b30' }}>{learningRate}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.0001" 
                      max="0.01" 
                      step="0.0001"
                      value={learningRate} 
                      onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                      className="custom-slider"
                    />
                  </div>

                  <div>
                    <div className="d-flex justify-content-between mb-2">
                      <label style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Context Window</label>
                      <span className="font-monospace" style={{ fontSize: '0.9rem', color: '#ff3b30' }}>{contextWindow} tokens</span>
                    </div>
                    <input 
                      type="range" 
                      min="2048" 
                      max="32768" 
                      step="2048"
                      value={contextWindow} 
                      onChange={(e) => setContextWindow(parseInt(e.target.value))}
                      className="custom-slider"
                    />
                  </div>

                  <div>
                    <div className="d-flex justify-content-between mb-2">
                      <label style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Temperature</label>
                      <span className="font-monospace" style={{ fontSize: '0.9rem', color: '#ff3b30' }}>{temperature}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.1" 
                      max="1.5" 
                      step="0.05"
                      value={temperature} 
                      onChange={(e) => setTemperature(parseFloat(e.target.value))}
                      className="custom-slider"
                    />
                  </div>

                  <div>
                    <div className="d-flex justify-content-between mb-2">
                      <label style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Neural Density</label>
                      <span className="font-monospace" style={{ fontSize: '0.9rem', color: '#ff3b30' }}>{neuralDensity}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="100" 
                      step="1"
                      value={neuralDensity} 
                      onChange={(e) => setNeuralDensity(parseInt(e.target.value))}
                      className="custom-slider"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={triggerOptimization} 
                      disabled={isOptimizing}
                      className="interactive-btn w-100 justify-content-center"
                    >
                      {isOptimizing ? (
                        <>
                          <RefreshCw size={16} className="spinner-border-sm animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                          <span>Optimizing Mainframe...</span>
                        </>
                      ) : (
                        <>
                          <Play size={16} />
                          <span>Run Sync Diagnostics</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Terminal Command Console */}
            <div className="col-lg-8 col-md-7">
              <div className="glass-panel d-flex flex-column h-100" style={{ minHeight: '480px' }}>
                <h4 className="fs-5 fw-bold text-white mb-3 d-flex align-items-center gap-8" style={{ fontSize: '18px' }}>
                  <TerminalIcon size={18} className="text-brand" />
                  Mainframe Quantum Shell
                </h4>
                
                {/* Interactive Terminal Screen */}
                <div className="terminal-window flex-grow-1">
                  <div className="terminal-header">
                    <div className="dot-container">
                      <span className="window-dot red"></span>
                      <span className="window-dot yellow"></span>
                      <span className="window-dot green"></span>
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                      vgil_terminal_session.sh
                    </div>
                    <div style={{ width: '38px' }}></div>
                  </div>
                  
                  <div className="terminal-content">
                    {history.map((log, index) => {
                      let colorClass = '#e2e8f0';
                      let prefix = '';
                      
                      if (log.type === 'command') {
                        colorClass = '#ff3b30';
                        prefix = '$ ';
                      } else if (log.type === 'system') {
                        colorClass = '#bd00ff';
                      } else if (log.type === 'info') {
                        colorClass = '#94a3b8';
                      } else if (log.type === 'success') {
                        colorClass = '#10b981';
                      } else if (log.type === 'error') {
                        colorClass = '#ef4444';
                      }

                      return (
                        <div 
                          key={index} 
                          style={{ color: colorClass, whiteSpace: 'pre-wrap', marginBottom: '8px' }}
                        >
                          {prefix}{log.text}
                        </div>
                      );
                    })}
                    <div ref={terminalEndRef} />
                  </div>

                  <form onSubmit={handleCommandSubmit} className="terminal-input-row">
                    <span className="prompt-symbol">&gt;</span>
                    <input 
                      id="terminal-input"
                      type="text" 
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder="Type a command (e.g. 'help', 'status', 'agents')..."
                      className="terminal-input-element"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                    />
                    <button type="submit" style={{ background: 'transparent', border: 'none', color: '#ff3b30', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                      <Send size={16} />
                    </button>
                  </form>
                </div>

                {/* Quick-Click Command Shortcuts for mobile/desktop UX */}
                <div className="mt-20">
                  <div className="text-muted mb-2" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>MAIN FRAME SHORTCUTS:</div>
                  <div className="d-flex flex-wrap gap-8">
                    {['help', 'status', 'about', 'agents', 'neural', 'optimize', 'clear'].map((cmd) => (
                      <button 
                        key={cmd}
                        type="button"
                        onClick={() => handleShortcutClick(cmd)}
                        className="shortcut-pill"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0% { transform: scale(0.95); opacity: 0.5; }
            100% { transform: scale(1.05); opacity: 0.8; }
          }
        `}
      </style>
    </div>
  );
}

export default AIPage;
