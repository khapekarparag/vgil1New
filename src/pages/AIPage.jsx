import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal as TerminalIcon, Cpu, Network, Bot, Sparkles, Send, ShieldAlert, 
  Sliders, Database, Play, RefreshCw, Layers, CheckCircle2, 
  X, RefreshCcw, HelpCircle, ArrowRight, Activity
} from 'lucide-react';

function AIPage() {
  // SEO Protection: Prevent search indexing
  useEffect(() => {
    // Add meta tag to prevent indexing
    let meta = document.querySelector('meta[name="robots"]');
    let existed = !!meta;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.appendChild(meta);
    }
    const previousContent = meta.content;
    meta.content = 'noindex, nofollow';

    // Set page title
    const previousTitle = document.title;
    document.title = 'VGIL // Neural Lab';

    return () => {
      // Revert meta tag and page title on unmount
      if (existed) {
        meta.content = previousContent;
      } else {
        meta.remove();
      }
      document.title = previousTitle;
    };
  }, []);

  // Interactive AI Parameters
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
      // Simulate input event & submit
      const input = document.getElementById('terminal-input');
      if (input) {
        input.focus();
      }
    }, 50);
  };

  return (
    <div className="neural-lab-wrapper">
      {/* Self-contained styling to prevent leaky styling, guaranteeing no side effects */}
      <style>
        {`
          .neural-lab-wrapper {
            background-color: #08090d;
            background-image: 
              radial-gradient(at 10% 20%, rgba(189, 0, 255, 0.08) 0px, transparent 50%),
              radial-gradient(at 90% 80%, rgba(0, 240, 255, 0.08) 0px, transparent 50%),
              linear-gradient(rgba(255, 255, 255, 0.003) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.003) 1px, transparent 1px);
            background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
            color: #e2e8f0;
            font-family: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            min-height: 100vh;
            padding: 120px 20px 80px;
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
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
            padding: 24px;
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
            background: #00f0ff;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(0, 240, 255, 0.6);
            transition: transform 0.2s;
          }

          .custom-slider::-webkit-slider-thumb:hover {
            transform: scale(1.25);
          }

          .custom-slider::-moz-range-thumb {
            width: 18px;
            height: 18px;
            border: none;
            border-radius: 50%;
            background: #00f0ff;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(0, 240, 255, 0.6);
            transition: transform 0.2s;
          }

          .custom-slider::-moz-range-thumb:hover {
            transform: scale(1.25);
          }

          .terminal-window {
            background: #06070a;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            font-family: 'Fira Code', 'Courier New', Courier, monospace;
            display: flex;
            flex-direction: column;
            height: 480px;
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
            color: #00f0ff;
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
            background: rgba(0, 240, 255, 0.08);
            border-color: rgba(0, 240, 255, 0.4);
            color: #00f0ff;
            box-shadow: 0 0 10px rgba(0, 240, 255, 0.1);
          }

          .interactive-btn {
            background: linear-gradient(135deg, #bd00ff, #00f0ff);
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
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
          }

          .interactive-btn:hover {
            opacity: 0.9;
            transform: translateY(-2px);
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.35);
          }

          .interactive-btn:active {
            transform: translateY(0);
          }

          .grid-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
            max-width: 1200px;
            margin: 0 auto;
          }

          @media (min-width: 992px) {
            .grid-container {
              grid-template-columns: 4fr 7fr;
            }
          }

          /* Glowing animated background grids */
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
            background: rgba(189, 0, 255, 0.12);
            top: 20%;
            left: -10%;
          }

          .glow-ring-2 {
            width: 400px;
            height: 400px;
            background: rgba(0, 240, 255, 0.12);
            bottom: 20%;
            right: -10%;
          }
        `}
      </style>

      {/* Decorative Glow Background Spheres */}
      <div className="glow-ring glow-ring-1"></div>
      <div className="glow-ring glow-ring-2"></div>

      <div className="container relative z-10">
        
        {/* Top Header Section */}
        <div className="text-center mb-5">
          <div className="d-flex justify-content-center mb-3">
            <span className="cyber-badge">
              <ShieldAlert size={14} className="text-cyan-400" />
              SEO PROTECTED // SECURE ZONE
            </span>
          </div>
          <h1 className="fw-bold text-white mb-2 neon-glow-header" style={{ fontSize: '3rem', letterSpacing: '-0.03em' }}>
            Virtual Galaxy <span style={{ color: '#00f0ff' }}>Neural Lab</span>
          </h1>
          <p className="mx-auto" style={{ maxWidth: '600px', color: '#94a3b8', fontSize: '1.1rem' }}>
            Protected environment for model evaluation, neural path auditing, and autonomous agent orchestration.
          </p>
        </div>

        {/* Dashboard Content Grid */}
        <div className="grid-container">
          
          {/* LEFT COLUMN: Controls & HUD metrics */}
          <div className="d-flex flex-column gap-4">
            
            {/* HUD Diagnostic Stats */}
            <div className="glass-panel">
              <h2 className="fs-5 fw-bold text-white mb-4 d-flex align-items-center gap-2">
                <Activity size={18} style={{ color: '#00f0ff' }} />
                Real-Time Health
              </h2>
              
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
                    <span style={{ color: calculatedLatency > 20 ? '#f59e0b' : '#00f0ff', fontWeight: 600 }}>{calculatedLatency}ms</span>
                  </div>
                  <div style={{ height: '6px', background: '#1e293b', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${Math.min(100, calculatedLatency * 2.5)}%`, height: '100%', background: 'linear-gradient(90deg, #00f0ff, #f59e0b)', borderRadius: '3px' }}></div>
                  </div>
                </div>

                <div>
                  <div className="d-flex justify-content-between text-xs mb-1" style={{ fontSize: '0.85rem' }}>
                    <span style={{ color: '#94a3b8' }}>Synapse Throughput</span>
                    <span style={{ color: '#bd00ff', fontWeight: 600 }}>{calculatedThroughput.toLocaleString()} tok/s</span>
                  </div>
                  <div style={{ height: '6px', background: '#1e293b', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${Math.min(100, (calculatedThroughput / 1200) * 100)}%`, height: '100%', background: 'linear-gradient(90deg, #00f0ff, #bd00ff)', borderRadius: '3px' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Neural Parameters Tuning */}
            <div className="glass-panel">
              <h2 className="fs-5 fw-bold text-white mb-4 d-flex align-items-center gap-2">
                <Sliders size={18} style={{ color: '#bd00ff' }} />
                Hyperparameter Tuning
              </h2>

              <div className="d-flex flex-column gap-4">
                <div>
                  <div className="d-flex justify-content-between mb-2">
                    <label style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Learning Rate (α)</label>
                    <span className="font-monospace" style={{ fontSize: '0.9rem', color: '#00f0ff' }}>{learningRate}</span>
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
                    <span className="font-monospace" style={{ fontSize: '0.9rem', color: '#00f0ff' }}>{contextWindow} tokens</span>
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
                    <span className="font-monospace" style={{ fontSize: '0.9rem', color: '#00f0ff' }}>{temperature}</span>
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
                    <span className="font-monospace" style={{ fontSize: '0.9rem', color: '#00f0ff' }}>{neuralDensity}%</span>
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
          <div className="glass-panel d-flex flex-column" style={{ minHeight: '520px' }}>
            <h2 className="fs-5 fw-bold text-white mb-3 d-flex align-items-center gap-2">
              <TerminalIcon size={18} style={{ color: '#00f0ff' }} />
              Mainframe Quantum Shell
            </h2>
            
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
                    colorClass = '#00f0ff';
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
                <button type="submit" style={{ background: 'transparent', border: 'none', color: '#00f0ff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  <Send size={16} />
                </button>
              </form>
            </div>

            {/* Quick-Click Command Shortcuts for mobile/desktop UX */}
            <div className="mt-3">
              <div className="text-muted mb-2" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>MAIN FRAME SHORTCUTS:</div>
              <div className="d-flex flex-wrap gap-2">
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

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default AIPage;
