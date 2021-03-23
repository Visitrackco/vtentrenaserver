const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
     dateCreated: {
          type: Date
     },
     message: {
          type: String
     },
     user: {
          type: Schema.Types.ObjectId,
          ref: 'usersbasicsentrena'
     },
     desing: {
          type: Schema.Types.ObjectId,
          ref: 'designerentrena'
     }
})

module.exports = mongoose.model('comments', CommentsSchema);