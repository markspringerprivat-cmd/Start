(() => {
  const video = document.getElementById("ivVideo");
  if (!video) return;

  const overlay = document.getElementById("ivOverlay");
  const overlayQuestion = document.getElementById("ivOverlayQuestion");
  const overlayDescription = document.getElementById("ivOverlayDescription");
  const answerGrid = document.getElementById("ivAnswerGrid");
  const feedback = document.getElementById("ivFeedback");
  const timeDisplay = document.getElementById("ivTimeDisplay");
  const markerList = document.getElementById("ivMarkerList");
  const configArea = document.getElementById("ivConfigArea");

  const videoUrlInput = document.getElementById("ivVideoUrl");
  const videoFileInput = document.getElementById("ivVideoFile");
  const loadVideoButton = document.getElementById("ivLoadVideoButton");
  const timeInput = document.getElementById("ivTimeInput");
  const questionInput = document.getElementById("ivQuestionInput");
  const descriptionInput = document.getElementById("ivDescriptionInput");
  const answersInput = document.getElementById("ivAnswersInput");
  const correctInput = document.getElementById("ivCorrectInput");
  const pauseInput = document.getElementById("ivPauseInput");
  const saveButton = document.getElementById("ivSaveInteractionButton");
  const currentTimeButton = document.getElementById("ivUseCurrentTimeButton");
  const restartButton = document.getElementById("ivRestartButton");
  const jumpMarkerButton = document.getElementById("ivJumpMarkerButton");
  const exportButton = document.getElementById("ivExportButton");
  const importButton = document.getElementById("ivImportButton");
  const clearButton = document.getElementById("ivClearButton");

  const STORAGE_KEY = "kursrahmen-interactive-video-config-v1";
  let interactions = [
    {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      time: 4,
      question: "Was ist in diesem Moment wichtig?",
      description: "Beantworte die Frage, damit das Video weiterläuft.",
      answers: [
        "Die Gesprächssituation genau beobachten",
        "Sofort zur nächsten Folie springen",
        "Das Video ohne Pause weiterlaufen lassen"
      ],
      correctIndex: 0,
      pause: true,
      answered: false,
      triggered: false
    }
  ];

  function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "00:00";
    const total = Math.max(0, Math.floor(seconds));
    const mins = String(Math.floor(total / 60)).padStart(2, "0");
    const secs = String(total % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function saveLocal() {
    const data = getExportData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function loadLocal() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.videoUrl && videoUrlInput) {
        videoUrlInput.value = data.videoUrl;
        setVideoSource(data.videoUrl);
      }
      if (Array.isArray(data.interactions)) {
        interactions = data.interactions.map(normalizeInteraction);
      }
    } catch (_error) {
      // Ignore invalid local data.
    }
  }

  function normalizeInteraction(item) {
    return {
      id: item.id || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random())),
      time: Number(item.time) || 0,
      question: String(item.question || "Frage"),
      description: String(item.description || "Wähle eine Antwort aus."),
      answers: Array.isArray(item.answers) && item.answers.length ? item.answers.map(String) : ["Antwort 1"],
      correctIndex: Math.max(0, Number(item.correctIndex) || 0),
      pause: item.pause !== false,
      answered: false,
      triggered: false
    };
  }

  function getExportData() {
    return {
      videoUrl: videoUrlInput?.value || video.currentSrc || "",
      interactions: interactions.map(({ id, time, question, description, answers, correctIndex, pause }) => ({
        id, time, question, description, answers, correctIndex, pause
      }))
    };
  }

  function setVideoSource(src) {
    if (!src) return;
    hideOverlay();
    video.pause();
    video.src = src;
    video.load();
    resetTriggers();
  }

  function resetTriggers() {
    interactions = interactions.map((interaction) => ({ ...interaction, answered: false, triggered: false }));
    renderMarkers();
    saveLocal();
  }

  function hideOverlay() {
    overlay.classList.remove("is-visible");
    overlay.setAttribute("aria-hidden", "true");
    answerGrid.innerHTML = "";
    feedback.hidden = true;
    feedback.textContent = "";
  }

  function showInteraction(interaction) {
    interaction.triggered = true;
    if (interaction.pause) video.pause();

    overlayQuestion.textContent = interaction.question;
    overlayDescription.textContent = interaction.description;
    feedback.hidden = true;
    feedback.textContent = "";
    answerGrid.innerHTML = "";

    interaction.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "iv-answer-button";
      button.textContent = answer;
      button.addEventListener("click", () => answerInteraction(interaction, index, button));
      answerGrid.appendChild(button);
    });

    overlay.classList.add("is-visible");
    overlay.setAttribute("aria-hidden", "false");
    const firstButton = answerGrid.querySelector("button");
    if (firstButton) firstButton.focus({ preventScroll: true });
    renderMarkers();
    saveLocal();
  }

  function answerInteraction(interaction, selectedIndex, selectedButton) {
    const buttons = [...answerGrid.querySelectorAll("button")];
    buttons.forEach((button, index) => {
      button.disabled = true;
      if (index === interaction.correctIndex) button.classList.add("is-correct");
    });

    const isCorrect = selectedIndex === interaction.correctIndex;
    if (!isCorrect) selectedButton.classList.add("is-wrong");
    feedback.textContent = isCorrect
      ? "Richtig. Das Video läuft jetzt weiter."
      : "Nicht ganz. Die richtige Antwort ist markiert. Das Video läuft jetzt weiter.";
    feedback.hidden = false;
    interaction.answered = true;

    window.setTimeout(() => {
      hideOverlay();
      video.play().catch(() => {});
      renderMarkers();
      saveLocal();
    }, isCorrect ? 900 : 1700);
  }

  function checkInteractions() {
    const current = video.currentTime;
    const nextInteraction = interactions
      .filter((interaction) => !interaction.triggered && current >= interaction.time && current <= interaction.time + 0.45)
      .sort((a, b) => a.time - b.time)[0];

    if (nextInteraction) showInteraction(nextInteraction);
  }

  function renderTime() {
    timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
  }

  function renderMarkers() {
    const sorted = [...interactions].sort((a, b) => a.time - b.time);
    markerList.innerHTML = "";

    if (!sorted.length) {
      const empty = document.createElement("p");
      empty.className = "iv-marker-meta";
      empty.textContent = "Noch keine Zeitmarken angelegt.";
      markerList.appendChild(empty);
      return;
    }

    sorted.forEach((interaction) => {
      const item = document.createElement("article");
      item.className = "iv-marker-item";
      item.innerHTML = `
        <strong>${formatTime(interaction.time)} · ${escapeHtml(interaction.question)}</strong>
        <div class="iv-marker-meta">${interaction.answers.length} Antwortmöglichkeiten · ${interaction.pause ? "pausiert das Video" : "läuft ohne Pause"} · ${interaction.answered ? "beantwortet" : "offen"}</div>
      `;

      const actions = document.createElement("div");
      actions.className = "iv-marker-actions";

      const jumpButton = document.createElement("button");
      jumpButton.type = "button";
      jumpButton.className = "iv-small-button";
      jumpButton.textContent = "Anspringen";
      jumpButton.addEventListener("click", () => {
        video.currentTime = Math.max(0, interaction.time - 0.1);
        interaction.triggered = false;
        interaction.answered = false;
        video.play().catch(() => {});
      });

      const editButton = document.createElement("button");
      editButton.type = "button";
      editButton.className = "iv-small-button";
      editButton.textContent = "Bearbeiten";
      editButton.addEventListener("click", () => fillForm(interaction));

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "iv-small-button";
      deleteButton.textContent = "Löschen";
      deleteButton.addEventListener("click", () => {
        interactions = interactions.filter((item) => item.id !== interaction.id);
        renderMarkers();
        saveLocal();
      });

      actions.append(jumpButton, editButton, deleteButton);
      item.appendChild(actions);
      markerList.appendChild(item);
    });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
  }

  function fillForm(interaction) {
    timeInput.value = interaction.time;
    questionInput.value = interaction.question;
    descriptionInput.value = interaction.description;
    answersInput.value = interaction.answers.join("\n");
    correctInput.value = String(interaction.correctIndex);
    pauseInput.checked = interaction.pause;
    saveButton.dataset.editId = interaction.id;
    questionInput.focus();
  }

  function readFormInteraction() {
    const answers = answersInput.value
      .split("\n")
      .map((answer) => answer.trim())
      .filter(Boolean);

    return normalizeInteraction({
      id: saveButton.dataset.editId || undefined,
      time: Number(timeInput.value),
      question: questionInput.value.trim() || "Frage",
      description: descriptionInput.value.trim() || "Wähle eine Antwort aus.",
      answers: answers.length ? answers : ["Antwort 1"],
      correctIndex: Math.min(Math.max(0, Number(correctInput.value) || 0), Math.max(0, answers.length - 1)),
      pause: pauseInput.checked
    });
  }

  loadVideoButton?.addEventListener("click", () => {
    if (videoFileInput?.files?.[0]) {
      const objectUrl = URL.createObjectURL(videoFileInput.files[0]);
      setVideoSource(objectUrl);
      if (videoUrlInput) videoUrlInput.value = "";
    } else {
      setVideoSource(videoUrlInput.value.trim());
    }
    saveLocal();
  });

  currentTimeButton?.addEventListener("click", () => {
    timeInput.value = video.currentTime.toFixed(1);
  });

  saveButton?.addEventListener("click", () => {
    const interaction = readFormInteraction();
    const editId = saveButton.dataset.editId;
    if (editId) {
      interactions = interactions.map((item) => item.id === editId ? interaction : item);
      delete saveButton.dataset.editId;
    } else {
      interactions.push(interaction);
    }
    interactions.sort((a, b) => a.time - b.time);
    resetTriggers();
    renderMarkers();
    saveLocal();
  });

  restartButton?.addEventListener("click", () => {
    video.currentTime = 0;
    resetTriggers();
    hideOverlay();
    video.play().catch(() => {});
  });

  jumpMarkerButton?.addEventListener("click", () => {
    const next = [...interactions].sort((a, b) => a.time - b.time).find((interaction) => interaction.time > video.currentTime + 0.2);
    if (next) {
      next.triggered = false;
      next.answered = false;
      video.currentTime = Math.max(0, next.time - 0.1);
      video.play().catch(() => {});
    }
  });

  exportButton?.addEventListener("click", () => {
    configArea.value = JSON.stringify(getExportData(), null, 2);
    configArea.focus();
    configArea.select();
  });

  importButton?.addEventListener("click", () => {
    try {
      const data = JSON.parse(configArea.value);
      if (data.videoUrl && videoUrlInput) {
        videoUrlInput.value = data.videoUrl;
        setVideoSource(data.videoUrl);
      }
      if (Array.isArray(data.interactions)) {
        interactions = data.interactions.map(normalizeInteraction);
      }
      resetTriggers();
      renderMarkers();
    } catch (_error) {
      configArea.value = "Die eingefügte Konfiguration konnte nicht gelesen werden.";
    }
  });

  clearButton?.addEventListener("click", () => {
    interactions = [];
    resetTriggers();
    hideOverlay();
  });

  video.addEventListener("timeupdate", () => {
    renderTime();
    checkInteractions();
  });
  video.addEventListener("loadedmetadata", renderTime);
  video.addEventListener("seeked", () => {
    interactions.forEach((interaction) => {
      if (video.currentTime < interaction.time - 0.2) {
        interaction.triggered = false;
        interaction.answered = false;
      }
    });
    renderMarkers();
  });

  loadLocal();
  renderMarkers();
  renderTime();
})();
