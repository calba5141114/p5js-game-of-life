var grid;



class Grid {

  constructor(cellSize) {
    this.cellSize = cellSize;
    this.numberOfColumns = height / this.cellSize;
    this.numberOfRows = width / this.cellSize;
    this.cells = new Array(this.numberOfColumns);

    for (let index of this.cells) {
      this.cells[index] = new Array(this.numberOfRows);
    }

  }

  draw() {
    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        fill(240);
        noStroke();
        rect(column * this.cellSize + 1, row * this.cellSize + 1, this.cellSize - 1, this.cellSize - 1);
      }
    }
  }
}




function setup() {
  createCanvas(400, 400);
  grid = new Grid(20);
}

function draw() {
  background(250);

  grid.draw();
}

var x = 4;
var y = 4;
var twoDArray = new Array(x);

for (let index of twoDArray) {
  twoDArray[index] = new Array(y);
}