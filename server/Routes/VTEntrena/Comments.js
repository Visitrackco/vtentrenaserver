const express = require('express');
const router = express.Router();
const Comments = require('../../Models/EntrenaVTModels/Comments');
const ChildrenComments = require('../../Models/EntrenaVTModels/ChildrensComments');
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../../Middleware/VerifyToken');
const path = require('path');
const fs = require('fs');
const moment = require('moment-timezone')


router.post('/vtentrena/comments', [verifyToken], (req, res) => {


               let myComment = new Comments({
                    user: req.user._id,
                    desing: req.body.desing,
                    message: req.body.comment,
                    dateCreated: moment().utc()
               });

               myComment.populate('user', (err, doc) => {
                    if (err) {
                         return res.json({
                              status: 'error',
                              err
                         })
                    }

                    doc.save((error, commentData) => {
                         if (error) {
                              return res.json({
                                   status: 'error',
                                   error
                              })
                         }
               
                         return res.json({
                              status: 'ok',
                              response: commentData,
                              user: doc
                         })
                    })
               })
               
              
    
})


router.put('/vtentrena/comments', [verifyToken], (req, res) => {


     Comments.find({user: req.user._id, desing: req.body.desing})
     .lean()
     .populate('user')
     .populate('desing')
     .exec((err, docs) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err 
               })
          }

          return res.json({
               status: 'ok',
               response: docs
          })
     })
    
})


router.put('/vtentrena/comments/admin', [verifyToken], (req, res) => {


     Comments.find({desing: req.body.desing})
     .lean()
     .populate('user')
     .populate('desing')
     .exec((err, docs) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err 
               })
          }

          return res.json({
               status: 'ok',
               response: docs
          })
     })
    
})


// ****************************** CHILDRENS




router.post('/vtentrena/comments/childrens', [verifyToken], (req, res) => {


     let myComment = new ChildrenComments({
          creator: req.user._id,
          name: req.user.name,
          comment: req.body.commentParent,
          message: req.body.comment,
          dateCreated: moment().utc()
     });

    
     myComment.save((error, commentData) => {
               if (error) {
                    return res.json({
                         status: 'error',
                         error
                    })
               }
     
               return res.json({
                    status: 'ok',
                    response: commentData
               })
          })
     
    

})

router.put('/vtentrena/comments/childrens', [verifyToken], (req, res) => {


     ChildrenComments.find({comment: req.body.commentParent})
     .lean()
     .exec((err, docs) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err 
               })
          }

          return res.json({
               status: 'ok',
               response: docs
          })
     })
    
})



module.exports = router;
