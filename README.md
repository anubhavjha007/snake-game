# 🐍 Snake Game

Live Demo : url[https://anubhavjha007.github.io/snake-game/]

A classic Snake Game built using **HTML, CSS, and Vanilla JavaScript**. This project helped me practice DOM manipulation, event handling, arrays, game loops, collision detection, and touch controls.

## ✨ Features

- 🎮 **Keyboard Controls** — Move the snake using arrow keys or WASD.
- 📱 **Touch Swipe Controls** — Swipe on the game board to change direction on touch-enabled devices.
- 🍎 **Food Generation** — Food spawns randomly on the board.
- 📈 **Score Tracking** — The score increases when the snake eats food.
- 🐍 **Snake Growth** — The snake gets longer as the score increases.
- 💥 **Wall Collision Detection** — The game ends when the snake hits a boundary.
- ☠️ **Self-Collision Detection** — The game ends when the snake hits its own body.
- 🔄 **Reset Option** — Restart the game and play again.

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## 🎮 Controls

| Action | Control |
|---|---|
| Move Up | `↑` or `W` |
| Move Down | `↓` or `S` |
| Move Left | `←` or `A` |
| Move Right | `→` or `D` |
| Mobile / Touch | Swipe on the game board |
| Restart | Reset button |

## 🧠 Concepts Practiced

- DOM manipulation and dynamic element creation
- JavaScript event listeners
- Arrays and array methods
- `setInterval()` for the game loop
- Keyboard events and touch events
- Swipe direction detection using coordinate differences
- Collision detection
- Score management and snake-body tracking
- Conditional logic and game state management

## 📱 Touch Controls

The game detects swipe gestures using the starting and ending touch coordinates.

1. Record the starting coordinates using `touchstart`.
2. Record the ending coordinates using `touchend`.
3. Calculate horizontal and vertical movement (`dX` and `dY`).
4. Compare the absolute movement values to identify the dominant direction.
5. Ignore tiny movements so a tap doesn't accidentally change the snake's direction.

## 🚀 How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in your browser.

No external libraries or package installation are required.

## 📚 What I Learned

Building this project gave me hands-on practice in translating game rules into JavaScript logic, handling user input, tracking the snake's movement, and debugging swipe gestures.

## 🔮 Future Improvements

- Add increasing difficulty as the score grows.
- Prevent the snake from reversing directly into itself.
- Improve mobile responsiveness and touch interaction.
- Add a high-score system.
- Add sound effects and a pause/resume feature.

---

**Built as a hands-on JavaScript learning project.** 🚀