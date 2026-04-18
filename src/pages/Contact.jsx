import React from 'react';
import ContactForm from '../components/ContactForm';
import {
  contactSection,
  contactContainer,
  contactTitle,
  contactText,
  contactGrid,
  contactCard,
  contactCardTitle,
  contactLink,
} from '../styles/globalStyles';

function Contact() {
  // Стили для иконок (можно добавить через CSS классы позже)
  const iconStyle = {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    display: 'block'
  };

  return (
    <section style={contactSection}>
      <div style={contactContainer}>
        <h2 style={contactTitle} className="gradient-text">Свяжитесь со мной</h2>
        <p style={contactText} className="reveal">
          Буду рад новым знакомствам и интересным проектам
        </p>
        
        {/* Контакты в две колонки */}
        <div style={contactGrid}>
          {/* GitHub */}
          <div style={contactCard} className="scale-in contact-card">
            <span style={iconStyle}></span>
            <h3 style={contactCardTitle}>GitHub</h3>
            <a 
              href="https://github.com/nikitodak4145" 
              target="_blank" 
              rel="noopener noreferrer"
              style={contactLink}
              className="contact-link"
            >
              @nikitodak4145
            </a>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>
              Код моих проектов
            </p>
          </div>

          {/* Telegram */}
          <div style={contactCard} className="scale-in contact-card">
            <span style={iconStyle}></span>
            <h3 style={contactCardTitle}>Telegram</h3>
           
            <a 
              href="https://t.me/nikitakul_portfolio_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              style={contactLink}
              className="contact-link"
            >
              @barbos_n455
            </a>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>
              Быстрая связь
            </p>
          </div>
        </div>



        {/* Форма обратной связи */}
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;