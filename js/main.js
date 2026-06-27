// ── Active nav link based on current page ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (
    href === currentPage ||
    (currentPage === '' && href === 'index.html') ||
    (currentPage === 'index.html' && href === 'index.html')
  ) {
    link.classList.add('active');
  }
});

// ── Fade-in on scroll ──
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach(el => observer.observe(el));
