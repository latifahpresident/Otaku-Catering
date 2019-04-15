const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dishRoutes = require('./routes/dishRoutes');

const app = express()

const accessLogStream = fs.createWriteStream( //writting morgan logs to file
    path.join(__dirname, 'access.log'),
    { flags: 'a'} //append new logs and not override files
);

 

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined', {stream: accessLogStream}));

app.use(dishRoutes);




module.exports = app