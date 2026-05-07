# Recipes Board

# Deployed [here](https://fmarcio.github.io/recipes-board)

## Overview
A modern, responsive recipe management application built with **React**, **Vite**, and **TypeScript**. This project features real-time data synchronization with **Firebase Firestore**, custom theme selection, and comprehensive unit testing.

## Tech Stack
- **Framework:** React (Latest)
- **Build Tool:** Vite
- **Language:** TypeScript (Strict Mode)
- **Database:** Firebase Firestore (Modular v10 API)
- **Routing:** React Router v6 (HashRouter for GitHub Pages)
- **Testing:** Vitest & React Testing Library
- **Styling:** Vanilla CSS with Responsive Media Queries

## Features
- **Real-time Recipes:** Fetch, add, and delete recipes in real-time.
- **Theme Selector:** Toggle between Light/Dark modes and change primary accent colors.
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewports.
- **Unit Tested:** Core components and pages are verified with automated tests.

## Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- Firebase Account (for Firestore)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/fmarcio/recipes-board.git
   cd recipes-board
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root and add your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

### Available Scripts
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run test`: Runs unit tests.
- `npm run deploy`: Deploys the application to GitHub Pages.

---
*Based on the 'Cooking Ninja' project by Shaun Pelling (The Net Ninja).*
