window.addEventListener("load", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
});

const pageData = {
  dekomposition: {
    switcherLabel: "Bausteine der Dekomposition",
    breadcrumbBlock: "Dekomposition",
    startStepLabel: "Hauptseite",
    topics: [
      {
        cardTitle: "Hauptseite",
        bannerTitle: "Dekomposition",
        subtitle: "Orientierung im Kursblock Dekomposition",
        leftLabel: "Einordnung",
        leftTitle: "Was ist eine Dekomposition?",
        leftText: "Dekomposition bedeutet, einen komplexen Prozess in überschaubare einzelne Bestandteile zu zerlegen. Bezogen auf Unterrichtsgespräche heißt das: Gesprächsführung wird nicht nur als Ganzes betrachtet, sondern in klar benennbare Bausteine aufgeteilt. Dadurch wird sichtbar, welche Schritte vor, während und nach einem Gespräch wichtig sind und an welchen Stellen professionelles Handeln bewusst gestaltet werden kann.",
        rightLabel: "Lernziele",
        rightTitle: "Was findest du hier?",
        rightPoints: [
          "Gesprächsumgebung",
          "Gesprächseröffnung",
          "Gesprächsbeiträge",
          "Schülerbeiträge",
          "Ergebnissicherung",
          "Gesprächsabschluss"
        ],
        moduleUrl: null
      },
      {
        cardTitle: "Gesprächsumgebung",
        bannerTitle: "Vorbereitung der Gesprächsumgebung",
        subtitle: "Bedingungen schaffen, damit Gespräche konzentriert und lernförderlich stattfinden können.",
        leftLabel: "Einordnung",
        leftTitle: "Was bedeutet Vorbereitung der Gesprächsumgebung?",
        leftText: "Die Vorbereitung der Gesprächsumgebung beschreibt alle Bedingungen, die vor einem Gespräch geschaffen werden, damit Beteiligte konzentriert, sicher und respektvoll miteinander sprechen können. Dazu gehören ein passender Raum, eine klare Sitzordnung, gut sichtbare Materialien, eine störungsarme Atmosphäre und transparente Erwartungen an das Gespräch. Auch scheinbar kleine Details wie Blickkontakt, Abstand, Beleuchtung oder die Verfügbarkeit von Arbeitsmaterialien beeinflussen, ob ein Gespräch ruhig, offen und zielgerichtet verlaufen kann.",
        rightLabel: "Lernziele",
        rightTitle: "Was lernst du in diesem Modul?",
        rightPoints: [
          "Du beschreibst, welche äußeren Bedingungen Unterrichtsgespräche unterstützen oder erschweren.",
          "Du planst Raum, Material, Sitzordnung und Gesprächsrahmen bewusster.",
          "Du erkennst, wie Erwartungen, Rollen und Atmosphäre die Beteiligung beeinflussen.",
          "Du entwickelst Kriterien für eine lernförderliche Gesprächsumgebung."
        ],
        moduleUrl: "https://moodle.uni-siegen.de/mod/hvp/view.php?id=1492494"
      },
      {
        cardTitle: "Gesprächseröffnung",
        bannerTitle: "Gesprächseröffnung",
        subtitle: "Einen Gesprächsanlass klären und die Beteiligten in einen gemeinsamen Denkprozess führen.",
        leftLabel: "Einordnung",
        leftTitle: "Was bedeutet Gesprächseröffnung?",
        leftText: "Die Gesprächseröffnung legt fest, wie ein Unterrichtsgespräch beginnt und welche Orientierung die Beteiligten zu Beginn erhalten. Eine klare Eröffnung macht deutlich, worum es geht, warum das Gespräch relevant ist und welche Form der Beteiligung erwartet wird. Sie kann Interesse wecken, Vorwissen aktivieren, eine Fragestellung aufwerfen oder einen gemeinsamen Fokus herstellen. Eine unklare Eröffnung führt dagegen häufig dazu, dass Lernende nicht wissen, worauf sie achten sollen oder welche Art von Beitrag erwartet wird.",
        rightLabel: "Lernziele",
        rightTitle: "Was lernst du in diesem Modul?",
        rightPoints: [
          "Du formulierst Gesprächsanlässe klar und verständlich.",
          "Du aktivierst Vorwissen, ohne die Gesprächsrichtung zu stark vorzugeben.",
          "Du erkennst, wie Eröffnungsfragen den weiteren Gesprächsverlauf beeinflussen.",
          "Du entwickelst passende Einstiege für unterschiedliche Gesprächssituationen."
        ],
        moduleUrl: "https://moodle.uni-siegen.de/mod/hvp/view.php?id=1494695"
      },
      {
        cardTitle: "Gesprächsbeiträge",
        bannerTitle: "Anregung von Gesprächsbeiträgen",
        subtitle: "Beiträge ermöglichen, vertiefen und zu einem gemeinsamen Gesprächsprozess verbinden.",
        leftLabel: "Einordnung",
        leftTitle: "Was bedeutet Anregung von Gesprächsbeiträgen?",
        leftText: "Die Anregung von Gesprächsbeiträgen umfasst alle Impulse, durch die Lernende zum Denken, Sprechen und Weiterführen eines Gesprächs eingeladen werden. Dazu zählen offene Fragen, Denkaufträge, kurze Schreibphasen, Partneraustausch, gezieltes Nachfragen oder das Aufgreifen vorhandener Ideen. Entscheidend ist, dass Beiträge nicht nur abgefragt werden. Gute Impulse ermöglichen unterschiedliche Zugänge, schaffen Denkzeit und eröffnen Raum für Begründungen, Perspektiven und fachliche Weiterentwicklung.",
        rightLabel: "Lernziele",
        rightTitle: "Was lernst du in diesem Modul?",
        rightPoints: [
          "Du unterscheidest geschlossene Abfragen von gesprächsanregenden Impulsen.",
          "Du nutzt Fragen, Denkzeit und Nachfragen zur Aktivierung von Lernenden.",
          "Du förderst unterschiedliche Redeanteile und Beteiligungsformen.",
          "Du verbindest einzelne Beiträge zu einem nachvollziehbaren Gesprächsverlauf."
        ],
        moduleUrl: "https://moodle.uni-siegen.de/mod/hvp/view.php?id=1494696"
      },
      {
        cardTitle: "Schülerbeiträge",
        bannerTitle: "Umgang mit Schülerbeiträgen",
        subtitle: "Äußerungen aufnehmen, würdigen, klären und für den weiteren Lernprozess nutzen.",
        leftLabel: "Einordnung",
        leftTitle: "Was bedeutet Umgang mit Schülerbeiträgen?",
        leftText: "Der Umgang mit Schülerbeiträgen beschreibt, wie Äußerungen aufgenommen, eingeordnet und für das weitere Gespräch genutzt werden. Schüler*innenbeiträge können fachlich richtig, teilweise richtig, unklar, überraschend oder fehlerhaft sein. Entscheidend ist, dass sie nicht vorschnell bewertet oder übergangen werden, sondern als Ausgangspunkt für weiteres Denken dienen. Ein professioneller Umgang macht sichtbar, was an einem Beitrag bereits tragfähig ist und wo Präzisierung oder Weiterarbeit nötig wird.",
        rightLabel: "Lernziele",
        rightTitle: "Was lernst du in diesem Modul?",
        rightPoints: [
          "Du nimmst Beiträge aufmerksam auf und reagierst fachlich sowie wertschätzend.",
          "Du nutzt Paraphrasieren, Nachfragen und Strukturieren zur Klärung von Beiträgen.",
          "Du bindest auch unfertige oder fehlerhafte Beiträge konstruktiv ein.",
          "Du entwickelst Gesprächsreaktionen, die Denken sichtbar machen und weiterführen."
        ],
        moduleUrl: "https://moodle.uni-siegen.de/mod/hvp/view.php?id=1494699"
      },
      {
        cardTitle: "Ergebnissicherung",
        bannerTitle: "Sicherung der (Zwischen)Ergebnisse",
        subtitle: "Zwischenstände und Ergebnisse sichtbar machen, bündeln und für die Weiterarbeit sichern.",
        leftLabel: "Einordnung",
        leftTitle: "Was bedeutet Sicherung der (Zwischen)Ergebnisse?",
        leftText: "Die Sicherung von Zwischen- und Endergebnissen macht sichtbar, was im Verlauf eines Gesprächs erarbeitet wurde. Ohne Sicherung können wichtige Gedanken verloren gehen oder unverbunden nebeneinanderstehen. Zwischenergebnisse helfen, Orientierung zu behalten, den aktuellen Stand zu prüfen und neue Gesprächsschritte darauf aufzubauen. Dabei kann Sicherung mündlich, schriftlich, visuell oder digital erfolgen, etwa durch Stichpunkte, Tafelbilder, Cluster, kurze Zusammenfassungen oder gemeinsame Formulierungen.",
        rightLabel: "Lernziele",
        rightTitle: "Was lernst du in diesem Modul?",
        rightPoints: [
          "Du bündelst Gesprächsergebnisse verständlich und zielgerichtet.",
          "Du unterscheidest Wesentliches von Nebensächlichem.",
          "Du nutzt Zwischensicherungen als Orientierung während des Gesprächs.",
          "Du hältst Ergebnisse so fest, dass sie für Anschlussaufgaben nutzbar bleiben."
        ],
        moduleUrl: "https://moodle.uni-siegen.de/mod/hvp/view.php?id=1494697"
      },
      {
        cardTitle: "Gesprächsabschluss",
        bannerTitle: "Beenden eines Gesprächs",
        subtitle: "Gespräche abrunden, Ergebnisse klären und nächste Schritte transparent machen.",
        leftLabel: "Einordnung",
        leftTitle: "Was bedeutet Beenden eines Gesprächs?",
        leftText: "Das Beenden eines Gesprächs ist mehr als ein formaler Schlusspunkt. Ein guter Abschluss fasst zentrale Ergebnisse zusammen, klärt offene Fragen und schafft einen Übergang zur weiteren Arbeit. Dadurch erhalten die Beteiligten das Gefühl, dass das Gespräch zu einem nachvollziehbaren Ergebnis geführt hat. Ein fehlender oder zu abrupter Abschluss kann dagegen dazu führen, dass Ergebnisse unklar bleiben oder die Bedeutung des Gesprächs nicht deutlich wird.",
        rightLabel: "Lernziele",
        rightTitle: "Was lernst du in diesem Modul?",
        rightPoints: [
          "Du schließt Gespräche bewusst und nachvollziehbar ab.",
          "Du fasst zentrale Ergebnisse knapp und verständlich zusammen.",
          "Du klärst offene Fragen, Anschlussaufgaben und nächste Schritte.",
          "Du gestaltest Abschlüsse passend zur jeweiligen Gesprächssituation."
        ],
        moduleUrl: "https://moodle.uni-siegen.de/mod/hvp/view.php?id=1494698"
      }
    ]
  },
  wahrnehmung: {
    switcherLabel: "Bausteine der Wahrnehmung",
    breadcrumbBlock: "Wahrnehmung",
    startStepLabel: "Baustein 1 von 6",
    topics: Array.from({ length: 6 }, (_, i) => ({
      cardTitle: `Thema ${i + 1}`,
      bannerTitle: `Titel ${i + 1}`,
      subtitle: `Untertitel ${i + 1}`,
      leftLabel: "Einordnung",
      leftTitle: `Titel ${i + 1}`,
      leftText: `Text ${i + 1}`,
      rightLabel: "Lernziele",
      rightTitle: `Titel ${i + 1}`,
      rightPoints: [`Text ${i + 1}`, `Text ${i + 1}`, `Text ${i + 1}`],
      moduleUrl: null
    }))
  },
  approximation: {
    switcherLabel: "Bausteine der Approximation",
    breadcrumbBlock: "Approximation",
    startStepLabel: "Baustein 1 von 6",
    topics: Array.from({ length: 6 }, (_, i) => ({
      cardTitle: `Thema ${i + 1}`,
      bannerTitle: `Titel ${i + 1}`,
      subtitle: `Untertitel ${i + 1}`,
      leftLabel: "Einordnung",
      leftTitle: `Titel ${i + 1}`,
      leftText: `Text ${i + 1}`,
      rightLabel: "Lernziele",
      rightTitle: `Titel ${i + 1}`,
      rightPoints: [`Text ${i + 1}`, `Text ${i + 1}`, `Text ${i + 1}`],
      moduleUrl: null
    }))
  }
};

