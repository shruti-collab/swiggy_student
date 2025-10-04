import React from 'react';

export const Button = ({ children, className = '', onClick, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
};