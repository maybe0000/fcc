const express = require('express')
const app = express()
const cors = require('cors')
const uuid = require('uuid')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const users = new Map()
const exercises = new Map()

app.post('/api/users', (req, res) => {
  const username = req.body.username
  const user = {
    username,
    _id: uuid.v4()
  }
  users.set(user._id, user)
  res.json(user)
})

app.get('/api/users', (req, res) => {
  res.json(Array.from(users.values()))
})

app.post('/api/users/:_id/exercises', (req, res) => {
  const _id = req.params._id
  const { description, duration, date } = req.body
  const username = users.get(_id).username

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (date && !dateRegex.test(date)) {
    return res.status(400).json({
      error: 'Invalid date format. Use YYYY-MM-DD'
    })
  }

  const formattedDate = date ? new Date(date).toDateString() : new Date().toDateString()

  if (formattedDate == 'Invalid Date') {
    return res.status(400).json({
      error: 'Invalid date value'
    })
  }

  const response = {
    _id,
    username,
    date: formattedDate,
    duration: parseInt(duration),
    description
  }

  const newExercise = {
    description,
    duration: parseInt(duration),
    date: formattedDate
  }

  const existingExercises = exercises.get(_id) ?? []

  exercises.set(_id, [newExercise].concat(existingExercises))
  // console.log(exercises)
  res.json(response)

})

app.get('/api/users/:_id/logs', (req, res) => {
  const _id = req.params._id
  const username = users.get(_id).username
  const count = exercises.get(_id).length ?? 0
  const log = exercises.get(_id) ?? []
  const { from, to, limit } = req.query

  // console.log(from, to, limit)

  res.json({
    _id,
    username,
    count,
    log: log.filter(l => {
      const lDate = new Date(l.date)
      const fDate = new Date(from)
      const tDate = new Date(to)
      return (!from || lDate >= fDate) && (!to || lDate <= tDate)
    }).slice(0, limit)
  })
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

