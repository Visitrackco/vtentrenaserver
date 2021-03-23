const UsersBasicShecma = require('../Models/EntrenaVTModels/UsersBasicsEntrena');
const moment = require('moment-timezone');
const job = require('node-cron');

const myJob = job.schedule('* * * * *', () => {
     UsersBasicShecma.find({status: 'on'})
     .exec((error, documents) => {
          if (error) {
               reject({
                    status: 'error',
                    error
               })
          }

          const date = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm');

          if (documents.length > 0) {
               documents.forEach((user) => {
                    if (user.configuration.dateLimit) {
                         const dateLimit = moment(user.configuration.dateLimit).format('YYYY-MM-DD HH:mm');

                         if (date >= dateLimit) {
                              console.log('Ejeutando')
                              const _id = user._id;
                              UsersBasicShecma.findByIdAndUpdate(_id, {status: 'off'}, {new: true}).exec((err, userBasic) => {
                                   if (err) {
                                        console.log(err.message, 'errores');
                                   } 
                              })
                         }
                    }
                   
               })
          }
     })
})

               
