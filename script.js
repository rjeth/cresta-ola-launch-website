document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('nav-open');
    if (isOpen) {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '84px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = '#0a0a09';
      navLinks.style.padding = '24px 32px';
      navLinks.style.borderBottom = '1px solid rgba(247,246,242,0.1)';
      navLinks.style.gap = '18px';
    } else {
      navLinks.removeAttribute('style');
    }
  });
});
