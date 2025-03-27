# Catventure: Platform Paw-sibilities

## 🐾 Overview

Catventure is a 2D platformer where players guide a nimble cat through platforms, collect fish treats and yarn balls while dodge dangers to reach the cozy cat bed at the end. Designed for web browsers using HTML, CSS, and JavaScript.

## 🎯 Objective

Deliver a fun and accessible game experience while showcasing modern UI/UX principles, front-end development, and inclusive design.

## 📁 How to Play
  ### 🎮 Controls
  - Move Left: ← or A
  - Move Right: → or D
  - Jump: Spacebar or W
  - Toggle High Contrast: [Accessible UI Button]
    
  ### 🧩 Goal
  Navigate through each level by jumping on platforms, collecting yarn balls and   fish, and avoiding obstacles. Reach the cozy cat bed to finish the level.

## 🔧 Technology Stack

- **Languages**: HTML5, CSS3, JavaScript (Vanilla)
- **Design Tools**: Figma
- **Libraries**: N/A

## 🗂️ Project Structure (File/Folder Setup)

```
/catventure/
│
├── index.html              # Main HTML file
├── style.css               # Main CSS file
├── script.js               # Entry point – initializes the game and ties it together
├── assets/
│   ├── images/             # Cat sprite, background, collectibles, etc.
│   └── audio/              # Jump, collect, win/loss sounds
├── components/
│   ├── player.js           # Player class (movement, jump, draw)
│   ├── platform.js         # Platform class and rendering utilities
│   ├── collectibles.js     # Yarn balls or fish items
│   ├── ui.js               # UI functions (start screen, score, toggle, etc.)
|   ├── input.js            # Keyboard input tracking
|   └── levelLoader.js      # Parses CSV Level into a 2D grid array to form levels
├── levels/
|   ├── level1.csv
│   ├── level2.csv
│   └── ...
├── privacy.html            # Simple privacy policy page
├── accessibility.js        # High contrast toggle, scalable font logic
└── README.md
```

## 🧭 User Flow

1. Start Menu → 2. Instructions → 3. Gameplay → 4. Game Over/Win Screen

## ♿ Accessibility

- WCAG color-contrast compliance
- All UI elements keyboard-navigable
- Alt text for images
- High-contrast toggle
- Scalable text

## 👤 User Personas

User personas are fictional representations of your target audience, crafted to guide design and development decisions by understanding user needs, behaviours, and challenges. Below are two sample personas relevant to your game:

### Persona 1: **Liam, Age 9**

- **Background:** Elementary school student who enjoys animal-themed games.
- **Goals:**
  - Engage in fun, easy-to-understand gameplay.
  - Experience a sense of achievement through collecting items and completing levels.
- **Frustrations:**
  - Complex controls that are hard to remember.
  - Text-heavy instructions that are challenging to read.
- **Behavioral Traits:**
  - Prefers intuitive, visually appealing interfaces.
  - Plays games on both desktop and tablet devices.

### Persona 2: **Tanya, Age 27**

- **Background:** Casual gamer with red-green colour blindness.
- **Goals:**
  - Enjoy relaxing games during downtime.
  - Play without visual impediments due to colour differentiation issues.
- **Frustrations:**
  - Games that rely solely on colour cues for important information.
  - Lack of customization options to adjust visual settings.
- **Behavioral Traits:**
  - Utilizes keyboard navigation extensively.
  - Appreciates games that offer accessibility features.

## ♿ Accessibility Strategy

Ensuring **Catventure** is accessible to a diverse range of players enhances inclusivity and user satisfaction. Building upon your existing plans, consider integrating the following features:

- **Color-Blind Mode:**

  - Implement patterns or textures in addition to colours to differentiate game elements.
  - Allow players to select from different colour palettes suited for various types of colour blindness.

- **Audio Cues:**

  - Provide sound indicators for in-game events, such as collecting items or encountering obstacles, to assist visually impaired players.
  - Ensure that audio cues are distinct and can be adjusted or muted based on player preference.

- **Adjustable Game Speed:**

  - Offer options to modify game speed to accommodate players with different reaction times or cognitive processing speeds.
  - This feature can aid in making the game more approachable for players with motor impairments.

- **Customizable Controls:**

  - Allow players to remap keys or input methods to suit their needs, enhancing accessibility for those with motor impairments.
  - Provide support for various input devices, such as gamepads or adaptive controllers.

- **Clear Visual Notifications:**

  - Ensure that any automatic sounds are accompanied by visual cues, benefiting players with hearing impairments.
  - Use icons or text notifications to indicate important game events.

- **Accessibility Settings Menu:**

  - Create a dedicated menu where players can adjust accessibility features, allowing for a personalized gaming experience.
  - Include explanations for each setting to inform players of their functions.

## 🧩 Features

- Smooth 2D movement and jumping
- Animated collectible items
- Responsive UI and layout
- Game over/win conditions
- Accessible with keyboard navigation
- Color-blind and high-contrast modes
- Multiple platforms supported via `Platform` class
- Collision detection supports multi-platform layouts
- CSV-based level loading system
- Levels can be authored in Google Sheets and dynamically imported

## 🗺️ Level System

Levels are designed using a simple CSV format and loaded dynamically into the game at runtime. This allows designers to build levels in tools like Google Sheets or Excel and export them for use in the game.

