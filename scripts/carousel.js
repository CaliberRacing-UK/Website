const sponsors = [
  {
    name: "The Tacons",
    image: "graphics/sponsors/tacons.png",
    description: "The Tacons are a local farm shop which have generously donated £100.",
    time: "February 2025",
    level: "N/A"
  },
  {
    name: "SSAF",
    image: "graphics/sponsors/ssaf.png",
    description: "SSAF are a local company which produce custom printed products. They sponsored us and our helping us by printing our shirts for a significantly lower price than advertised to others who they do not sponsor.",
    time: "2023",
    level: "N/A"
  },
  {
    name: "Chris Edmundson LTD",
    image: "graphics/sponsors/chris-edmundson-ltd.png",
    description: "Chris Edmondson LTD is a local master carpenter for boats. He gave us wooden boards to use for our pit display.",
    time: "2024",
    level: "N/A"
  },
  {
    name: "NNGS",
    image: "graphics/sponsors/nngs.png",
    description: "Nick Nelson Garage Services are a company which sell garage equipment. They are donating us £125.",
    time: "2024",
    level: "N/A"
  },
  {
    name: "Brundall Manor Garage",
    image: "graphics/sponsors/brundall-manor-garage.png",
    description: "Brundall Manor Garage are a garage in our local area. They sponsored us and gave us £50.",
    time: "2024",
    level: "N/A"
  },
  {
    name: "Seal View",
    image: "graphics/sponsors/seal-view.png",
    description: "Seal View is a local café which we have seen sponsor other local clubs, so we asked them to sponsor us, and they have given us £50.",
    time: "July 2024",
    level: "N/A"
  },
  {
    name: "Sanderson",
    image: "graphics/sponsors/sanderson.png",
    description: "Sanderson lower sixth are a group of students which have kindly offered to sponsor us.",
    time: "February 2025",
    level: "N/A"
  },
  {
    name: "MAC",
    image: "graphics/sponsors/mac.png",
    description: "Martham Auto Centre are a local garage within our community which have offered to sponsor our team. They are helping us by paying for our merchandise.",
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