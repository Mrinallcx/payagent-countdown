import { useState, useEffect } from 'react'
import './index.css'
import logoSrc from './assets/logo.jpg'

// Countdown target: Monday Feb 16, 2026 at 1:00 PM CET (12:00 UTC)
const TARGET = new Date('2026-02-16T12:00:00Z').getTime()

function getTimeLeft() {
  const now = Date.now()
  const diff = Math.max(0, TARGET - now)
  return {
    days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
    hours: String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
    minutes: String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
    seconds: String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0'),
  }
}

function App() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container">
      <header className="fade-in">
        <img src={logoSrc} alt="PayAgent by LCX" id="logo" />
      </header>

      <section className="hero fade-in">
        <h1>
          PayAgent <span>- Payments for<br />Humans and AI Agents</span>
        </h1>
        <p className="subtitle">
          Send, receive, and automate crypto payments, manually or fully autonomous. Non-custodial. Flat fees. Built for scale.
        </p>
        <div className="world-model">
          <span className="live-dot"></span>
          AI agents are becoming economic actors. PayAgent is how they pay.
        </div>
      </section>

      <section className="countdown-section fade-in">
        <div className="countdown-label">Launching in</div>
        <div className="countdown" id="countdown">
          <div className="countdown-unit">
            <div className="number">{time.days}</div>
            <div className="label">Days</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-unit">
            <div className="number">{time.hours}</div>
            <div className="label">Hours</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-unit">
            <div className="number">{time.minutes}</div>
            <div className="label">Min</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-unit">
            <div className="number">{time.seconds}</div>
            <div className="label">Sec</div>
          </div>
        </div>
      </section>

      <div className="cta-row fade-in">
        <div className="cta-card">
          <span className="coming-soon">Coming Soon</span>
          <div className="icon">👤</div>
          <h3>For Humans</h3>
          <p>Pay directly from your wallet. Non-custodial. Full control.</p>
          <span className="btn btn-human">Pay as Human →</span>
        </div>
        <div className="cta-card">
          <span className="coming-soon">Coming Soon</span>
          <div className="icon">🤖</div>
          <h3>For AI Agents</h3>
          <p>Autonomous software that earns, spends, and settles value via API.</p>
          <span className="btn btn-agent">Set Up AI Agent →</span>
        </div>
      </div>

      <section className="features fade-in">
        <div className="features-label">Core Features</div>
        <div className="features-grid">
          <div className="feature-box">
            <div className="feat-icon">🔗</div>
            <h4>Payment Links</h4>
            <p>
              Create programmable payment requests in seconds. Share with anyone, human or AI agent. Settle instantly on-chain.
            </p>
          </div>
          <div className="feature-box">
            <div className="feat-icon">⚡</div>
            <h4>Earn LCX Rewards</h4>
            <p>
              Every completed payment rewards the link creator with LCX tokens. Flat fees, no percentages. Usage equals earnings.
            </p>
          </div>
          <div className="feature-box">
            <div className="feat-icon">🌐</div>
            <h4>Multi-Chain Ready</h4>
            <p>
              Live on Ethereum with USDC, USDT, and USAT. Expanding to all major L2s including Liberty Chain.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>PayAgent developed by LCX AI Labs. Beta product launch.</p>
        <p>PayAgent is provided "as is" and may change. Users are responsible for complying with applicable laws.</p>
        <p style={{ marginTop: '12px' }}>
          <a href="https://lcx.com" target="_blank" rel="noopener noreferrer">lcx.com</a>
          {' · '}
          <a href="https://payagent.co">payagent.co</a>
        </p>
      </footer>
    </div>
  )
}

export default App
