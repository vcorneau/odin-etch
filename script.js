const grid = document.getElementById("gridContainer");

const cell = document.createElement("div")
cell.className = "cell";
cell.id = "cell";

const row = document.createElement("div");
row.className = "row";
row.id = "row";


//Make 16 cells inside of row
function makeRowCells() {
    for(let i=0; i<3; i++) {
        row.appendChild(cell.cloneNode(true));
    }
}

//Make 16 rows of 16 cells
function createGrid() {
    for(let i=0; i<3; i++){
        makeRowCells();
        grid.appendChild(row);
    }
}

createGrid();


