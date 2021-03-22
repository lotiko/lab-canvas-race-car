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
    this.y += 5;
    // console.log(this.x, this.y, this.width, this.height, ctx, frames);
    ctx.clearRect(this.x, this.y, this.width, this.height);
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  hits(car) {
    // let t1 = this.bottom() > car.top();
    // let t1 = this.bottom() > car.top();
    // let t2 = this.right() > car.right();
    // let t3 = this.left() < car.left();
    // return t1 && t2 && t3;
    return (
      this.bottom() > car.top() &&
      this.top() < car.bottom() &&
      this.right() > car.left() &&
      this.left() < car.right()
    );
  }
}
