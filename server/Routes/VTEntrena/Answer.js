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
const axios = require('axios').default;

router.post('/vtentrena/designer/answer', [verifyToken], (req, res) => {
    const body = req.body;

    if (!body.parentDesigner || !body.parentAdmin) {
        return res.json({
            status: 'error',
            error: 'Undefined desing or adminId, please check'
        })
    }

    AnswerSchema.find({ parentDesigner: body.parentDesigner, userAnswer: req.user._id })
        .sort({ _id: -1 })
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

                DesignerSchema.find({ _id: body.parentDesigner })
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


    DesignerSchema.find({ _id: body.parentDesigner })
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
        }, { new: true })
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
        }, { new: true })
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



router.get('/vtentrena/pdf2/', (req, res) => {

    let token = req.query.tkn;

    console.log('Entrando', token, axios)

    axios({
        method: 'post',
        url: 'https://api2.visitrack.com/api/Surveys/Activity',
        data: {
            AccessToken: token,
            ActivityID: req.query.id,
            ListValues: false
        }
    }).then((response) => {
        console.log(response)

        if (response.Values) {

            var fecha = response.Values.filter((item) => item.apiId == 'FECHA');
            var hora = response.Values.filter((item) => item.apiId == 'HORA');

            if (fecha.length > 0) {
                fecha = fecha[0].Value
            }

            if (hora.length > 0) {
                hora = hora[0].Value
            }


            const content = `
               <style>
     *{
     
     }
     .contenedor{
          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          width: 90%;
          margin: auto;
     }
     
     .padre {
          border: 1px solid #A8D08D;
     }
     
     .title{
          color: #1E3C7B;
     }
     
     .t{
          width: 100%;
          border-collapse: collapse;
     }
     
     .s{
          border: 0px;
     }
     
     .t td{
          border: 1px solid #333333;
          padding: 5px;
     }
     
     .none{
          padding: 0px !important;
          border: 0px !important;
     }
     
     .titulo {
          font-weight: bold;
     font-size: 18px;
          color: #fff;
          background-color: #12557C;
     }
     
     .titulo2{
          font-weight: bold;
          color: #333;
          background-color: #f1f1f1;
     }
     
     .center{
          text-align: center;
     }
     
     .bold {
          font-weight: bold;
     }
     
     
     .small {
          font-size: 10px !important;
     }
     
     .firma {
          text-align: center;
     }
     
     .firma  img{
         width: 120px;
     }
     
     .t tr {
          page-break-inside: avoid;
     }
     
     .image img{
          width: 200px !important;
          height: 230px !important;
     }
     
     .tt td{
          border: 0px !important;
     }
     
     .b{
          border-bottom: 1px solid #A8D08D;
     }
     
     .mitad { width: 50%;  }
     
     .vtgps{
          display: none !important;
     }
     
     .contentFigures td{
          text-align: center;
     }
     .contentFigures img, .contentFigures figure{
          text-align: center;
          margin: auto;
          width: 200px !important;
          height: 230px !important;
     }
     
     
       .fijo {
         width: 150px;
     }
     
     .verde{
         background: #E2EFD9;
     }
     
     .colorVerde{
         color: #385624;
     }
     
     .o td{
     border: 0px !important;
     }
     
     .colorBorder{
     border-top: 2px solid #188A57;
     }
     
     
     
     .campo {
     display: block;
     width: 90%;
     margin: 0px;
     padding: 10px;
     background: #FFEDB7;
     outline: none;
     border: 1px solid rgba(0,0,0,0.1);
     border-radius: 10px;
     }
     
     #info .fil:nth-child(even){
     background-color: #f9f9f9;
     }
     
     .vt_picture{
      width: 80% !important;
      height: auto !important;
     }
     
     </style>
     <div class="contenedor">
        <table class="t" cellspacing="0" cellspadding="0">
     
               <thead>
                        <tr>
                            <td class="none">
                                <table class="t">
                                 <tr>
                                     <td colspan="" style="padding:8px; border: 0px;"></td>
                                </tr>
                               <tr>
                                   <td  style="padding:0px; border:0px;">
                                       <table class="t" style="width:100%; border:0px;">
                                          
                                          <tr>
                                           
                                           <td class="bold center" style=" ">
                                          <img id="logi" src="https://s3.amazonaws.com/logocompanies/CC55B13F-5CA2-4420-A313-539CD18BD5B4.png
     " width="150px" alt=""></td>
       
                                          <td class=" center">
                                           <h2 style="text-align: center; font-weight: bold; font-size: 24px; "><i>REPORTE DE ASEO Y DESINFECCION <br>
                     DE HABITACIONES
                                             <span style="color: red; font-weight: bold;"  data-frm="Consecutive"></span>
                                         </h2>
                                      </td>
                                       </tr>   
       
                               
                                       
                                     
                                       </table>
                                   </td>
                               </tr>
                    
                                </table>
                            </td>
                        </tr>
                    </thead>
     
            
                    <tfoot>
                     <tr>
                         <td style="border: 0px; padding: 10px;"></td>
                     </tr>
                     <tr>
                          <td class="none">
                               <table class="t">
                                    <tr>
                                     <td style="border: 0px; border-bottom: 3px solid #2D3890;"></td>
                                    </tr>
                                  
                                    <tr>
                                        <td style="border: 0px; text-align: center;">
                                         <strong>Dirección: </strong> <br>
     
                                         <strong>Teléfonos: 
     </strong> <br>
     
                                         <strong>Email:  </strong> <br>
     
                                     
     
                                         </td>
                                    </tr>
                             
                               </table>
                          </td>
                     </tr>
     
                     <tr>
                         <td style="border: 0px; padding: 10px;"></td>
                     </tr>
                </tfoot>
     
               <tbody>
                
                  <tr>
                    <td class="none">
                      <table class="t">
                        <tr>
                          <td class="titulo center">ASEO Y DESINFECCION DE HABITACIONES <br> (CLIENTE)</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
        
        
         <tr>
                    <td class="none">
                      <table class="t">
               <span id="asignacion" style="display: none;" data-api="FECHAASIGACION"></span>
                <span id="origen" style="display: none;" data-api="FechallegaOrigen"></span>
                <span id="destino" style="display: none;" data-api="FechaLlegadaDestino"></span>
               <tr>
                 <td class="titulo2 center mitad" colspan="2">FECHA Y HORA</td>
                   <td class=" center mitad" colspan="2"><span id="fecha" data-api="FECHA">${fecha}</span> <span id="hora" data-api="HORA">${hora}</span> </td>
               </tr>
                        <tr>
                          <td class="titulo2 center fijo">USUARIO QUIEN CREA EL SERVICIO </td>
                  <td class="  " data-api="NOMBRE_QUIEN_SOLICITA"></td>
                 
                  <td class="titulo2 center fijo">TIEMPO DE CREACION </td>
                 <td class=" center " > <span id="hora" data-api="HORA"></span></td>
                        </tr>
               
               <tr>
                          <td class="titulo2 center fijo">OPERARIO ASIGNADO </td>
                  <td class="  " data-frm="AssignedTo"></td>
                 
                  <td class="titulo2 center fijo">TIEMPO DE TOMA DE SERVICIO </td>
                 <td class=" center " id="toma"></td>
                        </tr>
               
               <tr>
                          <td class="titulo2 center fijo">ESTADO DEL SERVICIO </td>
                  <td class="  " data-frm="CompanyStatusName"></td>
                 
                       <td class="titulo2 center fijo">TIEMPO DESINFECCION </td>
                 <td class=" center " id="desin"></td>
                        </tr>
               
                 <tr>
                          <td class="titulo2 center fijo">HABITACION </td>
                  <td class="  " >
                    <span data-api="HABITACION_REINA"></span>
                     <span data-api="HABITACION_MEDELLIN"></span>
                     <span data-api="HABITACION_RIONEGRO"></span>
                  </td>
                   
                         <td class="titulo2 center fijo">TIEMPO TOTAL </td>
                 <td class=" center " id="total" ></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
          
        
         
                  <tr>
                    <td class="none">
                      <table class="t">
                        <tr>
                          <td class="titulo center">DETALLES DEL SERVICIO</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
        
        
        
         <tr>
                    <td class="none">
                      <table class="t">
                        <tr>
                          <td class="titulo2 center mitad">TIPO DE MOVIMIENTO</td>
                  <td class="  mitad center" data-api="TIPOMOVIMIENTO" data-properties='{"align":"none",
     "showlabel": "true", "defwith": "20px"}' ></td>
                 
               
                        </tr>
               
               <tr>
                          <td class="titulo2 center mitad">TIPO DE TAREA </td>
                  <td class=" mitad center " >
                    <span data-api="TIPO_TAREA_REINA"></span>
                     <span data-api="TIPO_TAREA_MEDELLIN"></span>
                     <span data-api="TIPO_TAREA_RIONEGRO"></span>
                  </td>
                        </tr>
               
                <tr>
                          <td class="titulo2 center mitad">TIPO DE AISLAMIENTO</td>
                  <td class="  mitad center" data-api="TIPO_AISLAMIENTO"  ></td>
                 
               
                        </tr>
               
                    <tr>
                  <td class="   " colspan="2"  >
                    <strong>OBSERVACIONES ADICIONALES</strong> <br>
                    <p data-api="OBSERVACIONES_ADICIONALES"></p>
                  </td>
                 
               
                        </tr>
               
                <tr>
                  <td class="   " colspan="2"  >
                    <strong>OBSERVACIONES CENTRAL</strong> <br>
                    <p data-api="OBSERVACION_CENTRAL"></p>
                  </td>
                 
               
                        </tr>
               
     
                      </table>
                    </td>
                  </tr>
        
        
                  <tr style="page-break-after: always;"></tr>
        
        
       
        
         <tr>
                    <td class="none">
                      <table class="t">
                        <tr>
                          <td class="titulo2 center mitad">HORA INICIO DESINFECCION</td>
                     <td class="titulo2 center mitad">HORA FIN DESINFECCION</td>
               
                        </tr>
               
               <tr>
                         
                  <td class=" mitad center " id="inicio">
             
                  </td>
                   <td class=" mitad center " id="fin">
             
                  </td>
                        </tr>
                 <tr>
                          <td class="titulo2 center mitad">FOTO ANTES DESINFECCION</td>
                     <td class="titulo2 center mitad">FOTO DESPUES DESINFECCION</td>
               
                        </tr>
               
                 <tr>
                         
                  <td class=" mitad center " data-api="FOTO_ANTES">
             
                  </td>
                   <td class=" mitad center "  data-api="FOTO_DESPUES">
             
                  </td>
                        </tr>
                  
               
                 <tr>
                          <td class="titulo2 center mitad">MOTIVO DE LA DEMORA</td>
                      <td class=" mitad center " data-properties='{"align":"none",
     "showlabel": "true", "defwith": "20px"}'  data-api="MOTIVO_DEMORA">
             
                  </td>
                        </tr>
               
                 <tr>
                          <td class="titulo2 center mitad">ESPECIFIQUE EL MOTIVO DE LA DEMORA DE LA SOLICITUD</td>
                      <td class=" mitad center " data-api="MOTIVO_DEMORA_SOLICITUD">
             
                  </td>
                        </tr>
               
       
               
     
                      </table>
                    </td>
                  </tr>
        
     
        
         <tr id="tr1">
                    <td style="border: 0px; padding: 0px;" >
                        <table class="t">
                            <tr>
                                <td style="border:0; padding: 0px;" colspan="3">
      
                                    <script type="text/template" id="fotos-vt1">
            <strong style="font-size: 16px; ">       <%= tr.elemento %></strong>
                     <%= tr.estado %>
                                        <figure id="figure1">
                                            <%= tr.image %>
      
                                        </figure>
                  <p>   <%= tr.obs %></p>
                                    </script>
      
      
                                    <div>
      
                                        <table class="t" cellspacing="0" cellspadding="0">
                                            <tbody id="contentFigures1"></tbody>
                                        </table>
                                    </div>
                                    <div id="allfigures1">
                                        <table class="Fotos1" class="font-table" style="width: 100%;" border="1" cellspacing="0" data-api="LISTACHEQUEO">
      
                                            <tbody data-container="true" data-template="true">
                                                <tr>
                       <td data-col="ELEMENTO"></td>
                                                    <td data-col="FOTO"></td>
                        <td data-col="ESTADO"></td> <td data-col="OBSERVACIONES"></td>
                                                </tr>
                                            </tbody>
                                        </table>
      
      
      
      
                                    </div>
      
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
        
               
              
        
               </tbody>
     
                </table>
     
                </div>
               `;

            const name = moment().format('YYYYMMDDHHmmss') + '.pdf'

            pdf.create(content).toFile(path.resolve(__dirname, '../../public/uploads/pdf/', name), function(err, j) {
                if (err) {
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



        // dgdfgdf



    });




})

router.get('/vtentrena/designer/answer/pdf/', [verifyToken], (req, res) => {
    const _id = req.get('x-id');
    console.log('Entrando')

    AnswerSchema.find({ _id: _id })
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
            font-size: 14px;
        }
        
        .container {
            text-align: center;
            border: 25px solid rgb(194, 177, 177);
            width: 90%;
            height: 500px;
            display: table-cell;
            vertical-align: middle;
            position: relative;
            font-size: 14px !important;
            align-items: center;
        }
        
        .logo {
            position: relative;
            color: #00ab4c;
            margin-bottom: 0px;
            bottom: 80px;
        }
        
        .caja {
            border: 30px solid rgb(255, 255, 255);
            height: 40em;
            position: relative;
            box-shadow: 7px 7px 7px grey;
        }

        .foto {
             position: absolute;
             z-index: 1;
             left: 0px;
             top: 0px;
             opacity: .2;
        }
        
        .texto {
            right: 0px;
            bottom: 0px;
            position: absolute;
            z-index: 2;
        }
        
        .marquee {
            color: #00ab4c;
            font-size: 32px;
            position: relative;
            top: -70;
            z-index: 2;
        }
        
        .assignment {
            margin: 20px;
            z-index: 2;
        }
        
        .person {
            border-bottom: 2px solid black;
            font-size: 30px;
            font-style: italic;
            margin: 20px auto;
            width: 400px;
            z-index: 2;
        }
        
        .fecha {
            border-bottom: 2px solid black;
            font-size: 14px;
            font-style: italic;
            margin: 20px auto;
            width: 150px;
            position: absolute;
            bottom: 40px;
            left: 40px;
            z-index: 2;
        }
        
        .firma {
            border-bottom: 2px solid black;
            font-size: 14px;
            font-style: italic;
            margin: 20px auto;
            width: 150px;
            position: absolute;
            bottom: 40px;
            right: 40px;
            z-index: 2;
        }
        
        .reason {
            margin: 20px;
            margin-bottom: 120px;
            z-index: 2;
        }
    </style>
</head>

<body>

    <div class="container">
        <div class="caja">

        <img class="foto" src="https://www.vtentrena.com/uploads/fondo.jpg" width="98%">
            <div class="logo">
                <img src="https://www.vtentrena.com/uploads/servientrega.png" width="98%">
            </div>

            <div class="marquee">
                 Certifica a:
            </div>

            <div class="person">
            ${answers[0].userAnswer.name}
            </div>

            <div class="reason">
                por completar satifactoriamente el curso virtual para la generación de guias del Sistema KIWI de Servientrega Internacional INC.
            </div>

            <div class="fecha">
            ${moment().format("MM-DD-YYYY")}
            </div>
            <div class="texto">
                3047 NW 107 AVE, DORAL FL
            </div>


            <div class="firma">

            </div>
        </div>
    </div>



</body>

</html>
               `;

                // dgdfgdf

                const name = _id + moment().format('YYYYMMDDHHmmss') + '.pdf'

                pdf.create(content).toFile(path.resolve(__dirname, '../../public/uploads/pdf/', name), function(err, j) {
                    if (err) {
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
    AnswerSchema.findOne({ parentDesigner: id, userAnswer: req.user._id })
        .sort({ _id: -1 })
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
                DesignerSchema.findOne({ _id: id })
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

    AnswerSchema.find({ parentDesigner: id, userAnswer: req.get('x-iduser') })
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