    const model = document.getElementById('carModel');
    const loadingOverlay = document.getElementById('modelLoading');

    // Animate "Loading" text
    const loadingTexts = ["Loading", "Loading.", "Loading..", "Loading..."];
    let index = 0;
    const interval = setInterval(() => {
      loadingOverlay.textContent = loadingTexts[index];
      index = (index + 1) % loadingTexts.length;
    }, 400);

    // Handle when model is fully loaded
    const hideLoading = () => {
      clearInterval(interval);
      loadingOverlay.style.display = 'none';
    };

    model.addEventListener('load', hideLoading);

    // Fallback in case 'load' doesn't fire (e.g. cached fast load)
    setTimeout(() => {
      if (model.loaded || model.modelIsVisible) {
        hideLoading();
      }
    }, 2000);