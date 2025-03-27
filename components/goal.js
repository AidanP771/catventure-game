export class Goal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 32; // Match flag sprite width
    this.height = 32; // Match flag sprite height
    this.reached = false;

    // Load the flag image
    this.image = new Image();
    this.image.src = "assets/sprites/flag.png";
    this.imageLoaded = false;

    this.image.onload = () => {
      this.imageLoaded = true;
    };
  }

  draw(ctx) {
    if (!this.reached && this.imageLoaded) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
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
