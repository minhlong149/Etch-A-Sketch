// Create a div container w/ squares inside

const gridSize = 5;

const container = document.querySelector("#square-grid");
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

for (let indx = 0; indx < gridSize * gridSize; ++indx) {
  const square = document.createElement("div");
  square.setAttribute("id", indx);
  square.classList.add("square");
  container.appendChild(square);
}

// generate random RGB value color

const colorHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomNumber() {
  return Math.floor(Math.random() * colorHex.length);
}

function randomHexColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorHex[randomNumber()];
  }
  return color;
}

// grid divs change color when your mouse passes over

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = randomHexColor();
  });
});

// A clear-current-grid button

// Change the number of squares per side of the grid

// [Opt] Having each pass another 10% of black
// [Opt] Only after 10 passes is the square completely black