import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <Link to="/" className="flex items-center gap-3">
        <img 
          src="https://i.pinimg.com/1200x/d6/1e/84/d61e847019cb5be3f074b170f24af627.jpg" 
          alt="Swiggy Logo" 
          className="h-10"
        />
        <span className="text-xl font-bold text-swiggy-500">Swiggy Student</span>
      </Link>
      <nav className="flex gap-6">
        <Link to="/mess" className="font-medium transition-colors hover:text-swiggy-500">Mess Food</Link>
        <Link to="/night" className="font-medium transition-colors hover:text-swiggy-500">Night Mode</Link>
        <Link to="/rewards" className="font-medium transition-colors hover:text-swiggy-500">Rewards</Link>
        <Link to="/student-plan" className="font-medium transition-colors hover:text-swiggy-500">Student Plan</Link>
      </nav>
    </header>
  );
};

export default Header;