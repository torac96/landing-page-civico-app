// FAQ items animation on open
document.querySelectorAll<HTMLDetailsElement>('.faq-item').forEach(item => {
  item.addEventListener('toggle', function () {
    if (this.open) {
      const answer = this.querySelector<HTMLElement>('.faq-answer');
      if (answer) answer.style.animation = 'fadeIn 0.3s ease';
    }
  });
});

// Scroll-triggered animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        (entry.target as HTMLElement).style.opacity = '1';
        (entry.target as HTMLElement).style.transform = 'translateY(0)';
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll<HTMLElement>('.feature-card, .step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// Navbar shadow on scroll
const navbar = document.querySelector<HTMLElement>('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.pageYOffset > 100 ? '0 2px 10px rgba(0,0,0,0.1)' : 'none';
  }, { passive: true });
}
