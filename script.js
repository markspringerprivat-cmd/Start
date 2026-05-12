window.addEventListener("load", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
});

const pageData = {
  dekomposition: {
    switcherLabel: "Bausteine der Dekomposition",
    breadcrumbBlock: "Dekomposition",
    startStepLabel: "Dekomposition",
    topics: [
      {
        cardTitle: "Hauptseite",
        bannerTitle: "Hauptseite",
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
    card.addEventListener("click", (event) => {
      if (blindModeActive) {
        event.preventDefault();
        event.stopPropagation();
        speakRawText(topic.cardTitle, `blind-card-${index}`, card);
        return;
      }
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
  moduleStep.textContent = activeIndex === 0 ? currentConfig.startStepLabel : `Baustein ${activeIndex + 1} von ${topics.length}`;
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
  if (target === "banner") return bannerTitle.textContent.trim();
  if (target === "topic-card") {
    const index = Number(element?.dataset.index ?? activeIndex);
    return topics[index]?.cardTitle || "Thema";
  }
  if (target === "module-link") return "Modul starten";
  if (target === "left") return `${leftTitle.textContent}. ${leftText.textContent}`;
  const points = [...rightList.querySelectorAll("li")].map((li) => li.textContent).join(". ");
  return `${rightTitle.textContent}. ${points}`;
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

  if (visualElement) visualElement.classList.add("is-speaking");
  utterance.onend = clearSpeakingState;
  utterance.onerror = clearSpeakingState;
  window.speechSynthesis.speak(utterance);
}

function setBlindMode(enabled) {
  blindModeActive = enabled;
  document.body.classList.toggle("blind-mode-active", enabled);
  blindModeToggle?.classList.toggle("is-active", enabled);
  blindModeToggle?.setAttribute("aria-pressed", String(enabled));
  if (blindModeToggle) blindModeToggle.textContent = `Blindenmodus: ${enabled ? "an" : "aus"}`;

  if (blindModeHint) {
    blindModeHint.hidden = !enabled;
    blindModeHint.textContent = enabled
      ? "Bitte auf Schaltfläche drücken, um diese vorlesen zu lassen."
      : "";
  }

  if (enabled) {
    speakRawText("Bitte auf Schaltfläche drücken, um diese vorlesen zu lassen.", "blindmode-hint");
  } else {
    stopSpeech();
  }
}

blindModeToggle?.addEventListener("click", () => setBlindMode(!blindModeActive));

function addBlindModeInteractions() {
  getBlindReadables().forEach((element) => {
    element.addEventListener("click", (event) => {
      if (!blindModeActive) return;
      event.preventDefault();
      event.stopPropagation();
      const target = element.dataset.blindTarget;
      const speakText = getSpeakText(target, element);
      speakRawText(speakText, `${target}-${element.dataset.index || "main"}`, element);
    });
  });
}

createCards();
renderCards();
updateContent("right");
addBlindModeInteractions();


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
