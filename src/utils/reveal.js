export const initReveal = () => {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150;
      
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // запускаем сразу для видимых элементов
};