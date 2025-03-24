## ✅📋 Project Progress Checklist (Unified & Updated)

### 📄 Planning & Documentation

| Task                                                       | Status | Notes                                  |
|------------------------------------------------------------|--------|----------------------------------------|
| Project Proposal (title, objective, tech stack, user flow) | ✅     | Covered in README                      |
| User Personas                                              | ✅     | Liam and Tanya included                |
| Accessibility Strategy                                     | ✅     | Included in README                     |
| README Documentation (features, tools, guide)              | ✅     | Clear, current, includes linter setup  |
| License                                                    | ✅     | MIT License added                      |
| Team Contribution Section                                  | 🟡     | Placeholder exists in README           |
| Privacy Notice Page                                        | ✅     | `privacy.html` created and styled      |
| Screenshots / Demo Video                                   | 🔜     | Will be added near-final stage         |
| Presentation Video (5–7 min)                               | 🔜     | Section exists in README               |

---

### 🎮 Game Design & Functionality

| Task                                                     | Status | Notes                                         |
|----------------------------------------------------------|--------|-----------------------------------------------|
| Style direction confirmed (pixel-art)                    | ✅     | Waiting on final sprite size                  |
| Final sprite size decision (16x16 vs 32x32)              | 🟡     | Pending artist input                          |
| Colour palette selected                                  | ✅     | Midnight blue, black, white, orange           |
| Basic folder and file structure                          | ✅     | Fully scaffolded and in repo                  |
| Game Loop in `script.js`                                 | ✅     | Canvas loop, drawing, and updates all working |
| Player movement logic                                    | ✅     | Movement + gravity complete                   |
| Collision with platform                                  | ✅     | Refined and working                           |
| Adjustable speed slider                                  | ✅     | Exists for testing; great UX inclusion        |
| Collectibles + scoring                                   | 🔜     | Mechanic outlined but not implemented yet     |
| Reward-based level progression                           | 🔜     | Will develop after platform structure         |
| Game over/win conditions                                 | 🔜     | Placeholder logic pending                     |
| Start/instruction/end screens                            | 🟡     | Wireframes exist; not yet implemented         |
| Accessibility features in-game (contrast, scaling, etc.) | 🔜     | Planned; toggle partially stubbed             |
| Level design via CSV loading                             | ✅     | Levels planned using Google Sheets CSVs       |

---

### 💻 Technical Setup

| Task                           | Status | Notes                                                             |
|--------------------------------|--------|-------------------------------------------------------------------|
| GitHub Repo                    | ✅     | All work lives in `catventure-game`                              |
| ESLint Installed & Configured  | ✅     | Modern flat config in place with lint/fix commands                |
| Linting Rules in README        | ✅     | Naming conventions + run instructions documented                  |
| `.eslintignore` created        | ✅     | Ignoring node_modules + lock file                                |
| Live Server / Dev Environment  | ✅     | Using VS Code Live Server                                         |
| Prettier (Optional)            | ❌     | Not needed unless formatting becomes inconsistent                 |

---

### 🎨 UI/UX Design

| Task                                        | Status | Notes                                 |
|---------------------------------------------|--------|---------------------------------------|
| Figma wireframes                            | 🟡     | In progress from teammate             |
| Fonts / UI choices                          | 🟡     | Pending — will follow mockup direction|
| Interactive UI (start, menus, toggles)      | 🔜     | Basic layout to come soon             |

---

### 🧪 Testing & Final Submission

| Task                                       | Status | Notes                                             |
|--------------------------------------------|--------|---------------------------------------------------|
| Usability Testing (5 users)                | 🔜     | Planned — speed slider is a test branch kickoff  |
| Apply at least 2 changes from feedback     | 🔜     | Will follow testing                               |
| Final demo video                           | 🔜     | Placeholder in README                             |
| In-class peer/instructor demo              | 🔜     | Scheduled for Week 12                             |

---

## ✅ Next Best Tasks to Tackle

Now that scaffolding, logic, and documentation are in place, the **ideal progression:**

### 🔜 Immediate Development

1. **Collectibles**
   - Add yarn balls or fish sprites with collision detection
   - Update score on collection

2. **Win Condition**
   - Create a cat bed “goal” at the end of a level
   - Trigger win screen when touched

3. **Basic UI Screens**
   - Start screen → click or keypress to start the game
   - Instruction overlay (optional)
   - End screen (win/loss)
   - Include Privacy Policy link on start screen

4. **Accessibility Toggle**
   - Add high-contrast mode toggle button
   - Hook up to `accessibility.js`

---

## 🧩 Level Design Guidelines

To simplify level design and allow for easy non-coder contributions, Catventure levels are created using Google Sheets and exported as CSV files. Here's how we manage level creation:

### 🧠 CSV-Based Level Design

- Levels are designed in **Google Sheets** using a grid layout.
- Each **cell represents a tile** of size 50x50 pixels in-game.
- You only need to fill in tiles that matter — **empty cells can be left blank**.

### 🧱 Tile Legend

| Symbol | Represents     |
|--------|----------------|
| ▓      | Platform       |
| 🧶     | Collectible    |
| 🐾     | Goal (Cat Bed) |
| (blank)| Empty tile     |

### 📏 Grid Guidelines for Designers

- Use **16 columns × 12 rows** to fit the 800×600 canvas.
- Each tile = **50x50 pixels**.
- No need to fill empty spaces — just enter what matters.
- Export each sheet as CSV (`File > Download > CSV`) and save to `levels/`.

A parser reads each CSV, maps characters to game objects, and builds the level dynamically during runtime.

Want to design a level? Just open the template, drop in your platforms and items, and we’ll load it up! 🐾
