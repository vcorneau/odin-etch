const grid = document.getElementById("gridContainer");

const cell = document.createElement("div")
cell.className = "cell";
cell.id = "cell";

const row = document.createElement("div");
row.className = "row";
row.id = "row";


//Make 16 cells inside of row
function makeRowCells() {
    for(let i=0; i<16; i++) {
        row.appendChild(cell.cloneNode(true));
    }
}

//Make 16 rows of 16 cells. Right now, increases number of cells each row. Need to fix.
function createGrid() {
    makeRowCells();
    for(let i=0; i<16; i++){
        grid.appendChild(row.cloneNode(true));
    }
}

createGrid();


