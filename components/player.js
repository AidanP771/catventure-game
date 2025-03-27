import { loadGameProgress } from "./ui.js";

// Animation states enum
const AnimationState = {
  SITTING_UP: 0,
  SITTING_LEFT: 1,
  SITTING_DOWN: 2,
  SITTING_RIGHT: 3,
  LAYING_DOWN: 4,
  // Add more states as needed
};

// Player class definition - handles movement, jumping, and collision with platforms
export class Player {
  constructor(ctx, canvas, platforms) {
    this.ctx = ctx; // Drawing context
    this.canvas = canvas; // Reference to the game canvas
    this.platforms = platforms; // Array of platforms

    // Player position and size
    this.x = 0;
    this.y = 0;
    this.width = 32; // Update to match sprite size
    this.height = 32; // Update to match sprite size

    // Appearance and movement
    this.speed = 5;

    // Vertical motion variables
    this.velocityY = 0;
    this.isJumping = false;
    
    // Track previous position for collision handling
    this.prevX = this.x;
    this.prevY = this.y;
    
    // Animation properties
    this.frameX = 0; // Current frame in animation sequence
    this.frameY = AnimationState.SITTING_DOWN; // Default animation state
    this.frameWidth = 32;
    this.frameHeight = 32;
    this.frameCount = 8; // Frames per animation sequence
    this.frameDuration = 100; // Time per frame in ms
    this.frameTimer = 0; // Timer for animation
    this.facing = "down"; // Track facing direction
    
    // Sprite loading flag
    this.spriteLoaded = false;
    
    // Load sprite based on selected character
    this.loadSprite();
  }
  
  loadSprite() {
    // Get selected character from game progress
    const progress = loadGameProgress();
    const character = progress.selectedCharacter || "orange";
    
    // Fallback color based on character
    this.color = character === "orange" ? "#FF9900" : 
               character === "grey" ? "#AAAAAA" : 
               character === "black" ? "#333333" : "#FF9900";
    
    // Load sprite sheet
    this.sprite = new Image();
    
    // Handle successful load
    this.sprite.onload = () => {
      this.spriteLoaded = true;
      console.log(`Successfully loaded sprite: ${character}`);
    };
    
    // Handle loading error
    this.sprite.onerror = (err) => {
      console.error(`Failed to load sprite: ${character}`, err);
      this.spriteLoaded = false;
    };
    
    // Update path to match your actual file structure with correct spelling
    this.sprite.src = `assets/sprites/cats/${character}_0.png`;
    console.log(`Loading sprite: ${this.sprite.src}`);
  }

  // Update player position based on input, gravity, and collisions
  update(keys, gravity, jumpForce, deltaTime = 16) {
    // Store previous position for collision resolution
    this.prevX = this.x;
    this.prevY = this.y;

    // Track if player is moving
    let moving = false;

    // Handle horizontal movement and animation
    if (keys["ArrowLeft"] || keys["a"]) {
      this.x -= this.speed;
      this.frameY = AnimationState.SITTING_LEFT;
      this.facing = "left";
      moving = true;
    } else if (keys["ArrowRight"] || keys["d"]) {
      this.x += this.speed;
      this.frameY = AnimationState.SITTING_RIGHT;
      this.facing = "right";
      moving = true;
    } else {
      // If not moving, use the idle animation for current direction
      switch (this.facing) {
        case "up": this.frameY = AnimationState.SITTING_UP; break;
        case "left": this.frameY = AnimationState.SITTING_LEFT; break;
        case "right": this.frameY = AnimationState.SITTING_RIGHT; break;
        default: this.frameY = AnimationState.SITTING_DOWN;
      }
    }

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
    
    // Update animation frame
    this.frameTimer += deltaTime;
    if (this.frameTimer >= this.frameDuration) {
      // Only animate if moving
      if (moving) {
        this.frameX = (this.frameX + 1) % this.frameCount;
      } else {
        this.frameX = 0; // Reset to first frame when not moving
      }
      this.frameTimer = 0;
    }
  }

  // Draw the player sprite
  draw() {
    if (this.spriteLoaded) {
      try {
        // Draw the sprite
        this.ctx.drawImage(
          this.sprite,
          this.frameX * this.frameWidth,
          this.frameY * this.frameHeight,
          this.frameWidth,
          this.frameHeight,
          this.x,
          this.y,
          this.width,
          this.height
        );
      } catch (e) {
        // If drawing fails, fall back to rectangle
        console.error("Error drawing sprite:", e);
        this.drawFallback();
      }
    } else {
      this.drawFallback();
    }
  }
  
  // Fallback drawing method when sprite isn't available
  drawFallback() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    
    // Draw a simple face to indicate direction
    this.ctx.fillStyle = "black";
    switch(this.facing) {
      case "left":
        this.ctx.fillRect(this.x + 5, this.y + 10, 2, 2);  // Left eye
        this.ctx.fillRect(this.x + 5, this.y + 20, 10, 2); // Mouth
        break;
      case "right":
        this.ctx.fillRect(this.x + 25, this.y + 10, 2, 2); // Right eye
        this.ctx.fillRect(this.x + 17, this.y + 20, 10, 2); // Mouth
        break;
      default:
        this.ctx.fillRect(this.x + 10, this.y + 10, 2, 2); // Left eye
        this.ctx.fillRect(this.x + 20, this.y + 10, 2, 2); // Right eye
        this.ctx.fillRect(this.x + 10, this.y + 20, 12, 2); // Mouth
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
}
