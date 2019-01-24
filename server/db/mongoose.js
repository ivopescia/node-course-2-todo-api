const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://udemyuser:appway19@ds111425.mlab.com:11425/nodecrs' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};