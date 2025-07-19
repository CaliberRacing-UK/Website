    const model = document.getElementById('carModel');
    const loadingOverlay = document.getElementById('modelLoading');
    
    const loadingTexts = ["Loading", "Loading.", "Loading..", "Loading..."];
    let index = 0;
    const interval = setInterval(() => {
      loadingOverlay.textContent = loadingTexts[index];
      index = (index + 1) % loadingTexts.length;
    }, 400); // Change every 400ms

    // Stop the animation when the model loads
    model.addEventListener('load', () => {
      clearInterval(interval);
      loadingOverlay.style.display = 'none';
    });