# 🧭 NammaMarga
### Multilingual & Voice-Enabled Public Information Platform for Older Adults and Low-Literacy Users

**NammaMarga** (*"Our Pathway"*) is an accessibility-first web application designed to help older adults, senior citizens, and low-literacy users navigate essential public services—including **Government Welfare Schemes**, **City Bus Routes**, **Healthcare Clinics**, and **Emergency Helplines**—using voice interaction and regional Indian languages.

---

## 🎯 Problem Statement
Most public information portals are text-heavy, visually cluttered, and available only in English. Older adults and low-literacy citizens face significant barriers when checking scheme eligibility, local bus timings, or nearby clinic schedules without assistance. NammaMarga bridges this gap through **voice-first navigation**, **trilingual support (English, Kannada, Hindi)**, and **high-contrast accessible UI design**.

---

## ✨ Key Features (Mini Project Phase)
- **🌐 Instant Trilingual Support:** Switch seamlessly between **English**, **ಕನ್ನಡ (Kannada)**, and **हिंदी (Hindi)** across all navigation menus, labels, and data cards.
- **🎤 Voice Search (Speech-to-Text):** Users can tap **Speak to Search** and ask naturally for bus routes, clinics, or welfare schemes without typing.
- **🔊 Read-Aloud Assistance (Text-to-Speech):** Includes both a **Read Page** summary button and individual **🔊 Listen** buttons on every card.
- **📍 Location-Aware Filtering:** Filter bus routes and healthcare clinics by Bengaluru localities (`Yelahanka`, `Hebbal`, `Majestic / Malleshwaram`, `Hunasamaranahalli`, `Jayanagar / Silk Board`).
- **♿ Senior-Friendly Accessibility Controls:** Adjustable text scaling (`A-` / `A+`), high-contrast color palette, large touch targets, and one-tap emergency dialing (`112`, `108`, `14567`).

---

## 🛠️ Tech Stack & Architecture
- **Frontend:** HTML5, CSS3 (Custom Responsive Grid & Accessibility Variables), Vanilla JavaScript, Vite
- **Voice & Accessibility APIs:** Web Speech API (`SpeechRecognition` & `SpeechSynthesis` with `en-IN`, `kn-IN`, `hi-IN` locales)
- **Backend:** Node.js, Express.js, CORS
- **Data Layer:** Structured trilingual JSON datasets (`/api/schemes`, `/api/buses`, `/api/clinics`)

---

## 📂 Project Structure
```text
NammaMarga/
├── backend/
│   ├── data/
│   │   ├── buses.json          # Trilingual city bus routes, stops & timings
│   │   ├── clinics.json        # Trilingual clinic & hospital schedules
│   │   └── schemes.json        # Trilingual central & state welfare schemes
│   ├── routes/
│   │   ├── buses.js            # GET /api/buses
│   │   ├── clinics.js          # GET /api/clinics
│   │   └── schemes.js          # GET /api/schemes
│   ├── package.json
│   └── server.js               # Express server entry point (Port 5000)
├── frontend/
│   ├── index.html              # Accessible semantic HTML structure
│   ├── style.css               # High-contrast senior-friendly styling
│   ├── script.js               # Multilingual engine, voice search & API client
│   └── package.json
└── README.md
