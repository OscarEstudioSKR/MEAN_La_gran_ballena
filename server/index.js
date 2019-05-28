const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./database');
const routes = require('./routes/routes');
const cors = require('cors');

//Settings
app.set('port', process.env.PORT || 3001);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use( cors({ origin: 'http://localhost:4200' }) );

//Routes
app.use('/api', routes);

//Server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'))
});