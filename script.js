// Get reference to the canvas element and set up the context for 2D drawing
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Define the frames per second we want to run at (optional, for future logic)
const FPS = 60;

// Gravity constant to simulate falling
const GRAVITY = 0.5;
const JUMP_FORCE = -12;

// Platform dimensions (temporary single platform for testing)
const platform = {
  x: 200,
  y: 500,
  width: 400,
  height: 20,
  color: "red",
};

// Player class definition
class Player {
  constructor() {
    // Starting position of the player character (centre bottom)
    this.x = canvas.width / 2;
    this.y = canvas.height - 150; // Start on the platform
    this.width = 40;
    this.height = 40;
    this.color = "orange"; // Placeholder player colour
    this.speed = 5;

    // Vertical movement variables
    this.velocityY = 0;
    this.isJumping = false;
  }

  update() {
    // Movement will be handled based on key input (placeholder)
    // Horizontal movement
    if (keys["ArrowLeft"] || keys["a"]) {
      this.x -= this.speed;
    }
    if (keys["ArrowRight"] || keys["d"]) {
      this.x += this.speed;
    }

    // Jumping
    if ((keys["ArrowUp"] || keys["w"] || keys[" "]) && !this.isJumping) {
      this.velocityY = JUMP_FORCE;
      this.isJumping = true;
    }
    // Apply gravity
    this.velocityY += GRAVITY;
    this.y += this.velocityY;

    // Collision with platform
    // Check if player is touching the platform or was touching it in the previous frame
    // and is now intersecting with it
    if (
      this.velocityY >= 0 &&
      this.y + this.height >= platform.y &&
      this.y + this.height - this.velocityY <= platform.y &&
      this.x + this.width > platform.x &&
      this.x < platform.x + platform.width
    ) {
      this.y = platform.y - this.height;
      this.velocityY = 0;
      this.isJumping = false;
    }

    // Prevent player from going off screen horizontally
    this.x = Math.max(0, Math.min(this.x, canvas.width - this.width));

    // Prevent falling below canvas (fail-safe)
    if (this.y > canvas.height) {
      this.y = platform.y - this.height;
      this.velocityY = 0;
      this.isJumping = false;
    }
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// Track key input state
const keys = {};

// Event listeners for key press and release
window.addEventListener("keydown", (event) => {
  keys[event.key] = true;
});

window.addEventListener("keyup", (event) => {
  keys[event.key] = false;
});

// Create the player object
const player = new Player();

// Game loop function
function gameLoop() {
  // Clear the canvas each frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw game objects
  player.update();
  player.draw();

  // Draw the platform
  ctx.fillStyle = platform.color;
  ctx.fillRect(platform.x, platform.y, platform.width, platform.height);

  // Request the next frame to keep the loop going
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
