// Game progress and UI management

// Load completed levels from localStorage or initialize if not present
export function loadGameProgress() {
  const savedProgress = localStorage.getItem("catventureProgress");
  if (savedProgress) {
    return JSON.parse(savedProgress);
  } else {
    // Default progress: only level 1 is unlocked
    const defaultProgress = {
      currentLevel: 1,
      unlockedLevels: [1],
      maxLevel: 8, // Update this if you add more levels
      settings: {
        soundVolume: 50,
        highContrast: false,
      },
      selectedCharacter: "orange", // Default character
    };
    saveGameProgress(defaultProgress);
    return defaultProgress;
  }
}

// Save game progress to localStorage
export function saveGameProgress(progress) {
  localStorage.setItem("catventureProgress", JSON.stringify(progress));
}

// Mark a level as completed and unlock the next one
export function completeLevel(levelNum) {
  const progress = loadGameProgress();

  // If this level wasn't already completed
  if (
    !progress.unlockedLevels.includes(levelNum + 1) &&
    levelNum < progress.maxLevel
  ) {
    progress.unlockedLevels.push(levelNum + 1);
  }

  // Update current level if advancing
  if (levelNum + 1 > progress.currentLevel && levelNum < progress.maxLevel) {
    progress.currentLevel = levelNum + 1;
  }

  saveGameProgress(progress);
  return progress;
}

export function resetGameProgress() {
  const defaultProgress = {
    currentLevel: 1,
    unlockedLevels: [1],
    maxLevel: 8,
    settings: {
      soundVolume: 50,
      highContrast: false,
    },
    selectedCharacter: "orange",
  };
  saveGameProgress(defaultProgress);
  return defaultProgress;
}

// Show specified screen and hide others
export function showScreen(screenId) {
  // Hide all screens
  document
    .querySelectorAll(".overlay-screen, #gameCanvas")
    .forEach((screen) => {
      screen.classList.remove("active");
      if (screen.id === "gameCanvas") {
        screen.style.display = "none";
      }
    });

  // Show requested screen
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    if (screenId === "gameCanvas") {
      targetScreen.style.display = "block";
    } else {
      targetScreen.classList.add("active");
    }
  }
}

// Generate level selection buttons
export function populateLevelSelect() {
  const progress = loadGameProgress();
  const levelButtons = document.getElementById("levelButtons");
  levelButtons.innerHTML = "";

  for (let i = 1; i <= progress.maxLevel; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.classList.add("level-button");

    // Check if level is unlocked
    if (progress.unlockedLevels.includes(i)) {
      button.addEventListener("click", () => {
        // Start game with the selected level
        startGame(i);
      });
    } else {
      button.classList.add("locked");
      button.disabled = true;
    }

    levelButtons.appendChild(button);
  }
}

// Load settings from progress
function loadSettings() {
  const progress = loadGameProgress();
  const volumeSlider = document.getElementById("soundVolume");
  const contrastToggle = document.getElementById("highContrast");

  if (volumeSlider) volumeSlider.value = progress.settings.soundVolume;
  if (contrastToggle) contrastToggle.checked = progress.settings.highContrast;

  // Apply high contrast if enabled
  if (progress.settings.highContrast) {
    document.body.classList.add("high-contrast");
  } else {
    document.body.classList.remove("high-contrast");
  }
}

// Save settings to progress
function saveSettings() {
  const progress = loadGameProgress();
  const volumeSlider = document.getElementById("soundVolume");
  const contrastToggle = document.getElementById("highContrast");

  if (volumeSlider)
    progress.settings.soundVolume = parseInt(volumeSlider.value);
  if (contrastToggle) progress.settings.highContrast = contrastToggle.checked;

  saveGameProgress(progress);

  // Apply high contrast if enabled
  if (progress.settings.highContrast) {
    document.body.classList.add("high-contrast");
  } else {
    document.body.classList.remove("high-contrast");
  }
}

