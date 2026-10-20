function createGrid(gridSize, contWidth) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let div = document.createElement("div");
        div.classList = "square";
        div.style.width = `${contWidth / gridSize}px`;
        div.style.height = div.style.width;
        div.addEventListener('mouseover', () => {
            // let r = Math.floor(Math.random() * 256);
            // let g = Math.floor(Math.random() * 256);
            // let b = Math.floor(Math.random() * 256);
            // let color = `rgb(${r}, ${g}, ${b})`
            // div.style.backgroundColor = color;
            div.style.backgroundColor = "lightBlue";
        });
        container.appendChild(div);
    }
}

let container = document.querySelector(".container");
let contWidth = 850;
createGrid(16, contWidth);

const sizeBtn = document.querySelector('#size');
sizeBtn.addEventListener('click', () => {
    //return string
    let grid = prompt("Enter gird size : ");
    //converts to num
    //also converts 12abc to ab, which parseInt() will not do
    gridSize = Number(grid);
    //checks whether user clicks cancel
    if (grid === null) {
        return;
    }
    if (Number.isInteger(gridSize) && gridSize > 0 && gridSize <= 100) {
        container.innerHTML = "";
        createGrid(gridSize, contWidth);
    }
    else {
        alert("Please enter a valid number for the grid to be made");
    }

});
