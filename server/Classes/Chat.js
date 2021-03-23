const ChatSchema = require('../Models/ChatModels/Chat');
const ListUsersChat = require('../Models/ChatModels/ListUsersChat');
const MessagesChat = require('../Models/ChatModels/MessagesChat');

class Chat {

     constructor() {}

     createdChat(data) {
          return new Promise((resolve, reject) => {

               const myChat = new ChatSchema({
                    name: data.name
               });

               myChat.save((err, chat) => {
                    if ( err ) {
                         reject({
                              status: 'err',
                              err
                         })
                    }

                    let _id = chat._id;
                    console.log('Mi data', data.users, _id)
                    data.users.forEach((user) => {
                         const listUsers = new ListUsersChat({
                              idUser: user,
                              parentChat: _id
                         })

                         listUsers.save((error, usersList) => {
                              if ( error ) {
                                   reject({
                                        status: 'err',
                                        error
                                   })
                              }

                              resolve({
                                   status: 'ok',
                                   response: usersList
                              })
                         })
                    })

                    
               })
          })
     }

     createdMessage(data) {
          return new Promise((resolve, reject) => {
               const myMessage = new MessagesChat({
                    message: data.message,
                    idUser: data.ID,
                    parentChat: data.parentChat,
               })
               myMessage.save((err, messages) => {
                    if (err) {
                         reject({
                              status: 'error',
                              err
                         })
                    }
          
                    resolve({
                         status: 'ok',
                         response: messages
                    })
               })
          })
     }

}

module.exports = Chat;