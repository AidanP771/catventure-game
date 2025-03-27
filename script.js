// Import modules
import { loadLevel } from "./components/levelLoader.js";
import { Player } from "./components/player.js";
import { keys, initInputListeners } from "./components/input.js";
import { Collectible } from "./components/collectibles.js";

// Get canvas and drawing context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Physics constants
const GRAVITY = 0.5;
const JUMP_FORCE = -12;

let player;
let platforms = [];
let collectibles = [];
let goal = null;

let animationFrameId;

// Load the level and THEN start the game
loadLevel("levels/level1.csv", canvas.height).then((level) => {
  platforms = level.platforms;
  collectibles = level.collectibles;
  goal = level.goal;

  // Create the player object and link canvas + platform
  player = new Player(ctx, canvas, platforms);

  // Initialize input listeners for keyboard control
  initInputListeners();
  requestAnimationFrame(gameLoop);
});

// Show win screen function
function showWinScreen() {
  const winScreen = document.getElementById("winScreen");
  winScreen.classList.add("active"); // Change display with js
  cancelAnimationFrame(animationFrameId);
}

// Game loop that runs every frame
function gameLoop() {
  // Clear the canvas before drawing each frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (player) {
    player.update(keys, GRAVITY, JUMP_FORCE);
    player.draw();
  }

  platforms.forEach((p) => p.draw(ctx));

  // Draw and check collision for each collectible
  collectibles.forEach((c) => {
    c.draw(ctx);
    if (c.checkCollision(player)) {
      console.log("Collected!");
      // TODO: Add score logic here
    }
  });

  // Draw and check goal
  if (goal && !goal.reached) {
    // Ensure the goal hasn't already been reached
    goal.draw(ctx);
    if (goal.checkCollision(player)) {
      // Display win UI
      showWinScreen();
    }
  }

  animationFrameId = requestAnimationFrame(gameLoop);
}
