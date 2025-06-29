document.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    setTimeout(() => window.scrollTo(0, 0), 10);
  });

  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
  });
});