const button = document.querySelector('#menu-toggle');
const nav = document.querySelector('#nav-links');
if (button && nav) {
  const closeMenu = () => {nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false');};
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', (event) => {if (event.target.closest('a')) closeMenu();});
  document.addEventListener('keydown', (event) => {if (event.key === 'Escape') closeMenu();});
  document.addEventListener('click', (event) => {if (!nav.contains(event.target) && !button.contains(event.target)) closeMenu();});
}

// Newsletter-Demo: nichts wird gesendet oder gespeichert, es erscheint nur ein Bestätigungstext.
for (const form of document.querySelectorAll('[data-newsletter]')) {
  const status = form.querySelector('[data-newsletter-status]');
  const input = form.querySelector('input[type="email"]');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!input.value.trim() || !input.checkValidity()) {
      status.textContent = 'Bitte gib eine gültige E-Mail-Adresse ein.';
      input.focus();
      return;
    }
    status.textContent = 'Danke! Das ist eine Demo: Deine Adresse wurde nicht gespeichert und nirgends hin geschickt.';
    form.reset();
  });
}
