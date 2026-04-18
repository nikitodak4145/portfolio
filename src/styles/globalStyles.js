// ============================================
// СТИЛИ ДЛЯ НАВИГАЦИИ (Navbar)
// ============================================
export const navbarLinks = {
  display: 'flex',
  gap: '2rem'
};

export const navbarLink = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500'
};

export const navbarLogo = {
  width: '40px'
};

export const navbarLogoContainer = {
  display: 'flex',
  alignItems: 'center'
};

// ============================================
// СТИЛИ ДЛЯ ГЛАВНОЙ СТРАНИЦЫ (Home)
// ============================================
export const homeSection = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f8fafc',
  padding: '0 2rem'
};

export const homeContainer = {
  maxWidth: '1000px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'center'
};

export const homeTitle = {
  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
  fontWeight: '700',
  marginBottom: '1rem',
  color: '#0f172a'
};

export const homeText = {
  fontSize: '1.2rem',
  color: '#475569',
  marginBottom: '2rem',
  lineHeight: '1.6'
};

export const homeSkills = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem',
  marginBottom: '2rem'
};

export const homeSkillTag = {
  padding: '0.5rem 1rem',
  backgroundColor: '#e2e8f0',
  borderRadius: '9999px',
  fontSize: '0.9rem',
  color: '#1e293b',
  fontWeight: '500'
};

export const homeButton = {
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

export const homeImage = {
  width: '100%',
  maxWidth: '400px',
  borderRadius: '1rem',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
};

// ============================================
// СТИЛИ ДЛЯ СТРАНИЦЫ ПРОЕКТОВ (Projects)
// ============================================
export const projectsSection = {
  minHeight: '100vh',
  padding: '4rem 2rem',
  backgroundColor: '#f8fafc'
};

export const projectsContainer = {
  maxWidth: '1200px',
  margin: '0 auto'
};

export const projectsTitle = {
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '3rem',
  color: '#0f172a'
};

export const projectsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem'
};

export const projectsCard = {
  backgroundColor: 'white',
  borderRadius: '0.75rem',
  padding: '1.5rem',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s'
};

export const projectsTech = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  margin: '1rem 0'
};

export const projectsTechTag = {
  padding: '0.25rem 0.75rem',
  backgroundColor: '#e2e8f0',
  borderRadius: '9999px',
  fontSize: '0.875rem',
  color: '#475569'
};

export const projectsLinks = {
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem'
};

// ============================================
// СТИЛИ ДЛЯ СТРАНИЦЫ КОНТАКТОВ (Contact)
// ============================================
export const contactSection = {
  minHeight: '100vh',
  padding: '4rem 2rem',
  backgroundColor: '#f8fafc'
};

export const contactContainer = {
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'center'
};

export const contactTitle = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  color: '#0f172a',
  fontWeight: '600'
};

export const contactText = {
  fontSize: '1.2rem',
  color: '#475569',
  marginBottom: '3rem'
};

export const contactGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2rem',
  marginTop: '2rem'
};

export const contactCard = {
  backgroundColor: 'white',
  padding: '1.5rem',
  borderRadius: '0.75rem',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer'
};

export const contactCardTitle = {
  fontSize: '1.25rem',
  marginBottom: '1rem',
  color: '#0f172a',
  fontWeight: '600'
};

export const contactLink = {
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

export const contactTextMuted = {
  color: '#475569',
  fontSize: '1rem',
  wordBreak: 'break-all'
};