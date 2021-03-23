const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PreferencesSchema = new Schema({
     dateCreated: {
          type: Date
     },
     nameCompany: {
          type: String
     },
     logo: {
          type: String
     },
     theme: {
          type: String
     },
     user: {
          type: Schema.Types.ObjectId,
          ref: 'usersadminentrena'
     }
})

module.exports = mongoose.model('preferences', PreferencesSchema);