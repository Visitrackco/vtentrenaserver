const ConnectionsSchema = require('../Models/Conecctions');
class Connections {

     constructor() {
     }

     createdConnection(data) {
          return new Promise((resolve, reject) => {
               ConnectionsSchema.find({userLogin: data.login})
               .exec((error, userData) => {
                    if (error) {
                         reject({
                              status: 'false',
                              error
                         })
                    }

                    console.log(userData, 'datica')

                    if (userData.length === 0) {
                         let connection = new ConnectionsSchema({
                              company: data.CompanyID,
                              userLogin: data.login,
                              userName: data.name,
                              type: data.type ? data.type: 'inter'
                         })
               
                         connection.save((err, connectionData) => {
                              if (err) {
                                   reject({
                                        status: 'false',
                                        err
                                   })
                              }
          
                              resolve({
                                   status: 'ok',
                                   connectionData
                              })
                         })
                    } else {
                         resolve({
                              status: 'ok',
                              userData
                         })
                    }
               })
          })
          
     }

     deleteConnection(data) {
          return new Promise((resolve, reject) => {
               ConnectionsSchema.findOneAndDelete({userLogin: data.login})
               .exec((err, connection) => {
                    if (err) {
                         reject({
                              status: 'false',
                              err
                         })
                    }

                    resolve({
                         status: 'ok',
                         connection
                    })
               }) 
          })
          
     }

     getUsuarios(data) {
          return new Promise((resolve, reject) => {
               ConnectionsSchema.find({company: data.CompanyID})
               .exec((err, connections) => {
                    if (err) {
                         reject({
                              status: 'false',
                              err
                         })
                    }

                    resolve({
                         status: 'ok',
                         connections
                    })
               }) 
          })
     }


}


module.exports = Connections;