"use client"
// Header component with image and dropdown menus
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false); 
  const [dropdown3, setDropdown3] = useState(false);

  return (
    <header className="header">
      <img 
        src="/globe.svg"
        alt="Logo"
        className="header-logo"
      />
      
      <nav className="nav-menu">
        <div className="dropdown">
          <button 
            className="dropdown-btn"
            onClick={() => setDropdown1(!dropdown1)}
          >
            Dropdown 1
          </button>
          {dropdown1 && (
            <ul className="dropdown-content">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
              <li>Option 5</li>
            </ul>
          )}
        </div>

        <div className="dropdown">
          <button 
            className="dropdown-btn"
            onClick={() => setDropdown2(!dropdown2)}
          >
            Dropdown 2
          </button>
          {dropdown2 && (
            <ul className="dropdown-content">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
              <li>Option 5</li>
            </ul>
          )}
        </div>

        <div className="dropdown">
          <button 
            className="dropdown-btn"
            onClick={() => setDropdown3(!dropdown3)}
          >
            Dropdown 3
          </button>
          {dropdown3 && (
            <ul className="dropdown-content">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
              <li>Option 5</li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

