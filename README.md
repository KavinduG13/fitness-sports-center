# Fitness Sports Center — Gym Promotional Website

A responsive promotional website for **Fitness Sports Center**, a modern gym brand established in 2023. Built as part of a web development internship evaluation.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 (JSX) |
| Build Tool | Vite |
| Styling | Tailwind CSS v3 |
| Fonts | Bebas Neue, Inter (Google Fonts) |
| Deployment | _(add live link below)_ |

---

## Features

- **Hero Section** — Full-screen split layout with CTA buttons
- **About Section** — Mission statement with animated count-up stats (500+ Members, 20+ Trainers, 24/7 Access)
- **Services Section** — 4 image cards: Personal Training, Cardio Zone, Strength Training, Nutrition Coaching
- **Membership Plans** — 3-tier pricing (Basic / Pro / Elite) with PRO highlighted
- **Contact Form** — Full validation, loading state, success feedback
- **Responsive Design** — Mobile-first, hamburger nav on mobile
- **Scroll Animations** — Intersection Observer powered fade/slide reveals

---

## Setup Instructions

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone <your-github-repo-url>
cd fsc-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Live Demo

🔗 [Live Link](#) _(update after deployment)_

---

## Project Structure

```
fsc-frontend/
├── public/
│   ├── logo.png
│   ├── gym_interior.png
│   ├── service_personal_training.png
│   ├── service_cardio.png
│   ├── service_strength.png
│   └── service_nutrition.png
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Plans.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Figma Design

🎨 [Figma Design Link](#) _(add your Figma link here)_
