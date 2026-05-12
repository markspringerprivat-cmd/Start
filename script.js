const topics = [
  'Thema 1',
  'Thema 2',
  'Thema 3',
  'Thema 4',
  'Thema 5',
  'Thema 6'
];

let activeIndex = 0;
let isAnimating = false;

const tiles = document.getElementById('tiles');
const leftTile = document.getElementById('leftTile');
const centerTile = document.getElementById('centerTile');
const rightTile = document.getElementById('rightTile');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function getCircularIndex(index) {
  return (index + topics.length) % topics.length;
}

function renderTiles() {
  const leftIndex = getCircularIndex(activeIndex - 1);
  const rightIndex = getCircularIndex(activeIndex + 1);

  leftTile.textContent = topics[leftIndex];
  centerTile.textContent = topics[activeIndex];
  rightTile.textContent = topics[rightIndex];
}

function setButtonsDisabled(isDisabled) {
  prevBtn.disabled = isDisabled;
  nextBtn.disabled = isDisabled;
}

function changeTopic(direction) {
  if (isAnimating) {
    return;
  }

  isAnimating = true;
  setButtonsDisabled(true);

  const animationClass = direction === 'left' ? 'slide-left' : 'slide-right';
  tiles.classList.add(animationClass);

  tiles.addEventListener(
    'animationend',
    () => {
      tiles.classList.remove(animationClass);

      if (direction === 'left') {
        activeIndex = getCircularIndex(activeIndex - 1);
      } else {
        activeIndex = getCircularIndex(activeIndex + 1);
      }

      renderTiles();
      isAnimating = false;
      setButtonsDisabled(false);
    },
    { once: true }
  );
}

prevBtn.addEventListener('click', () => changeTopic('left'));
nextBtn.addEventListener('click', () => changeTopic('right'));

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    changeTopic('left');
  }

  if (event.key === 'ArrowRight') {
    changeTopic('right');
  }
});

renderTiles();
