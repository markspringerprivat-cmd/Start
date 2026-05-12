const tiles = Array.from(document.querySelectorAll('.tile'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let activeIndex = 0;
let isAnimating = false;
const animationTime = 560;

function getWrappedIndex(index) {
  return (index + tiles.length) % tiles.length;
}

function getRelativePosition(tileIndex, centerIndex) {
  let diff = tileIndex - centerIndex;

  if (diff > tiles.length / 2) diff -= tiles.length;
  if (diff < -tiles.length / 2) diff += tiles.length;

  return diff;
}

function getTileTransform(position) {
  const isSmallScreen = window.innerWidth <= 760;
  const sideDistance = isSmallScreen ? 136 : 205;
  const edgeDistance = isSmallScreen ? 232 : 335;

  const transforms = {
    '-2': `translateX(calc(-50% - ${edgeDistance}px)) translateY(46px) translateZ(-220px) rotateY(48deg) rotateZ(-8deg) scale(0.56)`,
    '-1': `translateX(calc(-50% - ${sideDistance}px)) translateY(24px) translateZ(-90px) rotateY(34deg) rotateZ(-5deg) scale(0.72)`,
    '0': 'translateX(-50%) translateY(0) translateZ(85px) rotateY(0deg) rotateZ(0deg) scale(1)',
    '1': `translateX(calc(-50% + ${sideDistance}px)) translateY(24px) translateZ(-90px) rotateY(-34deg) rotateZ(5deg) scale(0.72)`,
    '2': `translateX(calc(-50% + ${edgeDistance}px)) translateY(46px) translateZ(-220px) rotateY(-48deg) rotateZ(8deg) scale(0.56)`
  };

  return transforms[position] || 'translateX(-50%) translateY(70px) translateZ(-320px) scale(0.4)';
}

function applyWheelState() {
  tiles.forEach((tile, index) => {
    const position = getRelativePosition(index, activeIndex);
    const clampedPosition = Math.max(-2, Math.min(2, position));

    tile.className = 'tile';
    tile.style.transform = getTileTransform(clampedPosition);

    if (position === 0) {
      tile.classList.add('is-center');
    } else if (position === -1) {
      tile.classList.add('is-left');
    } else if (position === 1) {
      tile.classList.add('is-right');
    } else if (position === -2) {
      tile.classList.add('is-left-edge');
    } else if (position === 2) {
      tile.classList.add('is-right-edge');
    } else {
      tile.classList.add('is-hidden');
    }
  });
}

function rotateWheel(direction) {
  if (isAnimating) return;

  isAnimating = true;
  prevBtn.disabled = true;
  nextBtn.disabled = true;

  activeIndex = getWrappedIndex(activeIndex + direction);
  applyWheelState();

  window.setTimeout(() => {
    isAnimating = false;
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }, animationTime);
}

prevBtn.addEventListener('click', () => rotateWheel(-1));
nextBtn.addEventListener('click', () => rotateWheel(1));
window.addEventListener('resize', applyWheelState);

applyWheelState();
