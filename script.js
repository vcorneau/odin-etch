const grid = document.getElementById("gridContainer");

const cell = document.createElement("div")
cell.className = "cell";
cell.id = "cell";

const row = document.createElement("div");
row.className = "row";
row.id = "row";

const sizeButton = document.getElementById("sizeButton");


//Make 16 cells inside of row
function makeRowCells() {
    for(let i=0; i<16; i++) {
        row.appendChild(cell.cloneNode(true));
    }
}

//Make 16 rows of 16 cells. 
function createGrid() {
    makeRowCells();
    for(let i=0; i<16; i++){
        grid.appendChild(row.cloneNode(true));
    }
}
createGrid();


//Changes cell color on mouseover
const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("mouseover", function changeCellClass() {
        cell.setAttribute("class", "selectedCell");
    })
})




