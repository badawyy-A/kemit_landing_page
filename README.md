# KEMIT - Egyptian Tourism AI Landing Page

## Overview

KEMIT (meaning "Black Land," the ancient name for Egypt) is a responsive landing page for a web application that promotes Egyptian tourism using artificial intelligence. The application allows users to interact with Ancient Egyptian Kings through a chatbot and an image recognition tool.

## Features

- **Responsive Design**: Mobile-first layout with adaptive scaling for tablets and desktops
- **Light/Dark Mode**: Toggle between light and dark themes
- **Interactive Demo**: Two-tab interface for chatbot and vision model interactions
- **Modern UI**: Clean, intuitive interface with smooth transitions and animations

## Tech Stack

- React 18+
- TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Context API for theme state management

## Brand Identity

- **Primary Color**: Yellow `#F5C518` (symbolizing gold, sun, and pharaonic glory)
- **Light Theme**:
  - Background: `#FFFFFF`
  - Text: `#1A1A1A`
  - UI Elements: `#FAFAFA`
- **Dark Theme**:
  - Background: `#121212`
  - Text: `#F0F0F0`
  - Cards/Containers: `#1F1F1F`

## Project Structure

```
/src
  /components
    Header.tsx
    Footer.tsx
    ThemeToggle.tsx
  /context
    ThemeContext.tsx
  /pages
    HomePage.tsx
    DemoPage.tsx
  /tabs
    ChatbotTab.tsx
    VisionTab.tsx
  App.tsx
  index.tsx
  index.css (with Tailwind)
```

## API Integration

The application is designed to integrate with two main API endpoints:

1. **Chatbot Endpoint** (`POST /chat`): Processes user text and responds with information about Egyptian kings and history.

2. **Image Upload & Artifact Identification** (`POST /upload-image`): Analyzes uploaded images to identify Egyptian kings and provides historical information.

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder, optimized for best performance.

## Docker

### `docker build -t kemit-landpage .`
### `docker run -p 4000:4000 kemit-landpage`

## License

 2025 KEMIT. All rights reserved.
