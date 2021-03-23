const express = require('express');
const router = express.Router();
const Categories = require('../Models/Categorias');
const Folders = require('../Classes/Folders');

router.post('/categories', (req, res) => {
     const body = req.body;

     let myCategory = new Categories({
          userID: body.userID,
          name: body.name,
          description: body.description,
          company: body.company,
          permiss: body.listPermiss
     });
     const myFolder = new Folders(body.company);
     myCategory.save((err, category) => {
          if (err) {
               return res.json({
                    status: 'err',
                    err
               })
          }

          
          myFolder.createdFolder();

          return res.json({
               status: 'ok',
               response: category
          })
     })
})

router.get('/categories', (req, res) => {
     const company = req.get('x-company');
     const UserID = req.get('x-userID');
     Categories.find({company, status: 'up'})
     .exec((err, categories) => {
          if (err) {
               return res.json({
                    status: 'err',
                    err
               })
          }

          const list = [];

          if (categories.length > 0) {
               categories.forEach((item) => {
                    if (item.permiss.find((user) => user === UserID)) {
                         list.push(item);
                    }
               })
          }

          return res.json({
               status: 'ok',
               response: list
          })
     })
})


router.put('/categories/one/permiss/', (req, res) => {
     const _id = req.body.idCategory;
     const listUsers = req.body.listPermiss;
     Categories.findByIdAndUpdate(_id, {permiss: listUsers}, {new: true}, (err, category) => {
          if (err) {
               return res.json({
                    status: 'err',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: category
          })
     })
})



router.put('/categories/one/', (req, res) => {
     const _id = req.body.idCategory;
     const dataAlter = req.body;
     Categories.findByIdAndUpdate(_id, dataAlter, {new: true}, (err, category) => {
          if (err) {
               return res.json({
                    status: 'err',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: category
          })
     })
})



router.delete('/categories/one', (req, res) => {
     const _id = req.get('x-id');
     Categories.findByIdAndUpdate(_id, {status: 'down'}, {new: true})
     .exec((err, categorie) => {
          if (err) {
               return res.json({
                    status: 'err',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: categorie
          })
     })
})


router.delete('/categories', (req, res) => {

     Categories.deleteMany({})
     .exec((err, count) => {
          if (err) {
               return res.json({
                    status: 'err',
                    err
               })
          }

          return res.json({
               status: 'ok',
               response: count
          })
     })
})

module.exports = router;
