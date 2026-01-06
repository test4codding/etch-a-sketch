const DEFAULT_SIDE_LENGTH = 16;
const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".grid-size-btn");
const randomColorButton = document.querySelector(".random-color-btn");
const opacityButton = document.querySelector(".opacity-btn");
let isRandomColorActive = false;
let isOpacityActive = false;

opacityButton.addEventListener("click", () => {
  isOpacityActive = opacityButton.classList.toggle("btn-active");
});

randomColorButton.addEventListener("click", () => {
  isRandomColorActive = randomColorButton.classList.toggle("btn-active");
});

gridSizeButton.addEventListener("click", () => {
  const userInput = prompt("Enter number of squares per side (2-100): ");
  const size = Number(userInput);
  Number.isInteger(size) && size >= 2 && size <= 100
    ? createGrid(size)
    : alert("Please enter a number between 2 and 100");
});

function createGrid(sideLength) {
  container.replaceChildren();
  const containerWidth = container.clientWidth;
  const gridWidth = containerWidth / sideLength;
  for (let i = 0; i < sideLength ** 2; i++) {
    const grid = document.createElement("div");
    grid.style.width = `${gridWidth}px`;
    grid.style.height = `${gridWidth}px`;
    grid.style.opacity = 0.1;
    grid.addEventListener("mouseenter", () => {
      if (isOpacityActive) {
        let currentOpacity = parseFloat(grid.style.opacity);
        grid.style.opacity = Math.min(currentOpacity + 0.1, 1);
      }
      isRandomColorActive
        ? (grid.style.backgroundColor = getRandomColor())
        : (grid.style.backgroundColor = "black");
    });
    container.appendChild(grid);
  }
}

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

createGrid(DEFAULT_SIDE_LENGTH);
