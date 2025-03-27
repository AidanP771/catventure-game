export class Goal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.color = "gold"; // Placeholder color
    this.reached = false;
  }

  draw(ctx) {
    if (!this.reached) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  checkCollision(player) {
    if (
      !this.reached &&
      player.x < this.x + this.width &&
      player.x + player.width > this.x &&
      player.y < this.y + this.height &&
      player.y + player.height > this.y
    ) {
      this.reached = true;
      console.log("Player touched the goal!");
      return true;
    }
    return false;
  }
}
