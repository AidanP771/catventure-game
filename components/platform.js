// Class representing a single platform in the game
export class Platform {
  constructor(x, y, width, height, color = "black", type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color; // Fallback color
    this.type = type; // "top" or "pole"

    // Load sprites
    this.sprites = {
      platform: new Image(),
      pole: new Image(),
    };

    this.sprites.platform.src = "assets/sprites/singular_plat.png";
    this.sprites.pole.src = "assets/sprites/big_pole.png";

    // Track if sprites are loaded
    this.spritesLoaded = {
      platform: false,
      pole: false,
    };

    // Set up sprite load event handlers
    this.sprites.platform.onload = () => {
      this.spritesLoaded.platform = true;
    };

    this.sprites.pole.onload = () => {
      this.spritesLoaded.pole = true;
    };

    // Handle loading errors
    this.sprites.platform.onerror = (err) => {
      console.error("Error loading platform sprite:", err);
    };

    this.sprites.pole.onerror = (err) => {
      console.error("Error loading pole sprite:", err);
    };
  }

  // Draw the platform to the canvas
  draw(ctx) {
    const isHighContrast = document.body.classList.contains("high-contrast");
    const platformColor = isHighContrast ? "#FFFFFF" : this.color; // White in high contrast, otherwise original color

    ctx.fillStyle = platformColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  // Placeholder for future platform behavior
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
