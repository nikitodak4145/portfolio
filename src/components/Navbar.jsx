import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
   const navStyle = {
    height: '70px',
    background: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem'
  }

    const linksStyle = {
    display: 'flex',
    gap: '2rem'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500'
  };

  const logoStyle = {
    width: '40px'
  }

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <nav style={navStyle}>
      <div style={logoContainerStyle}>
        <img src="/images/image.png" alt="logo" style={logoStyle} />
      </div>
      <div style={linksStyle}>
        <Link to="/" style={linkStyle}>Главная</Link>
        <Link to="/projects" style={linkStyle}>Проекты</Link>
        <Link to="/contact" style={linkStyle}>Контакты</Link>
      </div>
    </nav>
  );
}

export default Navbar;