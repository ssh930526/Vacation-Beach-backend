// Require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const indexRouter = require('./routes/index');
const beachesRouter = require('./routes/beaches');
const fijiRouter = require('./routes/fijis');
var cors = require('cors');
const port = process.env.PORT || 3000;

require('dotenv').config();
// Set up express app
const app = express();

// Connect to DB
require('./config/database');

// Configure the app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()
// app.use(logger('dev'));
app.use(express.json()); 
app.use(cors());

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/api/beaches', beachesRouter);

// Mount routes with app.use()
app.use('/', indexRouter);
app.use('/beaches', beachesRouter);
app.use('/fiji',fijiRouter);

// Tell App to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});

module.exports = app;