import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('VELOCITY X Runtime Crash Caught by ErrorBoundary:', error, errorInfo);
  }

  handleRestart = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#080b12',
          color: '#ffffff',
          fontFamily: "'Orbitron', -apple-system, sans-serif",
          padding: '24px',
          textAlign: 'center'
        }}>
          <h1 style={{ color: '#00f3ff', fontSize: '24px', marginBottom: '12px', letterSpacing: '2px' }}>
            ENGINE REBOOT REQUIRED
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '13px', maxWidth: '420px', marginBottom: '24px', lineHeight: 1.5 }}>
            A graphics or system context interrupt occurred. Click below to restart your hypercar engine.
          </p>
          <button
            onClick={this.handleRestart}
            style={{
              background: 'linear-gradient(135deg, #00f3ff 0%, #0077ff 100%)',
              border: 'none',
              borderRadius: '10px',
              color: '#05070a',
              fontFamily: "'Orbitron', -apple-system, sans-serif",
              fontSize: '13px',
              fontWeight: 900,
              letterSpacing: '1.5px',
              padding: '12px 24px',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)'
            }}
          >
            RESTART ENGINE
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
