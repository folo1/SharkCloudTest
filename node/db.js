const mongoose = require('mongoose');

const MONGO_USERNAME = 'sammy';
const MONGO_PASSWORD = 'your_password';
const MONGO_HOSTNAME = 'mongo';
const MONGO_PORT = '27017';
const MONGO_DB = 'sharkinfo'

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
mongoose.connect(url, {useNewUrlParser: true});
