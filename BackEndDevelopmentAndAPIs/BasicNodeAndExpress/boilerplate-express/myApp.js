let express = require('express');
require('dotenv').config()
let bodyParser = require('body-parser')
let app = express();
console.log("Hello world");
// app.get('/', function(req, res) {
//     res.send('Hello Express');
// })
app.use(function(req, res, next) {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
})
app.use(bodyParser.urlencoded({extended: false}))
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
})
app.use('/public',express.static(__dirname + '/public'))
app.get('/json', function(req, res) {
    let msg = "Hello json";
    //console.log(process.env.MESSAGE_STYLE)
    let message = process.env.MESSAGE_STYLE == 'uppercase' ? msg.toUpperCase() : msg;
    res.json({"message": message});
    //res.json({message})
})
app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({"time": req.time});
})
app.get('/:word/echo', function(req, res) {
    res.json({echo: req.params.word});
})
app.get('/name', function(req, res) {
    res.json({name: req.query.first + ' ' + req.query.last});
})

























 module.exports = app;
