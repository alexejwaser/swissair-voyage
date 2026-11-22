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


// Slider: manual navigation, keyboard and touch. No autoplay, so the visitor stays in control.
for (const gallery of document.querySelectorAll('[data-gallery]')) {
  const slides = [...gallery.querySelectorAll('[data-gallery-slide]')];
  const dots = [...gallery.querySelectorAll('[data-gallery-dot]')];
  const captions = [
    'AIRBUS A350-900 · DER NEUE LANGSTRECKENJET',
    'HORIZON ALPS · FIRST CLASS',
    'HORIZON ALPS · BUSINESS CLASS',
    'HORIZON ALPS · PREMIUM ECONOMY',
    'HORIZON ALPS · ECONOMY CLASS',
    'AIRBUS A340-600 · DIE BISHERIGE GENERATION'
  ];
  const counter = gallery.querySelector('[data-gallery-counter]');
  const caption = gallery.querySelector('[data-gallery-caption]');
  let current = 0;
  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide,i) => { slide.hidden = i !== current; });
    dots.forEach((dot,i) => dot.setAttribute('aria-current', i===current ? 'true' : 'false'));
    counter.textContent = `${String(current+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
    caption.textContent = captions[current];
  };
  gallery.querySelector('[data-gallery-prev]').addEventListener('click', () => show(current-1));
  gallery.querySelector('[data-gallery-next]').addEventListener('click', () => show(current+1));
  dots.forEach((dot,i) => dot.addEventListener('click', () => show(i)));
  const viewport = gallery.querySelector('.gallery-viewport');
  viewport.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(current-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); show(current+1); }
    if (event.key === 'Home') { event.preventDefault(); show(0); }
    if (event.key === 'End') { event.preventDefault(); show(slides.length-1); }
  });
  let startX = null;
  viewport.addEventListener('touchstart', event => {startX = event.changedTouches[0].screenX;}, {passive:true});
  viewport.addEventListener('touchend', event => {
    if (startX === null) return;
    const delta = event.changedTouches[0].screenX-startX;
    if (Math.abs(delta) > 45) show(current + (delta < 0 ? 1 : -1));
    startX = null;
  }, {passive:true});
  show(0);
}



// Externe hochauflösende Fotos: falls sie offline oder durch Browser-Schutz nicht laden,
// die existierenden Lissabon-Fotografien lokal zeigen. Für andere Destinationen Ortslabel verwenden.
for (const img of document.querySelectorAll('img[data-fallback], .story-visual img')) {
  const failsafe = () => {
    const fallback = img.dataset.fallback;
    if (fallback && img.src !== new URL(fallback,document.baseURI).href) {
      img.removeAttribute('data-fallback');
      img.src = fallback;
    } else if (img.closest('.story-visual')) {
      img.closest('.story-visual').classList.add('is-fallback');
    }
  };
  img.addEventListener('error', failsafe);
  if (img.complete && img.naturalWidth === 0) failsafe();
}
