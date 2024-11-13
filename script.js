let container = document.querySelector(".grid-container");

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let gridDimensions = prompt("Enter your grid dimensions: \nMAX: 100.");

  gridDimensions < 100 ? generateGrid(gridDimensions) : alert("MAX LIMIT! Enter a number less than 100.");
});

function generateGrid (dimensions) {
  let sumOfDivs = dimensions ** 2;
  let divsHeightWidth = (960 / dimensions);

  container.textContent = "";

  for (let i = 0; i < sumOfDivs; i++) {
    let howOpaque = 0;
    const divSquare = document.createElement("div");
    divSquare.style.cssText = `border: 1px solid black; width: ${divsHeightWidth}px; height: ${divsHeightWidth}px;`;
    divSquare.addEventListener("mouseenter", () => {
      gridColors(divSquare);
      howOpaque += 0.1;
      divSquare.style.opacity = `${howOpaque}`;
    });
    container.appendChild(divSquare);
  }
}

function gridColors (element) {
  let randomNumber = Math.round(Math.random() * 10);

  if (randomNumber <= 2) {
    element.style.backgroundColor = "orangered";
  } else if (randomNumber <= 4) {
    element.style.backgroundColor = "rebeccapurple";
  } else if (randomNumber <= 6) {
    element.style.backgroundColor = "turquoise";
  } else if (randomNumber <= 8) {
    element.style.backgroundColor = "stalegray";
  } else if (randomNumber <= 10) {
    element.style.backgroundColor = "navajowhite";
  }
}