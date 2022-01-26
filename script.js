// Create a div container w/ squares inside

let gridSize = 16;
const container = document.querySelector("#square-grid");

function generateGrid(container, gridSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let indx = 0; indx < gridSize * gridSize; ++indx) {
    const square = document.createElement("div");
    square.setAttribute("id", indx);
    square.classList.add("square");
    container.appendChild(square);
  }
}

// generate random RGB value color
function randomHexColor() {
  const colorHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  function randomNumber() {
    return Math.floor(Math.random() * colorHex.length);
  }

  let color = "#";
  for (let indx = 0; indx < 6; ++indx) {
    color += colorHex[randomNumber()];
  }
  return color;
}

// grid divs change color when your mouse passes over
function colorize() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = randomHexColor();
    });
  });
}

// Start
generateGrid(container, gridSize);
colorize();

// A clear-current-grid button
const cleanButton = document.querySelector("#clean-btn");
cleanButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "black";
  });

  // Change the number of squares per side of the grid
  let gridSize = window.prompt(
    "Enter the number of squares per side for the new grid:",
    16
  );
  while (gridSize >= 100) {
    gridSize = window.prompt("Please choose a maximum of 100!", 16);
  }

  (function cleanGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.remove();
    });
  })();

  const container = document.querySelector("#square-grid");

  generateGrid(container, gridSize);
  colorize();
});

// [Opt] Having each pass another 10% of black
// [Opt] Only after 10 passes is the square completely black
