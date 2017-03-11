# cycle-scripts-ls

[Cycle-app](https://github.com/cyclejs-community/create-cycle-app) LiveScript flavor.

## Language

[LiveScript](http://livescript.net/) 1.5.0

Also includes CSS support with [postcss](https://github.com/postcss/postcss) and [autoprefixer](https://github.com/postcss/autoprefixer).

## Bundler

Webpack configured with
* [Webpack dev server](https://webpack.github.io/docs/webpack-dev-server.html)
* [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)

## Scripts

- `npm start`: Start development server listening on port 8000
- `npm test`: Run the default test tool
- `npm run build`: Generate a production-ready build content, on the `build` folder (this folder is *gitignored*)
- `npm run eject`: Copy flavor's dependencies and configurations to the project folder, update `package.json` and remove the dependency on the flavored `cycle-scripts-ls`. This is irreversible.


## Boilerplate:

The flavor generate the following file structure:

```
my-awesome-cycle-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── app.ls
│   ├── app.test.ls
│   └── index.ls
└── package.json
└── postcss.config.js
```
