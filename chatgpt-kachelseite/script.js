const kacheln = document.querySelectorAll(".kachel");

kacheln.forEach((kachel) => {
  kachel.addEventListener("click", (event) => {
    event.preventDefault();

    const ziel = kachel.href;

    kachel.classList.remove("clicked");

    window.requestAnimationFrame(() => {
      kachel.classList.add("clicked");
    });

    window.setTimeout(() => {
      window.location.href = ziel;
    }, 220);
  });

  kachel.addEventListener("animationend", () => {
    kachel.classList.remove("clicked");
  });
});
