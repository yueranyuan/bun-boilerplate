import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>Bun Boilerplate</h1>
        <p className="subtitle">React 19 + TypeScript + Bun 1.3.1 + Vite</p>

        <div className="counter-section">
          <button onClick={() => setCount(count - 1)}>-</button>
          <span className="count">{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>

        <div className="features">
          <h2>Features</h2>
          <ul>
            <li>⚡️ Lightning-fast Bun 1.3.1 runtime</li>
            <li>⚛️ React 19 with hooks</li>
            <li>🎨 TypeScript with strict mode</li>
            <li>🔥 Vite for instant HMR</li>
            <li>📦 Optimized production builds</li>
            <li>✅ ESLint configured</li>
          </ul>
        </div>

        <div className="links">
          <a href="https://bun.sh/docs" target="_blank" rel="noopener noreferrer">
            Bun Docs
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React Docs
          </a>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </div>
      </div>
    </>
  )
}

export default App
