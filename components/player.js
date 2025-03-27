import { loadGameProgress } from "./ui.js";

// Define the header height at the top of the file
const HEADER_HEIGHT = 32; // Adjust this value based on the actual height of the header in the sprite sheet

// Animation states enum
const AnimationState = {
  IDLE: { row: 1, col: 2 }, // Row 1, Column 2 for idle
  RUNNING_LEFT: { row: 3, startCol: 17, endCol: 20 }, // Row 3, Columns 17-20
  RUNNING_RIGHT: { row: 3, startCol: 17, endCol: 20 }, // Same as left, but flipped
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
    this.prevX = this.x;
    this.prevY = this.y;

    let moving = false;

    // Handle horizontal movement
    if (keys["ArrowLeft"] || keys["a"]) {
      this.x -= this.speed;
      this.frameY = AnimationState.RUNNING_LEFT.row;
      this.frameX = (this.frameX + 1) % (AnimationState.RUNNING_LEFT.endCol - AnimationState.RUNNING_LEFT.startCol + 1) + AnimationState.RUNNING_LEFT.startCol;
      this.facing = "left";
      moving = true;
    } else if (keys["ArrowRight"] || keys["d"]) {
      this.x += this.speed;
      this.frameY = AnimationState.RUNNING_RIGHT.row;
      this.frameX = (this.frameX + 1) % (AnimationState.RUNNING_RIGHT.endCol - AnimationState.RUNNING_RIGHT.startCol + 1) + AnimationState.RUNNING_RIGHT.startCol;
      this.facing = "right";
      moving = true;
    } else {
      // Idle animation
      this.frameY = AnimationState.IDLE.row;
      this.frameX = AnimationState.IDLE.col;
    }

    // Jumping logic
    if ((keys["ArrowUp"] || keys["w"] || keys[" "]) && !this.isJumping) {
      this.velocityY = jumpForce;
      this.isJumping = true;
    }

    // Apply gravity
    this.velocityY += gravity;
    this.y += this.velocityY;

    this.checkPlatformCollisions();

    // Clamp player within screen horizontally
    this.x = Math.max(0, Math.min(this.x, this.canvas.width - this.width));

    // Prevent falling below bottom of screen
    if (this.y + this.height > this.canvas.height) {
      this.y = this.canvas.height - this.height;
      this.velocityY = 0;
      this.isJumping = false;
    }

    // Update animation frame timer
    this.frameTimer += deltaTime;
    if (this.frameTimer >= this.frameDuration) {
      this.frameTimer = 0;
    }
  }

  // Draw the player sprite
  draw() {
    if (this.spriteLoaded) {
      const sourceX = this.frameX * this.frameWidth;
      const sourceY = this.frameY * this.frameHeight + HEADER_HEIGHT; // Add header offset

      if (this.facing === "right") {
        // Flip the sprite horizontally for running right
        this.ctx.save();
        this.ctx.scale(-1, 1); // Flip horizontally
        this.ctx.drawImage(
          this.sprite,
          sourceX,
          sourceY,
          this.frameWidth,
          this.frameHeight,
          -this.x - this.width, // Adjust for flipped position
          this.y,
          this.width,
          this.height
        );
        this.ctx.restore();
      } else {
        // Draw normally for other directions
        this.ctx.drawImage(
          this.sprite,
          sourceX,
          sourceY,
          this.frameWidth,
          this.frameHeight,
          this.x,
          this.y,
          this.width,
          this.height
        );
      }
    } else {
      // Fallback to a rectangle if the sprite isn't loaded
      this.ctx.fillStyle = "orange";
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
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
