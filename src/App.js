import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import MCQScreen from './components/McqScreen';
import Login from './auth/Login';
import { AuthProvider } from './AuthContext';

const App = () => (
  <Router>
    <AuthProvider>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mcq" element={<MCQScreen />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  </Router>
);

export default App;
