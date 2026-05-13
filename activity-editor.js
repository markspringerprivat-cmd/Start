(() => {
  const activity = document.body?.dataset.activity;
  if (!activity) return;

  const $ = (id) => document.getElementById(id);
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[char]));
  const uid = () => (crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()));
  const storeKey = `kursrahmen-h5p-lite-${activity}-v1`;
  const configArea = $("configArea");

  function save(data) { localStorage.setItem(storeKey, JSON.stringify(data)); }
  function load(defaultData) {
    try {
      const raw = localStorage.getItem(storeKey);
      return raw ? { ...defaultData, ...JSON.parse(raw) } : defaultData;
    } catch (_e) { return defaultData; }
  }
  function bindImportExport(getData, setData) {
    $("exportButton")?.addEventListener("click", () => {
      configArea.value = JSON.stringify(getData(), null, 2);
      configArea.focus(); configArea.select();
    });
    $("importButton")?.addEventListener("click", () => {
      try { setData(JSON.parse(configArea.value)); }
      catch (_e) { configArea.value = "Die Konfiguration konnte nicht gelesen werden."; }
    });
    $("resetButton")?.addEventListener("click", () => {
      localStorage.removeItem(storeKey);
      window.location.reload();
    });
  }

  if (activity === "course-presentation") initCoursePresentation();
  if (activity === "interactive-book") initInteractiveBook();
  if (activity === "multiple-choice") initMultipleChoice();
  if (activity === "drag-the-words") initDragTheWords();
  if (activity === "drag-and-drop") initDragAndDrop();

  function initCoursePresentation() {
    let data = load({
      title: "Eigene Course Presentation",
      slides: [
        { id: uid(), title: "Folie 1", text: "Einführung in die Gesprächssituation.", media: "" },
        { id: uid(), title: "Folie 2", text: "Hier können Fragen, Hinweise oder Arbeitsaufträge stehen.", media: "" }
      ]
    });
    let active = 0;
    const titleInput = $("titleInput"), slideTitle = $("slideTitle"), slideText = $("slideText"), slideMedia = $("slideMedia");
    const slideList = $("slideList"), preview = $("cpPreview"), counter = $("cpCounter");
    function fill() {
      titleInput.value = data.title;
      const s = data.slides[active] || {title:"", text:"", media:""};
      slideTitle.value = s.title; slideText.value = s.text; slideMedia.value = s.media || "";
    }
    function render() {
      save(data); fill();
      slideList.innerHTML = "";
      data.slides.forEach((s, i) => {
        const b = document.createElement("button"); b.type = "button"; b.className = `h5p-lite-list-button ${i === active ? "is-active" : ""}`;
        b.textContent = `${i + 1}. ${s.title || "Folie"}`; b.onclick = () => { active = i; render(); };
        slideList.appendChild(b);
      });
      const s = data.slides[active] || {};
      counter.textContent = `Folie ${Math.min(active + 1, data.slides.length)} von ${data.slides.length}`;
      preview.innerHTML = `<p class="eyebrow">${escapeHtml(data.title)}</p><h2>${escapeHtml(s.title || "Folie")}</h2><p>${escapeHtml(s.text || "")}</p>${s.media ? `<img src="${escapeHtml(s.media)}" alt="Medienvorschau" />` : ""}`;
    }
    function updateActive() {
      data.title = titleInput.value.trim() || "Course Presentation";
      if (!data.slides[active]) data.slides[active] = {id: uid(), title:"Folie", text:"", media:""};
      data.slides[active].title = slideTitle.value.trim() || "Folie";
      data.slides[active].text = slideText.value.trim();
      data.slides[active].media = slideMedia.value.trim();
      render();
    }
    [titleInput, slideTitle, slideText, slideMedia].forEach(el => el?.addEventListener("input", updateActive));
    $("addSlide")?.addEventListener("click", () => { data.slides.push({id: uid(), title:`Folie ${data.slides.length + 1}`, text:"Neuer Inhalt", media:""}); active = data.slides.length - 1; render(); });
    $("deleteSlide")?.addEventListener("click", () => { if (data.slides.length > 1) { data.slides.splice(active, 1); active = Math.max(0, active - 1); render(); } });
    $("prevSlide")?.addEventListener("click", () => { active = Math.max(0, active - 1); render(); });
    $("nextSlide")?.addEventListener("click", () => { active = Math.min(data.slides.length - 1, active + 1); render(); });
    bindImportExport(() => data, (d) => { data = { title: d.title || "Course Presentation", slides: Array.isArray(d.slides) && d.slides.length ? d.slides : data.slides }; active = 0; render(); });
    render();
  }

  function initInteractiveBook() {
    let data = load({
      title: "Eigenes Interactive Book",
      pages: [
        { id: uid(), title: "Kapitel 1", text: "Kurzer Lerntext für die erste Seite.", task: "Notiere einen zentralen Gedanken." },
        { id: uid(), title: "Kapitel 2", text: "Weitere Inhalte können als Buchseiten ergänzt werden.", task: "Beantworte die Reflexionsfrage." }
      ]
    });
    let active = 0;
    const titleInput = $("titleInput"), pageTitle = $("pageTitle"), pageText = $("pageText"), pageTask = $("pageTask"), nav = $("bookNav"), preview = $("bookPreview");
    function fill(){ titleInput.value=data.title; const p=data.pages[active]||{}; pageTitle.value=p.title||""; pageText.value=p.text||""; pageTask.value=p.task||""; }
    function render(){ save(data); fill(); nav.innerHTML=""; data.pages.forEach((p,i)=>{ const b=document.createElement("button"); b.type="button"; b.className=`h5p-lite-list-button ${i===active?"is-active":""}`; b.textContent=p.title||`Seite ${i+1}`; b.onclick=()=>{active=i; render();}; nav.appendChild(b); }); const p=data.pages[active]||{}; preview.innerHTML=`<p class="eyebrow">${escapeHtml(data.title)}</p><h2>${escapeHtml(p.title||"Seite")}</h2><p>${escapeHtml(p.text||"")}</p><div class="h5p-lite-task"><strong>Aufgabe</strong><p>${escapeHtml(p.task||"")}</p></div>`; }
    function update(){ data.title=titleInput.value.trim()||"Interactive Book"; if(!data.pages[active]) data.pages[active]={id:uid()}; data.pages[active].title=pageTitle.value.trim()||"Seite"; data.pages[active].text=pageText.value.trim(); data.pages[active].task=pageTask.value.trim(); render(); }
    [titleInput,pageTitle,pageText,pageTask].forEach(el=>el?.addEventListener("input", update));
    $("addPage")?.addEventListener("click",()=>{ data.pages.push({id:uid(), title:`Kapitel ${data.pages.length+1}`, text:"Neuer Buchinhalt", task:""}); active=data.pages.length-1; render(); });
    $("deletePage")?.addEventListener("click",()=>{ if(data.pages.length>1){ data.pages.splice(active,1); active=Math.max(0,active-1); render(); }});
    bindImportExport(()=>data,(d)=>{data={title:d.title||"Interactive Book", pages:Array.isArray(d.pages)&&d.pages.length?d.pages:data.pages}; active=0; render();}); render();
  }

  function initMultipleChoice() {
    let data = load({ question: "Welche Aussage passt am besten?", description: "Wähle eine Antwort aus.", answers: ["Aufmerksam beobachten", "Sofort abbrechen", "Keine Rückmeldung geben"], correctIndex: 0 });
    const q=$("questionInput"), d=$("descriptionInput"), a=$("answersInput"), c=$("correctInput"), preview=$("mcPreview"), feedback=$("mcFeedback");
    function syncOptions(){ const answers=a.value.split("\n").map(x=>x.trim()).filter(Boolean); c.innerHTML=""; answers.forEach((_,i)=>{ const o=document.createElement("option"); o.value=String(i); o.textContent=`Antwort ${i+1}`; c.appendChild(o); }); c.value=String(Math.min(Number(data.correctIndex)||0, Math.max(0, answers.length-1))); }
    function read(){ data={question:q.value.trim()||"Frage", description:d.value.trim(), answers:a.value.split("\n").map(x=>x.trim()).filter(Boolean), correctIndex:Number(c.value)||0}; if(!data.answers.length)data.answers=["Antwort 1"]; save(data); }
    function render(){ q.value=data.question; d.value=data.description; a.value=data.answers.join("\n"); syncOptions(); preview.innerHTML=`<h2>${escapeHtml(data.question)}</h2><p>${escapeHtml(data.description)}</p><div class="h5p-lite-answer-stack"></div>`; const stack=preview.querySelector("div"); data.answers.forEach((ans,i)=>{ const b=document.createElement("button"); b.type="button"; b.className="iv-answer-button"; b.textContent=ans; b.onclick=()=>{ stack.querySelectorAll("button").forEach(btn=>btn.disabled=true); b.classList.add(i===data.correctIndex?"is-correct":"is-wrong"); if(i!==data.correctIndex) stack.children[data.correctIndex]?.classList.add("is-correct"); feedback.hidden=false; feedback.textContent=i===data.correctIndex?"Richtig.":"Nicht ganz. Die richtige Antwort ist markiert."; }; stack.appendChild(b); }); feedback.hidden=true; }
    [q,d,a,c].forEach(el=>el?.addEventListener("input",()=>{read(); render();})); a?.addEventListener("input", syncOptions);
    bindImportExport(()=>data,(x)=>{data={...data,...x}; render(); save(data);}); render();
  }

  function initDragTheWords() {
    let data = load({ title:"Drag the Words", text:"Eine professionelle Gesprächsführung braucht [Wartezeit], [Rückmeldung] und [Struktur]." });
    const title=$("titleInput"), text=$("textInput"), preview=$("dtwPreview"), result=$("dtwResult");
    let dragged=null;
    function parse(){ const words=[]; const html=escapeHtml(data.text).replace(/\[([^\]]+)\]/g,(_,w)=>{words.push(w); return `<span class="dtw-blank" data-answer="${escapeHtml(w)}"></span>`;}); return {words, html}; }
    function render(){ save(data); title.value=data.title; text.value=data.text; const {words,html}=parse(); const shuffled=[...words].sort(()=>Math.random()-0.5); preview.innerHTML=`<h2>${escapeHtml(data.title)}</h2><p class="dtw-text">${html}</p><div class="dtw-word-bank">${shuffled.map(w=>`<button class="dtw-chip" draggable="true">${escapeHtml(w)}</button>`).join("")}</div><button class="iv-primary-button" id="checkDtw" type="button">Prüfen</button>`; result.hidden=true; preview.querySelectorAll(".dtw-chip").forEach(chip=>{ chip.addEventListener("dragstart",()=>dragged=chip); chip.addEventListener("click",()=>{ dragged=chip; }); }); preview.querySelectorAll(".dtw-blank").forEach(blank=>{ blank.addEventListener("dragover",e=>e.preventDefault()); blank.addEventListener("drop",()=>{ if(dragged){ blank.textContent=dragged.textContent; blank.dataset.filled=dragged.textContent; dragged.remove(); dragged=null; }}); blank.addEventListener("click",()=>{ if(dragged){ blank.textContent=dragged.textContent; blank.dataset.filled=dragged.textContent; dragged.remove(); dragged=null; }}); }); $("checkDtw")?.addEventListener("click",()=>{ const blanks=[...preview.querySelectorAll(".dtw-blank")]; const ok=blanks.every(b=>b.dataset.filled===b.dataset.answer); blanks.forEach(b=>b.classList.toggle("is-correct", b.dataset.filled===b.dataset.answer)); result.hidden=false; result.textContent=ok?"Alles richtig.":"Noch nicht alles richtig."; }); }
    [title,text].forEach(el=>el?.addEventListener("input",()=>{data.title=title.value.trim()||"Drag the Words"; data.text=text.value; render();}));
    bindImportExport(()=>data,(x)=>{data={...data,...x}; render();}); render();
  }

  function initDragAndDrop() {
    let data = load({ title:"Drag and Drop", instructions:"Ziehe die Begriffe in die passenden Felder.", pairs:[{item:"Wartezeit", target:"Gesprächsführung"},{item:"Tafelbild", target:"Sicherung"},{item:"Einstiegsfrage", target:"Gesprächseröffnung"}] });
    const title=$("titleInput"), inst=$("instructionsInput"), pairs=$("pairsInput"), preview=$("dndPreview"), result=$("dndResult");
    let dragged=null;
    function readPairs(){ return pairs.value.split("\n").map(line=>line.split("|").map(x=>x.trim())).filter(x=>x[0]&&x[1]).map(([item,target])=>({item,target})); }
    function render(){ save(data); title.value=data.title; inst.value=data.instructions; pairs.value=data.pairs.map(p=>`${p.item} | ${p.target}`).join("\n"); const targets=[...new Set(data.pairs.map(p=>p.target))]; const items=[...data.pairs].sort(()=>Math.random()-0.5); preview.innerHTML=`<h2>${escapeHtml(data.title)}</h2><p>${escapeHtml(data.instructions)}</p><div class="dnd-bank">${items.map(p=>`<button class="dnd-item" draggable="true" data-target="${escapeHtml(p.target)}">${escapeHtml(p.item)}</button>`).join("")}</div><div class="dnd-target-grid">${targets.map(t=>`<div class="dnd-target" data-target="${escapeHtml(t)}"><strong>${escapeHtml(t)}</strong></div>`).join("")}</div><button class="iv-primary-button" id="checkDnd" type="button">Prüfen</button>`; result.hidden=true; preview.querySelectorAll(".dnd-item").forEach(item=>{ item.addEventListener("dragstart",()=>dragged=item); item.addEventListener("click",()=>dragged=item); }); preview.querySelectorAll(".dnd-target").forEach(zone=>{ zone.addEventListener("dragover",e=>e.preventDefault()); const place=()=>{ if(dragged){ zone.appendChild(dragged); dragged=null; }}; zone.addEventListener("drop",place); zone.addEventListener("click",place); }); $("checkDnd")?.addEventListener("click",()=>{ const items=[...preview.querySelectorAll(".dnd-target .dnd-item")]; const ok=items.length===data.pairs.length && items.every(i=>i.dataset.target===i.parentElement.dataset.target); items.forEach(i=>i.classList.toggle("is-correct", i.dataset.target===i.parentElement.dataset.target)); result.hidden=false; result.textContent=ok?"Alles richtig.":"Einige Zuordnungen stimmen noch nicht."; }); }
    [title,inst,pairs].forEach(el=>el?.addEventListener("input",()=>{data.title=title.value.trim()||"Drag and Drop"; data.instructions=inst.value.trim(); data.pairs=readPairs(); render();}));
    bindImportExport(()=>data,(x)=>{data={...data,...x}; render();}); render();
  }
})();
