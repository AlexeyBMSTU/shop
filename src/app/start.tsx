import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './app';

const start = () => {
  const documentRender = document.getElementById('root');

  const loader = document.querySelector(`.start-loader`);
  if (loader) loader.remove();

  if (!documentRender) return;

  const root = createRoot(documentRender);
  root.render(<App />);
};

export default start;
