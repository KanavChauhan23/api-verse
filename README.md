# 🌐 API Verse

<div align="center">

![React](https://img.shields.io/badge/React-18+-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-Fast%20Build-purple?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/TailwindCSS-Modern%20UI-06B6D4?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-pink?style=for-the-badge&logo=framer)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A Modern Platform to Discover Free Public APIs for Developers**

[Live Website](https://apisverse.vercel.app/) • [Report Bug](https://github.com/KanavChauhan23/API-Verse/issues) • [Request Feature](https://github.com/KanavChauhan23/API-Verse/issues)

</div>

---

## 🌟 Overview

**API Verse** is a clean, fast developer platform for discovering free public APIs. Built with React + Vite, it lets developers browse APIs by category, check auth/HTTPS/CORS details at a glance, and jump straight to the official docs — all without any login or signup.

---

## ✨ Features

- 🔍 **Live Search** — Filter APIs in real-time by name as you type
- 🃏 **Card Layout** — Each API shows its category, auth type, HTTPS, and CORS support
- 🎞️ **Smooth Animations** — Hover effects powered by Framer Motion
- 📱 **Fully Responsive** — Works on desktop, tablet, and mobile
- 🔗 **Direct Docs Links** — One-click access to official API documentation
- ⚡ **Fast Load** — Vite-powered build with near-instant HMR in dev

---

## 🛠 Tech Stack

| Layer      | Technology               |
|------------|--------------------------|
| UI         | React 18                 |
| Build Tool | Vite 5                   |
| Styling    | Tailwind CSS 3           |
| Animation  | Framer Motion 11         |
| Language   | JavaScript (ES6+)        |
| Deployment | Vercel                   |

---

## 📁 Project Structure

```
api-verse/
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
│
└── src/
    ├── main.jsx           # App entry point
    ├── App.jsx            # Root component — search logic & layout
    ├── index.css          # Global Tailwind styles
    │
    ├── components/
    │   ├── Navbar.jsx     # Top navigation bar
    │   └── ApiCard.jsx    # Individual API card with motion animation
    │
    └── data/
        └── apis.js        # Static list of API entries
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm

### 1. Clone the repo

```bash
git clone https://github.com/KanavChauhan23/API-Verse.git
cd API-Verse
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

### 4. Open in your browser

```
http://localhost:5173
```

### Build for production

```bash
npm run build
```

---

## ➕ Adding a New API

Open `src/data/apis.js` and add a new entry to the array:

```js
{
  name: "Your API Name",
  category: "Category",
  auth: "API Key",   // or "No", "OAuth", etc.
  https: true,
  cors: "Yes",       // or "No", "Unknown"
  link: "https://your-api-docs-url.com"
}
```

That's it — the card will appear automatically.

---

## ⚠️ Dependency Note

`react-icons` is listed in `package.json` but is **not used anywhere** in the codebase. You can safely remove it to keep things clean:

```bash
npm uninstall react-icons
```

---

## 🗺️ Roadmap

- [ ] Category filter buttons
- [ ] API rating / popularity system
- [ ] Dark / light theme toggle
- [ ] API submission form for community contributions
- [ ] Dynamic backend / database instead of static data
- [ ] Pagination or infinite scroll for large API lists

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch — `git checkout -b feature/your-feature`
3. Commit your changes — `git commit -m "Add your feature"`
4. Push to the branch — `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by [Kanav Chauhan](https://kanav-public.netlify.app/)**

⭐ If you found this useful, give it a star on GitHub!

</div>
