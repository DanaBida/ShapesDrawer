import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App

// Test Sentry Error - You can trigger this from browser console
window.testSentryError = () => {
  throw new Error('Frontend test error - Sentry is working!');
};';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
