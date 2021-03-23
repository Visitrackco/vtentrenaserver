const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const myChat = new Schema({
     createdDate: {
          type: String,
          default: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm')
     },
     name: {
          type: String
     },
     estado: {
          type: String,
          default: 'private'
     }
})

module.exports = mongoose.model('chats', myChat);