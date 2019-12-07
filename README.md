# BooksLibrary
Simple web page with graphql and reactjs

#### Used technologies
``` 
Webpack, EsLint
Javascript, ES6,7,8
ReactJS
Styled Components
GraphQl, Node, Express
Jest, Enzhyme
StoryBook
```

# Install guide for development mode
```sh
$ cd  client
$ npm install
$ npm start
```

# Install guide for production mode
```sh
$ cd client
$ npm ci
$ npm run prod
```

# Note
> envSettings.json file should be overwrite with neccassary environment.


# Project structure
```sh
.
├── client
│   ├── envSettings.json
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   └── index.html
│   ├── README.md
│   ├── server
│   │   └── server.prod.js
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   ├── Authors
│   │   │   │   ├── AddAuthor.js
│   │   │   │   ├── AuthorDetails.js
│   │   │   │   ├── AuthorList.js
│   │   │   │   └── Authors.js
│   │   │   ├── Books
│   │   │   │   ├── AddBook.js
│   │   │   │   ├── BookDetails.js
│   │   │   │   ├── BookList.js
│   │   │   │   ├── Books.js
│   │   │   │   └── UpdateBook.js
│   │   │   └── Navbar
│   │   │       └── Navbar.js
│   │   ├── index.js
│   │   ├── queries
│   │   │   └── queries.js
│   │   ├── routes.js
│   │   ├── settings
│   │   │   └── apolloClientSettings.js
│   │   ├── stylesheets
│   │   │   └── navbar.scss
│   │   └── styles.scss
│   └── webpack.config.js
├── README.md
└── server
    ├── app.js
    ├── models
    │   ├── author.js
    │   └── book.js
    ├── package.json
    ├── package-lock.json
    └── schema
        └── schema.js
```