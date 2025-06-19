window.addEventListener('DOMContentLoaded', () => {
  const groups = document.querySelectorAll('.cartoonBilder');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateGroup(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  groups.forEach(g => observer.observe(g));

  function animateGroup(group) {
    group.classList.add('show');
    const container = group.querySelector('.textPicCartoon');
    if (container) container.classList.add('animate-shadow');
    const textElem = group.querySelector('.cartoonText');
    if (textElem) animateText(textElem);
  }

  function animateText(elem) {
    const text = elem.innerHTML;
    elem.textContent = '';
    text.split(/(<br\s*\/?>|\s)/).forEach((t, i) => {
      const span = document.createElement('span');
      elem.appendChild(span);
      if (/^<br\s*\/?>$/.test(t)) {
        span.innerHTML = '<br>';
      } else if (t === ' ') {
        span.innerHTML = '&nbsp;';
      } else {
        span.textContent = t;
      }
      span.style.opacity = '0';
      span.style.transition = 'opacity 0.3s ease';
      setTimeout(() => {
        span.style.opacity = '1';
        span.classList.add('animation');
      }, i * 10);
    });
  }
});
