'use strict';

const express = require('express');
const morgan = require('morgan');
//const cors = require('cors');
const app = express();


// settings
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
//app.use(cors({origin: 'http://localhost:4200'}));

//Routes



//Starting the server
app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`);
});