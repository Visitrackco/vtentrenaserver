const UserLogSchema = require('../Models/EntrenaVTModels/LogUsers');
const moment = require('moment-timezone');

class UserLogs {

     constructor() { }

     createdLog(userData, action) {
          return new Promise((resolve, reject) => {
               const myLog = new UserLogSchema({
                    action,
                    dateCreated: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss'),
                    userID: userData._id,
                    userInfo: {
                         login: userData.login,
                         name: userData.name,
                         ip: userData.ip,
                         id: userData._id,
                         navigator: userData.navigator,
                         agent: userData.agent,
                         role: userData.role
                    }
               });
     
               myLog.save((error, userLog) => {
                    if (error) {
                         reject({
                              status: 'error',
                              error
                         })
                    }

                    resolve({
                         status: 'ok',
                         response: userLog
                    })
               })
          })
          
     }
}

module.exports = UserLogs;