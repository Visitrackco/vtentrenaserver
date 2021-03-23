const UsersBasicShecma = require('../Models/EntrenaVTModels/UsersBasicsEntrena');

class UsersControls {

     constructor() {}

     sessionLimit(data) {
          return new Promise((resolve, reject) => {
               UsersBasicShecma.find({_id: data._id, status: 'off'})
               .exec((error, documents) => {
                    if (error) {
                         reject({
                              status: 'error',
                              error
                         })
                    }
                    
                    if (documents.length > 0) {

                         const _id = documents[0]._id

                         UsersBasicShecma.findByIdAndUpdate(_id, {close: true}, {new: true})
                         .exec((err, user) => {
                              if (err) {
                                   reject({
                                        status: 'error',
                                        err
                                   })
                              }

                              resolve({
                                   status: 'ok',
                                   response: user
                              })
     
                         })
                    } else {
                         resolve({
                              status: 'close'
                         }) 
                    }
               })
          })
     }

}

module.exports = UsersControls;