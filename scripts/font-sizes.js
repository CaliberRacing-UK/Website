document.addEventListener('DOMContentLoaded', () => {
    const sizeMap = {
    '--fs-heading': [29, 56],
    '--fs-subheading': [24, 40],
    '--fs-text': [16, 24],
    '--fs-label': [12, 20],
    '--fs-hero-heading': [22, 80],
    '--fs-hero-text': [8, 27],
    '--fs-button': [12, 32],
    '--fs-nav': [9, 19],
    '--fs-title': [24, 29],
    '--fs-subtitle': [16, 21],
    '--fs-info': [13, 18],
    '--fs-countdown': [50, 85],
    '--fs-footer': [20, 20], // fixed size
    '--logo-height': [24, 48],
    '--sponsor-height': [55, 150],
  };

  // Calculate scaled size based on window width
  function dynamicSize(small, big) {
    const scaleFactor = (window.innerWidth - 400) / 1512;
    return Math.round(small + (big - small) * scaleFactor);
  }

  // Apply dynamic sizes to CSS variables
  function applySizes() {
    const root = document.documentElement;
    for (const [varName, [minSize, maxSize]] of Object.entries(sizeMap)) {
      const sizePx = dynamicSize(minSize, maxSize);
      root.style.setProperty(varName, `${sizePx}px`);
    }
  }

  window.addEventListener('resize', () => {
    applySizes();
  });

  window.addEventListener('load', () => {
    applySizes();
  });

  window.addEventListener('beforeunload', () => {
    applySizes();
  });
});