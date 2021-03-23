const express = require('express');
const router = express.Router();
const ConnectionSchema = require('../Models/Conecctions');


router.get('/connections', (req, res) => {
     const company = req.get('x-company');

     ConnectionSchema.find({company})
     .exec((err, connections) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: connections
          })
     })
})

module.exports = router;