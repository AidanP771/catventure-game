// Player class definition - handles movement, jumping, and collision with platforms
export class Player {
  constructor(ctx, canvas, platforms) {
    this.ctx = ctx; // Drawing context
    this.canvas = canvas; // Reference to the game canvas
    this.platforms = platforms; // Array of platforms

    // Player position and size
    this.x = canvas.width / 2;
    this.y = canvas.height - 100;
    this.width = 40;
    this.height = 40;

    // Appearance and movement
    this.color = "orange";
    this.speed = 5;

    // Vertical motion variables
    this.velocityY = 0;
    this.isJumping = false;
    
    // Track previous position for collision handling
    this.prevX = this.x;
    this.prevY = this.y;
  }

  // Update player position based on input, gravity, and collisions
  update(keys, gravity, jumpForce) {
    // Store previous position for collision resolution
    this.prevX = this.x;
    this.prevY = this.y;

    // Handle horizontal movement
    if (keys["ArrowLeft"] || keys["a"]) this.x -= this.speed;
    if (keys["ArrowRight"] || keys["d"]) this.x += this.speed;

    // Jumping logic
    if ((keys["ArrowUp"] || keys["w"] || keys[" "]) && !this.isJumping) {
      this.velocityY = jumpForce;
      this.isJumping = true;
    }

    // Apply gravity
    this.velocityY += gravity;
    this.y += this.velocityY;

    // Check collision with each platform
    this.checkPlatformCollisions();

    // Clamp player within screen horizontally
    this.x = Math.max(0, Math.min(this.x, this.canvas.width - this.width));

    // Prevent falling below bottom of screen
    if (this.y + this.height > this.canvas.height) {
      this.y = this.canvas.height - this.height;
      this.velocityY = 0;
      this.isJumping = false;
    }
  }

  // Comprehensive platform collision detection
  checkPlatformCollisions() {
    for (const platform of this.platforms) {
      // Skip if not colliding at all
      if (
        this.x + this.width <= platform.x ||
        this.x >= platform.x + platform.width ||
        this.y + this.height <= platform.y ||
        this.y >= platform.y + platform.height
      ) {
        continue;
      }

      // Calculate overlap on all sides
      const overlapTop = this.y + this.height - platform.y;
      const overlapBottom = platform.y + platform.height - this.y;
      const overlapLeft = this.x + this.width - platform.x;
      const overlapRight = platform.x + platform.width - this.x;

      // Find the smallest overlap to determine which side we're colliding with
      const minOverlap = Math.min(overlapTop, overlapBottom, overlapLeft, overlapRight);

      // Resolve based on smallest overlap (most likely collision side)
      if (minOverlap === overlapTop && this.prevY + this.height <= platform.y) {
        // Top collision (landing on platform)
        this.y = platform.y - this.height;
        this.velocityY = 0;
        this.isJumping = false;
      } else if (minOverlap === overlapBottom && this.prevY >= platform.y + platform.height) {
        // Bottom collision (hitting head)
        this.y = platform.y + platform.height;
        this.velocityY = 0;
      } else if (minOverlap === overlapLeft && this.prevX + this.width <= platform.x) {
        // Left collision (hitting right side of player against left side of platform)
        this.x = platform.x - this.width;
      } else if (minOverlap === overlapRight && this.prevX >= platform.x + platform.width) {
        // Right collision (hitting left side of player against right side of platform)
        this.x = platform.x + platform.width;
      }
    }
  }

  // Draw the player as a filled rectangle
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
