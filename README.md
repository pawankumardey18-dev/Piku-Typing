# Piku Typing

A modern browser-based typing trainer with multiple typing modes, difficulty levels, timer settings, live metrics, leaderboard, error heatmap, and theme selection.

## Features

- Typing practice modes:
  - `words`
  - `numbers`
  - `punctuation`
  - `code`
- Difficulty levels:
  - `easy`
  - `medium`
  - `hard`
- Timer options:
  - `15s`, `30s`, `60s`, `120s`, `300s`
- Live metrics:
  - WPM
  - accuracy
  - countdown timer
- Session history chart
- Error heatmap
- Personal and global leaderboard
- Theme/color picker
- Firebase authentication and leaderboard support
- Responsive UI with mobile keyboard handling

## Files

- Index.html — main page and Firebase initialization
- style.css — layout, theme, and responsive UI styling
- app.js — typing logic, test generation, scoring, UI updates, leaderboard, and Firebase integration
- README.md — project documentation

## How to Run

1. Clone the repository
2. Open Index.html in a browser

> Recommended: serve the project from a local server for best compatibility with module imports and Firebase.

Example:
- `python3 -m http.server 8000`
- or `npx serve .`

Then visit:
- `http://localhost:8000/`

## Usage

1. Choose a typing mode
2. Select difficulty
3. Pick a timer duration
4. Click inside the typing area
5. Start typing to begin the test
6. Review live WPM, accuracy, and end-of-test stats
7. Use the leaderboard and heatmap to track progress

## Notes

- Uses Firebase for authentication and global leaderboard storage
- Requires internet access to load:
  - Firebase SDK
  - Google Fonts

## Built With

- HTML
- CSS
- JavaScript
- Firebase Authentication
- Firebase Firestore

## Attribution

Created for a fast, colorful typing practice experience with metrics and progress tracking.
