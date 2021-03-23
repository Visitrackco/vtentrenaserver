const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Folders = new Schema({
     typeAction: {
          type: String,
          required: [true, 'Especifique la accion']
     },
     infoAction: {
          type: Object
     },
     parent: {
          type: String,

     },
     status: {
          type: String,
          default: 'up'
     }
});


module.exports = mongoose.model('folders', Folders)