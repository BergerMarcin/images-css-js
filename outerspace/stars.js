document.addEventListener("DOMContentLoaded", function () {
  const MIN_STAR_SIZE = 1;
  const MAX_STAR_SIZE = 7;
  const STAR_AREA_OF_MAX_STAR_SIZE = 8;  // number as percentage (like 8)   OR   null if not use

  const starsNumber = !STAR_AREA_OF_MAX_STAR_SIZE
    ? Math.trunc((0.2 + Math.random() * 0.8) * window.innerWidth * window.innerHeight / (10 * MAX_STAR_SIZE * MAX_STAR_SIZE))
    : Math.trunc(0.01 * STAR_AREA_OF_MAX_STAR_SIZE * window.innerWidth * window.innerHeight / (MAX_STAR_SIZE * MAX_STAR_SIZE));

  const background = document.createElement("div");
  background.style = "position: absolute;width: 100%;height: 100%;background: radial-gradient(circle at right 15% bottom -1%, white 2%, yellow 3%, gray 4%, black 50%); margin-left: -8px; margin-top: -8px;";

  for (let i = 0; i < starsNumber; i++) {
    const star = document.createElement("div");
    const positionX = Math.trunc(Math.random() * 1000) / 10;
    const positionY = Math.trunc(Math.random() * 1000) / 10;
    const size = Math.trunc(Math.random() * (MAX_STAR_SIZE - MIN_STAR_SIZE) + MIN_STAR_SIZE);
    const transparency = 0.5 + (Math.trunc(50 * size / MAX_STAR_SIZE) / 100);
    star.id = (i + 1).toString();
    star.style = `position: fixed; left: ${positionX}%; top: ${positionY}%; width: ${size}px; height: ${size}px; background-image: radial-gradient(rgba(255,255,255, ${transparency}) 10%, transparent 70%);`;
    background.appendChild(star);
  }

  document.body.prepend(background);
});
