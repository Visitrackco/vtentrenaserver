const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const AnswerEntrenaSchema = new Schema({
     dateCreated: {
          type: Date
     },
     JSONEntrena: {
          type: Object,
          default: {
               save: false,
               pages: [],
               count: 0,
               prom: 0,
               tot: 0
          }
     },
     name: {
          type: String,
          default: ''
     },
     saveAnswer: {
          type: Boolean,
          default: false
     },
     userAnswer: {
          type: Schema.Types.ObjectId,
          ref: 'usersbasicentrena'
     },
     parentDesigner: {
          type: Schema.Types.ObjectId,
          ref: 'designerentrena'
     },
     parentAdmin: {
          type: Schema.Types.ObjectId,
          ref: 'usersadminentrena'
     }
})

module.exports = mongoose.model('answersdesigner', AnswerEntrenaSchema);