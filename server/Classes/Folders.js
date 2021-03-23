const fs = require('fs');
const path = require('path');
const Folder = require('../Models/Folders');
const Repostory = require('../Models/Categorias');

class Folders {

     constructor(company) {
          this.company = company;
     }

     createdFolder() {
          if (!fs.existsSync(path.resolve(__dirname, `../public/uploads/myRepository-${this.company}`))) {
               fs.mkdirSync(path.resolve(__dirname, `../public/uploads/myRepository-${this.company}`))
          }
     }

     searchPath(parentID) {
          return new Promise((resolve, reject) => {
               Folder.find({_id: parentID})
               .exec((err, collections) => {
                    if (err) {
                         reject({
                              status: 'error',
                              err
                         })
                    }

                    console.log(collections, 'Holi');

                    if (collections.length > 0) {
                         resolve({
                              folder: {
                                   name: collections[0].infoAction.name,
                                   id: collections[0]._id
                              },
                              parent: collections[0].parent
                         })
                    } else {
                         Repostory.find({_id: parentID})
                         .exec((error, category) => {
                              if (error) {
                                   reject({
                                        status: 'error',
                                        error
                                   })
                              }
                              console.log(category, ' categoria');
                              if (category.length > 0) {
                                   resolve({
                                        folder: {
                                             name: category[0].name,
                                             id: category[0]._id
                                        },
                                        parent: ''
                                   })
                              }

                         })
                         
                    }
               })
          })
     }

}

module.exports = Folders;