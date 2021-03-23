const { io } = require('../app');
const Connections = require('../Classes/Usuario');
const MyChat = require('../Classes/Chat');
const nodecron = require('node-cron');
const UserEntrena = require('../Classes/UsersEntrena');

io.on('connection', (client) => {
     console.log('Nuevo cliente conectado');

     //VT ENTRENA
 
     let myjob;

     client.on('connectVT', (data) => {
          client.join(data._id);
          console.log(data, 'USER ENTRY');
          if (data.role === 'USER_ENTRENA') {
               myjob = nodecron.schedule('* * * * *', () => {
                    console.log('Creado job')
                    const user = new UserEntrena();
                    user.sessionLimit(data).then((res) => {
                       //  console.log(res, ' respuesta')
                         if (res.status === 'ok') {
                              console.log(res.response._id, 'ID')
                              client.emit('closedSession', {});
                         }
                    })
               });
          } 
         
         
     })

     client.on('changeStatusUser', (data) => {
          client.broadcast.to(data._id).emit('closedSession', {});
     })


     client.on('exitVT', (data) => {
          if (myjob) {
               myjob.destroy();
          }
          console.log('Bajo', myjob)
          client.leaveAll();
     })

     

     client.on('disconnect', () => {
          if (myjob) {
               myjob.destroy();
          }
          console.log('Bajo', myjob)
          client.leaveAll();
     })


     // ESTO ES DEL VT WEB *************************************************************

     // client.on('send', (data) => {
     //      data.fecha = new Date();
     //      io.emit('listenMessage', data);
     // })

     client.on('login', (data) => {
          client.join(data.ID);
          console.log(data);
     })

     client.on('welcome', async (data) => {
          try {
               const myConnection = new Connections();

               const newUserConnection = await myConnection.createdConnection(data);

               if (newUserConnection) {
                    client.join(data.CompanyID);
                    const connections = await myConnection.getUsuarios(data);

                    if (connections) {
                         console.log('bienvenido', connections)
                         client.broadcast.to(data.CompanyID).emit('users', connections);
                         client.broadcast.to(data.CompanyID).emit('notification', {message: `${data.name} se acaba de conectar`});
                    }
                    
               } else {
                    console.log('error')
               }
          } catch (error) {
               console.log('error 2', error)
          }
          
     })

     client.on('welcomeExt', async (data) => {
          try {
               const myConnection = new Connections();

               const newUserConnection = await myConnection.createdConnection(data);

               if (newUserConnection) {
                    const connections = await myConnection.getUsuarios(data);

                    if (connections) {
                         console.log('bienvenido', connections)
                         client.broadcast.to(data.CompanyID).emit('users', connections);
                         client.broadcast.to(data.CompanyID).emit('notification', {message: `${data.name} se acaba de conectar`});
                    }
                    
               } else {
                    console.log('error')
               }
          } catch (error) {
               console.log('error 2', error)
          }
          
     })


     
     client.on('chatUser', (data) => {
          console.log(data)
          client.broadcast.emit('chatUser', {
               msg: data.msg,
               usuario: data.usuario,
               fecha: new Date()
          });
     })

     client.on('salir', async (data) => {
        //  console.log('Ha salido del chat', data)
         // let usersChat = users.data.filter((item) => item.Login !== data.Login)
        //  console.log(usersChat)
         // client.broadcast.emit('usersall', usersChat);

         const myConnection = new Connections();

          const myUserConnection = await myConnection.deleteConnection(data);

          if (myUserConnection) {
               // client.join(data.CompanyID);
               // data.IDSocket = client.id;
               console.log(myUserConnection)
              // client.broadcast.to(data.CompanyID).emit('users', data);

                    const connections = await myConnection.getUsuarios(data);

                    if (connections) {
                         console.log('Eliminados', connections)
                         client.broadcast.to(data.CompanyID).emit('users', connections);
                         client.broadcast.to(data.CompanyID).emit('notification', {message: `${data.name} se desconectó`});
                         
                          client.leave(data.CompanyID);
                    }


          }
     })


     client.on('chat', async (data) => {
          
          try {
               const myChat = new MyChat();

               const createdChat = await myChat.createdChat(data);

               if (createdChat) {
                    console.log(createdChat, 'ok')
                    data.users.forEach((item) => {
                         console.log(item, 'enviando');
                         client.to(item).emit('notification', {
                              message: 'Te agregaron a una nueva sala de chat'
                         });
                         client.to(item).emit('newchat', {});
                    })
               }
          } catch (error) {
               console.log(error, ' Error')
               data.users.forEach((item) => {
                    client.to(item).emit('notification', {
                         message: 'Se intento agregarte a un chat pero no se pudo'
                    });
               })
          }
     })

     client.on('entryChat', (data) => {
          client.join(data.idChat)
     })


     client.on('sendMessage', async (data) => {
          
          try {
               const myChat = new MyChat();

               const createdMessage = await myChat.createdMessage(data);

               if (createdMessage) {
                    console.log(createdMessage, 'ok')
                
                    client.broadcast.to(data.parentChat).emit('recepMessage', createdMessage);
               }
          } catch (error) {
               console.log(error, ' Error')
             
               client.broadcast.to(data.parentChat).emit('notification', {
                    message: 'Se intento recibir un mensaje pero no se pudo, comprueba tu conexión'
               });
          }
     })
})