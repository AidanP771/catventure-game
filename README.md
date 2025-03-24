## ✅📋 Project Progress Checklist (Updated)

### 📄 Planning & Documentation

| Task                                                       | Status | Notes                        |
| ---------------------------------------------------------- | ------ | ---------------------------- |
| Project Proposal (title, objective, tech stack, user flow) | ✅     | Covered in README            |
| User Personas                                              | ✅     | Liam and Tanya included      |
| Accessibility Strategy                                     | ✅     | Included in README           |
| README Documentation                                       | ✅     | Detailed and current         |
| License                                                    | ✅     | MIT license added            |
| Screenshots / Demo Video                                   | 🔜     | To be done near the end      |
| Team Contributions Section                                 | 🟡     | Placeholder exists in README |

---

### 🎮 Game Design & Functionality

| Task                                                     | Status | Notes                                          |
| -------------------------------------------------------- | ------ | ---------------------------------------------- |
| Style direction confirmed (pixel-art)                    | ✅     | Waiting on final sprite size                   |
| Basic folder and file structure                          | ✅     | Scaffolding is done                            |
| Platformer mechanics: movement, jumping                  | 🔜     | Starting point for next coding session         |
| Collision + Collectibles + Scoring                       | 🔜     | Planned, needs implementation                  |
| Game over/win conditions                                 | 🔜     | Placeholder logic to be added                  |
| Start/instruction/end screens                            | 🟡     | Visual mockups done, need to implement in code |
| Accessibility features in-game (contrast, scaling, etc.) | 🔜     | Planned in strategy, not yet implemented       |
| Reward-based level progression                           | 🔜     | Mechanic outlined but not implemented yet      |

---

### 💻 Technical Setup

| Task                           | Status | Notes                                                            |
| ------------------------------ | ------ | ---------------------------------------------------------------- |
| GitHub Repo                    | ✅     | All work is being committed here: `catventure-game`              |
| ESLint Installed & Configured  | ✅     | Flat config (`eslint.config.mjs`) setup done                     |
| `.eslintignore` created        | ✅     | Optional, if used to exclude things like `package-lock.json`     |
| Linting rules in README        | ✅     | Naming conventions + rules documented                            |
| Live Server or local dev setup | ✅     | Confirmed you’re using Live Server                               |
| Prettier (Optional)            | ❌     | Not needed for this project unless team wants to auto-format too |

---

### 🎨 UI/UX Design

| Task                                        | Status | Notes                                    |
| ------------------------------------------- | ------ | ---------------------------------------- |
| Figma wireframes                            | 🟡     | In progress by teammate                  |
| Final sprite size decision (16x16 vs 32x32) | 🟡     | Pending artist input                     |
| Color palette selected                      | ✅     | Midnight blue, black, white, orange      |
| Fonts / UI choices                          | 🟡     | TBD — not critical yet, based on mockups |

---

### 🧪 Testing & Final Submission

| Task                                       | Status | Notes                                       |
| ------------------------------------------ | ------ | ------------------------------------------- |
| Usability testing (5 users)                | 🔜     | Not yet started — do this after MVP is done |
| Apply at least 2 changes based on feedback | 🔜     | Happens post-testing                        |
| Final video demo                           | 🔜     | Placeholder added in README                 |
| In-class peer/instructor demo              | 🔜     | Week 12                                     |

---

## ✅ Next Best Task to Tackle

Now that your linter and documentation are locked in, the **next major focus should be development**:

### 🧑‍💻 Suggested\Ideal Immediate Next Steps

1. **Player Movement Logic**

   - Set up `Player` class in `player.js`
   - Add `update()` and `draw()` methods
   - Handle basic keyboard movement (`left`, `right`, `jump`)

2. **Game Loop in `script.js`**

   - Use `requestAnimationFrame()` loop
   - Clear + redraw canvas
   - Call player update/draw

3. **Render Start Screen**
   - Show static "Start Game" screen
   - Add event listener to start the game on click or key press
