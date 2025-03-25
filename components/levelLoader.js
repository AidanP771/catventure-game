import { Platform } from "./platform.js";

const TILE_SIZE = 50;

/**
 * Load a CSV level file and convert it into game objects.
 * @param {string} path - Relative path to the CSV file
 * @returns {Promise<{ platforms: Platform[], collectibles: Object[], goal: Object | null }>}
 */
export async function loadLevel(path, canvasHeight) {
  const response = await fetch(path);
  const text = await response.text();

  const platforms = [];
  const collectibles = [];
  let goal = null;

  const rows = text.trim().split("\n");
  const rowCount = rows.length;

  rows.forEach((line, rowIndex) => {
    const cols = line.split(",");
    cols.forEach((char, colIndex) => {
      const x = colIndex * TILE_SIZE;
      const y =
        canvasHeight - (rowCount - 1) * TILE_SIZE + rowIndex * TILE_SIZE;

      switch (char.trim()) {
        case "0":
          platforms.push(new Platform(x, y, TILE_SIZE, TILE_SIZE));
          break;
        case "$":
          collectibles.push({ x, y }); // replace with a Collectible class later
          break;
        case "!":
          goal = { x, y }; // replace with a Goal class later
          break;
      }
    });
  });

  return { platforms, collectibles, goal };
}
