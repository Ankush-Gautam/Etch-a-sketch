const container = document.querySelector("#container");
const promptBtn = document.querySelector("#prompt-btn");
let input = 16; //by default 16

//validating user input
function getUserInput() {
  do {
    input = prompt("Enter no. of squares(1-100): ");
  } while (isNaN(input) || input < 1 || input > 100);

  return input;
}

//generate grid
function generateGrid(squares) {
  for (let i = 0; i < squares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < squares; j++) {
      const grid = document.createElement("div");
      grid.classList.add("grid-item");
      row.appendChild(grid);
    }

    container.appendChild(row);
  }
}

promptBtn.addEventListener("click", () => {
  container.innerHTML = "";
  generateGrid(getUserInput());
});

generateGrid(input);
