const container = document.querySelector("#container");

//creating a 16x16 grid
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-item");
    container.appendChild(grid);
  }
}
