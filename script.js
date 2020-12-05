const block = document.querySelector(".block");
const hole = document.querySelector(".hole");
const bird = document.querySelector(".bird");
let isJumping = false;
let counter = 0;

hole.addEventListener("animationiteration", () => {
  const random = Math.floor(Math.random() * 151) + 50;
  console.log(random);
  hole.style.top = random + "px";
  counter++;
});

setInterval(() => {
  const birdTop = parseInt(
    window.getComputedStyle(bird).getPropertyValue("top")
  );
  if (!isJumping) {
    bird.style.top = birdTop + 3 + "px";
  }
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  const holeTop = parseInt(
    window.getComputedStyle(hole).getPropertyValue("top")
  );
  if (
    birdTop > 480 ||
    (blockLeft < 20 && (birdTop < holeTop || birdTop > holeTop + 130))
  ) {
    alert("Game over");
    bird.style.top = 100 + "px";
    counter = 0;
  }
}, 10);

const jump = () => {
  isJumping = true;
  let jumpCount = 0;
  const jumpInterval = setInterval(() => {
    const birdTop = parseInt(
      window.getComputedStyle(bird).getPropertyValue("top")
    );
    if (birdTop > 6 && jumpCount < 15) bird.style.top = birdTop - 13 + "px";

    if (jumpCount > 6) {
      clearInterval(jumpInterval);
      isJumping = false;
      jumpCount = 0;
    }
    jumpCount++;
  }, 20);
};

window.addEventListener("click", jump);
