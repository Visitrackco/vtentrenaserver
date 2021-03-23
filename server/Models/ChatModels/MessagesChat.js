const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const MessagesChat = new Schema({
     dateMessage: {
          type: String,
          default: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm')
     },
     message: {
          type: String
     },
     files: {
          type: Array,
          default: []
     },
     idUser: {
          type: String,
          required: [true, 'ID del usuario requerido']
     },
     parentChat: {
          type:  Schema.Types.ObjectId,
          ref: 'chats'
     }
})

module.exports = mongoose.model('messages', MessagesChat);