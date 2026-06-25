# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### UseEffect()

"The exact architecture is: A state change triggers a component re-render. After the render finishes, React inspects the useEffect dependency array. If it detects a difference between the old values and the new values, it clears out the previous cycle's cleanup function and re-runs the callback function with the fresh state variables."

📝 Your Master Cheat Sheet Rules:
Dependencies Same: State changes ➔ Component re-renders ➔ useEffect skips the callback function.

Dependencies Changed: State changes ➔ Component re-renders ➔ useEffect re-runs the callback function.

A change in dependencies triggers a re-run of the callback function.