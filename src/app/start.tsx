import ReactDOM from "react-dom/client";
import App from "../pages/home/ui";
import React from "react";

const start = () => {
  const documentRender: any = document.getElementById("root");
  const root = ReactDOM.createRoot(documentRender);
  root.render(<App />);
};

export default start;
