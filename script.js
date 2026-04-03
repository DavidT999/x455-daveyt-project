document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-carousel]').forEach(initCarousel);
  document.querySelectorAll('.accordion-item').forEach((item) => {
    const head = item.querySelector('.accordion-head');
    head?.addEventListener('click', () => {
      item.classList.toggle('collapsed');
      const symbol = item.querySelector('.accordion-symbol');
      if (symbol) symbol.textContent = item.classList.contains('collapsed') ? '⌄' : '⌃';
    });
  });
});

function initCarousel(root) {
  const slides = Array.from(root.querySelectorAll('.carousel-slide'));
  const dots = Array.from(root.querySelectorAll('.dot'));
  let index = Number(root.dataset.start || 0);
  const show = (i) => {
    index = (i + slides.length) % slides.length;
    slides.forEach((slide, idx) => slide.classList.toggle('active', idx === index));
    dots.forEach((dot, idx) => dot.classList.toggle('active', idx === index));
  };
  root.querySelector('[data-prev]')?.addEventListener('click', () => show(index - 1));
  root.querySelector('[data-next]')?.addEventListener('click', () => show(index + 1));
  dots.forEach((dot, idx) => dot.addEventListener('click', () => show(idx)));
  show(index);
}
