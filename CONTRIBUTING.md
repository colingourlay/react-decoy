# Contributing

Contributions are always welcome, no matter how large or small.

Before contributing, please read the [code of conduct](CODE_OF_CONDUCT.md).

## Setup

1. Ensure your environment is running Node.js 10+
2. Git clone the React Decoy [repository](https://github.com/colingourlay/react-decoy).
3. From the root of the repository, run `npm install` to install development dependencies.

## Development

This project was bootstrapped using [TDSX](https://github.com/palmerhq/tsdx), to enable a consistent pre-configured environment for development of TypeScript-based utility packages.

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

### Commands

TDSX scaffolded the library inside `/src`, and also set up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```
npm start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `/src` causes a rebuild to `/dist`.

Then run the example inside another:

```
cd example
npm install # to install dependencies
npm start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**; [TDSX uses Parcel's aliasing](https://github.com/palmerhq/tsdx/pull/88/files).

To do a one-off build, use `npm run build`.

To run tests, use `npm test`.

### Configuration

Code quality is managed with `prettier`, `husky`, and `lint-staged`. The respective fields in `package.json` can be adjusted to change their configuration.

#### Jest

Jest tests are set up to run with `npm test`. This runs the test watcher (Jest) in an interactive mode. By default, runs tests related to files changed since the last commit.

#### Rollup

TSDX uses [Rollup v1.x](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

#### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`.

## Pull Requests

Please submit pull requests to initiate discussions about your contributions, and allow us to merge them!

1. Fork the repo and create your branch from `master`.
2. If you’ve changed APIs, update the documentation.
3. Make sure your code lints.
4. Push your changes to your own fork.
5. Create your pull request.

## License

By contributing to React Decoy, you agree that your contributions will be licensed under [The Unlicense](LICENSE).
