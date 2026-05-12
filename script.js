const topics = [
  {
    label: "Thema 1",
    module: "Dekomposition",
    subtitle: "Komplexe Aufgaben in kleinere, überschaubare Teilprobleme zerlegen.",
    leftTitle: "Was bedeutet Dekomposition?",
    leftHtml: `
      <p>Dekomposition bedeutet, ein größeres Problem in kleinere und besser verständliche Teilaufgaben aufzuteilen.</p>
      <p>Statt sofort die gesamte Aufgabe lösen zu wollen, betrachtet man einzelne Bestandteile nacheinander: Welche Schritte gibt es? Was gehört zusammen? Was kann getrennt bearbeitet werden?</p>
      <p>So werden komplexe Abläufe übersichtlicher, leichter planbar und einfacher zu überprüfen.</p>
    `,
    rightTitle: "Was lernst du in diesem Modul zur Dekomposition?",
    rightHtml: `
      <p>Du lernst, Aufgaben systematisch zu untersuchen und sinnvoll in Teilbereiche zu gliedern.</p>
      <ul>
        <li>komplexe Aufgaben strukturieren</li>
        <li>Teilprobleme erkennen und benennen</li>
        <li>Arbeitsschritte logisch ordnen</li>
        <li>Lösungswege übersichtlicher planen</li>
      </ul>
    `
  },
  {
    label: "Thema 2",
    module: "Gesprächsführung",
    subtitle: "Gespräche bewusst strukturieren, aktiv zuhören und klar reagieren.",
    leftTitle: "Was bedeutet Gesprächsführung?",
    leftHtml: `
      <p>Gesprächsführung beschreibt, wie ein Gespräch bewusst vorbereitet, gelenkt und ausgewertet wird.</p>
      <p>Dabei geht es nicht nur darum, selbst zu sprechen, sondern auch aufmerksam zuzuhören, Rückfragen zu stellen und die Aussagen des Gegenübers richtig einzuordnen.</p>
      <p>Eine gute Gesprächsführung hilft, Missverständnisse zu vermeiden und ein gemeinsames Ziel im Gespräch zu erreichen.</p>
    `,
    rightTitle: "Was lernst du in diesem Modul zur Gesprächsführung?",
    rightHtml: `
      <p>Du lernst, Gespräche klarer, ruhiger und zielgerichteter zu führen.</p>
      <ul>
        <li>aktive Zuhörtechniken anwenden</li>
        <li>offene und geschlossene Fragen unterscheiden</li>
        <li>Gesprächsziele formulieren</li>
        <li>angemessen auf Aussagen reagieren</li>
      </ul>
    `
  },
  {
    label: "Thema 3",
    module: "Beispiel",
    subtitle: "Beispielinhalt für ein weiteres Modul.",
    leftTitle: "Was bedeutet Beispiel?",
    leftHtml: `<p>Beispiel</p><p>Beispiel</p><p>Beispiel</p>`,
    rightTitle: "Was lernst du in diesem Modul?",
    rightHtml: `<p>Beispiel</p><ul><li>Beispiel</li><li>Beispiel</li><li>Beispiel</li></ul>`
  },
  {
    label: "Thema 4",
    module: "Beispiel",
    subtitle: "Beispielinhalt für ein weiteres Modul.",
    leftTitle: "Was bedeutet Beispiel?",
    leftHtml: `<p>Beispiel</p><p>Beispiel</p><p>Beispiel</p>`,
    rightTitle: "Was lernst du in diesem Modul?",
    rightHtml: `<p>Beispiel</p><ul><li>Beispiel</li><li>Beispiel</li><li>Beispiel</li></ul>`
  },
  {
    label: "Thema 5",
    module: "Beispiel",
    subtitle: "Beispielinhalt für ein weiteres Modul.",
    leftTitle: "Was bedeutet Beispiel?",
    leftHtml: `<p>Beispiel</p><p>Beispiel</p><p>Beispiel</p>`,
    rightTitle: "Was lernst du in diesem Modul?",
    rightHtml: `<p>Beispiel</p><ul><li>Beispiel</li><li>Beispiel</li><li>Beispiel</li></ul>`
  },
  {
    label: "Thema 6",
    module: "Beispiel",
    subtitle: "Beispielinhalt für ein weiteres Modul.",
    leftTitle: "Was bedeutet Beispiel?",
    leftHtml: `<p>Beispiel</p><p>Beispiel</p><p>Beispiel</p>`,
    rightTitle: "Was lernst du in diesem Modul?",
    rightHtml: `<p>Beispiel</p><ul><li>Beispiel</li><li>Beispiel</li><li>Beispiel</li></ul>`
  }
];

const cardsTrack = document.querySelector("#cardsTrack");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const dynamicContent = document.querySelector("#dynamicContent");
const bannerTitle = document.querySelector("#bannerTitle");
const bannerSubtitle = document.querySelector("#bannerSubtitle");
const leftTitle = document.querySelector("#leftTitle");
const leftText = document.querySelector("#leftText");
const rightTitle = document.querySelector("#rightTitle");
const rightText = document.querySelector("#rightText");

let activeIndex = 0;
let isAnimating = false;

const cards = topics.map((topic, index) => {
  const card = document.createElement("div");
  card.className = "topic-card";
  card.dataset.index = String(index);
  card.innerHTML = `<strong>${topic.label}</strong>`;
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

function updateContent() {
  const topic = topics[activeIndex];

  dynamicContent.classList.add("is-changing");

  window.setTimeout(() => {
    bannerTitle.textContent = topic.module;
    bannerSubtitle.textContent = topic.subtitle;
    leftTitle.textContent = topic.leftTitle;
    leftText.innerHTML = topic.leftHtml;
    rightTitle.textContent = topic.rightTitle;
    rightText.innerHTML = topic.rightHtml;
    dynamicContent.classList.remove("is-changing");
  }, 160);
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
  updateContent();

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
updateContent();
