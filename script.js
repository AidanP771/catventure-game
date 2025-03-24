// Get reference to the canvas element and set up the context for 2D drawing
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Define the frames per second we want to run at (optional, for future logic)
const FPS = 60;

// Player class definition
class Player {
  constructor() {
    // Starting position of the player character (centre bottom)
    this.x = canvas.width / 2;
    this.y = canvas.height - 50;
    this.width = 40;
    this.height = 40;
    this.colour = "orange"; // Placeholder player colour
    this.speed = 5;
  }

  update() {
    // Movement will be handled based on key input (placeholder)
    if (keys["ArrowLeft"] || keys["a"]) {
      this.x -= this.speed;
    }
    if (keys["ArrowRight"] || keys["d"]) {
      this.x += this.speed;
    }

    // Prevent player from going off screen
    this.x = Math.max(0, Math.min(this.x, canvas.width - this.width));
  }

  draw() {
    ctx.fillStyle = this.colour;
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

  // Request the next frame to keep the loop going
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
