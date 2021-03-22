let raf = 0;
let frames = 0;
let car = new Car();
let obstacles = [];
let gameover = false;
let points;

const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  console.log("test2");

  //
  // Iteration 1: road drawing
  //
  ctx.clearRect(0, 0, W, H);
  //goudron plus ligne discontinue
  ctx.beginPath();
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 8;
  ctx.moveTo(W / 2, 0);
  ctx.lineTo(W / 2, H);
  ctx.setLineDash([60, 30]);
  ctx.stroke();

  //herbe
  //gauche
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, W / 9, H);

  //droite
  ctx.fillRect(W - W / 9, 0, W, H);

  //ligne blanche
  //gauche
  ctx.fillStyle = "white";
  ctx.fillRect(W / 7, 0, 20, H);

  //droite
  ctx.fillRect(W - W / 7 - 20, 0, 20, H);

  //
  // Iteration 2: car drawing
  //
  car.draw();

  //
  // Iteration #4: obstacles
  //

  // TODO
  ctx.fillStyle = "red";
  if (frames % 300 === 0) {
    obstacles.push(new Obstacle());
  }
  for (let index = 0; index < obstacles.length; index++) {
    const element = obstacles[index];
    element.draw();
  }
  // obstacles.draw();
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
  // console.log(car, e.code);
  if (!car) return;
  switch (e.key) {
    case "ArrowLeft":
      car.moveLeft();
      break;
    case "ArrowRight":
      car.moveRight();
      break;

    default:
      break;
  }

  // TODO
};

function animLoop() {
  console.log("test", raf, frames);

  // draw();

  frames++;
  draw();

  if (/*!gameover*/ frames > 1000) {
    cancelAnimationFrame(raf);
  } else {
    raf = requestAnimationFrame(() => animLoop());
  }
}

function startGame() {
  // animLoop();
  // let ob = new Obstacle();
  // obstacles.push(ob);
  animLoop();
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

// auto-start
// startGame();
