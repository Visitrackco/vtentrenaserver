const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const DesignerEntrenaSchema = new Schema({
     dateCreated: {
          type: Date
     },
     name: {
          type: String,
          default: '<-- My Designer -->',
     },
     JSONEntrena: {
          type: Object,
          default: {
               save: false,
               pages: [],
               count: 0,
               prom: 0
          }
     },
     public: {
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
     },
     keys: [{
          type: Schema.Types.ObjectId,
          ref: 'usersbasicsentrena'
     }]
})

module.exports = mongoose.model('designerentrena', DesignerEntrenaSchema);