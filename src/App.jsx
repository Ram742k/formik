// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css';


function App() {
    return (
        <Router>
            <div className="App">
                
                <Routes>
                    <Route path="/*" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
