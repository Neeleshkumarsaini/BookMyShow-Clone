const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const SECRET_KEY = "__ONGRAPH__"

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API.'
  })
})


app.get('/dashboard', verifyToken, (req, res) => { //verifyToken is middleware
  jwt.verify(req.token, SECRET_KEY, err => { // verifies token
    if (err) {
      res.sendStatus(401)
    } else { 
        res.json({
        events: 'ok'
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
    let data = JSON.parse(fs.readFileSync('./db/user.json'))
    var errorsToSend = []

    if (data.users.filter((user) => { return user.email == req.body.email }).length) {
      errorsToSend.push('An account with this email already exists.')
    } 
    if (errorsToSend.length > 0) {
      res.status(400).json({ errors: errorsToSend })
    } else {
        data.users.push(user)
        data = JSON.stringify(data, null, 2)

        fs.writeFile('./db/user.json', data, err => {
          if (err) {
            console.log(err + data)
          } else {
              const token = jwt.sign( { email: user.email }, SECRET_KEY)
              res.json({
                      
                token,
                email: user.email

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
      userInfo.users.filter((user) => { return ((user.email == req.body.email) && (user.password == req.body.password)) }).length
  ) {
      const token = jwt.sign({ email: req.body.email }, SECRET_KEY)
      res.json({
        token,
        email: userInfo.email

         
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
