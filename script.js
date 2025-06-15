//Smooth scroll effect
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* Nav Bar Link Scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);
  
      if (targetElement) {
        const navHeight = document.querySelector('nav').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight - 10; // 10px extra offset
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

// Auto-scroll gallery
const cards = document.querySelectorAll('.product-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3,
});

cards.forEach(card => observer.observe(card));
