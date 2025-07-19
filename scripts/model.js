    const model = document.getElementById('carModel');
    const loadingOverlay = document.getElementById('modelLoading');

    const loadingTexts = ["Loading", "Loading.", "Loading..", "Loading..."];
    let index = 0;

    const interval = setInterval(() => {
      loadingOverlay.textContent = loadingTexts[index];
      index = (index + 1) % loadingTexts.length;
    }, 400);

    function hideOverlay() {
      clearInterval(interval);
      loadingOverlay.style.display = 'none';
    }

    // Most reliable event for when the model is rendered
    model.addEventListener('model-visibility', () => {
      hideOverlay();
    });

    // Fallback in case event is missed (caching etc.)
    setTimeout(() => {
      if (model.modelIsVisible || model.loaded) {
        hideOverlay();
      }
    }, 3000);