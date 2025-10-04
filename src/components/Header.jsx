import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={closeMenu}>
          <img 
            src="https://i.pinimg.com/1200x/d6/1e/84/d61e847019cb5be3f074b170f24af627.jpg" 
            alt="Swiggy Logo" 
            className="h-8 sm:h-10"
          />
          <span className="text-lg sm:text-xl font-bold text-swiggy-500">Swiggy Student</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-6">
          <Link to="/mess" className="font-medium transition-colors hover:text-swiggy-500">Mess Food</Link>
          <Link to="/night" className="font-medium transition-colors hover:text-swiggy-500">Night Mode</Link>
          <Link to="/rewards" className="font-medium transition-colors hover:text-swiggy-500">Rewards</Link>
          <Link to="/student-plan" className="font-medium transition-colors hover:text-swiggy-500">Student Plan</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-700 hover:text-swiggy-500 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col px-4 py-2">
            <Link 
              to="/mess" 
              className="py-3 font-medium transition-colors hover:text-swiggy-500 border-b border-gray-100"
              onClick={closeMenu}
            >
              Mess Food
            </Link>
            <Link 
              to="/night" 
              className="py-3 font-medium transition-colors hover:text-swiggy-500 border-b border-gray-100"
              onClick={closeMenu}
            >
              Night Mode
            </Link>
            <Link 
              to="/rewards" 
              className="py-3 font-medium transition-colors hover:text-swiggy-500 border-b border-gray-100"
              onClick={closeMenu}
            >
              Rewards
            </Link>
            <Link 
              to="/student-plan" 
              className="py-3 font-medium transition-colors hover:text-swiggy-500"
              onClick={closeMenu}
            >
              Student Plan
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;