import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import "antd/dist/antd.css";
import Layouts from './Layouts/Layouts';

function App() {
  return (
    <Router>
      <Layouts />
    </Router>
  );
}

export default App;
