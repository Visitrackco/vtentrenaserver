const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');
const date = new Date().toISOString();

const Categories = new Schema({
     userID: {
          type: String
     },
     name: {
          type: String,
          required: [true, 'Nombre Requerido']
     },
     description: {
          type: String,
          default: ''
     },
     company: {
          type: String,
          required: [true, 'Necesario la empresa del usuario']
     },

     dateCreated: {
          type: String,
          default: moment(date).tz('America/Bogota').format('YYYY-MM-DD HH:mm')
     },

     status: {
          type: String,
          default: 'up'
     },

     permiss: {
          type: Array,
          default: []
     }

});


module.exports = mongoose.model('categories', Categories);