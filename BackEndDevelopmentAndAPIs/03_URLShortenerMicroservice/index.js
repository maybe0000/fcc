const express = require('express');
require('dotenv').config();
const cors = require('cors');
const dns = require('dns')

let bodyParser = require('body-parser')

const shorter = new Map(

)

const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

app.post('/api/shorturl', (req, res) => {

  try {
    url = new URL(req.body.url);
  } catch (err) {
    return res.json({ error: "Invalid URL" });  // Invalid URL format
  }

  try {
    dns.lookup(new URL(url).hostname, async (err) => {
      if (err) {
        return res.json({
          error: "Invalid URL"
        });
      }
      res.json({
        original_url: req.body.url,
        short_url: shorter.has(req.body.url) ? shorter.get(req.body.url) : (
          shorter.set(req.body.url, shorter.size + 1),
          shorter.get(req.body.url)
        )
      });
    });
  } catch (err) {
    res.json({
      error: "Invalid URL"
    });
  }

});