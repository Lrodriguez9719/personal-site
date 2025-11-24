# Personal Video Portfolio

A responsive, dark-themed personal website that showcases a collection of my favorite music videos. This frontend consumes a custom Node.js streaming API to display and play content dynamically.

## 🚀 Live Site
Visit: [https://luisrodriguez.site/](https://luisrodriguez.site/)

## 🛠 Technologies
- **Core:** HTML5, CSS3, Vanilla JavaScript
- **Hosting:** Cloudflare Pages
- **Architecture:** Client-side rendering with Fetch API

## ✨ Features
- **Native Video Player:** Utilizes HTML5 `<video>` tag for broad compatibility without external libraries.
- **Responsive Design:** CSS Grid layout that adapts seamlessly to mobile and desktop screens.
- **Dynamic Content:** Fetches video lists and metadata asynchronously from the backend API.
- **Dark Mode UI:** Designed for optimal viewing experience with custom CSS variables.

## 🔧 How it Works
1. On load, the JavaScript fetches metadata from `https://video-streaming.live/videos`.
2. It iterates through the JSON response and generates DOM elements for each video card.
3. The video player `src` attribute is set to the streaming endpoint, allowing the browser to handle buffering and streaming natively.

## 💻 Local Development
1. Clone the repository.
2. Open `index.html` in your browser or serve with a local server (e.g., VS Code Live Server).
3. The app is configured to connect to the live production backend by default.