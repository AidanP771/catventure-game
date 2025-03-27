export class Collectible {
  constructor(x, y, type = "yarn") {
    this.x = x;
    this.y = y;
    this.width = 32; // Set width to 32
    this.height = 32; // Set height to 32
    this.type = type;
    this.collected = false;

    // Load images
    this.image = new Image();
    if (type === "fish") {
      this.image.src = "assets/sprites/Fish.png";
    } else {
      this.image.src = "assets/sprites/yarnball.png";
    }

    this.imageLoaded = false;
    this.image.onload = () => {
      this.imageLoaded = true;
    };
  }

  draw(ctx) {
    if (!this.collected && this.imageLoaded) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
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
