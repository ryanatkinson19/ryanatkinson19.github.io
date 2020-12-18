  var x, y;
    function setup() {
      createCanvas(500, 500);
      x = 0;
      y = 0;
    }

 function draw() {
      if(mouseIsPressed) {
        drawing1();
      } else {
        drawing2();
      }
    }