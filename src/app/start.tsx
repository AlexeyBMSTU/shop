import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './app';
import getAccount from '@/shared/account/getAccount';
const start = async () => {
  const documentRender = document.getElementById('root');

  const loader = document.querySelector(`.start-loader`);
  if (loader) loader.remove();

  if (!documentRender) return;

  const root = createRoot(documentRender);
  root.render(<App />);

  try {
    const response = await getAccount();
  } catch (error) {
    console.error('Error fetching in getAccount!', error);
  }
};

export default start;
