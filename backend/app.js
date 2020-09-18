const express = require('express');
const bodyparser = require('bodyparser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extend: true}));
app.use(cors);

mongoose.connect('mongodb://localhost:27017/http_app', {useNewUrlParser: true});

app.use('/users', users_controller);
//app.use('/registerClock', registerClock_controller);

app.listen(3000);