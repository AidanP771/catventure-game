export class Collectible {
  constructor(x, y, type = "yarn") {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.type = type;
    this.collected = false;

    // Placeholder colours by type
    this.color = type === "fish" ? "blue" : "purple";
  }

  draw(ctx) {
    if (!this.collected) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  checkCollision(player) {
    if (
      !this.collected &&
      player.x < this.x + this.width &&
      player.x + player.width > this.x &&
      player.y < this.y + this.height &&
      player.y + player.height > this.y
    ) {
      this.collected = true;
      return true;
    }
    return false;
  }
}
