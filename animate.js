document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[aos]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animations = entry.target.getAttribute('aos').split(' ');
  
        animations.forEach(animation => {
          entry.target.classList.add(animation, 'animate');
        });
  
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  elements.forEach(element => {
    observer.observe(element);
  });
});
  