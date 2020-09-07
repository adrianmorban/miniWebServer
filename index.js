const express = require("express");
const app = express();
const messagesrouter = require('./routes/messages');
const morgan = require('morgan')

app.use('/messages', messagesrouter);

app.use(`/messages/:id`, messagesrouter);

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

app.use(morgan('dev'));

module.exports = app;
