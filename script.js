const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.service-card').forEach(card => {
      card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

document.getElementById('enquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();
  const text = `Hello AL RASHID IT SOLUTIONS,%0A%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0ARequirement: ${encodeURIComponent(message)}%0A%0APlease let me know how you can help.`;
  window.open(`https://wa.me/255662884933?text=${text}`, '_blank', 'noopener');
});

document.getElementById('year').textContent = new Date().getFullYear();
