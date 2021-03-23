const express = require('express');
const router = express.Router();
const ListUsersChat = require('../Models/ChatModels/ListUsersChat');
const Chat = require('../Models/ChatModels/ListUsersChat');
const MessagesChat = require('../Models/ChatModels/MessagesChat');


router.get('/chat/mychats', (req, res) => {
     const ID = req.get('x-ID');

     ListUsersChat.find({idUser: ID})
     .populate('parentChat')
     .exec((err, chats) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: chats
          })
     })
})


router.get('/chat/mychats/onechat', (req, res) => {
     const ID = req.get('x-ID');

     MessagesChat.find({parentChat: ID})
     .populate('parentChat')
     .exec((err, messages) => {
          if (err) {
               return res.json({
                    status: 'error',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: messages
          })
     })
})


router.post('/chat/mychats/onechat', (req, res) => {
     const body = req.body;

     
})

module.exports = router;