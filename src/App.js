import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import "antd/dist/antd.css";
import root from './router/root';

function App() {
  return (
    <Router>
      {root}
    </Router>
  );
}

export default App;
