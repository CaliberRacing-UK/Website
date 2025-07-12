const sponsors = [
  {
    name: "Sponsor A",
    image: "graphics/sponsors/tacons.png",
    description: "Supporting us since 2020, Sponsor A helps us innovate with confidence.",
    time: "Sponsoring for 3 years",
    level: "Platinum"
  },
  {
    name: "Sponsor B",
    image: "graphics/sponsors/ssaf.png",
    description: "Sponsor B powers our technical advancements with generous support.",
    time: "Sponsoring for 2 years",
    level: "Gold"
  },
  {
    name: "Sponsor C",
    image: "graphics/sponsors/chris-edmundson-ltd.png",
    description: "Thanks to Sponsor C, we can keep pushing the limits on design.",
    time: "Sponsoring for 1 year",
    level: "Silver"
  },
  {
    name: "Sponsor D",
    image: "graphics/sponsors/nngs.png",
    description: "Sponsor D's commitment fuels our passion for STEM education.",
    time: "Sponsoring since this year",
    level: "Bronze"
  }
];

let currentIndex = 0;

const track = document.querySelector('.carousel-track');
const nameEl = document.getElementById('sponsor-name');
const descEl = document.getElementById('sponsor-info');
const statsTimeEL = document.getElementById('sponsor-stats-time');
const statsLevelEL = document.getElementById('sponsor-stats-level');
const leftArrow = document.querySelector('.carousel-arrow.left');
const rightArrow = document.querySelector('.carousel-arrow.right');

function renderCarousel() {
  track.innerHTML = '';

  sponsors.forEach((sponsor, i) => {
    const div = document.createElement('div');
    div.classList.add('carousel-item');

    // Calculate relative index from current
    const relativeIndex = (i - currentIndex + sponsors.length) % sponsors.length;

    if (relativeIndex === 0) div.classList.add('active');
    else if (relativeIndex === sponsors.length - 1) div.classList.add('prev');
    else if (relativeIndex === 1) div.classList.add('next');

    const img = document.createElement('img');
    img.src = sponsor.image;
    img.alt = sponsor.name;

    div.appendChild(img);

    // Clicking center image moves to next sponsor
    if (relativeIndex === 0) {
      div.addEventListener('click', nextSponsor);
    }

    track.appendChild(div);
  });

  // Update text below carousel
  const currentSponsor = sponsors[currentIndex];
  nameEl.textContent = currentSponsor.name;
  descEl.textContent = currentSponsor.description;

    // Also update the separate elements
    statsLevelEL.textContent = currentSponsor.level;
    statsTimeEL.textContent = currentSponsor.time;
}

function prevSponsor() {
  currentIndex = (currentIndex - 1 + sponsors.length) % sponsors.length;
  renderCarousel();
}

function nextSponsor() {
  currentIndex = (currentIndex + 1) % sponsors.length;
  renderCarousel();
}

leftArrow.addEventListener('click', prevSponsor);
rightArrow.addEventListener('click', nextSponsor);

renderCarousel();