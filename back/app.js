const express = require('express');
const app = express();
const userRoutes = require('./Route/user');
const statRoutes = require('./Route/stats');
const bodyParser = require('body-parser');
const mysql = require('mysql');


module.exports = con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "193705",
  database: "matrice"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//bug cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use(bodyParser.json());

app.use('/api/matrice', statRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
