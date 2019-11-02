# Project structure.

```sh
.
├── build
│   ├── bundle.js
│   └── index.html
├── envSettings.json
├── package.json
├── package-lock.json
├── public
│   └── index.html
├── README.md
├── server
│   └── server.prod.js
├── src
│   ├── App.js
│   ├── index.js
│   └── style.scss
└── webpack.config.js
```
# Install guide for development mode.
```sh
$ npm install
$ npm start
```

# Install guide for production mode.
```sh
$ npm ci
$ npm run prod
```

# Note
> envSettings.json file should be overwrite with neccassary environment.