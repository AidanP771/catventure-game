export class Player {
  constructor(ctx, canvas, platform) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.platform = platform;

    this.x = canvas.width / 2;
    this.y = canvas.height - 150;
    this.width = 40;
    this.height = 40;
    this.color = "orange";
    this.speed = 5;

    this.velocityY = 0;
    this.isJumping = false;
  }

  update(keys, gravity, jumpForce) {
    if (keys["ArrowLeft"] || keys["a"]) this.x -= this.speed;
    if (keys["ArrowRight"] || keys["d"]) this.x += this.speed;

    if ((keys["ArrowUp"] || keys["w"] || keys[" "]) && !this.isJumping) {
      this.velocityY = jumpForce;
      this.isJumping = true;
    }

    this.velocityY += gravity;
    this.y += this.velocityY;

    const p = this.platform;
    if (
      this.velocityY >= 0 &&
      this.y + this.height >= p.y &&
      this.y + this.height - this.velocityY <= p.y &&
      this.x + this.width > p.x &&
      this.x < p.x + p.width
    ) {
      this.y = p.y - this.height;
      this.velocityY = 0;
      this.isJumping = false;
    }

    this.x = Math.max(0, Math.min(this.x, this.canvas.width - this.width));

    if (this.y + this.height > this.canvas.height) {
      this.y = this.canvas.height - this.height;
      this.velocityY = 0;
      this.isJumping = false;
    }
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
