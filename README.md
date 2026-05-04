# Piku Typing

A modern browser-based typing trainer with multiple typing modes, difficulty levels, timer settings, live metrics, leaderboard, error heatmap, and theme selection. Now featuring lessons, custom typing tests, AI-powered assistance, and enhanced navigation.

## Features

- **Typing Practice Modes**:
  - `words` — Practice with common English words
  - `numbers` — Numeric input practice for data entry
  - `punctuation` — Special characters and symbols practice
  - `code` — Code snippets with syntax highlighting
  - `custom` — Create and practice with your own text
- **Difficulty Levels**:
  - `easy` — Shorter words and common characters
  - `medium` — Balanced mix of word lengths and variety
  - `hard` — Complex words and rare character combinations
- **Timer Options**:
  - `15s`, `30s`, `60s`, `120s`, `300s` — Flexible timing for different practice needs
- **Live Metrics**:
  - WPM (Words Per Minute) — Real-time typing speed
  - Accuracy — Instant accuracy feedback
  - Countdown timer — Visual remaining time
- **Advanced Analytics**:
  - Session history chart — Track progress over multiple sessions
  - Error heatmap — Identify your problem keys and combinations
- **Social Features**:
  - Personal and global leaderboard — Compete with others
  - Theme/color picker — Customize your experience
  - Firebase authentication and leaderboard support
- **Learning Tools**:
  - Structured lessons — Step-by-step typing tutorials
  - AI assistance — Get help with typing tips and corrections
- **Responsive UI**:
  - Mobile keyboard handling
  - Adaptive layout for all screen sizes

## Project Structure

- **Index.html** — Main application entry point and Firebase initialization
- **game.html** — Core typing game interface
- **lessons.html** — Lessons page for structured learning
- **custom.html** — Custom text input and practice page
- **lesson.html** — Individual lesson viewer
- **style.css** — Comprehensive styling, themes, and responsive design
- **app.js** — Main application logic, typing engine, scoring, and UI updates
- **nav.js** — Navigation and routing between pages
- **lessons-data.js** — Lesson content and progression data
- **piku-ai.js** — AI-powered features for assistance and feedback
- **README.md** — This project documentation

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git for cloning the repository
- Local server (Python 3 or Node.js) for proper functionality
- Internet connection for Firebase features and external resources

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pawankumardey18-dev/Piku-Typing.git
   cd Piku-Typing
   ```

2. **Run the application**:
   Serve from a local server for best compatibility with module imports and Firebase.

   Using Python 3:
   ```bash
   python3 -m http.server 8000
   ```

   Or using Node.js:
   ```bash
   npx serve .
   ```

3. **Open in browser**:
   Navigate to `http://localhost:8000/`

## How to Use

### Basic Typing Practice
1. Choose a typing mode (Words, Numbers, Punctuation, Code, or Custom)
2. Select difficulty level (Easy, Medium, Hard)
3. Pick a timer duration
4. Click inside the typing area to focus
5. Start typing — the test begins automatically
6. Monitor live WPM, accuracy, and countdown timer
7. Review final statistics after completion

### Using Lessons
1. Navigate to the Lessons page
2. Select a lesson from the available options
3. Follow the step-by-step instructions
4. Practice with guided exercises
5. Track your progress through the lesson series

### Custom Text Practice
1. Go to the Custom page
2. Enter or paste your own text
3. Configure practice settings
4. Begin typing your custom content
5. Get personalized feedback and metrics

### AI Assistance
- Enable AI features for real-time tips
- Receive corrections and suggestions during practice
- Get detailed analysis of your typing patterns

### Leaderboard and Progress
- Sign in with Firebase for global leaderboard access
- View personal statistics and session history
- Customize themes and appearance
- Analyze error patterns with the heatmap

## Technology Stack

### Front-end
- **HTML5** — Semantic markup and structure
- **CSS3** — Advanced styling, animations, and responsive design
- **Vanilla JavaScript** — Core application logic and interactivity

### Backend & Services
- **Firebase Authentication** — Secure user authentication
- **Firebase Firestore** — Cloud database for leaderboard and user data
- **Google Fonts API** — Custom typography loading

### Additional Libraries
- **Chart.js** — For session history and analytics visualization
- **Custom AI Integration** — For typing assistance and feedback

## Troubleshooting

**Q: Application doesn't start?**  
A: Ensure you're serving from a local server, not opening files directly. Check that Python or Node.js is installed.

**Q: Firebase features not working?**  
A: Verify internet connection and Firebase configuration in Index.html.

**Q: Typing test doesn't load?**  
A: Refresh the page, check console for errors, ensure all files are present.

**Q: UI looks broken on mobile?**  
A: The app is responsive — try rotating device or zooming. Check for browser compatibility.

**Q: AI features not responding?**  
A: Ensure piku-ai.js is loaded and internet connection is stable.

## Notes

- Uses Firebase for authentication and global leaderboard storage
- Requires internet access to load Firebase SDK, Google Fonts, and AI services
- All dependencies are loaded via CDN — no npm installation required
- Data is stored locally and synced to Firebase when authenticated
- Responsive design works on desktop, tablet, and mobile devices

## Built With

- HTML5 — Semantic markup
- CSS3 — Advanced styling and responsive design
- JavaScript — Core application logic
- Firebase Authentication — User authentication
- Firebase Firestore — Cloud database
- Chart.js — Data visualization
- Custom AI — Typing assistance

## Attribution

Created for a fast, colorful, and comprehensive typing practice experience with advanced metrics, learning tools, and AI assistance. Designed to help users improve typing skills through engaging, data-driven practice sessions.

---

For more information, updates, or to contribute, visit the [GitHub repository](https://github.com/pawankumardey18-dev/Piku-Typing).
