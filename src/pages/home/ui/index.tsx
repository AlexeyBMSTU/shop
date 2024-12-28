import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wellcome from "@/components/wellcome/wellcome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wellcome />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
