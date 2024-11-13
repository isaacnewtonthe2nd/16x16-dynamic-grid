let container = document.querySelector(".grid-container");

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let gridDimensions = prompt("Enter your grid dimensions: \nMAX: 100.");

  generateGrid(gridDimensions);
});

function generateGrid (dimensions) {
  let sumOfDivs = dimensions ** 2;
  let divsHeightWidth = (960 / dimensions) - 2;

  for (let i = 0; i < sumOfDivs; i++) {
    const divSquare = document.createElement("div");
    divSquare.style.cssText = `border: 1px solid black; width: ${divsHeightWidth}px; height: ${divsHeightWidth}px;`;
    container.appendChild(divSquare);
  }
}