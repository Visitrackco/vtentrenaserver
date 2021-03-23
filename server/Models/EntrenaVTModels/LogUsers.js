const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersLogSchema = new Schema({
     dateCreated: {
          type: String
     },
     userID: {
          type: String,
     },
     action: {
          type: String,
     },
     userInfo: {
          type: Object,
          default: {
               login: '',
               id: '',
               name: '',
               role: '',
               ip: '',
               navigator: '',
               agent: ''
          }
     },
     delete: {
          type: Boolean,
          default: false
     }
})

module.exports = mongoose.model('userslog', UsersLogSchema);