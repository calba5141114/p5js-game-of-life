/*jshint esversion: 6 */

var grid;



class Cell {
  constructor(column, row, size) {
    this.column = column;
    this.row = row;
    this.size = size;
    this.isAlive = false;
  }

  draw() {
    if (this.isAlive) {
      fill(200, 0, 200);
    } else if (!this.isAlive) {
      fill(240);
    }
    noStroke();
    rect(this.column * this.size + 1, this.row * this.size + 1, this.size - 1, this.size - 1);
  }

}

class Grid {

  constructor(cellSize) {
    this.cellSize = cellSize;
    this.numberOfColumns = height / this.cellSize;
    this.numberOfRows = width / this.cellSize;
    this.cells = new Array(this.numberOfColumns);


    //  creates an array inside the indexes of the this.cells array the length of this.numberOfRows
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i] = new Array(this.numberOfRows); //
    }

    // filling the inner arrays with values.
    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row] = new Cell(column, row, this.cellSize);
      }
    }
  }

  draw() {
    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].draw();
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