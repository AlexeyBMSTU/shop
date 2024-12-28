import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "@/components/welcome/welcome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
