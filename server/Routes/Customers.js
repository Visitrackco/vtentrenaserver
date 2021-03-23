const express = require('express');
const router = express.Router();
const Customers = require('../Models/Customers');

router.post('/customers', (req, res) => {
     const body = req.body;

     const customers = new Customers({
          name: body.name,
          login: body.login,
          clave: body.clave,
          idCompany: body.company,
          userCreated: body.userID
     });


     customers.save((err, document) => {
          if (err) {
               return res.json({
                    status: 'error',
                    error: err
               })
          }

          return res.json({
               status: 'ok',
               response: document
          })
     })

})

router.post('/customers/login', (req, res) => {
     const body = req.body;
     Customers.find({login: body.user, clave: body.password})
     .exec((err, document) => {
          if (err) {
               return res.json({
                    status: 'error',
                    error: err
               })
          }

          if (document.length > 0) {
               return res.json({
                    status: 'ok',
                    response: document,
                    message: 'Hola, bienvenido'
               })
          } else {
               return res.json({
                    status: 'ok',
                    response: '',
                    message: 'Credenciales incorrectas, verifique su información'
               })
          }

          
     })
})


router.get('/customers/company', (req, res) => {
     const companyID = req.get('x-companyID');
     console.log(companyID, 'DATAMAN');
     Customers.find({idCompany: companyID})
     .exec((err, document) => {
          if (err) {
               return res.json({
                    status: 'error',
                    error: err
               })
          }
          console.log(document, 'dataman')
               return res.json({
                    status: 'ok',
                    response: document
               })
     })
})

module.exports = router;