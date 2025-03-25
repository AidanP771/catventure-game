// Import modules
import { Player } from "./components/player.js";
import { keys, initInputListeners } from "./components/input.js";
import { Platform, drawAllPlatforms } from "./components/platform.js";

const platforms = [new Platform(200, 500, 400, 20, "red")];

// Get canvas and drawing context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Define physics constants
const GRAVITY = 0.5;
const JUMP_FORCE = -12;

// Initialize input listeners for keyboard control
initInputListeners();

// Create the player object and link canvas + platform
const player = new Player(ctx, canvas, Platform);

// Game loop that runs every frame
function gameLoop() {
  // Clear the canvas before drawing each frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and render game objects
  player.update(keys, GRAVITY, JUMP_FORCE);
  player.draw();
  drawAllPlatforms(ctx, platforms);

  // Request the next animation frame
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
