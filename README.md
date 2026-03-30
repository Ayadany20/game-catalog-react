# React + Vite

Esta plantilla proporciona una configuración mínima para trabajar con React en Vite, incluyendo recarga en caliente (HMR) y algunas reglas de ESLint.

Actualmente, hay dos plugins oficiales disponibles:

* @vitejs/plugin-react (https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) utiliza Oxc (https://oxc.rs)
* @vitejs/plugin-react-swc (https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) utiliza SWC (https://swc.rs/)

## Compilador de React

El compilador de React no está habilitado en esta plantilla debido a su impacto en el rendimiento durante el desarrollo y la construcción del proyecto. Para agregarlo, consulta la documentación en:
https://react.dev/learn/react-compiler/installation

## Ampliación de la configuración de ESLint

Si estás desarrollando una aplicación para producción, se recomienda usar TypeScript con reglas de linting basadas en tipos. Consulta la plantilla de TypeScript en:
https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts

para obtener información sobre cómo integrar TypeScript y typescript-eslint en tu proyecto.
