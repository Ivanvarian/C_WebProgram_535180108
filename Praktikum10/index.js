const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// body-parser to parse request body
app.use(bodyParser.urlencoded());

// static files
app.use(express.static('public'));

// routes
const auth = require('./routes/auth');
app.use('/auth', auth);
const index = require('./routes/index');
const auth = require('./routes/auth');

app.use('/', index);
app.use('/auth', auth);



// start server on port 3000
app.listen(3000);
console.log('Server runs at port 3000...');
