const express = require('express');
const router = express.Router();
const AnswerSchema = require('../../Models/EntrenaVTModels/AnswersDesginer');
const DesignerSchema = require('../../Models/EntrenaVTModels/Designer');
const { verifyToken } = require('../../Middleware/VerifyToken')
const moment = require('moment-timezone')
const UserLog = require('../../Classes/Log')
const newLog = new UserLog();
const pdf = require('html-pdf');
const path = require('path');
const fs = require('fs');


router.post('/vtentrena/designer/answer', [verifyToken], (req, res) => {
     const body = req.body;
   
     if (!body.parentDesigner || !body.parentAdmin) {
          return res.json({
               status: 'error',
               error: 'Undefined desing or adminId, please check'
          })
     }

     AnswerSchema.find({parentDesigner: body.parentDesigner, userAnswer: req.user._id})
     .sort({_id: -1})
     .exec((err, documents) => {
          if (err) {
               return res.json({
                    status: 'error',
                    error
               })
          }

          if (documents.length > 0) {
               return res.json({
                    status: 'ok',
                    response: documents[0]
               })

          } else {

               DesignerSchema.find({_id: body.parentDesigner})
               .exec((error, json) => {
                    if (error) {
                         return res.json({
                              status: 'error',
                              error
                         })
                    }

                    let myAnswer = new AnswerSchema({
                         userAnswer: req.user._id,
                         parentDesigner: body.parentDesigner,
                         name: json[0].name,
                         JSONEntrena: json[0].JSONEntrena,
                         parentAdmin: body.parentAdmin,
                         dateCreated: moment().utc()
                    });
               
                    myAnswer.save((error, desingData) => {
                         if (error) {
                              return res.json({
                                   status: 'error',
                                   error
                              })
                         }

                         newLog.createdLog({
                              login: req.user.login,
                              name: req.user.name,
                              _id: req.user._id,
                              ip: req.info.IP,
                              navigator: req.info.navigator.name,
                              agent: req.info.navigator.agent,
                              role: req.user.role
                         }, 'NUEVO INTENTO').then((resolve) => {
                              if (resolve.status === 'ok') {
                                   return res.json({
                                        status: 'ok',
                                        response: desingData
                                   })
                              }
                         }).catch((reject) => {
                              return res.json({
                                   status: 'ok',
                                   response: desingData
                              })
                         })
                    })
               })

               

          }
     })

    
    
})


router.post('/vtentrena/designer/answer/other', [verifyToken], (req, res) => {
     const body = req.body;
   
     if (!body.parentDesigner || !body.parentAdmin) {
          return res.json({
               status: 'error',
               error: 'Undefined desing or adminId, please check'
          })
     }


               DesignerSchema.find({_id: body.parentDesigner})
               .exec((error, json) => {
                    if (error) {
                         return res.json({
                              status: 'error',
                              error
                         })
                    }

                    let myAnswer = new AnswerSchema({
                         userAnswer: req.user._id,
                         parentDesigner: body.parentDesigner,
                         name: json[0].name,
                         JSONEntrena: json[0].JSONEntrena,
                         parentAdmin: body.parentAdmin,
                         dateCreated: moment().utc()
                    });
               
                    myAnswer.save((error, desingData) => {
                         if (error) {
                              return res.json({
                                   status: 'error',
                                   error
                              })
                         }

                         newLog.createdLog({
                              login: req.user.login,
                              name: req.user.name,
                              _id: req.user._id,
                              ip: req.info.IP,
                              navigator: req.info.navigator.name,
                              agent: req.info.navigator.agent,
                              role: req.user.role
                         }, 'NUEVO INTENTO').then((resolve) => {
                              if (resolve.status === 'ok') {
                                   return res.json({
                                        status: 'ok',
                                        response: desingData
                                   })
                              }
                         }).catch((reject) => {
                              return res.json({
                                   status: 'ok',
                                   response: desingData
                              })
                         })
                    })
               })
    
    
})





router.put('/vtentrena/designer/answer/update', [verifyToken], (req, res) => {
     const body = req.body;
     const _id = req.body._id;
     console.log('Editar', _id, req.user._id);

     AnswerSchema.findByIdAndUpdate(_id, {
          JSONEntrena: body.JSONEntrena
     }, {new: true})
          .exec((err, desingData) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err
               })
          }


          newLog.createdLog({
               login: req.user.login,
               name: req.user.name,
               _id: req.user._id,
               ip: req.info.IP,
               navigator: req.info.navigator.name,
               agent: req.info.navigator.agent,
               role: req.user.role
          }, 'UPDATE ANSWER').then((resolve) => {
               if (resolve.status === 'ok') {
                    return res.json({
                         status: 'ok',
                         response: desingData
                    })
               }
          }).catch((reject) => {
               return res.json({
                    status: 'ok',
                    response: desingData
               })
          })

     })
    
})





