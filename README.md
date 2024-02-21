# Initial Setup Vite + React
- first create a folder where you want to create your React app
- open it on your preferred IDE then open terminal in that directory
- enter `npm create vite@latest ./`
- install node modules `npm i` or `npm install`

# Setup your own tailwind
- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
- check *index.html*. Under root should find script module `src="/src/main.jsx"`
- add (@tailwind base; @tailwind components; @tailwind utilities;) to *index.css*
- import in *App.jsx* the *index.css*