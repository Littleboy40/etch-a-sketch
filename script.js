let gridContainer = document.querySelector("#grid-container");
gridContainer.style.display = "inline-block";
for (let i = 0; i < 16; i++) {
    let gridRow = document.createElement("div");
    gridRow.style.display = "flex";
    for (let j = 0; j < 16; j++) {
        let gridCell = document.createElement("div");
        gridCell.style.border = "thin solid #000000";
        gridCell.style.padding = "5px";
        gridRow.appendChild(gridCell);
    }
    gridContainer.appendChild(gridRow);
}

function highlight(event) {
    event.target.style.backgroundColor = "yellow";
    event.stopPropagation();
}

function unhighlight(event) {
    event.target.style.backgroundColor = "white";
}

gridContainer.addEventListener("mouseover", highlight);
gridContainer.addEventListener("mouseout", unhighlight);