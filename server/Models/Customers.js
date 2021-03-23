const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const Customers = new Schema({
     name: {
          type: String,
          required: [true, 'Requerido el nombre del cliente']
     },
     login: {
          type: String,
          required: [true, 'Requerido el login del cliente'],
          unique: true
     },
     clave: {
          type: String,
          required: [true, 'Requerido la clave del cliente']
     },
     avatar: {
          type: String
     },
     idCompany: {
          type: String
     },
     userCreated:  {
          type: String
     },
     createdCustomer: {
          type: String,
          default: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm')
     }
})

module.exports = mongoose.model('customers', Customers);