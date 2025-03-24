# Catventure: Platform Paw-sibilities

## 🐾 Overview

Catventure is a 2D platformer where players guide a nimble cat through platforms, collect fish treats and yarn balls while dodge dangers to reach the cozy cat bed at the end. Designed for web browsers using HTML, CSS, and JavaScript.

## 🎯 Objective

Deliver a fun and accessible game experience while showcasing modern UI/UX principles, front-end development, and inclusive design.

## 🔧 Technology Stack

- **Languages**: HTML5, CSS3, JavaScript (Vanilla) \*\*This could change..
- **Design Tools**: Figma
- **Libraries**: [Optional] GSAP for animations \*\*This could change

## 🗂️ Project Structure (File/Folder Setup)

```
/catventure/
│
├── index.html              # Main HTML file
├── style.css               # Main CSS file
├── script.js               # Core game logic
├── assets/
│   ├── images/             # Cat sprite, background, collectibles, etc.
│   └── audio/              # Jump, collect, win/loss sounds
├── components/
│   ├── player.js           # Player (cat) class and behaviour
│   ├── platform.js         # Platform objects
│   ├── collectibles.js     # Yarn balls or fish items
│   └── ui.js               # UI functions (start screen, score, toggle, etc.)
├── privacy.html            # Simple privacy policy page
├── accessibility.js        # High contrast toggle, scalable font logic
└── README.md
```

## 🧭 User Flow

1. Start Menu → 2. Instructions → 3. Gameplay → 4. Game Over/Win Screen

## 🧩 Features

- Smooth 2D movement and jumping
- Animated collectible items
- Responsive UI and layout
- Game over/win conditions
- Accessible with keyboard navigation
- Color-blind and high-contrast modes

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


## 🔒 Privacy & Security

- No user data stored
- Privacy notice included

## 📸 Screenshots

[Add screenshots of gameplay and UI here]

## 📼 Demo Video

[Link to YouTube or Drive video]

## 👥 Team Contributions

Each member’s role and responsibilities

## 📁 How to Play
  ### 🎮 Controls
  - Move Left: ← or A
  - Move Right: → or D
  - Jump: Spacebar or W
  - Toggle High Contrast: [Accessible UI Button]
  ### 🧩 Goal
  Navigate through each level by jumping on platforms, collecting yarn balls and   fish, and avoiding obstacles. Reach the cozy cat bed to finish the level.

## 🤝 Contributing

Want to contribute? Fork the project, make a branch, and submit a pull request. Please follow our code style guide and commit format.

## 🧑‍💻 Development Guidelines

- **Code Style:** PascalCase for classes, camelCase for functions/variables.
- **File Naming:** Use kebab-case for files (e.g., `player.js`, `main-menu.html`).
- **Linter:** ESLint configured. Run `npx eslint .` to check for issues.
- **Commit Messages:** Use present tense, e.g., `Add jump logic` or `Fix collision bug`.
