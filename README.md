<h1 align="center"><picture><source srcset="https://raw.githubusercontent.com/colingourlay/react-decoy/master/assets/logo-inline.svg?sanitize=true" media="(min-width: 640px)" /><img title="React Decoy" alt="React Decoy" src="https://raw.githubusercontent.com/colingourlay/react-decoy/master/assets/logo-block.svg?sanitize=true" /></picture></h1>
<p align="center"><em>Heinous scripts art coming to desecrate thy React-render'd elements, thee sayeth? Let thy mighty decoy face the wicked DOM defilers, that we may liveth to render anoth'r day!</em></p>
<p align="center">
  <a href="https://www.npmjs.com/package/react-decoy"><img alt="NPM latest published version" src="https://img.shields.io/npm/v/react-decoy.svg?style=flat-square&color=333"></a> <img alt="Formats: CommonJS, ECMAScript Modules" src="https://img.shields.io/badge/formats-cjs%2C%20esm-333.svg?style=flat-square">
</p>

![React Decoy Demo](https://raw.githubusercontent.com/colingourlay/react-decoy/master/assets/demo.gif)

## Table of contents

- [Getting started](#getting-started)
- [About the project](#about-the-project)

## Getting started

```sh
npm install react-decoy
```

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Decoy } from 'react-decoy';

function ClickCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <p>
      <button onClick={increment}>↓</button>
      <code>{` = ${count}`}</code>
    </p>
  );
}

function App() {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive(!isActive);

  return (
    <div>
      <Decoy active={isActive}>
        <ClickCounter />
        <ClickCounter />
        <ClickCounter />
      </Decoy>
      <button onClick={toggle}>
        {`${isActive ? 'Dea' : 'A'}ctivate Decoy`}
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

<p style="text-align: right">
  <a href="https://codesandbox.io/s/react-decoy-getting-started-782wc"><img alt="Edit the previous code example on CodeSandbox" src="https://codesandbox.io/static/img/play-codesandbox.svg" height="33"></a>
</p>

## About the project

- React Decoy is currently maintained by [Colin Gourlay](https://colin-gourlay.com)
- It is currently licensed under [The Unlicense](LICENSE)
- If you'd like to help out, please submit ideas & bugs to the project's [issue tracker](https://github.com/colingourlay/react-decoy/issues)
- To contribute code and documentation, please see the [contribution guide](CONTRIBUTING.md)
- All contributions and project activity are subject to the project's [code of conduct](CODE_OF_CONDUCT.md)

### Credits

- Icon based on "Prop" by Luis Prado from the Noun Project
