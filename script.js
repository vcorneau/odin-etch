const grid = document.getElementById("gridContainer");

const cell = document.createElement("div")
cell.className = "cell";
cell.id = "cell";

const row = document.createElement("div")
row.className = "row";
row.id = "row";

//Create a row inside gridContainer
grid.appendChild(row);

//Make a cell inside of row x 16
for(let i=0; i<16; i++) {
    row.appendChild(cell.cloneNode(true));
}

//Make a row of 16 cells


//Make 16 rows of 16 cells