const pageType = document.body?.dataset.page || "dekomposition";
const currentConfig = pageData[pageType] || pageData.dekomposition;
const topics = currentConfig.topics;

let activeIndex = getInitialTopicIndex();
let isAnimating = false;
let blindModeActive = false;
let activeSpeechKey = null;
let activeSpeechElement = null;
let speechRunId = 0;

const track = document.getElementById("cardsTrack");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const bannerTitle = document.getElementById("moduleTitle");
const moduleSubtitle = document.getElementById("moduleSubtitle");
const moduleStep = document.getElementById("moduleStep");
const breadcrumbCurrent = document.getElementById("breadcrumbCurrent");
const leftLabel = document.getElementById("leftLabel");
const rightLabel = document.getElementById("rightLabel");
const leftTitle = document.getElementById("leftTitle");
const leftText = document.getElementById("leftText");
const rightTitle = document.getElementById("rightTitle");
const rightList = document.getElementById("rightList");
const banner = document.getElementById("banner");
const contentGrid = document.querySelector(".content-grid");
const moduleLink = document.querySelector(".module-link-card");
const blindModeToggle = document.getElementById("blindModeToggle");
const blindModeHint = document.getElementById("blindModeHint");
const switcherLabel = document.querySelector(".switcher-label");
const topicSwitcher = document.querySelector(".topic-switcher");
const breadcrumbBlock = document.getElementById("breadcrumbBlock");

function hasVorlesemodusParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get("vorlesemodus") === "1" || params.get("readmode") === "1" || params.get("blindmode") === "1";
}

function syncVorlesemodusParam(enabled) {
  const url = new URL(window.location.href);
  if (enabled) {
    url.searchParams.set("vorlesemodus", "1");
    url.searchParams.delete("readmode");
    url.searchParams.delete("blindmode");
  } else {
    url.searchParams.delete("vorlesemodus");
    url.searchParams.delete("readmode");
    url.searchParams.delete("blindmode");
  }
  const nextUrl = `${url.pathname}${url.search}${url.hash || ""}`;
  window.history.replaceState({}, "", nextUrl);
}

function linkWithVorlesemodus(href) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  const isAbsoluteWebUrl = /^https?:\/\//i.test(href);
  const url = new URL(href, window.location.href);
  if (isAbsoluteWebUrl && url.origin !== window.location.origin) return href;
  if (blindModeActive) url.searchParams.set("vorlesemodus", "1");
  return `${url.pathname}${url.search}${url.hash || ""}`;
}

function updateInternalLinksForVorlesemodus() {
  const links = [...document.querySelectorAll("a[href]")];
  links.forEach((link) => {
    if (!link.dataset.originalHref) link.dataset.originalHref = link.getAttribute("href");
    const originalHref = link.dataset.originalHref;
    if (!originalHref || originalHref.startsWith("http") || originalHref.startsWith("mailto:") || originalHref.startsWith("tel:")) return;
    link.setAttribute("href", blindModeActive ? linkWithVorlesemodus(originalHref) : originalHref);
  });
}

