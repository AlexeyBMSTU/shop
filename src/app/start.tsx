import { createRoot } from "react-dom/client";
import App from "../pages/home/ui";
import React from "react";

const start = () => {
  const documentRender: HTMLElement | null = document.getElementById("root");

  if (!documentRender) return;

  const root = createRoot(documentRender);
  root.render(<App />);
};

export default start;
