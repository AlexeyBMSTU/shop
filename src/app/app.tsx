import React from 'react';
import Auth from '@/pages/login/ui';
import Home from '@/pages/home/ui';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
