# Piku Typing

Piku Typing is a modern browser-based typing trainer designed to improve your typing skills through various exercises. It's an intuitive and easy-to-use platform with multiple typing modes, difficulty levels, timer settings, live metrics, leaderboard, error heatmap, and theme selection.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [How to Use](#how-to-use)
- [Technology Stack](#technology-stack)
- [Troubleshooting](#troubleshooting)

## Features

### Typing Practice Modes
- **Words** — Standard typing practice with common English words
- **Numbers** — Numeric input practice for data entry
- **Punctuation** — Special characters and symbols practice
- **Code** — Code snippets with syntax

### Difficulty Levels
- **Easy** — Shorter words and common characters
- **Medium** — Balanced mix of word lengths and variety
- **Hard** — Complex words and rare character combinations

### Timer Options
- 15 seconds — Quick warm-up
- 30 seconds — Short focused session
- 60 seconds — Standard typing test
- 120 seconds — Extended practice
- 300 seconds — Full 5-minute endurance test

### Live Metrics & Analytics
- **WPM (Words Per Minute)** — Real-time typing speed
- **Accuracy** — Instant accuracy feedback
- **Countdown Timer** — Visual remaining time
- **Session History Chart** — Track progress over multiple sessions
- **Error Heatmap** — Identify your problem keys and combinations

### Additional Features
- Personal and global leaderboard with ranked statistics
- Theme/color picker for customization
- Firebase authentication and cloud leaderboard support
- Responsive UI with mobile keyboard handling

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for cloning the repository)
- Python 3 or Node.js (for running a local server)
- Internet connection (for Firebase features and Google Fonts)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pawankumardey18-dev/Piku-Typing.git
   cd Piku-Typing
   ```

2. **Run the application:**
   The application is a pure front-end project with no build step required. Serve it from a local server for best compatibility with Firebase and module imports.

   Using Python 3:
   ```bash
   python3 -m http.server 8000
   ```

   Or using Node.js:
   ```bash
   npx serve .
   ```

3. **Open in browser:**
   ```
   http://localhost:8000/
   ```

## Project Structure

- **Index.html** — Main application file with HTML structure and Firebase initialization
- **style.css** — Layout, theme customization, and responsive UI styling
- **app.js** — Typing logic, test generation, scoring, UI updates, leaderboard, and Firebase integration
- **README.md** — Project documentation

## How to Use

1. Choose a typing mode (Words, Numbers, Punctuation, or Code)
2. Select a difficulty level (Easy, Medium, or Hard)
3. Pick a timer duration (15s, 30s, 60s, 120s, or 300s)
4. Click inside the typing area to focus
5. Start typing — the test begins automatically
6. Monitor live WPM, accuracy, and countdown timer
7. Review final statistics after completing or timing out
8. Check the leaderboard and error heatmap to track progress

## Technology Stack

### Front-end
- HTML5
- CSS3
- Vanilla JavaScript

### Backend & Services
- Firebase Authentication — Secure user authentication
- Firebase Firestore — Cloud database for leaderboard data
- Google Fonts API — Custom typography

## Troubleshooting

**Q: Application does not start**  
A: Ensure you're running it from a local server (not opening the file directly). Verify Node.js or Python is installed.

**Q: Firebase features not working**  
A: Check your internet connection and verify Firebase configuration is correct in Index.html.

**Q: Typing test does not load**  
A: Refresh the page and check your internet connection.

**Q: UI looks broken on mobile**  
A: Try rotating your device or zooming out. The UI is fully responsive.

## Important Notes

- Uses Firebase for authentication and global leaderboard storage
- Requires internet access to load Firebase SDK and Google Fonts
- Recommended to serve from a local server for best compatibility
- No npm dependencies required — all libraries load via CDN

## Built With

- HTML5 — Semantic markup
- CSS3 — Advanced styling and responsive design
- JavaScript — Core application logic
- Firebase Authentication — User authentication
- Firebase Firestore — Cloud database

## Attribution

Created for a fast, colorful typing practice experience with comprehensive metrics and progress tracking.

---

For more information or to contribute, visit the [GitHub repository](https://github.com/pawankumardey18-dev/Piku-Typing).
