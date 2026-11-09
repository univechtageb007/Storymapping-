// Mobile navigation
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal sections on scroll
const revealEls = document.querySelectorAll('.section .container, .stats__grid');
revealEls.forEach((el) => el.classList.add('reveal'));
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => observer.observe(el));

// Contact form: opens the user's mail client with a prefilled message
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = `Probetraining Boxen – ${data.get('gruppe')}`;
  const body =
    `Name: ${data.get('name')}\n` +
    `E-Mail: ${data.get('email')}\n` +
    `Gruppe: ${data.get('gruppe')}\n\n` +
    `${data.get('nachricht')}`;
  window.location.href =
    `mailto:boxen@example.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  form.querySelector('.form__status').textContent =
    'Dein E-Mail-Programm wird geöffnet – danke für deine Anfrage!';
});
