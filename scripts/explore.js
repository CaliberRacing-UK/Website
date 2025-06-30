const resetLink = document.getElementById('resetView');
const modelViewer = document.getElementById('carModel');

resetLink?.addEventListener('click', (e) => {
  e.preventDefault(); // prevent scrolling to top
  modelViewer?.reset();
  modelViewer?.setAttribute('auto-rotate', ''); // optional: restart rotation
});