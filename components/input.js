// Object to track which keys are currently pressed
export const keys = {};

// Set up keydown and keyup listeners to populate the keys object
export function initInputListeners() {
  window.addEventListener("keydown", (event) => {
    keys[event.key] = true;
  });

  window.addEventListener("keyup", (event) => {
    keys[event.key] = false;
  });
}
