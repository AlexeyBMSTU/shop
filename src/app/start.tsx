import { createRoot } from 'react-dom/client';
import App from '@/pages/home/ui';
import React from 'react';

const start = () => {
  const documentRender = document.getElementById('root');

  const loader = document.querySelector(`.start-loader`);
  if (loader) loader.remove();

  if (!documentRender) return;

  const root = createRoot(documentRender);
  root.render(<App />);
};

export default start;
