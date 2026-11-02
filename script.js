document.getElementById('year').textContent = new Date().getFullYear();
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motionQuery.matches) {
  const revealItems = document.querySelectorAll('.intro-grid, .values-row, .lookbook-head, .gallery-card, .design-note-image, .design-note-copy, .booking-grid, .visit-grid');
  revealItems.forEach((item, index) => {
    item.classList.add('reveal');
    if (item.classList.contains('gallery-card')) item.style.transitionDelay = `${(index % 4) * 70}ms`;
  });
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
}
document.getElementById('whatsapp-cta').addEventListener('click', () => {
  const idea = document.getElementById('idea').value.trim();
  const timing = document.getElementById('timing').value.trim();
  const details = [idea && `I have a design idea: ${idea}`, timing && `I'd like to visit around: ${timing}`].filter(Boolean).join('. ');
  const message = `Hi SuSu The Nails Story! I'd love to ask about a nail design.${details ? ` ${details}.` : ''}`;
  window.open(`https://wa.me/6588001848?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
