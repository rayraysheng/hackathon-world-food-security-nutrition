import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Annotation from './components/Annotation';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Redirect users to the login page by default */}
          <Route path="/" element={<Login />} />
        </Routes>
      </div>

      <div>
        <Annotation content="This is an annotation!" position="top">
          {/* Content to be annotated */}
        </Annotation>
      </div>
    </Router>
  );
}

export default App;
