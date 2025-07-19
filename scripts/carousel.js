const sponsors = [
  {
    name: "The Tacons",
    image: "graphics/sponsors/tacons.png",
    description: "The Tacons have been a huge help by donating to us.",
    time: "2024",
    level: "N/A"
  },
  {
    name: "SSAF",
    image: "graphics/sponsors/ssaf.png",
    description: "SSAF have been a big part of our success by printing our Nationals pit display for free! We are very greatful for their support.",
    time: "2023",
    level: "N/A"
  },
  {
    name: "Chris Edmundson LTD",
    image: "graphics/sponsors/chris-edmundson-ltd.png",
    description: "Chris Edmundson LTD have been crucial in our success by donating to us.",
    time: "2024",
    level: "N/A"
  },
  {
    name: "NNGS",
    image: "graphics/sponsors/nngs.png",
    description: "Nick Nelson's Garage Services have helped us out by donating to us.",
    time: "2024",
    level: "N/A"
  },
  {
    name: "Brundall Manor Garage",
    image: "graphics/sponsors/brundall-manor-garage.png",
    description: "The tacons have been a huge help by donating to us.",
    time: "2024",
    level: "N/A"
  },
  {
    name: "Seal View",
    image: "graphics/sponsors/seal-view.png",
    description: "SSAF have been a big part of our success by printing our pit display for free!",
    time: "2024",
    level: "N/A"
  },
  {
    name: "Sanderson",
    image: "graphics/sponsors/sanderson.png",
    description: "Sanderson lower sixth",
    time: "2024",
    level: "N/A"
  },
  {
    name: "MAC",
    image: "graphics/sponsors/mac.png",
    description: "Martham auto centre have been a loyal sponsor from the start and have paid for our shirts aswell as making genorous donations. Without them we wouldn't be where we are now.",
    time: "2022",
    level: "N/A"
  }
];

let currentIndex = Math.round(Math.random()*8);

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