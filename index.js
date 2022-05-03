const express = require('express')
require('dotenv').config()
// console.log(process.env)
const app = express();
const cors = require('cors')

const { pool } = require('./config')
