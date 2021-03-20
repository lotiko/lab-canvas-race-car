function random(from, to) {
  Math.floor(Math.random() * (to - from + 1)) + from;
}

class Obstacle {
  constructor() {
    const minX = W / 7;
    this.width = random(100, 400);
    this.height = 40;
    const maxX = W - W / 7 - 20 - this.width;
    this.y = 0;
    this.x = random(minX, maxX);
  }

  draw() {
    // TODO
  }

  hits(car) {
    // TODO
  }
}
