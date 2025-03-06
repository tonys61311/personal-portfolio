# Personal Portfolio

This is a personal portfolio website built with [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/), in combination with [BootstrapVue 3](https://www.npmjs.com/package/bootstrap-vue-3), [Font Awesome](https://fontawesome.com), and [AOS](https://michalsnik.github.io/aos/) to achieve RWD (responsive web design), basic animations, form mail submission, and more. This project also demonstrates how to use [Netlify Functions](https://docs.netlify.com/functions/overview/) for sending emails.

---

## Demo

[Personal Portfolio - Demo](https://tonys61311.github.io/personal-portfolio)

## Features

1. **Vue 3 + TypeScript**  
   - Written using Composition API and Class Component for clear code structure.
2. **BootstrapVue 3**  
   - Provides rich UI components and supports responsive layouts.
3. **Font Awesome**  
   - Incorporates various icons for a more visually appealing website.
4. **AOS (Animate On Scroll)**  
   - Animates elements when they appear in the viewport during scrolling.
5. **Form Submission via Email**  
   - Integrates with [Mailgun](https://www.mailgun.com/) service, implementing email sending in Netlify Functions.
6. **Responsive Web Design (RWD)**  
   - Ensures a consistent user experience across desktop and mobile devices.
7. **Netlify Functions**  
   - Eliminates the need for a dedicated server. Functions can be deployed on Netlify and seamlessly integrated with the frontend.

---

## Project Structure

```bash
personal-portfolio
├── netlify
│   └── functions
│       └── submit-form.js    # Netlify Functions: Handles email form submissions
├── public
│   ├── img                   # Static images
│   ├── favicon.ico           # Favicon
│   ├── index.html            # Main entry HTML
│   └── robots.txt            # Search engine crawling rules
├── src
│   ├── assets
│   │   ├── img               # Images/icons used in the frontend
│   │   └── styles            # Global or shared CSS/SCSS
│   ├── components            # Reusable Vue components
│   ├── router                # Vue Router configuration
│   ├── store                 # Vuex state management (if needed)
│   ├── ts
│   │   ├── enum              # TypeScript enums, interfaces, or type definitions
│   │   └── ...
│   ├── views                 # Main pages (Views)
│   ├── App.vue               # Root Vue component
│   ├── main.ts               # Project entry point (loads root component, plugins)
│   └── registerServiceWorker.ts
├── .env                      # (Optional) Environment variables (e.g., Mailgun API Key)
├── .gitignore                # Git ignore list
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript compilation settings
└── README.md                 # Project documentation (this file)
```

## Installation and Usage

### Prerequisites

- **Node.js**: v18.19.1
- **npm**: 10.8.1

### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/tonys61311/personal-portfolio.git
   ```

2. Navigate into the project directory：
   ```bash
   cd personal-portfolio
   ```

3. Install dependencies：
   ```bash
   npm install
   ```

4. Start the local development server：
   ```bash
   npm run serve
   ```