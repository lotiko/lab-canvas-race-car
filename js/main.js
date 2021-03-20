let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  //
  //goudron plus ligne discontinue
  ctx.beginPath();
  ctx.fillStyle = 'grey';
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 8;
  ctx.moveTo(W/2, 0);
  ctx.lineTo(W/2, H);
  ctx.setLineDash([60, 30]);
  ctx.stroke();
  
  //herbe
  //gauche
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, W/9, H);

  //droite
  ctx.fillRect(W-W/9, 0, W, H);

  //ligne blanche
  //gauche
  ctx.fillStyle = 'white';
  ctx.fillRect(W/7, 0, 20, H);

  //droite
  ctx.fillRect(W -W/7 - 20, 0, 20, H);

  //
  // Iteration 2: car drawing
  //
  car = new Car();
  car.draw();
  

  //
  // Iteration #4: obstacles
  //

  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;

  // TODO
}

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

 

  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();

