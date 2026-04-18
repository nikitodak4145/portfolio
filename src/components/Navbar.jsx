import React from 'react';
import { Link } from 'react-router-dom';
import {
  navbarLinks,
  navbarLink,
  navbarLogo,
  navbarLogoContainer
} from '../styles/globalStyles';

function Navbar() {
  const navStyle = {
    height: '70px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    transition: 'all 0.3s ease'
  };

  return (
    <nav style={navStyle}>
      <div style={navbarLogoContainer}>
        <img src="/images/image.png" alt="logo" style={navbarLogo} />
      </div>
      <div style={navbarLinks}>
        <Link to="/" style={navbarLink} className="nav-link">Главная</Link>
        <Link to="/projects" style={navbarLink} className="nav-link">Проекты</Link>
        <Link to="/contact" style={navbarLink} className="nav-link">Контакты</Link>
      </div>
    </nav>
  );
}

export default Navbar;