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
