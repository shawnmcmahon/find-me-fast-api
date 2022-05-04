const express = require('express')
require('dotenv').config()
// console.log(process.env)
const app = express();
const cors = require('cors')

// const { pool } = require('./config')

const corsOpts = {
  origin: '*', 
  methods: [
    'GET', 
    'POST'
  ], 
  allowedHeaders: [
    'Content-type'
  ]
}


app.use(express.json()); 
app.use(cors(corsOpts));

app.locals.title = 'Find Me Fast API'

// pool.connect();

app.use((request, response, next) => {
  const allowedOrigins = ['www.localhost:4000/']; 
  const origin = req.headers.origin; 
  if (allowedOrigins.includes(origin)) {
    response.setHeader('Access-Control-Allow-Origin', origin);
  }
  return next();
})

app.get('/', (request, response) => {
  response.status(200).send('Welcome to the Find Me Fast Api')
}); 

app.listen(4000, () => {
  console.log('Server listening')
})