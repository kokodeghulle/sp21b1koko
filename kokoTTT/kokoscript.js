var sports = [
    [0,0,0]
    [0,0,0]
    [0,0,0]
];

var curentplayer = 1;

function draw() {
    background(220);
    strokeWeight(4);
    line(0, height / 3, width, height / 3) ;
    line(0, height / 3, * 2, width, height / 3 * 2) ;
    line(width / 3, 0, width / 3, height) ;
    line(width / 3* 2, 0, width / 3 * 2, height);
    for(row = 0; row < sports.length; row++) {
        for(col = 0; col < sports[row].length; col++) {
            var mark = sports[row] [col];
            if(mark == 1) {
              drawX(row, col);
              else if (mark == 2) {
              drawO(row, col);
              else {
              continue;
              }
              
            }
            
            }
        }
    }
}

function mouseClicked() {
      row = getRowForClick(mouseY);
      col = getColForClick(mouseX);
   // console.log(row + " " + col);
   sports[row] [col] = currentPlayer;
   if(currentPlayer == 1) { current player = 1; }
   else { curremtPlayer = 1; }
   // console.log(sports);
   redraw();
   // prvent default
   return false;
}

// This function return the row that the user clicked
function getRowForClick(Y) {
    if ( y < height / 3 * 2 ) {
        return 0;
        else if( y < height / 3 * 2 ) {
        return 1;
        else {
        return 2;
        }
        }
    }
}
}