function getInitialTopicIndex() {
  const params = new URLSearchParams(window.location.search);
  const raw = Number(params.get("topic"));
  if (Number.isFinite(raw) && raw >= 1) {
    return Math.max(0, Math.min(topics.length - 1, raw - 1));
  }
  return 0;
}

function syncTopicParam() {
  const url = new URL(window.location.href);
  if (activeIndex <= 0) {
    url.searchParams.delete("topic");
  } else {
    url.searchParams.set("topic", String(activeIndex + 1));
  }
  const nextUrl = `${url.pathname}${url.search}${url.hash || ""}`;
  window.history.replaceState({}, "", nextUrl);
}

if (switcherLabel) switcherLabel.textContent = currentConfig.switcherLabel;
if (topicSwitcher) topicSwitcher.setAttribute("aria-label", `Themennavigation der ${currentConfig.breadcrumbBlock}`);
if (breadcrumbBlock) breadcrumbBlock.textContent = currentConfig.breadcrumbBlock;

function createCards() {
  if (!track) return;

  topics.forEach((topic, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "topic-card blind-readable";
    card.textContent = topic.cardTitle;
    card.dataset.index = index;
    card.dataset.blindTarget = "topic-card";
    card.setAttribute("aria-label", `Zu ${topic.cardTitle} wechseln`);
    card.addEventListener("click", () => {
      if (blindModeActive) return;
      if (index !== activeIndex) setActiveIndex(index);
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

  if (prevButton) prevButton.disabled = activeIndex === 0 || isAnimating;
  if (nextButton) nextButton.disabled = activeIndex === topics.length - 1 || isAnimating;
}

function setBannerTitleSize(title) {
  const length = title.length;
  let size = "clamp(2.05rem, 4.55vw, 4.5rem)";
  if (length > 38) size = "clamp(1.42rem, 3.05vw, 3.18rem)";
  else if (length > 30) size = "clamp(1.58rem, 3.45vw, 3.55rem)";
  else if (length > 23) size = "clamp(1.78rem, 3.85vw, 3.95rem)";
  document.documentElement.style.setProperty("--banner-title-size", size);
}

function renderLearningPoints(points) {
  if (!rightList) return;
  rightList.innerHTML = "";
  points.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    rightList.appendChild(li);
  });
}

function updateContent(direction = "right") {
  const topic = topics[activeIndex];
  if (!topic || !bannerTitle) return;

  bannerTitle.textContent = topic.bannerTitle;
  moduleSubtitle.textContent = topic.subtitle;
  if (pageType === "dekomposition") {
    moduleStep.textContent = activeIndex === 0
      ? currentConfig.startStepLabel
      : `Baustein ${activeIndex} von ${topics.length - 1}`;
  } else {
    moduleStep.textContent = activeIndex === 0
      ? currentConfig.startStepLabel
      : `Baustein ${activeIndex + 1} von ${topics.length}`;
  }
  breadcrumbCurrent.textContent = topic.cardTitle;
  leftLabel.textContent = topic.leftLabel;
  rightLabel.textContent = topic.rightLabel;
  leftTitle.textContent = topic.leftTitle;
  leftText.textContent = topic.leftText;
  rightTitle.textContent = topic.rightTitle;
  renderLearningPoints(topic.rightPoints);
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

  syncTopicParam();
}

function setActiveIndex(newIndex) {
  if (isAnimating || newIndex < 0 || newIndex >= topics.length || newIndex === activeIndex) return;

  const direction = newIndex > activeIndex ? "right" : "left";
  stopSpeech();
  isAnimating = true;
  activeIndex = newIndex;
  renderCards();
  updateContent(direction);

  window.setTimeout(() => {
    isAnimating = false;
    renderCards();
  }, 720);
}

prevButton?.addEventListener("click", () => setActiveIndex(activeIndex - 1));
nextButton?.addEventListener("click", () => setActiveIndex(activeIndex + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") setActiveIndex(activeIndex - 1);
  if (event.key === "ArrowRight") setActiveIndex(activeIndex + 1);
  if (event.key === "Escape") stopSpeech();
});

function getSpeakText(target, element = null) {
  if (target === "overview-hero") return element?.textContent?.trim() || "Kursübersicht";
  if (target === "course-block") return element?.textContent?.trim() || element?.getAttribute("aria-label") || "Kursblock";
  if (target === "course-topic-link") return element?.textContent?.trim() || "Direktlink";
  if (target === "embedded-course-presentation") return "Eingebettete Course Presentation. Die fertige Course Presentation ist hier direkt auf der Startseite eingebunden.";
  if (target === "h5p-lite-start") return element?.textContent?.trim() || "Interaktive Elemente selbst erstellen";
  if (target === "h5p-lite-link") return element?.textContent?.trim() || "Interaktive Testseite öffnen";
  if (target === "h5p-lite-intro") return element?.textContent?.trim() || "Einführung";
  if (target === "h5p-lite-panel") return element?.textContent?.trim() || "Editor";
  if (target === "banner") return bannerTitle.textContent.trim();
  if (target === "topic-card") {
    const index = Number(element?.dataset.index ?? activeIndex);
    return topics[index]?.cardTitle || "Thema";
  }
  if (target === "module-link") return "Modul starten";
  if (target === "interactive-video-start") return element?.textContent?.trim() || "Interaktives Video selbst erstellen";
  if (target === "interactive-video-link") return element?.textContent?.trim() || "Zur Testseite Interaktives Video";
  if (target === "interactive-video-intro") return element?.textContent?.trim() || "Interaktives Video";
  if (target === "interactive-video-panel") return element?.textContent?.trim() || "Editor für Interaktionen";
  if (target === "left") return `${leftTitle.textContent}. ${leftText.textContent}`;
  if (element?.textContent?.trim()) return element.textContent.trim();
  if (!rightList || !rightTitle) return "Vorlesbarer Bereich";
  const points = [...rightList.querySelectorAll("li")].map((li) => li.textContent).join(". ");
  return `${rightTitle.textContent}. ${points}`;
}

function supportsSpeech() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function getBlindReadables() {
  return [...document.querySelectorAll(".blind-readable")];
}

function clearSpeakingState(runId = null) {
  if (runId !== null && runId !== speechRunId) return;
  getBlindReadables().forEach((element) => element.classList.remove("is-speaking"));
  activeSpeechKey = null;
  activeSpeechElement = null;
}

function stopSpeech() {
  speechRunId += 1;
  if (supportsSpeech()) window.speechSynthesis.cancel();
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

  if (activeSpeechKey === key) {
    stopSpeech();
    return;
  }

  stopSpeech();
  const currentRunId = speechRunId + 1;
  speechRunId = currentRunId;
  activeSpeechKey = key;
  activeSpeechElement = visualElement;

  const utterance = new SpeechSynthesisUtterance(cleanedText);
  utterance.lang = "de-DE";
  utterance.rate = 0.95;
  utterance.pitch = 1;

  if (visualElement) visualElement.classList.add("is-speaking");
  utterance.onend = () => clearSpeakingState(currentRunId);
  utterance.onerror = () => clearSpeakingState(currentRunId);
  window.speechSynthesis.speak(utterance);
}

function setBlindMode(enabled, options = {}) {
  const { announce = true, updateUrl = true } = options;
  blindModeActive = enabled;
  document.body.classList.toggle("blind-mode-active", enabled);
  blindModeToggle?.classList.toggle("is-active", enabled);
  blindModeToggle?.setAttribute("aria-pressed", String(enabled));
  if (blindModeToggle) blindModeToggle.textContent = `Vorlesemodus: ${enabled ? "an" : "aus"}`;

  if (blindModeHint) {
    blindModeHint.hidden = true;
    blindModeHint.textContent = "";
  }

  if (updateUrl) syncVorlesemodusParam(enabled);
  updateInternalLinksForVorlesemodus();

  if (enabled) {
    if (announce) {
      speakRawText(
        "Vorlesemodus aktiviert. Drücke einmal auf ein Feld, um es vorlesen zu lassen. Drücke dasselbe Feld erneut, um das Vorlesen zu stoppen. Mit einem Doppelklick öffnest du das ausgewählte Feld.",
        "readmode-hint"
      );
    }
  } else {
    stopSpeech();
  }
}

blindModeToggle?.addEventListener("click", () => setBlindMode(!blindModeActive));

function activateBlindReadable(element) {
  const target = element.dataset.blindTarget || "text";

  if (target === "topic-card") {
    const index = Number(element.dataset.index);
    if (Number.isFinite(index)) setActiveIndex(index);
    return;
  }

  const href = element.getAttribute("href");
  if (href) {
    const targetWindow = element.getAttribute("target");
    if (targetWindow === "_blank") {
      window.open(href, "_blank", "noopener");
    } else {
      window.location.href = linkWithVorlesemodus(href);
    }
  }
}

function addBlindModeInteractions() {
  getBlindReadables().forEach((element) => {
    if (element.dataset.blindListenerAttached === "true") return;
    element.dataset.blindListenerAttached = "true";

    element.addEventListener("click", (event) => {
      if (!blindModeActive) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      const target = element.dataset.blindTarget || "text";
      const speakText = getSpeakText(target, element) || element.textContent;
      speakRawText(speakText, `${target}-${element.dataset.index || element.getAttribute("href") || "main"}`, element);
    });

    element.addEventListener("dblclick", (event) => {
      if (!blindModeActive) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      stopSpeech();
      activateBlindReadable(element);
    });
  });
}

createCards();
renderCards();
updateContent("right");
addBlindModeInteractions();
if (hasVorlesemodusParam()) setBlindMode(true, { announce: false, updateUrl: true });
else updateInternalLinksForVorlesemodus();


function setupCourseFlyouts() {
  const wraps = [...document.querySelectorAll(".course-block-wrap")];
  if (!wraps.length) return;

  wraps.forEach((wrap) => {
    let closeTimer = null;

    const open = () => {
      window.clearTimeout(closeTimer);
      wraps.forEach((other) => {
        if (other !== wrap) other.classList.remove("is-flyout-open");
      });
      wrap.classList.add("is-flyout-open");
    };

    const close = () => {
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(() => {
        wrap.classList.remove("is-flyout-open");
      }, 260);
    };

    wrap.addEventListener("mouseenter", open);
    wrap.addEventListener("mouseleave", close);
    wrap.addEventListener("focusin", open);
    wrap.addEventListener("focusout", (event) => {
      if (!wrap.contains(event.relatedTarget)) close();
    });

    const flyout = wrap.querySelector(".course-block-flyout");
    flyout?.addEventListener("mouseenter", open);
    flyout?.addEventListener("mouseleave", close);

    const card = wrap.querySelector(".course-block-card");
    card?.addEventListener("touchstart", (event) => {
      if (!wrap.classList.contains("is-flyout-open")) {
        event.preventDefault();
        open();
      }
    }, { passive: false });
  });

  document.addEventListener("pointerdown", (event) => {
    if (!event.target.closest(".course-block-wrap")) {
      wraps.forEach((wrap) => wrap.classList.remove("is-flyout-open"));
    }
  });
}

setupCourseFlyouts();
