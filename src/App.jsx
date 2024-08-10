import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'; // import your Home component
import Results from './Results'; // import another component
import NotFound from './NotFound'; // import a NotFound component
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ensure you have a component here */}
        <Route path="/XSNLe6brtqmfnKc" element={<Results />} />
        <Route path="*" element={<NotFound />} /> {/* Optional: Handle unmatched routes */}
      </Routes>
    
  );
}

export default App;
