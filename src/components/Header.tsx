import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import logo from '../imgs/logo.png'; // Import the logo image

const Header: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="KEMIT Logo" style={{ height: '60px' }} />
          </Link>
        </div>

        <nav className="hidden-mobile flex items-center">
          <Link 
            to="/" 
            className={`px-4 ${location.pathname === '/' ? 'text-primary font-bold' : ''}`}
          >
            Home
          </Link>
          <a 
            href="/#features" 
            className="px-4"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Features
          </a>
          <a 
            href="/#services" 
            className="px-4"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Services
          </a>
          <a 
            href="/#vision" 
            className="px-4"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Vision
          </a>
          <a 
            href="/#mission" 
            className="px-4"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Mission
          </a>
          <Link 
            to="/demo" 
            className="btn btn-primary ml-4"
          >
            Try Demo
          </Link>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="hidden-desktop flex items-center">
          <ThemeToggle />
          <button 
            onClick={toggleMobileMenu} 
            style={{ marginLeft: '1rem', fontSize: '1.5rem' }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="hidden-desktop py-4" style={{ borderTop: '1px solid #ccc' }}>
          <div className="container">
            <Link 
              to="/" 
              className={`block py-2 ${location.pathname === '/' ? 'text-primary font-bold' : ''}`}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <a 
              href="/#features" 
              className="block py-2"
              onClick={(e) => {
                toggleMobileMenu();
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Features
            </a>
            <a 
              href="/#services" 
              className="block py-2"
              onClick={(e) => {
                toggleMobileMenu();
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Services
            </a>
            <a 
              href="/#vision" 
              className="block py-2"
              onClick={(e) => {
                toggleMobileMenu();
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Vision
            </a>
            <a 
              href="/#mission" 
              className="block py-2"
              onClick={(e) => {
                toggleMobileMenu();
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Mission
            </a>
            <Link 
              to="/demo" 
              className="block py-2 text-primary font-bold"
              onClick={toggleMobileMenu}
            >
              Try Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
