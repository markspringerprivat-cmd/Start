const topics = [
  {
    cardTitle: "Hauptseite",
    bannerTitle: "Hauptseite",
    leftTitle: "Willkommen auf der Hauptseite",
    leftText: "Diese Hauptseite gibt dir einen Überblick über die Module zur Gesprächsführung. Du kannst oben linear durch die einzelnen Themen wechseln und die passenden Inhalte darunter lesen.",
    rightTitle: "Was findest du hier?",
    rightText: "Du findest eine strukturierte Übersicht über Gesprächsumgebung, Gesprächseröffnung, Gesprächsbeiträge, Schülerbeiträge, Ergebnissicherung und Gesprächsabschluss."
  },
  {
    cardTitle: "Gesprächsumgebung",
    bannerTitle: "Vorbereitung der Gesprächsumgebung",
    leftTitle: "Was bedeutet Vorbereitung der Gesprächsumgebung?",
    leftText: "Eine gute Gesprächsumgebung schafft Orientierung, Ruhe und Sicherheit. Dazu gehören eine klare Sitzordnung, passende Materialien, ein störungsarmer Raum und transparente Gesprächsregeln.",
    rightTitle: "Was lernst du in diesem Modul?",
    rightText: "Du lernst, wie du räumliche, soziale und organisatorische Bedingungen so vorbereitest, dass Gespräche konzentriert, respektvoll und zielgerichtet stattfinden können."
  },
  {
    cardTitle: "Gesprächseröffnung",
    bannerTitle: "Gesprächseröffnung",
    leftTitle: "Was bedeutet Gesprächseröffnung?",
    leftText: "Die Gesprächseröffnung legt den Rahmen für das folgende Gespräch. Sie klärt Anlass, Ziel, Ablauf und Rollen, damit alle Beteiligten wissen, worum es geht.",
    rightTitle: "Was lernst du in diesem Modul?",
    rightText: "Du lernst, wie du Gespräche klar, wertschätzend und strukturiert beginnst, Vorwissen aktivierst und einen gemeinsamen Fokus herstellst."
  },
  {
    cardTitle: "Gesprächsbeiträge",
    bannerTitle: "Anregung von Gesprächsbeiträgen",
    leftTitle: "Was bedeutet Anregung von Gesprächsbeiträgen?",
    leftText: "Gesprächsbeiträge entstehen nicht zufällig. Sie können durch offene Fragen, Denkanstöße, Wartezeit, Impulse und eine wertschätzende Gesprächsatmosphäre gefördert werden.",
    rightTitle: "Was lernst du in diesem Modul?",
    rightText: "Du lernst, wie du Beteiligung aktivierst, unterschiedliche Perspektiven einbindest und Beiträge so anregst, dass ein lebendiges und fachlich tragfähiges Gespräch entsteht."
  },
  {
    cardTitle: "Schülerbeiträge",
    bannerTitle: "Umgang mit Schülerbeiträgen",
    leftTitle: "Was bedeutet Umgang mit Schülerbeiträgen?",
    leftText: "Schülerbeiträge enthalten oft fachliche Ansätze, Fragen, Unsicherheiten oder Missverständnisse. Ein professioneller Umgang nimmt Beiträge ernst und nutzt sie für den weiteren Lernprozess.",
    rightTitle: "Was lernst du in diesem Modul?",
    rightText: "Du lernst, wie du Beiträge aufgreifst, präzisierst, weiterführst und auch fehlerhafte Aussagen konstruktiv in das Gespräch integrierst."
  },
  {
    cardTitle: "Ergebnissicherung",
    bannerTitle: "Sicherung der (Zwischen)Ergebnisse",
    leftTitle: "Was bedeutet Sicherung der (Zwischen)Ergebnisse?",
    leftText: "Ergebnissicherung macht sichtbar, was im Gespräch erarbeitet wurde. Zwischenstände helfen, Orientierung zu behalten und Ergebnisse schrittweise aufzubauen.",
    rightTitle: "Was lernst du in diesem Modul?",
    rightText: "Du lernst, wie du zentrale Aussagen bündelst, Zwischenergebnisse festhältst und Gesprächsergebnisse so sicherst, dass sie für die weitere Arbeit nutzbar bleiben."
  },
  {
    cardTitle: "Gesprächsabschluss",
    bannerTitle: "Beenden eines Gesprächs",
    leftTitle: "Was bedeutet Beenden eines Gesprächs?",
    leftText: "Ein Gesprächsabschluss fasst Wesentliches zusammen, klärt offene Punkte und schafft einen bewussten Übergang zum nächsten Schritt oder zur weiteren Arbeit.",
    rightTitle: "Was lernst du in diesem Modul?",
    rightText: "Du lernst, wie du Gespräche klar abschließt, Ergebnisse würdigst, nächste Schritte formulierst und einen runden Abschluss für alle Beteiligten herstellst."
  }
];

let activeIndex = 0;
let isAnimating = false;

const track = document.getElementById("cardsTrack");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const bannerTitle = document.getElementById("moduleTitle");
const leftTitle = document.getElementById("leftTitle");
const leftText = document.getElementById("leftText");
const rightTitle = document.getElementById("rightTitle");
const rightText = document.getElementById("rightText");
const banner = document.getElementById("banner");
const contentGrid = document.querySelector(".content-grid");

function createCards() {
  topics.forEach((topic, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "topic-card";
    card.textContent = topic.cardTitle;
    card.dataset.index = index;
    card.setAttribute("aria-label", `Zu ${topic.cardTitle} wechseln`);
    card.addEventListener("click", () => {
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    });
    track.appendChild(card);
  });
}

function getPositionClass(offset) {
  if (offset === 0) return "is-active";
  if (offset === -1) return "is-side is-left";
  if (offset === 1) return "is-side is-right";
  if (offset < -1) return "is-hidden-left is-far";
  return "is-hidden-right is-far";
}

function renderCards() {
  const cards = [...document.querySelectorAll(".topic-card")];
  cards.forEach((card, index) => {
    const offset = index - activeIndex;
    card.className = `topic-card ${getPositionClass(offset)}`;
    card.tabIndex = Math.abs(offset) <= 1 ? 0 : -1;
    card.setAttribute("aria-current", offset === 0 ? "true" : "false");
  });

  prevButton.disabled = activeIndex === 0 || isAnimating;
  nextButton.disabled = activeIndex === topics.length - 1 || isAnimating;
}

function updateContent() {
  const topic = topics[activeIndex];

  bannerTitle.textContent = topic.bannerTitle;
  leftTitle.textContent = topic.leftTitle;
  leftText.textContent = topic.leftText;
  rightTitle.textContent = topic.rightTitle;
  rightText.textContent = topic.rightText;

  banner.classList.remove("fade-change");
  contentGrid.classList.remove("fade-change");

  requestAnimationFrame(() => {
    banner.classList.add("fade-change");
    contentGrid.classList.add("fade-change");
  });
}

function setActiveIndex(newIndex) {
  if (isAnimating || newIndex < 0 || newIndex >= topics.length || newIndex === activeIndex) {
    return;
  }

  isAnimating = true;
  activeIndex = newIndex;
  renderCards();
  updateContent();

  window.setTimeout(() => {
    isAnimating = false;
    renderCards();
  }, 430);
}

prevButton.addEventListener("click", () => setActiveIndex(activeIndex - 1));
nextButton.addEventListener("click", () => setActiveIndex(activeIndex + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") setActiveIndex(activeIndex - 1);
  if (event.key === "ArrowRight") setActiveIndex(activeIndex + 1);
});

createCards();
renderCards();
updateContent();
