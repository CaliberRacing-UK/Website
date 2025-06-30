document.addEventListener('DOMContentLoaded', () => {
  // Cache DOM elements
  const logoContainer = document.getElementById('logoContainer');
  const hoverBg = document.getElementById('hoverBg');
  const header = document.querySelector('header');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const isOnMainPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/index.html';

  // Update hover background size under logo
  function updateHoverBg() {
    if (!logoContainer || !hoverBg || !header) return;
    const logoRect = logoContainer.getBoundingClientRect();
    const headerRect = header.getBoundingClientRect();
    const hoverWidth = (2 * logoRect.left) + logoRect.width;
    hoverBg.style.width = `${hoverWidth}px`;
    hoverBg.style.height = `${headerRect.height}px`;
  }

  // Smooth scroll to top on logo click
  logoContainer?.addEventListener('click', () => {
    if (isOnMainPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '../index.html';
    }
  });

  // Show hover background on mouse enter
  logoContainer?.addEventListener('mouseenter', () => {
    updateHoverBg();
    hoverBg.style.opacity = '1';
  });

  // Hide hover background on mouse leave
  logoContainer?.addEventListener('mouseleave', () => {
    hoverBg.style.opacity = '0';
    hoverBg.style.width = '0';
  });

  // Toggle dropdown menu on hamburger click
  hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('dropdown');
    navLinks?.classList.toggle('show');
  });

  // Close dropdown when clicking outside hamburger or nav links
  document.addEventListener('click', (e) => {
    if (!navLinks.classList.contains('show')) return;
    if (hamburger.contains(e.target) || navLinks.contains(e.target)) return;
    navLinks.classList.remove('dropdown', 'show');
  });

  // Close dropdown on clicking any nav link
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('dropdown', 'show');
    });
  });

  window.addEventListener('load', () => {
    updateHoverBg();
  });

  window.addEventListener('resize', () => {
    // Remove dropdown if resized wider than 600px
    if (window.innerWidth > 600) {
      navLinks?.classList.remove('dropdown', 'show');
    }
  });
});