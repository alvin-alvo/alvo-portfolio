
# Alvo Portfolio

A high-performance, retro-futuristic personal portfolio website built with modern web technologies. This project combines industrial typography with interactive WebGL shaders to create an immersive "faulty terminal" aesthetic.

## Technology Stack

This project leverages a cutting-edge stack focused on performance, visual fidelity, and developer experience.

### Core Framework
-   **Next.js 16**: Utilizing the App Router for server-side rendering and optimal performance.
-   **React 19**: Leveraging the latest React features for component-based UI architecture.
-   **TypeScript**: Ensuring type safety and robust code quality throughout the application.

### Design & Styling
-   **Tailwind CSS v4**: Utility-first CSS framework for rapid, responsive layout development.
-   **CSS Variables**: Extensive use of CSS variables for dynamic theming and consistency.
-   **Shadcn UI**: Accessible, reusable component primitives based on Radix UI.
-   **Lucide React**: Clean, consistent icon library.

### Graphics & Animation
-   **OGL**: A minimal WebGL library used to create the performant, interactive "Faulty Terminal" background shader.
-   **GSAP**: Professional-grade animation library for complex sequencing.
-   **Lenis**: Specialized library for smooth, inertial scrolling.
-   **Custom Shaders**: GLSL fragment and vertex shaders implementing CRT scanlines, glitch effects, and chromatic aberration.

### Typography
-   **Tanker**: A heavy, industrial sans-serif font used for primary branding.
-   **Space Grotesk**: A proportional sans-serif used for headings.
-   **JetBrains Mono**: A monospaced font used for UI elements and technical details.

## Key Features

-   **Interactive Faulty Terminal**: A custom WebGL background that simulates a glitching CRT monitor. It features mouse interaction, dynamic grid density adaptation for mobile devices, and customizable parameters for noise, flicker, and chromatic aberration.
-   **Retro Window Interface**: The main content acts as a window within the terminal OS, complete with "minimize", "maximize", and "close" controls that are styled with a brutally simple, retro aesthetic. These controls are responsive and hide automatically on smaller screens.
-   **Adaptive Typography**: Global font integration using Next.js font optimization and local font files (Tanker), ensuring fast loading and consistent rendering across devices.
-   **Responsive Design**: A mobile-first approach ensuring the terminal grid and UI elements scale gracefully from large desktop monitors to mobile screens.
-   **Smooth Scrolling**: Implementation of Lenis ensures a premium scrolling feel that mimics the weight of high-end interfaces.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

-   Node.js (LTS version recommended)
-   npm, yarn, pnpm, or bun

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/alvo-portfolio.git
    cd alvo-portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `src/app`: Application routes and layouts (App Router).
-   `src/components`: Reusable UI components including the `FaultyTerminal` shader wrapper and `WindowFrame`.
-   `src/lib`: Utility functions and helper code.
-   `public`: Static assets.

## License

This project is open source and available for personal and educational use.
