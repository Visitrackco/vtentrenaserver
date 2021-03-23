const express = require('express');
const router = express.Router();
const DesignerSchema = require('../../Models/EntrenaVTModels/Designer');
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../../Middleware/VerifyToken')
const fileUpload = require('express-fileupload');
const moment = require('moment-timezone')
const path = require('path');
const fs = require('fs');

router.post('/vtentrena/designer/new', [verifyToken], (req, res) => {
     const body = req.body;

     let myDesigner = new DesignerSchema({
          name: body.name,
          JSONEntrena: body.JSONEntrena,
          parentAdmin: req.user._id,
          dateCreated: moment().utc()
     });

     myDesigner.save((err, desingData) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: desingData
          })
     })
    
})



router.put('/vtentrena/designer/update', [verifyToken], (req, res) => {
     const body = req.body;
     const _id = req.body._id;


     DesignerSchema.findByIdAndUpdate(_id, {
          name: body.name,
          JSONEntrena: body.JSONEntrena
     }, {new: true})
          .exec((err, desingData) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: desingData
          })
     })
    
})


router.put('/vtentrena/designer/delete', [verifyToken], (req, res) => {
     const _id = req.body._id;


     DesignerSchema.findByIdAndUpdate(_id, {
          delete: 'true',
     }, {new: true})
          .exec((err, desingData) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: desingData
          })
     })
    
})



router.put('/vtentrena/designer/add', [verifyToken], (req, res) => {
     const user = req.body.user;
     const _id = req.body.id;

     DesignerSchema.find({_id})
     .lean()
     .exec((error, doc) => {
          if (error) {
               return res.json({
                    status: 'error',
                    error
               }) 
          }

          if (doc.length > 0) {

               let myKeys = doc[0].keys;
               const filter = myKeys.filter((t) => {
                    t = t.toString();
                    console.log(t);
                    return t.includes(user);
               })
               console.log(filter, 'filtro', user, myKeys);

               if (filter.length > 0) {
                    myKeys = myKeys.filter((t) => {
                         t = t.toString();
                         return t !== user;
                    })
               } else {
                    myKeys.push(user)
               }
               

               DesignerSchema.findByIdAndUpdate(_id, {
                    keys: myKeys,
               }, {new: true})
                    .exec((err, desingData) => {
                    if (err) {
                         return res.json({
                              status: 'error',
                              err
                         })
                    }
          
                    return res.json({
                         status: 'ok',
                         response: desingData
                    })
               })

          } else {
               return res.json({
                    status: 'error',
                    error: 'No existe el documento'
               })
          }
     })


    
    
})

// Subir Archivos de entrenamiento

router.post('/vtentrena/designer/upload/', [verifyToken] , (req, res) => {
     const unico = moment().tz('America/Bogota').format('YYYYMMDDHHmmss');
     console.log('Hola 2')
               if (req.files) {
                    const file = req.files.file;
                    file.mv(path.resolve(__dirname, `../../public/uploads/Entrenamientos/${unico}-${file.name}`), (err) => {
                         if (err) {
                              return res.json({
                                   status: 'err',
                                   err
                              })
                         }

                         return res.json({
                              status: 'ok',
                              response: `${unico}-${file.name}`
                         })
                    })
               } else {
                    res.json({
                         status: 'ok',
                         response: 'You have not selected a file'
                    })
               }
               
     
})



router.get('/vtentrena/designer/', [verifyToken], (req, res) => {
     const id = req.get('x-id');

  
     DesignerSchema.findOne({_id: id})
         .exec((err, desingData) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: desingData
          })
     })
    
})


router.get('/vtentrena/designer/all', [verifyToken], (req, res) => {
  
     if (req.get('x-parentAdmin')) {
          DesignerSchema.find({parentAdmin: req.get('x-parentAdmin'), delete: 'false', keys: {$in: req.user._id}})
          .exec((err, desingsData) => {
           if (err) {
                return res.json({
                     status: 'error',
                     err
                })
           }
 
           return res.json({
                status: 'ok',
                response: desingsData
           })
      })
     } else {

          DesignerSchema.find({parentAdmin: req.user._id, delete: 'false'})
          .exec((err, desingsData) => {
           if (err) {
                return res.json({
                     status: 'error',
                     err
                })
           }
 
           return res.json({
                status: 'ok',
                response: desingsData
           })
      })

     }
    
    
})




module.exports = router;
