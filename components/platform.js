// Class representing a single platform in the game
export class Platform {
  constructor(x, y, width, height, color = "red") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // Draw the platform to the canvas
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  // Placeholder for future platform behaviour (e.g., movement)
  update() {
    // Add movement logic here if needed later
  }
}

// Utility function to draw all platforms in one loop
export function drawAllPlatforms(ctx, platforms) {
  platforms.forEach((platform) => {
    platform.update();
    platform.draw(ctx);
  });
}
