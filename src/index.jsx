import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' for React 18
import App from './App';
import './styles/font.css';
import './styles/index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root and render the app using createRoot
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
