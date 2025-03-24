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
| Privacy Notice Page                                        | 🔜     | Placeholder HTML exists, needs content |
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

4. **Accessibility Toggle**
   - Add high-contrast mode toggle button
   - Hook up to `accessibility.js`
