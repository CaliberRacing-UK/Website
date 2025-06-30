// Set your current donation amount and goal here manually
const donationRaised = 50;  // Change this value manually when updated
const donationGoal = 3000;   // Your goal amount

// Update the progress bar and text dynamically on page load
window.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('donation-progress');
  const progressText = document.querySelector('.progress-text');

  progressBar.value = donationRaised;
  progressBar.max = donationGoal;

  progressText.textContent = `£${donationRaised.toLocaleString()} of £${donationGoal.toLocaleString()} goal raised`;
});