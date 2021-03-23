const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const UsersEntrenaSchema = new Schema({
     dateCreatedUser: {
          type: Date
     },
     login: {
          type: String,
          default: ''
     },
     password: {
          type: String,
          default: ''
     },
     name: {
          type: String,
          default: ''
     },
     role: {
          type: String,
          default: 'ADMIN_ENTRENA'
     }
})

module.exports = mongoose.model('usersadminentrena', UsersEntrenaSchema);