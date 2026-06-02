# 3D Modern Portfolio Website

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)
![Three.js](https://img.shields.io/badge/Three.js-R3F-black?logo=three.js)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)

A high-performance, immersive 3D portfolio website designed with a modern, "HuggingFace-inspired" aesthetic. It features interactive 3D elements, smooth scroll animations, dark mode support, and a fully responsive layout.

## ✨ Features

*   **3D Hero Section**: Interactive particle system (Fibonacci spiral) and floating elements using `react-three-fiber`.
*   **Modern UI/UX**: Glassmorphism effects, soft shadows, and rounded aesthetics similar to HuggingFace.
*   **Dark/Light Mode**: Fully integrated theme toggling with persistent state.
*   **Animations**:
    *   Scroll-triggered entrance animations via `Framer Motion`.
    *   Hover effects on project cards and skills.
    *   Typewriter effect in the hero section.
*   **Responsive Design**: Mobile-first architecture using Tailwind CSS.
*   **Contact Form**: Functional frontend connected to a Node.js/Express backend simulation.
*   **Dynamic Content**: All data (Skills, Projects, Experience) is separated into a `constants.ts` file for easy updating.

## 🛠️ Tech Stack

### Frontend
*   **Framework**: [React](https://react.dev/) (via Vite)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)

### Backend (Optional)
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Purpose**: Handling contact form submissions.

## 📂 Project Structure

```text
├── components/           # Reusable UI components
│   ├── Navbar.tsx        # Responsive navigation with theme toggle
│   └── Scene3D.tsx       # The main 3D background canvas
├── sections/             # Page sections
│   ├── Hero.tsx          # Landing area with 3D background
│   ├── Skills.tsx        # Tech stack grid
│   ├── Projects.tsx      # Project showcase cards
│   ├── Experience.tsx    # Vertical timeline
│   ├── Certifications.tsx# Certificates grid
│   ├── Testimonials.tsx  # Testimonials carousel/grid
│   ├── Contact.tsx       # Contact form + 3D mail icon
│   └── Footer.tsx        # Social links and copyright
├── server/               # Backend API
│   └── server.js         # Express server entry point
├── App.tsx               # Main application layout
├── constants.ts          # Centralized data (Change your info here!)
├── index.html            # Entry HTML & Tailwind Config
├── index.tsx             # React Entry point
├── metadata.json         # Project metadata
├── package.json          # Dependencies and scripts
├── types.ts              # TypeScript interfaces
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites
*   Node.js (v16 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install Frontend Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

### Running the Backend (Optional)

If you want to run the local server for the contact form:

1.  Navigate to the server directory:
    ```bash
    cd server
    ```
2.  Install backend dependencies:
    ```bash
    npm install express cors body-parser dotenv
    ```
3.  Start the server:
    ```bash
    node server.js
    ```
    The server runs on `http://localhost:5000`.

## 🎨 Customization Guide

### 1. Updating Content (Name, Projects, Skills)
Open `constants.ts`. This file contains all the text data for the website.
*   **Skills**: Add/remove objects in the `SKILLS` array.
*   **Projects**: Update the `PROJECTS` array with your own links and images.
*   **Experience**: Modify the `EXPERIENCE` array for your timeline.

### 2. Changing Colors
The color palette is defined in `index.html` inside the `tailwind.config` script script tag.
*   `primary`: Main accent color (currently Blue).
*   `secondary`: Secondary accent (currently Sky).
*   `dark` / `light`: Background themes.

### 3. Modifying 3D Elements
To adjust the 3D background, open `components/Scene3D.tsx`.
*   **Particle Count**: Change `count` in `ComputingFibonacci`.
*   **Colors**: Modify the `color.setHSL` logic to change particle colors.

## 📦 Deployment

### Deploying Frontend (Vercel/Netlify)

1.  Push your code to GitHub.
2.  Log in to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3.  Import your repository.
4.  **Build Settings**:
    *   Framework Preset: **Vite**
    *   Build Command: `npm run build`
    *   Output Directory: `dist`
5.  Click **Deploy**.

### Handling the Contact Form in Production
Since the frontend is static, you have two options for the contact form:
1.  **Serverless Functions (Recommended)**: Convert `server/server.js` into a Vercel Serverless Function (`/api/contact.js`).
2.  **EmailJS**: Replace the backend call in `Contact.tsx` with [EmailJS](https://www.emailjs.com/) to send emails directly from the frontend without a backend.

## 🤝 Contributing

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
