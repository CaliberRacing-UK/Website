      const model = document.getElementById("carModel");
      const loadingOverlay = document.getElementById("modelLoading");

      const loadingTexts = ["Loading", "Loading.", "Loading..", "Loading..."];
      let index = 0;

      const interval = setInterval(() => {
        loadingOverlay.textContent = loadingTexts[index];
        index = (index + 1) % loadingTexts.length;
      }, 400);

      const hideOverlay = () => {
        clearInterval(interval);
        loadingOverlay.classList.add("hidden");
        setTimeout(() => {
          loadingOverlay.style.display = "none";
        }, 400);
      };

      // This fires when the model is visually rendered
      model.addEventListener("model-visibility", hideOverlay);

      // Fallback
      setTimeout(() => {
        if (model.modelIsVisible || model.loaded) {
          hideOverlay();
        }
      }, 3000);