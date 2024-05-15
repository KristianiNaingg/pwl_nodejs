let data = "testing"
console.log (data)

const express = require('express')
const path = require('path');

const app = express()
const port = 3000

// //Routes/ Url/end point utama kita methode Get
// app.get('/', (req, res) => {
//  // res.send('Hello sayangkuu cintaku!')
//  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
// })

// app.get('/ctz', (req, res) => {
//   // res.send('Hello semuaaa!')
//   res.sendFile(path.join(__dirname, 'pages', 'ctz.html'));
//  })

//  app.get('/kk', (req, res) => {
//   // res.send('Hello duniakuuu!')
//   res.sendFile(path.join(__dirname, 'pages', 'kk.html'));
//  })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));

// Route to render index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

// Route to render ctz.ejs
app.get('/ctz', (req, res) => {
  res.render('ctz');
});

// Route to render kk.ejs
app.get('/kk', (req, res) => {
  res.render('kk');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});