const express = require('express');
const router = express.Router();
const Folders = require('../Models/Folders');
const fileUpload = require('express-fileupload');
const path = require('path');
const moment = require('moment-timezone');
router.use(fileUpload());
const fs = require('fs');
const download = require('download');
const Folder = require('../Classes/Folders');

router.post('/folders', (req, res) => {
     const company = req.get('x-company');
     const typeAction = req.get('x-type');
     const parent = req.get('x-parent');
     const unico = moment().tz('America/Bogota').format('YYYYMMDDHHmmss');

     switch (typeAction) {
          case 'file':

               if (req.files) {
                    const archivo = req.files.archivo;
                    archivo.mv(path.resolve(__dirname, `../public/uploads/myRepository-${company}/${parent}-${unico}-${archivo.name}`), (err) => {
                         if (err) {
                              return res.json({
                                   status: 'err',
                                   err
                              })
                         }


                         const myFolder = new Folders({
                              typeAction: typeAction,
                              infoAction: {
                                   name: archivo.name,
                                   path: `myRepository-${company}/${parent}-${unico}-${archivo.name}`,
                                   date: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm')
                              },
                              parent: parent
                         })

                         myFolder.save((errChild, child) => {
                              if (errChild) {
                                   return res.jsaon({
                                        status: -'err',
                                        errChild
                                   })
                              }

                              res.json({
                                   status: 'ok',
                                   response: child
                              })
                         })
          
                         
                    })
               } else {
                    res.json({
                         status: 'ok',
                         response: 'No ha seleccionado ningun archivo'
                    })
               }
               
               break;

     
          default:
               break;
     }
     
})


router.get('/download', (req, res) => {
    console.log(req.query.path)
    console.log(req.query.name)

    console.log('Hola')
     res.download(path.join(__dirname, '../public/uploads/', req.query.path), req.query.name);
    
  
});


router.post('/folders/folder', (req, res) => {
     const body = req.body;

     let myFolder = new Folders({
          typeAction: 'folder',
                    infoAction: {
                         name: body.name,
                         description: body.description,
                         date: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm')
                    },
                    parent: body.parent
     });
     myFolder.save((err, folders) => {
          if (err) {
               return res.json({
                    status: 'err',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: folders
          })
     })
})



router.get('/folders', (req, res) => {
     const parentId = req.get('x-parentId');
     const type = req.get('x-type');
     let condition = {};
     console.log(type, ' tipo')
     switch (type) {
          case 'trash':
               console.log('bien')
               condition =  {status: 'down'}
               break;
     
          default:
               condition =  {parent: parentId, status: 'up'}
               break;
     }
     Folders.find(condition)
     .exec((err, folders) => {
          if (err) {
               return res.json({
                    status: 'err',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: folders
          })
     })
})

router.get('/folders/path/', async (req, res) => {
     let parentID = req.get('x-parentID');
     console.log(parentID)
     const pathArray = [];
     const myFolder = new Folder('');
     while (parentID !== "") {
          try {
               console.log('Entre')
               const data = await myFolder.searchPath(parentID)
               
               if (data) {
                    if (data.parent !== '') {
                         console.log('Data')
                         pathArray.unshift(data.folder);
                         parentID = data.parent
                    } else {
                         pathArray.unshift(data.folder);
                         parentID = '';
                    }
                    
               }
          } catch (error) {
               return res.json({
                    status: 'error',
                    err: e.err
               })
          }
          
     }
     console.log('Despues')

     
     res.json({
          status: 'ok',
          response: pathArray
     })
})


router.delete('/folders/one', (req, res) => {
     const _id = req.get('x-id');
     Folders.findByIdAndUpdate(_id, {status: 'down'})
     .exec((err, folders) => {
          if (err) {
               return res.json({
                    status: 'err',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: folders
          })
     })
})


router.put('/folders/recover', (req, res) => {

     const _id = req.get('x-id');
     console.log(_id);
     Folders.findByIdAndUpdate(_id, {status: 'up'})
     .exec((err, folders) => {
          if (err) {
               return res.json({
                    status: 'err',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: folders
          })
     })
})


module.exports = router;
