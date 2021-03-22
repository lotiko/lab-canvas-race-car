class Car {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      this.w = 100;
      this.h = this.w / imgRatio;
      this.x = W / 2 - this.w / 2;
      this.y = H - H / 7;
    };
    img.src = "images/car.png";
  }

  draw() {
    console.log(this);
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  moveLeft() {
    this.x -= 20;
  }
  moveRight() {
    this.x += 20;
  }
}
