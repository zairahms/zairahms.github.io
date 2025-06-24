# 🖥️ Personal Website Setup (React + Vite + TailwindCSS)

## 🚀 Quick Start

```bash
npm create vite@latest my-website -- --template react
cd my-website
npm install
npm install -D tailwindcss postcss autoprefixer
npm install react-router-dom
```

## 🎨 Tailwind Setup

Create `tailwind.config.js`:

```js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Create `postcss.config.js`:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Update `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import `index.css` in `main.jsx`:

```jsx
import './index.css';
```

## 🛣️ React Router Setup

In `src/main.jsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

## 🛠️ Basic Folder Structure

```
src/
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Tech.jsx
│   ├── Musings.jsx
│   └── Travel.jsx
├── App.jsx
├── index.css
├── main.jsx
```

Each component must start with:

```jsx
import React from 'react';
```

## 📜 Important Scripts

Add to `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

To run the dev server:

```bash
npm run dev
```

## 💡 Troubleshooting

| Error                   | Fix                                                   |
| :---------------------- | :---------------------------------------------------- |
| vite: command not found | `npm install vite --save-dev`                         |
| Unexpected end of JSON  | Fix your `package.json`                               |
| React is not defined    | Add `import React from 'react';`                      |
| Blank Page              | Check `index.html` and `main.jsx` for mounting issues |
| @tailwind unknown rule  | Install Tailwind IntelliSense extension               |

## 🌎 Deployment

Deploy easily with:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)

Both support Vite apps out of the box.

---

# 🎯 Summary Flow

```bash
npm create vite@latest my-website -- --template react
cd my-website
npm install
npm install -D tailwindcss postcss autoprefixer
npm install react-router-dom
# set up configs and css
npm run dev
```
