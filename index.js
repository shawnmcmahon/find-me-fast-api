const express = require('express')
require('dotenv').config()
// console.log(process.env)
const app = express();
const cors = require('cors')

// const { pool } = require('./config')


app.use(express.json()); 
app.use(cors());

app.locals.title = 'Find Me Fast API'

// pool.connect();

app.get('/', (request, response) => {
  response.status(200).send(`Welcome to the ${app.locals.title}`)
}); 

app.listen(3000, () => {
  console.log('Server listening')
})