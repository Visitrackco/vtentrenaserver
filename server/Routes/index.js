const express = require('express');
const app = express();

app.use(require('./Categories.js'));
app.use(require('./Folders.js'));
app.use(require('./Connections.js'));
app.use(require('./Chat.js'));
app.use(require('./Customers.js'));
app.use(require('./VTEntrena/Users.js'));
app.use(require('./VTEntrena/Designer.js'));
app.use(require('./VTEntrena/Answer.js'));
app.use(require('./VTEntrena/Preferences.js'))
app.use(require('./VTEntrena/Comments.js'))
app.use(require('./Customs/SurveysAnswerbyForm'))

module.exports = app;