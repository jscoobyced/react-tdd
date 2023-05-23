# Start from Scratch

The scaffolding of this project was created using the following commands:
```
yarn create react-app --template typescript react-tdd
cd react-tdd
yarn add -D cypress
```

In the `package.json` file, you might want to move everything in `dependencies` to `devDependencies` except:
- react
- react-dom

Continue with
```
mkdir cypress/e2e
touch cypress/e2e/.gitkeep
touch cypress/tsconfig.json
```

Then paste the following content to `cypress/tsconfig.json`
```
{
    "compilerOptions": {
      "target": "es5",
      "lib": ["es5", "dom"],
      "types": ["cypress", "node"]
    },
    "include": ["**/*.ts"]
}
```

And add the following in the `scripts` section of `package.json`:
```
    "cypress": "cypress open",
```

Delete the following files:
- src/App.css
- src/App.test.tsx
- src/index.css
- src/logo.svg
- src/reportWebVitals.ts
- public/favicon.ico
- public/logo192.png
- public/logo512.png
- public/manifest.json

Replace the file `src/App.tsx` content with:
```
function App() {
  return null;
}

export default App;
```

Replace the file `src/index.tsx` content with:
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Finally replace the `public/index.html` content with:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

You have now a very clean and dull project to start any React application and a proper testing environment. You can continue [here](../README.md#its-playtime).