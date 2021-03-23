const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const ListUsersChat = new Schema({
     createdUserChat: {
          type: String,
          default: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm')
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

module.exports = mongoose.model('listuserschat', ListUsersChat);