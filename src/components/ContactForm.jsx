import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // ЗДЕСЬ ВСТАВЬ СВОИ ДАННЫЕ ИЗ EMAILJS!
    emailjs.send(
      'service_7uay889',     // Service ID
      'template_ht6fzd7',    // Template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'xGZzeA3_VyAihfLp_'         // Public Key
    ).then(
      () => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      },
      (error) => {
        console.error('Ошибка:', error);
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    );
  };

  const formStyle = {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    fontFamily: 'inherit'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical'
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  };

  const statusStyle = {
    marginTop: '1rem',
    padding: '0.75rem',
    borderRadius: '0.375rem',
    textAlign: 'center'
  };

  return (
    <div style={formStyle}>
      <h3 style={{ marginBottom: '1.5rem', color: '#0f172a' }}>Напишите мне</h3>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        
        <input
          type="email"
          name="email"
          placeholder="Ваш email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          value={formData.message}
          onChange={handleChange}
          required
          style={textareaStyle}
        />
        
        <button 
          type="submit" 
          style={buttonStyle}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Отправка...' : 'Отправить'}
        </button>
      </form>

      {status === 'success' && (
        <div style={{...statusStyle, backgroundColor: '#d1fae5', color: '#065f46'}}>
          Сообщение отправлено! 
        </div>
      )}

      {status === 'error' && (
        <div style={{...statusStyle, backgroundColor: '#fee2e2', color: '#991b1b'}}>
          Ошибка! Попробуйте позже 
        </div>
      )}
    </div>
  );
}

export default ContactForm;