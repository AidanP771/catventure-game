// Import modules
import { loadLevel } from "./components/levelLoader.js";
import { Player } from "./components/player.js";
import { keys, initInputListeners } from "./components/input.js";
import { Collectible } from "./components/collectibles.js";
import { initializeUI, showScreen, completeLevel } from "./components/ui.js";

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
let currentLevel = 1;

let animationFrameId;

// Initialize UI system with the startGame callback
initializeUI(startGame);

// Start the game with specific level
function startGame(levelNum) {
  // Store current level
  currentLevel = levelNum;

  // Reset game objects
  player = null;
  platforms = [];
  collectibles = [];
  goal = null;

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  // Show canvas and hide menus
  showScreen("gameCanvas");

  // Load the level and THEN start the game
  loadLevel(`levels/level${levelNum}.csv`, canvas.height).then((level) => {
    platforms = level.platforms;
    collectibles = level.collectibles;
    goal = level.goal;

    // Create the player object and link canvas + platform
    player = new Player(ctx, canvas, platforms);

    // Initialize input listeners for keyboard control
    initInputListeners();
    requestAnimationFrame(gameLoop);
  });
}

// Show win screen function
function showWinScreen() {
  // Mark current level as completed
  completeLevel(currentLevel);

  const winScreen = document.getElementById("winScreen");
  winScreen.classList.add("active");
  cancelAnimationFrame(animationFrameId);

  // Show/hide next level button based on available levels
  const nextButton = document.getElementById("nextLevel");
  if (currentLevel < 8) {
    // Update this based on max levels
    nextButton.style.display = "block";
    nextButton.textContent = `Next Level`;
  } else {
    nextButton.style.display = "none";
  }
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
