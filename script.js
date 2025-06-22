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
const track = document.querySelector('.scroll-track');
const gallery = document.querySelector('.scrolling-gallery');

track.innerHTML += track.innerHTML;

let lastTime = null;
let offset = 0;
let paused = false;

gallery.addEventListener('mouseenter', () => paused = true);
gallery.addEventListener('mouseleave', () => paused = false);

function step(timestamp) {
  if (!lastTime) lastTime = timestamp;

  const delta = timestamp - lastTime;
  lastTime = timestamp;

  if (!paused) {
    offset += delta * 0.065;
    if (offset >= track.scrollWidth / 2) {
      offset = 0;
    }
    track.style.transform = `translateX(-${offset}px)`;
  }

  requestAnimationFrame(step);
}

requestAnimationFrame(step);
