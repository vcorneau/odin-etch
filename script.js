const grid = document.getElementById("gridContainer");

const cell = document.createElement("div")
cell.className = "cell";
cell.id = "cell";

const row = document.createElement("div");
row.className = "row";
row.id = "row";

const button = document.querySelector(".button");

function promptUser() {
    let userInput = prompt("Grid how big?");
    let userInt = parseInt(userInput);
    return userInt;
}

button.addEventListener("click",promptUser);


//Make a row of cells equalt to gridSize
function makeRowCells() {
    for(let i=0; i<gridSize; i++) {
        row.appendChild(cell.cloneNode(true));
    }
}

//Make a square grid where the size is determined by gridSize
function createGrid() {
    makeRowCells();
    for(let i=0; i<gridSize; i++){
        grid.appendChild(row.cloneNode(true));
    }
}



//Changes cell color on mouseover
const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("mouseover", function() {
        cell.setAttribute("class", "selectedCell");
    })
})



