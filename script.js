const topics = [
  {
    cardTitle: "Hauptseite",
    bannerTitle: "Hauptseite",
    leftTitle: "Willkommen auf der Hauptseite",
    leftText: "Diese Hauptseite dient als Einstieg in die Module zur Gesprächsführung. Sie zeigt die einzelnen Bausteine als lineare Abfolge: von der Vorbereitung der Gesprächsumgebung über die Eröffnung und Steuerung des Gesprächs bis hin zur Sicherung der Ergebnisse und dem Abschluss. Über die Kacheln im oberen Bereich kannst du die Module nacheinander durchgehen. Der jeweils ausgewählte Bereich wird unten mit einer kurzen fachlichen Einordnung und konkreten Lernzielen angezeigt.",
    rightTitle: "Was findest du hier?",
    rightText: "Du erhältst eine strukturierte Übersicht über zentrale Schritte professioneller Gesprächsführung. Die Seite kann als Startpunkt genutzt werden, um Inhalte zu ordnen, Lernstände zu vergleichen oder gezielt einzelne Gesprächsphasen zu wiederholen. Besonders wichtig ist dabei der Zusammenhang zwischen Planung, Durchführung und Reflexion: Ein gutes Gespräch entsteht nicht nur im Moment selbst, sondern durch bewusst vorbereitete Bedingungen und klare Gesprächsführung.",
    moduleUrl: null
  },
  {
    cardTitle: "Gesprächsumgebung",
    bannerTitle: "Vorbereitung der Gesprächsumgebung",
    leftTitle: "Was bedeutet Vorbereitung der Gesprächsumgebung?",
    leftText: "Die Vorbereitung der Gesprächsumgebung beschreibt alle Bedingungen, die vor einem Gespräch geschaffen werden, damit Beteiligte konzentriert, sicher und respektvoll miteinander sprechen können. Dazu gehören ein passender Raum, eine klare Sitzordnung, gut sichtbare Materialien, eine störungsarme Atmosphäre und transparente Erwartungen an das Gespräch. Auch scheinbar kleine Details wie Blickkontakt, Abstand, Beleuchtung oder die Verfügbarkeit von Notizmaterial beeinflussen, ob ein Gespräch ruhig und zielgerichtet verlaufen kann.",
    rightTitle: "Was lernst du in diesem Modul?",
    rightText: "Du lernst, Gesprächssituationen nicht dem Zufall zu überlassen, sondern bewusst vorzubereiten. Dazu gehört, räumliche und organisatorische Rahmenbedingungen zu prüfen, Regeln sichtbar zu machen und Gesprächsanlässe so zu strukturieren, dass alle Beteiligten Orientierung erhalten. Außerdem lernst du einzuschätzen, welche Umgebung eher öffnend, unterstützend oder hemmend wirkt und wie du durch kleine Anpassungen mehr Beteiligung und Konzentration ermöglichen kannst.",
    moduleUrl: "https://moodle.uni-siegen.de/mod/hvp/view.php?id=1492494"
  },
  {
    cardTitle: "Gesprächseröffnung",
    bannerTitle: "Gesprächseröffnung",
    leftTitle: "Was bedeutet Gesprächseröffnung?",
    leftText: "Die Gesprächseröffnung ist der bewusste Einstieg in ein Gespräch. Sie klärt, warum das Gespräch stattfindet, welches Ziel verfolgt wird und wie die nächsten Schritte aussehen. Eine gute Eröffnung schafft Sicherheit, weil sie den Beteiligten Orientierung gibt und deutlich macht, welche Rolle sie im Gespräch einnehmen. Gleichzeitig entscheidet sich hier oft, ob eine offene Gesprächsatmosphäre entsteht oder ob Unsicherheit, Zurückhaltung und Missverständnisse dominieren.",
    rightTitle: "Was lernst du in diesem Modul?",
    rightText: "Du lernst, Gespräche klar, wertschätzend und strukturiert zu beginnen. Dazu gehört, den Anlass knapp zu benennen, ein gemeinsames Ziel zu formulieren, Vorwissen oder Erwartungen zu aktivieren und einen nachvollziehbaren Gesprächsrahmen herzustellen. Außerdem übst du, Einstiegsfragen so zu stellen, dass sie Beteiligung ermöglichen und nicht direkt einengen. Ziel ist ein Gesprächsbeginn, der Orientierung schafft und dennoch Raum für eigene Beiträge lässt.",
    moduleUrl: "https://moodle.uni-siegen.de/mod/hvp/view.php?id=1494695"
  },
  {
    cardTitle: "Gesprächsbeiträge",
    bannerTitle: "Anregung von Gesprächsbeiträgen",
    leftTitle: "Was bedeutet Anregung von Gesprächsbeiträgen?",
    leftText: "Die Anregung von Gesprächsbeiträgen umfasst alle Impulse, durch die Beteiligte zum Denken, Formulieren und Weiterführen eigener Ideen angeregt werden. Beiträge entstehen nicht automatisch, sondern hängen stark davon ab, welche Fragen gestellt werden, wie viel Wartezeit gegeben wird und wie wertschätzend auf erste Antworten reagiert wird. Offene Fragen, kurze Denkpausen, konkrete Beispiele oder gezielte Anschlussfragen können helfen, unterschiedliche Perspektiven sichtbar zu machen.",
    rightTitle: "Was lernst du in diesem Modul?",
    rightText: "Du lernst, Beteiligung aktiv zu fördern, ohne das Gespräch zu stark zu lenken. Dabei geht es um geeignete Frageformen, produktive Impulse, den Umgang mit Stille und die bewusste Verteilung von Redeanteilen. Außerdem lernst du, Beiträge nicht nur abzufragen, sondern weiterzuentwickeln: durch Nachfragen, Zusammenfassen, Gegenüberstellen und Verbinden. So kann aus einzelnen Antworten ein gemeinsamer Gesprächsprozess entstehen.",
    moduleUrl: "https://moodle.uni-siegen.de/mod/hvp/view.php?id=1494696"
  },
  {
    cardTitle: "Schülerbeiträge",
    bannerTitle: "Umgang mit Schülerbeiträgen",
    leftTitle: "Was bedeutet Umgang mit Schülerbeiträgen?",
    leftText: "Der Umgang mit Schülerbeiträgen beschreibt, wie Äußerungen aufgenommen, eingeordnet und für das weitere Gespräch genutzt werden. Schülerbeiträge können fachlich richtig, teilweise richtig, unklar, überraschend oder fehlerhaft sein. Entscheidend ist, dass sie nicht vorschnell bewertet oder übergangen werden, sondern als Ausgangspunkt für weiteres Denken dienen. Ein professioneller Umgang macht sichtbar, was an einem Beitrag bereits tragfähig ist und wo Präzisierung oder Weiterarbeit nötig wird.",
    rightTitle: "Was lernst du in diesem Modul?",
    rightText: "Du lernst, Beiträge aufmerksam aufzunehmen, sprachlich zu klären und fachlich weiterzuführen. Dazu gehören Techniken wie Paraphrasieren, Nachfragen, Spiegeln, Strukturieren und behutsames Korrigieren. Du lernst außerdem, auch fehlerhafte oder unfertige Beiträge konstruktiv einzubinden, damit Lernende nicht bloß korrigiert werden, sondern ihre Gedanken weiterentwickeln können. Ziel ist ein Gespräch, in dem Beiträge ernst genommen und produktiv genutzt werden.",
    moduleUrl: "https://moodle.uni-siegen.de/mod/hvp/view.php?id=1494699"
  },
  {
    cardTitle: "Ergebnissicherung",
    bannerTitle: "Sicherung der (Zwischen)Ergebnisse",
    leftTitle: "Was bedeutet Sicherung der (Zwischen)Ergebnisse?",
    leftText: "Die Sicherung von Zwischen- und Endergebnissen macht sichtbar, was im Verlauf eines Gesprächs erarbeitet wurde. Ohne Sicherung können wichtige Gedanken verloren gehen oder unverbunden nebeneinanderstehen. Zwischenergebnisse helfen, Orientierung zu behalten, den aktuellen Stand zu prüfen und neue Gesprächsschritte darauf aufzubauen. Dabei kann Sicherung mündlich, schriftlich, visuell oder digital erfolgen, etwa durch Stichpunkte, Tafelbilder, Cluster, kurze Zusammenfassungen oder gemeinsame Formulierungen.",
    rightTitle: "Was lernst du in diesem Modul?",
    rightText: "Du lernst, Gesprächsergebnisse gezielt zu bündeln und verständlich festzuhalten. Dabei übst du, Wesentliches von Nebensächlichem zu unterscheiden, Zwischenstände sprachlich präzise zu formulieren und Ergebnisse so zu sichern, dass sie für die weitere Arbeit nutzbar bleiben. Außerdem lernst du, Sicherung nicht nur am Ende einzusetzen, sondern auch während des Gesprächs als Orientierungshilfe zu verwenden.",
    moduleUrl: "https://moodle.uni-siegen.de/mod/hvp/view.php?id=1494697"
  },
  {
    cardTitle: "Gesprächsabschluss",
    bannerTitle: "Beenden eines Gesprächs",
    leftTitle: "Was bedeutet Beenden eines Gesprächs?",
    leftText: "Das Beenden eines Gesprächs ist mehr als ein formaler Schlusspunkt. Ein guter Abschluss fasst zentrale Ergebnisse zusammen, klärt offene Fragen und schafft einen Übergang zur weiteren Arbeit. Dadurch erhalten die Beteiligten das Gefühl, dass das Gespräch zu einem nachvollziehbaren Ergebnis geführt hat. Ein fehlender oder zu abrupter Abschluss kann dagegen dazu führen, dass Ergebnisse unklar bleiben oder die Bedeutung des Gesprächs nicht deutlich wird.",
    rightTitle: "Was lernst du in diesem Modul?",
    rightText: "Du lernst, Gespräche bewusst abzuschließen, Ergebnisse zu würdigen und nächste Schritte klar zu benennen. Dazu gehört, wichtige Punkte zusammenzufassen, Verantwortlichkeiten oder Anschlussaufgaben zu klären und Raum für letzte Rückfragen zu geben. Außerdem lernst du, den Abschluss passend zur Gesprächssituation zu gestalten: kurz und bündig, reflektierend, motivierend oder mit einem klaren Arbeitsauftrag für die nächste Phase.",
    moduleUrl: "https://moodle.uni-siegen.de/mod/hvp/view.php?id=1494698"
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
const moduleLink = document.querySelector(".module-link-card");
const blindModeToggle = document.getElementById("blindModeToggle");
const blindModeHint = document.getElementById("blindModeHint");
let blindModeActive = false;
let activeSpeechKey = null;

function createCards() {
  topics.forEach((topic, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "topic-card blind-readable";
    card.textContent = topic.cardTitle;
    card.dataset.index = index;
    card.dataset.blindTarget = "topic-card";
    card.setAttribute("aria-label", `Zu ${topic.cardTitle} wechseln`);
    card.addEventListener("click", (event) => {
      if (blindModeActive) {
        event.preventDefault();
        event.stopPropagation();
        speakRawText(topic.cardTitle, `blind-card-${index}`, card);
        return;
      }

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
    card.className = `topic-card blind-readable ${getPositionClass(offset)}`;
    card.tabIndex = Math.abs(offset) <= 1 ? 0 : -1;
    card.setAttribute("aria-current", offset === 0 ? "true" : "false");
  });

  prevButton.disabled = activeIndex === 0 || isAnimating;
  nextButton.disabled = activeIndex === topics.length - 1 || isAnimating;
}

function setBannerTitleSize(title) {
  const length = title.length;
  let size = "clamp(2.1rem, 4.8vw, 4.75rem)";

  if (length > 38) {
    size = "clamp(1.45rem, 3.15vw, 3.35rem)";
  } else if (length > 30) {
    size = "clamp(1.65rem, 3.6vw, 3.8rem)";
  } else if (length > 23) {
    size = "clamp(1.85rem, 4.05vw, 4.25rem)";
  }

  document.documentElement.style.setProperty("--banner-title-size", size);
}

function updateContent(direction = "right") {
  const topic = topics[activeIndex];

  bannerTitle.textContent = topic.bannerTitle;
  leftTitle.textContent = topic.leftTitle;
  leftText.textContent = topic.leftText;
  rightTitle.textContent = topic.rightTitle;
  rightText.textContent = topic.rightText;
  setBannerTitleSize(topic.bannerTitle);

  if (topic.moduleUrl) {
    moduleLink.href = topic.moduleUrl;
    moduleLink.hidden = false;
    moduleLink.style.display = "flex";
    moduleLink.setAttribute("aria-hidden", "false");
  } else {
    moduleLink.hidden = true;
    moduleLink.style.display = "none";
    moduleLink.setAttribute("aria-hidden", "true");
    moduleLink.removeAttribute("href");
  }

  const animationClass = direction === "left" ? "content-slide-left" : "content-slide-right";
  banner.classList.remove("content-slide-left", "content-slide-right");
  contentGrid.classList.remove("content-slide-left", "content-slide-right");

  requestAnimationFrame(() => {
    banner.classList.add(animationClass);
    contentGrid.classList.add(animationClass);
  });
}

function setActiveIndex(newIndex) {
  if (isAnimating || newIndex < 0 || newIndex >= topics.length || newIndex === activeIndex) {
    return;
  }

  const direction = newIndex > activeIndex ? "right" : "left";
  stopSpeech();

  isAnimating = true;
  activeIndex = newIndex;
  renderCards();
  updateContent(direction);

  window.setTimeout(() => {
    isAnimating = false;
    renderCards();
  }, 700);
}

prevButton.addEventListener("click", () => setActiveIndex(activeIndex - 1));
nextButton.addEventListener("click", () => setActiveIndex(activeIndex + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") setActiveIndex(activeIndex - 1);
  if (event.key === "ArrowRight") setActiveIndex(activeIndex + 1);
});


function getSpeakText(target, element = null) {
  if (target === "banner") {
    return bannerTitle.textContent.trim();
  }

  if (target === "topic-card") {
    const index = Number(element?.dataset.index ?? activeIndex);
    return topics[index]?.cardTitle || "Thema";
  }

  if (target === "module-link") {
    return "Hier geht es zum Modul";
  }

  if (target === "left") {
    return `${leftTitle.textContent}. ${leftText.textContent}`;
  }

  return `${rightTitle.textContent}. ${rightText.textContent}`;
}

function supportsSpeech() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function getBlindReadables() {
  return [...document.querySelectorAll(".blind-readable")];
}

function clearSpeakingState() {
  getBlindReadables().forEach((element) => element.classList.remove("is-speaking"));
  activeSpeechKey = null;
}

function stopSpeech() {
  if (supportsSpeech()) {
    window.speechSynthesis.cancel();
  }
  clearSpeakingState();
}

function speakRawText(text, key, visualElement = null) {
  if (!supportsSpeech()) {
    if (blindModeHint) {
      blindModeHint.textContent = "Vorlesen wird von diesem Browser nicht unterstützt.";
      blindModeHint.hidden = false;
    }
    return;
  }

  const cleanedText = (text || "").trim();
  if (!cleanedText) return;

  if (activeSpeechKey === key && window.speechSynthesis.speaking) {
    stopSpeech();
    return;
  }

  stopSpeech();
  activeSpeechKey = key;

  const utterance = new SpeechSynthesisUtterance(cleanedText);
  utterance.lang = "de-DE";
  utterance.rate = 0.95;
  utterance.pitch = 1;

  if (visualElement) {
    visualElement.classList.add("is-speaking");
  }

  utterance.onend = clearSpeakingState;
  utterance.onerror = clearSpeakingState;

  window.speechSynthesis.speak(utterance);
}


function setBlindMode(enabled) {
  blindModeActive = enabled;
  document.body.classList.toggle("blind-mode-active", blindModeActive);

  if (blindModeToggle) {
    blindModeToggle.classList.toggle("is-active", blindModeActive);
    blindModeToggle.setAttribute("aria-pressed", String(blindModeActive));
    blindModeToggle.textContent = blindModeActive ? "Blindenmodus: an" : "Blindenmodus: aus";
  }

  if (blindModeHint) {
    blindModeHint.hidden = !blindModeActive;
    blindModeHint.textContent = "Bitte auf Schaltfläche drücken, um diese vorlesen zu lassen.";
  }

  stopSpeech();

  if (blindModeActive) {
    speakRawText("Bitte auf Schaltfläche drücken, um diese vorlesen zu lassen.", "blind-instruction", blindModeToggle);
  }
}

function speakBlindElement(element) {
  if (!blindModeActive) return;
  const target = element.dataset.blindTarget;
  const text = getSpeakText(target, element);
  const indexPart = target === "topic-card" ? element.dataset.index : activeIndex;
  speakRawText(text, `blind-${target}-${indexPart}`, element);
}


document.addEventListener("click", (event) => {
  if (!blindModeActive) return;
  const element = event.target.closest(".blind-readable");
  if (!element) return;
  event.preventDefault();
  event.stopPropagation();
  speakBlindElement(element);
});

document.addEventListener("keydown", (event) => {
  if (!blindModeActive) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  const element = event.target.closest(".blind-readable");
  if (!element) return;
  event.preventDefault();
  speakBlindElement(element);
});

/* old handlers removed */

if (blindModeToggle) {
  blindModeToggle.addEventListener("click", () => setBlindMode(!blindModeActive));
}

if (!supportsSpeech() && blindModeToggle) {
  blindModeToggle.disabled = true;
  blindModeToggle.title = "Blindenmodus mit Vorlesen wird von diesem Browser nicht unterstützt.";
}

createCards();
renderCards();
updateContent();
if (moduleLink) {
  moduleLink.addEventListener("click", (event) => {
    if (moduleLink.hidden || !moduleLink.href) return;

    if (blindModeActive) {
      event.preventDefault();
      event.stopPropagation();
      speakBlindElement(moduleLink);
      return;
    }

    event.preventDefault();
    window.top.location.href = moduleLink.href;
  });
}

