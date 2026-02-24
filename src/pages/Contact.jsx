import React from 'react';

function Contact() {
  const sectionStyle = {
    minHeight: '100vh',
    padding: '4rem 2rem',
    backgroundColor: '#f8fafc'
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#0f172a',
    fontWeight: '600'
  };

  const textStyle = {
    fontSize: '1.2rem',
    color: '#475569',
    marginBottom: '3rem'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer'
  };

  const cardTitleStyle = {
    fontSize: '1.25rem',
    marginBottom: '1rem',
    color: '#0f172a',
    fontWeight: '600'
  };

  const linkStyle = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '0.375rem',
    fontWeight: '500',
    transition: 'background-color 0.2s, transform 0.2s',
    cursor: 'pointer'
  };

  const textMutedStyle = {
    color: '#475569',
    fontSize: '1rem',
    wordBreak: 'break-all'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Контакты</h2>
        <p style={textStyle}>
          Свяжитесь со мной любым удобным способом
        </p>
        
        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>GitHub</h3>
            <a 
              href="https://github.com/nikitodak4145" 
              target="_blank" 
              rel="noopener noreferrer"
              style={linkStyle}
            >
              nikitodak4145
            </a>
          </div>

          

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Telegram</h3>
            <a 
              href="https://t.me/barbos_n455" 
              target="_blank" 
              rel="noopener noreferrer"
              style={linkStyle}
            >
              @barbos_n455
            </a>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Телефон</h3>
            <p style={textMutedStyle}>+375(29)777-46-31</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;