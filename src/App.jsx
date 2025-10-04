import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MessFood from './pages/MessFood';
import NightMode from './pages/NightMode';
import Rewards from './pages/Rewards';
import StudentPlan from './pages/StudentPlan';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mess" element={<MessFood />} />
            <Route path="/night" element={<NightMode />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/student-plan" element={<StudentPlan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;