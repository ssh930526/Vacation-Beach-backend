

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
 
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("listening to port " + port);
})

module.exports = app;