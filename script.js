const topics = [
  {
    title: "Thema 1",
    kicker: "Modul",
  },
  {
    title: "Thema 2",
    kicker: "Modul",
  },
  {
    title: "Thema 3",
    kicker: "Modul",
  },
  {
    title: "Thema 4",
    kicker: "Modul",
  },
  {
    title: "Thema 5",
    kicker: "Modul",
  },
  {
    title: "Thema 6",
    kicker: "Modul",
  },
];

const mainCard = document.querySelector("#mainCard");
const previewCard = document.querySelector("#previewCard");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const stage = document.querySelector(".topic-stage");

let currentIndex = 0;
let isAnimating = false;

function setCardContent(card, topic, isPreview = false) {
  const kicker = card.querySelector(".topic-kicker");
  const heading = card.querySelector(isPreview ? "h2" : "h1");

  kicker.textContent = isPreview ? "Nächstes" : topic.kicker;
  heading.textContent = topic.title;
}

function render() {
  const current = topics[currentIndex];
  const next = topics[currentIndex + 1];

  setCardContent(mainCard, current, false);

  if (next) {
    setCardContent(previewCard, next, true);
    previewCard.style.visibility = "visible";
  } else {
    previewCard.style.visibility = "hidden";
  }

  prevBtn.disabled = currentIndex === 0 || isAnimating;
  nextBtn.disabled = currentIndex === topics.length - 1 || isAnimating;
}

function move(direction) {
  if (isAnimating) return;

  const nextIndex = currentIndex + direction;
  if (nextIndex < 0 || nextIndex >= topics.length) return;

  isAnimating = true;
  render();

  stage.classList.add(direction > 0 ? "slide-next" : "slide-prev");

  window.setTimeout(() => {
    currentIndex = nextIndex;
    stage.classList.remove("slide-next", "slide-prev");
    isAnimating = false;
    render();
  }, 470);
}

prevBtn.addEventListener("click", () => move(-1));
nextBtn.addEventListener("click", () => move(1));

render();
