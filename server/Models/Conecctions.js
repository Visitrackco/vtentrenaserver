const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Connection = new Schema({
     company: {
          type: String,
          required: [true, 'CompanyID Requerido']
     },
     userLogin: {
          type: String
     },
     userName: {
          type: String
     },
     type: {
          type: String,
          default: 'inter'
     }
})

module.exports = mongoose.model('connections', Connection)