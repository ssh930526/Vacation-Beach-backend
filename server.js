

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const beachesRouter = require('./routes/beaches');


const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json()); 
app.use(cors());

app.use('/api/beaches', beachesRouter);


module.exports = app;