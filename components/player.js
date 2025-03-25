// Player class definition - handles movement, jumping, and collision with platforms
export class Player {
  constructor(ctx, canvas, platforms) {
    this.ctx = ctx; // Drawing context
    this.canvas = canvas; // Reference to the game canvas
    this.platform = platforms; // The current platform the player can interact with

    // Player position and size
    this.x = canvas.width / 2;
    this.y = canvas.height - 150;
    this.width = 40;
    this.height = 40;

    // Appearance and movement
    this.color = "orange";
    this.speed = 5;

    // Vertical motion variables
    this.velocityY = 0;
    this.isJumping = false;
  }

  // Update player position based on input, gravity, and collisions
  update(keys, gravity, jumpForce) {
    // Handle horizontal movement
    if (keys["ArrowLeft"] || keys["a"]) this.x -= this.speed;
    if (keys["ArrowRight"] || keys["d"]) this.x += this.speed;

    // Jumping logic
    if ((keys["ArrowUp"] || keys["w"] || keys[" "]) && !this.isJumping) {
      this.velocityY = jumpForce;
      this.isJumping = true;
    }

    // Apply gravity and update vertical position
    this.velocityY += gravity;
    this.y += this.velocityY;

    // Platform collision detection
    for (const platform of this.platform) {
      if (
        this.velocityY >= 0 && // Only check when falling
        this.y + this.height >= platform.y &&
        this.y + this.height - this.velocityY <= platform.y &&
        this.x + this.width > platform.x &&
        this.x < platform.x + platform.width
      ) {
        // Snap to top of platform
        this.y = platform.y - this.height;
        this.velocityY = 0;
        this.isJumping = false;
        break; // Stop checking other platforms once landed
      }
    }

    // Clamp horizontal movement to within canvas bounds
    this.x = Math.max(0, Math.min(this.x, this.canvas.width - this.width));

    // Prevent falling below the bottom of the screen
    if (this.y + this.height > this.canvas.height) {
      this.y = this.canvas.height - this.height;
      this.velocityY = 0;
      this.isJumping = false;
    }
  }

  // Draw the player as a filled rectangle
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
