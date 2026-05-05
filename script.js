const kacheln = document.querySelectorAll(".kachel");

kacheln.forEach((kachel) => {
  kachel.addEventListener("click", () => {
    kachel.classList.remove("clicked");

    window.requestAnimationFrame(() => {
      kachel.classList.add("clicked");
    });
  });

  kachel.addEventListener("animationend", () => {
    kachel.classList.remove("clicked");
  });
});
