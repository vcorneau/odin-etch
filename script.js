const grid = document.getElementById("gridContainer");

const cell = document.createElement("div")
cell.className = "cell";
cell.id = "cell";

const row = document.createElement("div")
row.className = "row";
row.id = "row";

//Create a row inside gridContainer
grid.appendChild(row);

//Make a cell inside of row x 16 -- can I put this in a function and call x 16 rows?
for(let i=0; i<16; i++) {
    row.appendChild(cell.cloneNode(true));
}


//Make 16 rows of 16 cells
