# ⏱️ Timer App
> *Stopwatch & Countdown Timer — React Frontend Project*

---

## 👨‍🎓 Student Information
- **Name:** Achyuta Gajurel  
- **Course / Program:** BSc CSIT  
- **Semester / Year:** 3rd Semester / 2026  

---

## 👨‍🏫 Instructor Information
- **Instructor Name:** Mr. Dipak Shrestha  
- **Course Title:** React Development  
- **College Name:** Samriddhi College  

---

## 📌 Project Overview
This project is a **web-based Timer Application** developed using **React + Vite**.

It provides two main features:
- ⏱️ **Stopwatch** with lap recording  
- ⏳ **Countdown Timer** with resume support  

Users can manage lap records (Create, Read, Update, Delete), and all data is stored using **localStorage**, ensuring persistence even after closing the browser.

The app also:
- Fetches a **random motivational quote** from an external API  
- Detects **online/offline status** in real-time  

🎯 **Goal:** Demonstrate real-world React concepts like hooks, API integration, custom hooks, and clean architecture.

---

## 🎯 Objectives
- Build a responsive React application with clean architecture  
- Implement real-world features (stopwatch, countdown, CRUD laps, API)  
- Apply React Hooks (`useState`, `useEffect`, `useRef`)  
- Use localStorage for persistence (no backend required)  
- Deploy the app using Vercel  

---

## 🛠️ Technologies Used

### Frontend
- React 18  
- JavaScript (ES6+)  
- HTML & CSS  
- Vite  
- Google Fonts (Inter, Space Mono)  

### Data Persistence
- Browser localStorage API  

### External API
- https://dummyjson.com/quotes/random  

### Deployment & Tools
- Git & GitHub  
- Vercel  

---

## ✨ Key Features
- Stopwatch with millisecond precision (MM:SS.ms)  
- Lap recording with full CRUD functionality  
- Countdown Timer with resume support  
- "Time's Up!" animation  
- Persistent data using localStorage  
- Random motivational quotes (API integration)  
- Online/offline detection  
- Glassmorphism UI + smooth animations  
- Reusable Button component  
- Custom `useLocalStorage` hook  
- Tab memory (remembers last active tab)  

---

## ⚛️ React Concepts Used
- `useState` — manages app state  
- `useEffect` — handles side effects (timer, API, listeners)  
- `useRef` — stores interval IDs and time references  
- Custom Hook (`useLocalStorage`)  
- Props for component communication  
- Conditional Rendering  
- List Rendering (`.map()` with keys)  
- Event Handling (`onClick`, `onChange`)  
- Component-Based Architecture  

---

## 🧩 Component Structure

App
└── TimerContainer

├── Stopwatch

│ ├── Button

│ └── HistoryList

├── Countdown

│ └── Button

└── Quote

/utils

├── useLocalStorage.js

└── timeFormatters.js


---

## 📱 Screens / Modules
- Stopwatch View  
- Countdown View  
- Lap History (Edit/Delete)  
- Quote Section (API-based)  

---

## ⚙️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/Samriddhicollege/B.Sc.CSIT-2081-3rdSem-React-timer_app.git

# Navigate to project
cd B.Sc.CSIT-2081-3rdSem-React-timer_app

# Install dependencies
npm install

# Run the app
npm run dev
📂 Project Structure
/project-root

├── public/

│   └── icons.svg

├── src/

│   ├── components/

│   ├── utils/

│   ├── App.jsx

│   ├── main.jsx

│   └── styles

├── package.json

├── vite.config.js

└── README.md

🔗 GitHub & Live Demo
GitHub Repository:
https://github.com/Samriddhicollege/B.Sc.CSIT-2081-3rdSem-React-timer_app
Live Demo:
https://timerapp-nine.vercel.app
🧪 Testing
Tested on mobile, tablet, and desktop
Verified stopwatch accuracy
Tested edge cases:
Empty countdown input
Lap without running timer
Offline API behavior
Confirmed localStorage persistence
⚠️ Challenges Faced
Timer Drift: Solved using Date.now() instead of relying only on setInterval
Memory Leaks: Fixed using cleanup in useEffect
API Handling: Managed loading, error, and offline states
localStorage Sync: Handled nested state updates
Countdown Resume: Used endTimeRef instead of elapsed time
🚀 Future Enhancements
Add sound alert when timer ends 🔔
Dark/Light mode toggle 🌙
Lap statistics (fastest, average)
Cloud sync (Firebase/Supabase)
PWA support
User authentication
📸 Screenshots (Recommended)


🙏 Acknowledgement

I would like to thank Mr. Dipak Shrestha for his guidance and support throughout this project.

📜 Declaration

I hereby declare that this project is my original work and has been completed as part of my academic submission.
