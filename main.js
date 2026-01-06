const container = document.querySelector(".container");
const DEFAULT_SIDE_LENGTH = 16;
const gridSizeButton = document.querySelector(".grid-size-btn");

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
  const pixelWidth = containerWidth / sideLength;
  for (let index = 0; index < sideLength ** 2; index++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${pixelWidth}px`;
    newDiv.style.height = `${pixelWidth}px`;
    newDiv.addEventListener("mouseover", () => {
      newDiv.style.backgroundColor = "black";
    });
    container.appendChild(newDiv);
  }
}

createGrid(DEFAULT_SIDE_LENGTH);
