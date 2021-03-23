const express = require('express');
const router = express.Router();
const Preferences = require('../../Models/EntrenaVTModels/Preferences');
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../../Middleware/VerifyToken');
const path = require('path');
const fs = require('fs');
const moment = require('moment-timezone')


router.put('/vtentrena/preferences/theme', [verifyToken], (req, res) => {

     Preferences.find({user: req.user._id})
     .lean()
     .exec((err, doc) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err 
               })
          }

          if (doc.length > 0) {

               
               Preferences.findOneAndUpdate({_id: doc[0]._id}, {theme: req.body.theme, nameCompany: req.body.name}, {new: true}, (error, preferenceData) => {
                    if (error) {
                         return res.json({
                              status: 'error',
                              error
                         })
                    }
          
                    return res.json({
                         status: 'ok',
                         response: preferenceData
                    })
               })

          } else {

               let mypreference = new Preferences({
                    user: req.user._id,
                    nameCompany: req.body.name,
                    theme: req.body.theme,
                    dateCreated: moment().utc()
               });
               
               mypreference.save((error, preferenceData) => {
                    if (error) {
                         return res.json({
                              status: 'error',
                              error
                         })
                    }
          
                    return res.json({
                         status: 'ok',
                         response: preferenceData
                    })
               })

          }
     })
    
})


router.put('/vtentrena/preferences', [verifyToken], (req, res) => {


     Preferences.find({user: req.body.user})
     .lean()
     .exec((err, doc) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err 
               })
          }

          if (doc.length > 0) {

            
                    return res.json({
                         status: 'ok',
                         response: doc[0]
                    })

          } else {

          
                    return res.json({
                         status: 'ok',
                         response: ''
                    })

          }
     })
    
})


router.post('/vtentrena/preferences/upload', [verifyToken] , (req, res) => {
     const unico = moment().tz('America/Bogota').format('YYYYMMDDHHmmss');
   //  console.log('Hola 2')
               if (req.files) {
                    const file = req.files.file;
                    file.mv(path.resolve(__dirname, `../../public/uploads/Perfiles/${unico}-${file.name}`), (err) => {
                         if (err) {
                              return res.json({
                                   status: 'err',
                                   err
                              })
                         }

                         console.log('unico', unico, file.name)


                         Preferences.find({user: req.user._id})
                         .lean()
                         .exec((errr, doc) => {
                              if (errr) {
                                   return res.json({
                                        status: 'error',
                                        errr 
                                   })
                              }
                    
                              if (doc.length > 0) {

                                   Preferences.findOneAndUpdate({_id: doc[0]._id}, {logo: `${unico}-${file.name}`}, {new: true}, (error, preferenceData) => {
                                        if (error) {
                                             return res.json({
                                                  status: 'error',
                                                  error
                                             })
                                        }
                              
                                        return res.json({
                                             status: 'ok',
                                             response: preferenceData
                                        })
                                   })
                    
                              } else {
                    
                                   let mypreference = new Preferences({
                                        user: req.user._id,
                                        logo: `${unico}-${file.name}`,
                                        dateCreated: moment().utc()
                                   });
                                   
                                   mypreference.save((error, preferenceData) => {
                                        if (error) {
                                             return res.json({
                                                  status: 'error',
                                                  error
                                             })
                                        }
                              
                                        return res.json({
                                             status: 'ok',
                                             response: preferenceData
                                        })
                                   })
                    
                              }
                         })

                   
                    })
               } else {
                    res.json({
                         status: 'ok',
                         response: 'No ha seleccionado archivo'
                    })
               }
               
     
})





module.exports = router;