### 🔤 Symbol Key
| Symbol | Meaning                     |
|--------|-----------------------------|
| `0`    | Platform or ground block    |
| `$`    | Collectible (yarn or fish)  |
| `F`    | Collectible (fish)  |
| `!`    | Cat bed (level goal)        |
| (blank) | Empty space                |

### 📏 Tile Scaling

- Each grid cell represents a `50x50` pixel tile on the canvas.
- The bottom row of the CSV grid aligns flush with the bottom of the canvas.
- Platforms and items are positioned based on their row/column in the grid.

You can find level files in the `/levels/` folder.

## 🔒 Privacy & Security

- No user data stored
- Privacy notice included

## 📸 Screenshots

[Add screenshots of gameplay and UI here]

## 📼 Demo Video

[Link to YouTube or Drive video]

## 👥 Team Contributions

# 🐾 *Catventure* — Group Contribution Report

**Course**: COIS-MDST-2830H-A: Multimedia and Design  
**Project**: *Catventure – A 2D Platformer Game*  
**Team Members**: Aidan, Chris, Sehaj  
**Date**: March 26th, 2025

---

## 🔹 Overview

*Catventure* is a side-scrolling 2D platformer where players guide a cat through puzzle-like levels using smooth movement and sprite-based animations. Our group collaborated across code, design, and documentation to bring the project together.

---

## 👥 Individual Contributions

### **Aidan**
- Developed the core game logic using HTML, CSS, and JavaScript.
- Implemented sprite-based animations using 32x32 frame slicing for sitting and laying states.
- Programmed player movement, input handling, and canvas rendering logic.
- Integrated dynamic level loading from CSV files.
- Ensured smooth interaction between gameplay elements (platforms, collision, game states).

### **Chris**
- Conducted research into UI/UX best practices for platformer games and accessible game design.
- Wrote the README and project documentation, including:
  - Game objectives  
  - User personas  
  - Accessibility strategy  
  - Code structure and development practices
- Helped test the game and provided feedback for iterations.

### **Sehaj**
- Designed all visual assets and selected the cat sprite sheet used in the game.
- Contributed to the game’s visual identity, including UI layout and in-game environment aesthetics.
- Designed the main menu, level transitions, and overall visual flow.
- Assisted in ensuring the accessibility of visuals (e.g., colour choices and contrast).

---

## 🔄 Team Workflow

- Used Discord for communication and weekly check-ins.
- Shared progress and files via GitHub, using branches for isolated changes.
- Collaborated through feedback and testing loops to fine-tune the game’s feel and polish.

---

## ✅ Final Notes

Each team member contributed significantly to the completion of *Catventure*. We divided responsibilities based on our individual strengths and made collaborative decisions to align gameplay, design, and documentation into a cohesive final product.

---

## 🖊️ Sign-Off

| Name  | Signature | Date |
|-------|-----------|------|
| Aidan |Aidan Morbi|March 26th, 2025|
| Chris |Chris Ricard|March 26th, 2025|
| Sehaj |Sehaj Sahni|March 26th, 2025|


## 🤝 Contributing

Want to contribute? Fork the project, make a branch, and submit a pull request. Please follow our code style guide and commit format.

## 🧑‍💻 Development Guidelines

- **Code Style:** PascalCase for classes, camelCase for functions/variables.
- **File Naming:** Use kebab-case for files (e.g., `player.js`, `main-menu.html`).
- **Linter:** ESLint configured. Run `npx eslint .` to check for issues.
- **Commit Messages:** Use present tense, e.g., `Add jump logic` or `Fix collision bug`.

## 🔍 Code Linting & Style

This project uses **[ESLint](https://eslint.org/)** with the modern flat config format (`eslint.config.mjs`) to ensure clean, consistent code across the team.

### ✨ Linting Rules Overview

- **2-space indentation**
- **Double quotes** for strings
- **Semicolons required**
- **PascalCase** for class names (e.g., `Player`, `GameEngine`)
- **camelCase** for variables and functions (e.g., `checkCollision`, `spawnPlatform`)
- Allows `console.log` for debugging

> Linting errors will show automatically in VS Code if you have the ESLint extension installed.

### 🚀 How to Run the Linter

You can lint the whole project manually using:

```bash
npm run lint
```

To automatically fix common issues:

```bash
npm run lint:fix
```

### 📁 Linter Config Location
Our ESLint rules are stored in:

```
eslint.config.mjs
```

We also ignore `node_modules/` and `package-lock.json` in `.eslintignore`.

### 🧱 Naming Conventions

We follow consistent naming patterns across the codebase:

| Type               | Convention         | Example               |
|--------------------|--------------------|------------------------|
| Classes            | `PascalCase`       | `Player`, `Platform`   |
| Functions          | `camelCase`        | `checkCollision()`     |
| Variables          | `camelCase`        | `scoreCounter`         |
| Files & folders    | `kebab-case`       | `player.js`, `game-loop/` |
| Constants (optional) | `ALL_CAPS_SNAKE_CASE` | `MAX_JUMP_HEIGHT` |

These conventions help keep our code readable and maintainable for everyone on the team.

## 🔮 Future Enhancements

We've recently implemented reusable `Platform` class logic to simplify working with multiple platforms and support future expansion. Additional enhancements we may explore include:

- **Platform Types & Behaviours:**
  - Moving platforms, disappearing blocks, bounce tiles, etc.
- **Side-Scrolling Implementation:**
  - Introduce camera logic that follows the player horizontally.
  - Allow larger levels that extend beyond the visible screen area.

## 📝 License

This project is licensed under the [GNU GPL License](LICENSE).
