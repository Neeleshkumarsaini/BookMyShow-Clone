const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API.'
  })
})


app.get('/dashboard', verifyToken, (req, res) => { //verifyToken is middleware
  jwt.verify(req.token, 'the_secret_key', err => { // verifies token
    if (err) { // if error, respond with 401 code
      res.sendStatus(401)
    } else { 
      res.json({
        events: 'yes'
      })
    }
  })
})

app.post('/register', (req, res) => {
  if (req.body) {
    const user = {
     
      email: req.body.email,
      password: req.body.password
      
    }

    const data = JSON.stringify(user, null, 2)
    var dbUserEmail = require('./db/user.json').email
    var errorsToSend = []

    if (dbUserEmail === user.email) {
      errorsToSend.push('An account with this email already exists.')
    }
    if (user.password.length < 2) {
      errorsToSend.push('Password too short.')
    }
    if (errorsToSend.length > 0) {
      res.status(400).json({ errors: errorsToSend })
    } else {
      fs.writeFile('./db/user.json', data, err => {
        if (err) {
          console.log(err + data)
        } else {
          const token = jwt.sign({ user }, 'the_secret_key')
          
          res.json({
            token,
            email: user.email,
           
          })
        }
      })
    }
  } else {
    res.sendStatus(400)
  }
})

app.post('/login', (req, res) => {
  const userDB = fs.readFileSync('./db/user.json')
  const userInfo = JSON.parse(userDB)
  if (
    req.body &&
    req.body.email === userInfo.email &&
    req.body.password === userInfo.password
  ) {
    const token = jwt.sign({ userInfo }, 'the_secret_key')
    
    res.json({
      token,
      email: userInfo.email,
    })
  } else {
    res.status(401).json({ error: 'Invalid login. Please try again.' })
  }
})

// MIDDLEWARE
function verifyToken (req, res, next) {
  const bearerHeader = req.headers['authorization']

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(401)
  }
}

app.listen(3002, () => {
  console.log('Server started on port 3002')
})
