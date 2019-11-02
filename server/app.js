const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4000;

// allow cross-origin requests
app.use(cors());

// connect to database
mongoose.connect('mongodb+srv://stepan1:CDQb3O58vvY1idNw@cluster0-xds4h.mongodb.net/graphqlDB?retryWrites=true&w=majority', 
    { useUnifiedTopology: true,
      useNewUrlParser: true }
    );
mongoose.connection.on('error', err => console.log(`Connection error: ${err}`));
mongoose.connection.once('open', () => { console.log('conneted to database'); });

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`now listening for requests on port ${PORT}`);
});
