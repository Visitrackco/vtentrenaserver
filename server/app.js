const express = require('express');
const http = require('http');
const app = express();
const mongoose = require('mongoose')
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const SokectIO = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(require('./Routes/index.js'));

app.use(express.static(path.resolve(__dirname, 'public')))

// echo Set PATH /Users/visitracksas/.zprofile   
// echo 'eval "$(/opt/homebrew/bin/brew shellenv)"'
// eval "$(/opt/homebrew/bin/brew shellenv)"  

// Sockets
module.exports.io = SokectIO(server);
require('./Sockets/socket');

require('./Jobs/UsersEntrena.js');

console.log('hola mundo en visitrack')

mongoose.connect('mongodb://localhost:27017/repository', { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }, (err) => {
    if (err) {
        return console.log('Error en conectar la base de datos', err);
    }
    console.log('Conectado a la base de datos')

})

server.listen(port, (err) => {
    if (err) {
        throw new Error('No se pudo conectar el servidor');
    }

    console.log('Conectado al puerto 3000');
})