## Installation

`git clone -o boilerplate https://github.com/CityOfAuburnAL/react-boilercomponent.git ./new-component`

`git remote add origin //repository-url`

`npm install`

## Getting Started

> Edit package.json

* name
* description
* repository.url

> Edit deploy.js

* componentName

> Develop

* `npm start`

## Common Issues

> `npm start`

* Verify you are not currently using port 3001. This is hardcoded and it will fail if it's unavailable.`

## AJAX

> Base component doesn't include ajax helper, if needed and need to support IE, below is the current preferred methodolgy

`npm i --save-dev whatwg-fetch promise-polyfill`

> Add the following to index.js

`import 'whatwg-fetch';`

`import Promise from 'promise-polyfill';`

`if (!window.Promise) { window.Promise = Promise; }`

## Deployment

> Demo

`npm run publish-demo`

Available at https://cityofauburnal.github.io/react-boilercomponent/

> NPM

* `npm login`
* `npm publish`

> City of Auburn Website

Below is outdated - this won't work. There is a project that hasn't been checked in yet which will build/deploy. Update this docs after that repo has a location...

`npm run deploy`

Available at https://static.auburnalabama.org/assets/react-components/coa-component/index.js

Page should also include peer dependancies: react, react-dom.

`<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>`

`<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>`

Then include new-component.

`<script src="https://static.auburnalabama.org/assets/react-components/coa-component/index.js"></script>`

## Commands

* `npm start`
* `npm run transpile`
* `npm run build`
* `npm run deploy-demo`
* `npm run publish-demo`

## Thanks

* https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220
