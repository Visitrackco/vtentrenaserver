const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChildrenCommentsSchema = new Schema({
     dateCreated: {
          type: Date
     },
     message: {
          type: String
     },
     creator: {
          type: String
     },
     name: {
          type: String
     },
     comment: {
          type: Schema.Types.ObjectId,
          ref: 'comments'
     },
})

module.exports = mongoose.model('childrencomments', ChildrenCommentsSchema);