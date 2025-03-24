// Player class definition - handles movement, jumping, and collision with platforms
export class Player {
  constructor(ctx, canvas, platform) {
    this.ctx = ctx; // Drawing context
    this.canvas = canvas; // Reference to the game canvas
    this.platform = platform; // The current platform the player can interact with

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
    const p = this.platform;
    if (
      this.velocityY >= 0 &&
      this.y + this.height >= p.y &&
      this.y + this.height - this.velocityY <= p.y &&
      this.x + this.width > p.x &&
      this.x < p.x + p.width
    ) {
      // Snap to top of platform
      this.y = p.y - this.height;
      this.velocityY = 0;
      this.isJumping = false;
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
