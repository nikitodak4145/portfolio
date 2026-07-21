import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
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
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      from_name: userName,
      from_email: userEmail,
      message: userMessage,
    };

    emailjs.send(
      'service_vroxgpc',
      'template_34u1ecu',
      templateParams,
      'y8fKTKRkN_AbIvrWP'
    )
    .then(() => {
      setStatus('success');
      setUserName('');
      setUserEmail('');
      setUserMessage('');
      setTimeout(() => setStatus(''), 3000);
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    });
  };

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
        
        <div style={contactGrid}>
          <div style={contactCard} className="scale-in contact-card">
            <span style={iconStyle}>GitHub</span>
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

          <div style={contactCard} className="scale-in contact-card">
            <span style={iconStyle}>Telegram</span>
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

        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', background: '#111a11', borderRadius: '12px', border: '1px solid #5a8f3c' }}>
          <h3 style={{ color: '#b3ffb3' }}>Напишите мне</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ color: '#b3ffb3', display: 'block', marginBottom: '5px' }}>Ваше имя</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', background: '#0a0f0a', border: '1px solid #5a8f3c', borderRadius: '8px', color: '#b3ffb3' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ color: '#b3ffb3', display: 'block', marginBottom: '5px' }}>Email</label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', background: '#0a0f0a', border: '1px solid #5a8f3c', borderRadius: '8px', color: '#b3ffb3' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ color: '#b3ffb3', display: 'block', marginBottom: '5px' }}>Сообщение</label>
              <textarea
                rows="4"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', background: '#0a0f0a', border: '1px solid #5a8f3c', borderRadius: '8px', color: '#b3ffb3' }}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                width: '100%',
                padding: '12px',
                background: status === 'sending' ? '#3a5a3a' : '#5a8f3c',
                color: '#0a0f0a',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: status === 'sending' ? 'default' : 'pointer',
              }}
            >
              {status === 'sending' ? 'Отправка...' : 'Отправить'}
            </button>
            {status === 'success' && (
  <div style={{
    marginTop: '15px',
    padding: '15px',
    background: 'linear-gradient(135deg, #1e3a1e, #2a5a2a)',
    borderRadius: '12px',
    color: '#b3ffb3',
    textAlign: 'center',
    border: '1px solid #5a8f3c',
    boxShadow: '0 0 20px rgba(90, 143, 60, 0.3)',
    animation: 'fadeIn 0.5s ease'
  }}>
    <div style={{ fontSize: '2rem', marginBottom: '5px' }}></div>
    <strong style={{ fontSize: '1.1rem' }}>Сообщение отправлено!</strong>
    <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>
      Я отвечу вам в ближайшее время
    </p>
  </div>
)}

{status === 'error' && (
  <div style={{
    marginTop: '15px',
    padding: '15px',
    background: 'linear-gradient(135deg, #3a1e1e, #5a2a2a)',
    borderRadius: '12px',
    color: '#ff6b6b',
    textAlign: 'center',
    border: '1px solid #ff4444',
    boxShadow: '0 0 20px rgba(255, 68, 68, 0.2)',
    animation: 'fadeIn 0.5s ease'
  }}>
    <div style={{ fontSize: '2rem', marginBottom: '5px' }}>❌</div>
    <strong style={{ fontSize: '1.1rem' }}>Ошибка отправки</strong>
    <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>
      Попробуйте позже или напишите в Telegram
    </p>
  </div>
)}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;