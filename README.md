# Timer App
> *Stopwatch & Countdown Timer — React Frontend Project*

---

## Student Information
* **Name:** Achyuta Gajurel
* **Course / Program:** BSc CSIT
* **Semester / Year:** 3rd Semester / 2026

---

## Instructor Information
* **Course Title:** React Development
* **College Name:** Samriddhi College

---

## Project Overview
> This project is a web-based Timer Application developed using React and Vite.
> It provides two core features — a Stopwatch with lap recording and a Countdown Timer with resume support.
> Users can record, rename, and delete laps, and all data is saved to localStorage so it persists even after closing the browser.
> The app also fetches a random motivational quote from an external API and detects online/offline status in real time.
> The main goal is to demonstrate real-world React concepts including custom hooks, CRUD operations, API integration, and clean component architecture.

---

## Objectives
* Build a responsive React application with clean component architecture
* Implement real-world features (stopwatch, countdown, lap history, API)
* Apply state management using React hooks (useState, useEffect, useRef)
* Use localStorage for data persistence without a backend
* Deploy the app live using Vercel

---

## Technologies Used

### Frontend
* React 18
* JavaScript (ES6+)
* HTML & CSS
* Vite (Build Tool)
* Google Fonts (Inter + Space Mono)

### Data Persistence
* localStorage API (Browser)

### External API
* dummyjson.com/quotes/random

### Deployment & Tools
* Git & GitHub
* Vercel (Live Hosting)

---

## Key Features
* Stopwatch with millisecond precision (MM:SS.ms)
* Lap recording with Create, Read, Update, Delete (CRUD)
* Countdown Timer with H/M/S input and resume support
* "Time's Up!" animation when countdown finishes
* LocalStorage persistence — data saved across browser sessions
* Random motivational quote fetched from external API
* Online/Offline detection with status message
* Glass morphism UI with animated background and smooth transitions
* Reusable Button component used across the app
* Custom useLocalStorage hook for clean state + storage logic
* Tab memory — remembers last visited tab (Stopwatch or Countdown)

---

## React Concepts Used
* `useState` — manages time, isRunning, laps, inputs, quote data
* `useEffect` — timer intervals, API fetch, online/offline listeners
* `useRef` — stores interval ID and start time reference
* Custom Hook (`useLocalStorage`) — reusable storage + state logic
* Props — parent to child data and function passing
* Conditional Rendering — loader, error, offline, Start/Pause/Resume labels
* List Rendering — `.map()` with unique `key={item.id}` for lap list
* Event Handling — `onClick`, `onChange`, custom handler functions
* Component Architecture — App → TimerContainer → UI Components

---

## Component Structure
```
App
└── TimerContainer
    ├── Stopwatch
    │   ├── Button (Reusable)
    │   └── HistoryList
    ├── Countdown
    │   └── Button (Reusable)
    └── Quote

/utils
    ├── useLocalStorage.js   (Custom Hook)
    └── timeFormatters.js    (Utility Functions)
```

---

## Screens / Modules
* **Stopwatch View** — Start, Stop, Reset, Lap with millisecond display
* **Countdown View** — H/M/S input, Start, Pause, Resume, Reset
* **Lap History** — List of laps with edit (rename) and delete
* **Quote Section** — Motivational quote from API with loading/error/offline states

---

## Installation & Setup
```bash
# Clone repository
git clone https://github.com/Samriddhicollege/B.Sc.CSIT-2081-3rdSem-React-timer_app.git


# Go to project folder
cd B.Sc.CSIT-2081-3rdSem-React-timer_app

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## Project Structure
```
/project-root
├── public/
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── TimerContainer.jsx
│   │   ├── Stopwatch.jsx
│   │   ├── Countdown.jsx
│   │   ├── HistoryList.jsx
│   │   ├── Quote.jsx
│   │   └── Reusable.jsx
│   ├── utils/
│   │   ├── useLocalStorage.js
│   │   └── timeFormatters.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

---

## GitHub & Live Demo
* **GitHub Repository:** https://github.com/Samriddhicollege/B.Sc.CSIT-2081-3rdSem-React-timer_app
* **Live URL:** https://timerapp-nine.vercel.app

---

## Testing
* Tested UI responsiveness on different screen sizes (mobile, tablet, desktop)
* Verified stopwatch accuracy using browser console timing
* Checked edge cases (empty countdown input, lap while stopped, offline API behavior)
* Confirmed localStorage persistence across browser refresh and tab close

---

## Challenges Faced
* **Timer Drift** — setInterval drifts over time; fixed using `Date.now()` calculation on each tick
* **Memory Leaks** — forgetting to clear interval on pause; fixed using `useEffect` cleanup function
* **Async API Handling** — managing loading, error, and offline states together in one `useEffect`
* **localStorage Sync** — keeping nested state (lap arrays) in sync with storage
* **Countdown Resume** — accurately resuming required storing `endTimeRef` instead of elapsed seconds

---

## Future Enhancements
* Add sound/beep alert when countdown finishes
* Add dark/light theme toggle saved to localStorage
* Show lap statistics (fastest, slowest, average lap time)
* Cloud sync using Firebase or Supabase
* Make it installable as a PWA (Progressive Web App)
* Add user authentication for cross-device history access

---

## Acknowledgement
> I would like to thank my instructor Mr. Dipak Shrestha for guidance and support throughout this project.

---

## Declaration
> I hereby declare that this project is my original work and has been completed as part of my academic submission for BSc CSIT 3rd Semester React Development course.