const topics = [
  "Thema 1",
  "Thema 2",
  "Thema 3",
  "Thema 4",
  "Thema 5",
  "Thema 6"
];

const cardsTrack = document.querySelector("#cardsTrack");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let activeIndex = 0;
let isAnimating = false;

const cards = topics.map((topic, index) => {
  const card = document.createElement("div");
  card.className = "topic-card";
  card.dataset.index = String(index);
  card.innerHTML = `<strong>${topic}</strong>`;
  cardsTrack.appendChild(card);
  return card;
});

function getCardClass(index) {
  const diff = index - activeIndex;

  if (diff === 0) return "is-center";
  if (diff === -1) return "is-left";
  if (diff === 1) return "is-right";
  if (diff < -1) return "is-hidden-left";
  if (diff > 1) return "is-hidden-right";

  return "is-gone";
}

function render() {
  cards.forEach((card, index) => {
    card.className = `topic-card ${getCardClass(index)}`;
  });

  prevBtn.disabled = activeIndex === 0 || isAnimating;
  nextBtn.disabled = activeIndex === topics.length - 1 || isAnimating;
}

function move(direction) {
  if (isAnimating) return;

  const nextIndex = activeIndex + direction;
  if (nextIndex < 0 || nextIndex >= topics.length) return;

  isAnimating = true;
  activeIndex = nextIndex;
  render();

  window.setTimeout(() => {
    isAnimating = false;
    render();
  }, 540);
}

prevBtn.addEventListener("click", () => move(-1));
nextBtn.addEventListener("click", () => move(1));

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === "ArrowRight") move(1);
});

render();
