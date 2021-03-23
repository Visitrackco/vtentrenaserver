const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const UsersEntrenaSchema = new Schema({
     dateCreatedUser: {
          type: Date,
     },
     login: {
          type: String,
          default: '',
          unique: true
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
          default: 'USER_ENTRENA'
     },
     configuration: {
          type: Object,
          default: {
               timeLimit: 24,
               dateLimit: ''
          }
     },
     status: {
          type: String,
          default: 'off'
     },
     close: {
          type: Boolean,
          default: false
     },
     delete: {
          type: String,
          default: 'false'
     },
     parentAdmin: {
          type: Schema.Types.ObjectId,
          ref: 'usersadminentrena'
     }
})

module.exports = mongoose.model('usersbasicsentrena', UsersEntrenaSchema);