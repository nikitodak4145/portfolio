import React from 'react';
import { Link } from 'react-router-dom';
import {
  homeSection,
  homeContainer,
  homeTitle,
  homeText,
  homeSkills,
  homeSkillTag,
  homeButton,
  homeImage
} from '../styles/globalStyles';

function Home() {
  return (
    <section style={homeSection}>
      <div style={homeContainer} className='home-container'>
        <div className="fade-in-left">
          <h1 style={homeTitle} className="gradient-text">Привет, я Никита</h1>
          <p style={homeText}>
            14 лет, занимаюсь веб-разработкой. Создаю современные приложения 
            на React и Django. Люблю чистый код и красивые интерфейсы.
          </p>
          
          <div style={homeSkills} className='skills-tags fade-in-up'>
            <span style={homeSkillTag}>React</span>
            <span style={homeSkillTag}>Django</span>
            <span style={homeSkillTag}>JavaScript</span>
            <span style={homeSkillTag}>Python</span>
            <span style={homeSkillTag}>HTML/CSS</span>
          </div>

          <div className="fade-in-up">
            <Link to="/projects" style={homeButton}>Мои проекты</Link>
            <Link to="/contact" style={{...homeButton, backgroundColor: '#64748b'}}>Связаться</Link>
          </div>
        </div>

        <div className="fade-in-right">
          <img 
            src="https://i.pravatar.cc/400?u=nikita" 
            alt="Никита" 
            style={homeImage} 
            className='home-image'
          />
        </div>
      </div> 
    </section>
  );
}

export default Home;