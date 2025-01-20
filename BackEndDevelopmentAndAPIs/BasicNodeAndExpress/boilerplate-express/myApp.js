let express = require('express');
require('dotenv').config()
let app = express();
console.log("Hello world");
// app.get('/', function(req, res) {
//     res.send('Hello Express');
// })
app.use(function(req, res, next) {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
})
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
})
app.use('/public',express.static(__dirname + '/public'));
app.get('/json', function(req, res) {
    let msg = "Hello json"
    //console.log(process.env.MESSAGE_STYLE)
    let message = process.env.MESSAGE_STYLE == 'uppercase' ? msg.toUpperCase() : msg
    res.json({"message": message})
})




























 module.exports = app;
