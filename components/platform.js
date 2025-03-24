// A temporary platform used for testing
export const testPlatform = {
  x: 200,
  y: 500,
  width: 400,
  height: 20,
  color: "red",
};

// Function to draw a single platform rectangle on the canvas
export function drawPlatform(ctx, platform) {
  ctx.fillStyle = platform.color;
  ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
}
