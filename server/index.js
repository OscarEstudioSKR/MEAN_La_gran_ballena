const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./database');
const routes = require('./routes/routes');

//Settings
app.set('port', process.env.PORT || 3001);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api', routes);
//Server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'))
});