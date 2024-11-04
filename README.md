# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Setup

1. Clone the repo
2. `cd` into the 'MUI-practice' directory using `cd MUI-practice`.
3. Run `npm install` to install all required packages.

## Starting JSON server

Use the following command to start the json server to act as your backend.
`npx json-server --watch data/db.json`
By default, it will open at port 3000, so use `http://localhost:3000/notes` as your api endpoint.

## Starting vite server

Use the following:
`npm run dev`
