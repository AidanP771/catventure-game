import { Player } from "./components/player.js";
import { keys, initInputListeners } from "./components/input.js";
import { testPlatform, drawPlatform } from "./components/platform.js";

// Canvas setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Constants
const GRAVITY = 0.5;
const JUMP_FORCE = -12;

// Input setup
initInputListeners();

// Create player
const player = new Player(ctx, canvas, testPlatform);

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update(keys, GRAVITY, JUMP_FORCE);
  player.draw();
  drawPlatform(ctx, testPlatform);
  requestAnimationFrame(gameLoop);
}

gameLoop();