// Character selection handling - update this function
function setupCharacterSelection() {
  const progress = loadGameProgress();
  const characterOptions = document.querySelectorAll(".character-option");

  // Remove color background and add sprite preview
  characterOptions.forEach((option, index) => {
    const previewDiv = option.querySelector(".character-preview");
    
    // Clear any existing content
    previewDiv.style.backgroundColor = "";
    previewDiv.innerHTML = "";
    
    // Set character color as fallback with correct spelling
    const characterType = index === 0 ? "orange" : "grey";
    const characterColor = characterType === "orange" ? "#FF9900" : "#AAAAAA";
    previewDiv.style.backgroundColor = characterColor;
    
    // Create sprite preview with error handling - update path with correct spelling
    const img = document.createElement("img");
    img.src = `assets/sprites/cats/${characterType}_0.png`;
    img.style.objectFit = "cover";
    img.style.width = "100%";
    img.style.height = "100%";
    
    img.onerror = () => {
      console.error(`Failed to load character preview: ${characterType}_0.png`);
      previewDiv.style.backgroundColor = characterColor;
    };
    
    previewDiv.appendChild(img);
    
    // Mark the currently selected character
    if (
      (index === 0 && progress.selectedCharacter === "orange") ||
      (index === 1 && progress.selectedCharacter === "grey")
    ) {
      option.classList.add("selected");
    } else {
      option.classList.remove("selected");
    }

    // Add click event to select character
    option.addEventListener("click", () => {
      characterOptions.forEach((opt) => opt.classList.remove("selected"));
      option.classList.add("selected");

      // Save selection
      progress.selectedCharacter = index === 0 ? "orange" : "grey";
      saveGameProgress(progress);
    });
  });
}

// Function to initialize menu UI and event listeners
export function initializeUI(startGameCallback) {
  // Store the callback
  startGame = startGameCallback;

  // Main menu buttons
  document.getElementById("startGame").addEventListener("click", () => {
    const progress = loadGameProgress();
    startGame(progress.currentLevel);
  });

  document.getElementById("levelSelect").addEventListener("click", () => {
    populateLevelSelect();
    showScreen("levelSelectMenu");
  });

  // New buttons for character and settings
  document.getElementById("characterButton").addEventListener("click", () => {
    setupCharacterSelection();
    showScreen("characterMenu");
  });

  document.getElementById("settingsButton").addEventListener("click", () => {
    loadSettings();
    showScreen("settingsMenu");
  });

  // Level select menu
  document.getElementById("backToMain").addEventListener("click", () => {
    showScreen("mainMenu");
  });

  // Character menu
  document.getElementById("backFromCharacter").addEventListener("click", () => {
    showScreen("mainMenu");
  });

  // Settings menu
  document.getElementById("backFromSettings").addEventListener("click", () => {
    saveSettings();
    showScreen("mainMenu");
  });

  // Reset progress button
  document.getElementById("resetProgress").addEventListener("click", () => {
    if (confirm("Are you sure you want to reset all game progress? This will reset all unlocked levels and settings.")) {
      resetGameProgress();
      loadSettings(); // Reload settings to reflect reset
      alert("Game progress has been reset!");
    }
  });

  // Settings change events
  const volumeSlider = document.getElementById("soundVolume");
  const contrastToggle = document.getElementById("highContrast");

  if (volumeSlider) {
    volumeSlider.addEventListener("change", saveSettings);
  }

  if (contrastToggle) {
    contrastToggle.addEventListener("change", saveSettings);
  }

  // Win screen
  document.getElementById("nextLevel").addEventListener("click", () => {
    const progress = loadGameProgress();
    if (progress.currentLevel <= progress.maxLevel) {
      startGame(progress.currentLevel);
    } else {
      // All levels completed
      showScreen("mainMenu");
    }
  });

  document.getElementById("returnToMenu").addEventListener("click", () => {
    showScreen("mainMenu");
  });

  // Pause menu
  document.getElementById("resumeGame")?.addEventListener("click", () => {
    showScreen("gameCanvas");
    // Resume game logic would go here
  });

  document.getElementById("quitToMenu")?.addEventListener("click", () => {
    showScreen("mainMenu");
  });

  // Add restart game functionality
  document.getElementById("restartGame")?.addEventListener("click", () => {
    const progress = loadGameProgress();
    startGame(progress.currentLevel); // Restart the current level
  });

  // Setup escape key to pause
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const canvas = document.getElementById("gameCanvas");
      if (canvas.style.display === "block") {
        showScreen("pauseMenu");
      }
    }
  });
}

// This will be assigned in initializeUI
let startGame = null;
