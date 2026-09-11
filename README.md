# 📸 Interactive Photo Gallery — CodeAlpha Task 1

A modern, responsive, and accessible image gallery web application built using Vanilla JavaScript and the Unsplash REST API. Developed as part of the **CodeAlpha Frontend Development Internship**.

---

## 🚀 Live Demo
- **Live Preview:** [View Demo on Vercel](https://code-alpha-image-gallery-bice.vercel.app/)
- **Repository:** [GitHub Source Code](https://github.com/keto178/CodeAlpha_ImageGallery/tree/main)
- **Portfolio:** [keroloseid.com](https://www.keroloseid.com/en)

---

## ✨ Key Features
- **Curated Category Filters:** Instant filtering for predefined tags (Nature, Architecture, Minimal, etc.).
- **Live Search Functionality:** Real-time query submission supporting both mouse click and the `Enter` key.
- **Interactive Fullscreen Lightbox:** High-resolution modal view featuring dynamic image sizing.
- **Complete Navigation Controls:** Next/Previous image cycling with edge-wrapping logic.
- **Keyboard & UX Accessibility:**
  - `Escape` key to dismiss the viewer.
  - `ArrowLeft` & `ArrowRight` for instant image cycling.
  - Backdrop dismissal (click outside the image container).
- **Responsive Layout:** CSS Grid auto-fill mechanics paired with Flexbox for full mobile-to-desktop adaptation.

---

## 🌐 API Integration & Architecture
The application integrates directly with the **Unsplash REST API** using client-side JavaScript:
- **Endpoint:** Queries the `/search/photos` endpoint with dynamic search parameters and strict per-page thresholds.
- **Asynchronous Flow:** Utilizes modern `async/await` syntax wrapped in robust `try...catch` blocks to capture HTTP errors and connection drops gracefully.
- **Payload Extraction:** Parses JSON responses to deliver multi-resolution assets (`small` for gallery thumbnails, `regular` for full-screen rendering) along with author metadata.
- **State Management:** Preserves the active image collection in memory (`photos[]`), allowing smooth indexed modal navigation without making redundant network calls.

---

## 🛠️ Built With
- **HTML5:** Semantic markup, data attributes, and accessible containers.
- **CSS3:** Flexbox, CSS Grid, media queries, transitions, and backdrop blur/overlays.
- **Vanilla JavaScript (ES6+):** Fetch API, DOM manipulation, event delegation, and keyboard event handlers.
- **Platform:** Vercel (Deployment) & GitHub (Version Control).


## 🏁 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari).
- An [Unsplash Developer Account](https://unsplash.com/developers) to get an Access Key.
- Recommended: [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VS Code.

---

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/keto178/CodeAlpha_ImageGallery.git](https://github.com/keto178/CodeAlpha_ImageGallery.git)
   cd CodeAlpha_ImageGallery

   Configure your API Key:

Open your JavaScript file (e.g., script.js).

Add your Unsplash Access Key:

JavaScript
const ACCESS_KEY = "d670e1ef";
Run the Project:

Using VS Code: Right-click index.html and choose "Open with Live Server".

Directly: Double-click index.html to open it in your browser.

👨‍💻 Author
Kerolos Eid

LinkedIn: keroloseid159

Portfolio: keroloseid.com
