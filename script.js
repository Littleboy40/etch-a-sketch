let gridContainer = document.querySelector("#grid-container");
gridContainer.style.display = "inline-block";

let updateButton = document.querySelector("#user-input");

function highlight(event) {
    event.target.style.backgroundColor = "yellow";
    event.stopPropagation();
}

function unhighlight(event) {
    event.target.style.backgroundColor = "white";
}

function generateGrid(gridSize) {
    emptyGrid();

    for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement("div");
    gridRow.style.display = "flex";
    for (let j = 0; j < gridSize; j++) {
        let gridCell = document.createElement("div");
        gridCell.style.boxSizing = "border-box";
        gridCell.style.border = `${16/gridSize}px solid #000000`;
        gridCell.style.padding = `${80/gridSize}px`;
        gridRow.appendChild(gridCell);
    }
    gridContainer.appendChild(gridRow);
    }
}

function emptyGrid() {
    gridContainer.innerHTML = '';
}

function updateGrid() {
    let number = prompt("What should the new grid size be? Please enter a number between 1 and 100.");
    while (isNaN(number) || number < 0 || 100 < number) {
        number = prompt("Try again!");
    }
    generateGrid(number);
}

let defaultgridSize = 16;
generateGrid(defaultgridSize);

gridContainer.addEventListener("mouseover", highlight);
// gridContainer.addEventListener("mouseout", unhighlight);
updateButton.addEventListener("click", updateGrid);