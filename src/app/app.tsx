import React from 'react';
import Home from '@/pages/home/ui';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from '@/pages/login/ui';
import { paths } from '@/shared/consts/consts';
import RegistrationForm from '@/pages/registration/ui';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={paths.GENERAL_PAGE} element={<Home />} />
        <Route path={paths.LOGIN_PAGE} element={<LoginForm />} />
        <Route path={paths.REGISTRATION_PAGE} element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
