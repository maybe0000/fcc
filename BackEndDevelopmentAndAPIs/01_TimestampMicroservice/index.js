// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

// API date
app.get('/api/:date?', function (req, res) {
  let dateAPI = req.params.date;
  let date = Number(dateAPI);

  if (!dateAPI) {
    res.json({
      unix: new Date().getTime(),
      utc: new Date().toUTCString()
    })
  }
  else if (!isNaN(date) && date > 0) {
    res.json({
      unix: date,
      utc: new Date(date).toUTCString()
    });
  }
  else {
    unixDate = new Date(dateAPI).getTime();
    utcDate = new Date(dateAPI).toUTCString();
    if (!unixDate) {
      return res.json({
        error: "Invalid Date"
      });
    } else {
      res.json({
        unix: unixDate,
        utc: utcDate
      })
    }
  }
}
)

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
