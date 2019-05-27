const mongoose = require('mongoose');

const URI = 'mongodb://localhost/db-laGranBallena';

mongoose.connect(URI)
    .then( db => console.log('DB is conected') )
    .catch( err => console.log(err) );

module.exports = mongoose;