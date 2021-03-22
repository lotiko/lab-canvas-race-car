function random(from, to) {
  console.log(from, to);
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

class Obstacle {
  constructor() {
    const minX = Math.round(W / 7);
    this.width = random(100, 400);
    this.height = 40;
    const maxX = Math.round(Math.floor(W - W / 7 - 20 - this.width));
    this.y = 0;
    this.x = random(minX, maxX);
  }

  draw() {
    this.y++;
    // console.log(this.x, this.y, this.width, this.height, ctx, frames);
    ctx.clearRect(this.x, this.y, this.width, this.height);
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  hits(car) {
    // TODO
  }
}
