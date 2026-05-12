const topics = [
  'Thema 1',
  'Thema 2',
  'Thema 3',
  'Thema 4',
  'Thema 5',
  'Thema 6'
];

let activeIndex = 0;

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

function showPreviousTopic() {
  activeIndex = getCircularIndex(activeIndex - 1);
  renderTiles();
}

function showNextTopic() {
  activeIndex = getCircularIndex(activeIndex + 1);
  renderTiles();
}

prevBtn.addEventListener('click', showPreviousTopic);
nextBtn.addEventListener('click', showNextTopic);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    showPreviousTopic();
  }

  if (event.key === 'ArrowRight') {
    showNextTopic();
  }
});

renderTiles();
