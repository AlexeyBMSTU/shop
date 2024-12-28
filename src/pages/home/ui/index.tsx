import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "@/components/wellcome/wellcome";

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
