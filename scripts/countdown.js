document.addEventListener("DOMContentLoaded", () => {
    const countdownEl = document.getElementById("countdown");
    const nextCompDate = new Date(2026, 0, 28, 9, 0); // Jan 28th 2026 9:00am

    function updateCountdown() {
      const now = new Date();
      const diff = nextCompDate - now;

      if (diff <= 0) {
        countdownEl.textContent = "It's race day!";
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      countdownEl.innerHTML =
        `${days}<span class="unit">d</span> ` +
        `${hours}<span class="unit">h</span> ` +
        `${minutes}<span class="unit">m</span> ` +
        `${seconds}<span class="unit">s</span>`;
      }

    updateCountdown(); // initial call
    const timer = setInterval(updateCountdown, 1000);
});