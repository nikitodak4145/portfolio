import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    padding: '0 2rem'
  };

  const containerStyle = {
    maxWidth: '1000px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center'
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#0f172a'
  };

  const textStyle = {
    fontSize: '1.2rem',
    color: '#475569',
    marginBottom: '2rem',
    lineHeight: '1.6'
  };

  const skillsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginBottom: '2rem'
  };

  const skillTagStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#e2e8f0',
    borderRadius: '9999px',
    fontSize: '0.9rem',
    color: '#1e293b',
    fontWeight: '500'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '0.5rem',
    fontWeight: '500',
    transition: 'background-color 0.2s',
    marginRight: '1rem'
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '1rem',
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle} className='home-container'>
        <div>
          <h1 style={titleStyle}>Привет, я Никита</h1>
          <p style={textStyle}>
            14 лет, занимаюсь веб-разработкой. Создаю современные приложения 
            на React и Django. Люблю чистый код и красивые интерфейсы.
          </p>
          
          <div style={skillsStyle} className='skills-tags'>
            <span style={skillTagStyle}>React</span>
            <span style={skillTagStyle}>Django</span>
            <span style={skillTagStyle}>JavaScript</span>
            <span style={skillTagStyle}>Python</span>
            <span style={skillTagStyle}>HTML/CSS</span>
          </div>

          <div>
            <Link to="/projects" style={buttonStyle}>Мои проекты</Link>
            <Link to="/contact" style={{...buttonStyle, backgroundColor: '#64748b'}}>Связаться</Link>
          </div>
        </div>

        <div>
          <img 
            src="https://i.pravatar.cc/400?u=nikita" 
            alt="Никита" 
            style={imageStyle} className='home-image'
          />
        </div>
      </div>
    </section>
  );
}

export default Home;