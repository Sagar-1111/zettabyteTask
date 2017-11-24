const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const userRoutes = require('./routes/users');
const pictureRoutes = require('./routes/pictures');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
userRoutes(app);
pictureRoutes(app);

app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message });
});

app.listen('3003', () => {
  console.log('server started on port 3003');
});

module.exports = app;