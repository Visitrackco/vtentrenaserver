const UsersBasicShecma = require('../Models/EntrenaVTModels/UsersBasicsEntrena');
const moment = require('moment-timezone');
const job = require('node-cron');
const axios = require('axios');
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

async function fnchilds(guid) {
    try {
     const resp = await axios.post('https://api.visitrack.com/api/Surveys/ActivityChilds', {
          AccessToken: '68C5A337B89F6B7A603861D440EB20D6',

          ParentGUID: guid,
     });

     return resp;
    } catch (error) {
     return [];
    }     
}

async function fnForm(guid) {
     try {
          const resp = await axios.post('https://api.visitrack.com/api/Surveys/Activities', {
               AccessToken: '68C5A337B89F6B7A603861D440EB20D6',
               From: moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm'),
               To: moment().format('YYYY-MM-DD HH:mm'),
               FormGUID: guid,
          });
     
          if (resp) {
    
               resp.data.forEach(async (item) => {
                    if (item.CompanyStatusName == 'SOLICITUD ENVIADA AL TECNICO' ) {
                         const childs = await fnchilds(item.GUID)
     
                         if (childs.data.length > 0) {
                              console.log('eliminado ', item.GUID)
                              const elimi = await axios.post('https://api.visitrack.com/api/Surveys/MovilDelete', {
                                   AccessToken: '68C5A337B89F6B7A603861D440EB20D6',
                                   ActivityGUID: item.GUID
                              });
                              console.log(elimi.data)
                         }
                    } else if (item.CompanyStatusName == 'MANTENIMIENTO FINALIZADO') {

                         const elimi = await axios.post('https://api.visitrack.com/api/Surveys/MovilDelete', {
                              AccessToken: '68C5A337B89F6B7A603861D440EB20D6',
                              ActivityGUID: item.GUID
                         });

                    }
               })
          }
     
          return resp;
     } catch (error) {
      return [];
     }     
 }

const eliminado = job.schedule(' */5 * * * *', async () => {

     console.log('Hola', moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm'))

     try {
          
          const solicitud1 = await fnForm('BAB8F522-721F-4E63-BF9F-C99F2CB78AC6')
          const solicitud2 = await fnForm('02CEE670-587E-49CA-A2CC-C10B1D519F65')
          const solicitud3 = await fnForm('76E93F88-7612-466E-BBD7-3C95A7679D6D')
      
      } catch (err) {
          console.log(err)
      }
   
})

               