router.put('/vtentrena/designer/answer/save/', [verifyToken], (req, res) => {
     const body = req.body;
     const _id = req.body._id;


     AnswerSchema.findByIdAndUpdate(_id, {
          JSONEntrena: body.JSONEntrena,
          saveAnswer: true
     }, {new: true})
          .exec((err, desingData) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err
               })
          }

          newLog.createdLog({
               login: req.user.login,
               name: req.user.name,
               _id: req.user._id,
               ip: req.info.IP,
               navigator: req.info.navigator.name,
               agent: req.info.navigator.agent,
               role: req.user.role
          }, 'SAVE ANSWER').then((resolve) => {
               if (resolve.status === 'ok') {

                   
                    return res.json({
                         status: 'ok',
                         response: desingData
                    })
               }
          }).catch((reject) => {
               return res.json({
                    status: 'ok',
                    response: desingData
               })
          })

     })
    
})




router.get('/vtentrena/designer/answer/pdf/', [verifyToken], (req, res) => {
     const _id = req.get('x-id');
     console.log('Entrando')

     AnswerSchema.find({_id: _id})
     .populate('parentDesigner')
     .populate('userAnswer')
          .exec((error, answers) => {
          if (error) {
               return res.json({
                    status: 'error',
                    error
               })
          }

          if (answers.length > 0) {
               
               const content = `
               <html>

<head>
    <style type='text/css'>
        body,
        html {
            margin: 0;
            padding: 0;
        }
        
        body {
            color: black;
            display: table;
            font-family: Georgia, serif;
            font-size: 24px;
            text-align: center;
        }
        
        .container {
            border: 20px solid #00ab4c;
            width: 750px;
            height: 650px;
            display: table-cell;
            vertical-align: middle;
            position: relative;
        }
        
        .logo {
            color: #00ab4c;
            margin-bottom: 0px;
        }
        
        .marquee {
            color: #00ab4c;
            font-size: 48px;
            margin-top: 0%;
        }
        
        .assignment {
            margin: 20px;
        }
        
        .person {
            border-bottom: 2px solid black;
            font-size: 32px;
            font-style: italic;
            margin: 20px auto;
            width: 400px;
        }
        
        .fecha {
            border-bottom: 2px solid black;
            font-size: 20px;
            font-style: italic;
            margin: 20px auto;
            width: 300px;
            position: absolute;
            bottom: 40px;
            left: 40px;
        }
        
        .firma {
            border-bottom: 2px solid black;
            font-size: 20px;
            font-style: italic;
            margin: 20px auto;
            width: 300px;
            position: absolute;
            bottom: 40px;
            left: 450px;
        }
        
        .reason {
            margin: 20px;
            margin-bottom: 120px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="logo">
            <img src="http://imgfz.com/i/nd7kf4M.png">
        </div>

        <div class="marquee">
            Hace Certificar a:
        </div>

        <div class="person">
        ${answers[0].userAnswer.name}
        </div>

        <div class="reason">
            por completar satifactoriamente el curso virtual para ${answers[0].parentDesigner.name} 
        </div>

        <div class="fecha">
        ${moment().format("MM-DD-YYYY")}
        </div>


        <div class="firma">
            <img src="http://imgfz.com/i/gsDZ5kp.png" alt="">
        </div>

    </div>


</body>

</html>
               `;

               const name = _id + moment().format('YYYYMMDDHHmmss') + '.pdf'

               pdf.create(content).toFile(path.resolve(__dirname, '../../public/uploads/pdf/', name), function(err, j) {
                    if (err){
                         return res.json({
                              status: 'error',
                              error: 'Export Failed'
                         })
                    } else {
                         return res.json({
                              status: 'ok',
                              path: name
                         })
                    }
          })

     }

    
})
})


router.get('/vtentrena/designer/answer/download/', (req, res) => {
     console.log(req.query.path)
     console.log(req.query.name)
      res.download(path.join(__dirname, '../../public/uploads/pdf/', req.query.path), req.query.name, (err) => {
           if (!err) {
               fs.unlinkSync(path.join(__dirname, '../../public/uploads/pdf/', req.query.path));
           } 
      });
     
   
 });


 router.get('/vtentrena/designer/answer/download/files/', (req, res) => {
     console.log(req.query.path)
     console.log(req.query.name)
      res.download(path.join(__dirname, '../../public/uploads/Entrenamientos/', req.query.path), req.query.name, (err) => {
          
      });
     
   
 });




router.get('/vtentrena/designer/answer/', [verifyToken], (req, res) => {
     const id = req.get('x-id');
console.log(req.info)
     AnswerSchema.findOne({parentDesigner: id, userAnswer: req.user._id})
     .sort({_id: -1})
         .exec((err, answerdata) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err
               })
          }

          if (answerdata) {

               return res.json({
                    status: 'ok',
                    response: answerdata
               })
          } else {
               DesignerSchema.findOne({_id: id})
               .exec((error, desingData) => {
                    if (error) {
                         return res.json({
                              status: 'error',
                              error
                         })
                    }

                    return res.json({
                         status: 'ok',
                         response: desingData
                    })
               })
          }
     
     })
    
})




router.get('/vtentrena/designer/answer/all', [verifyToken], (req, res) => {
     const id = req.get('x-id');

     AnswerSchema.find({parentDesigner: id, userAnswer: req.get('x-iduser')})
     .lean()
         .exec((err, answerdata) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err
               })
          }

               return res.json({
                    status: 'ok',
                    response: answerdata
               })
        
     })
    
})




module.exports = router;
