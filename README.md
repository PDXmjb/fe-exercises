# Frontend Exercises

Practice projects for senior-level frontend coding interviews.

## Setup

```bash
pnpm install
pnpm dev
```

## Adding an Exercise

1. Create a folder in `src/exercises/your-exercise-name/`
2. Add your component(s) and styles
3. Export from `src/exercises/your-exercise-name/index.jsx`
4. Add a route in `src/App.jsx`
5. Add an entry to the `exercises` array in `src/pages/Home.jsx`

Example structure:
```
src/exercises/todo-app/
  index.jsx
  TodoApp.jsx
  TodoApp.css
```

## Tech Stack

- React 19
- Vite
- React Router
- pnpm
