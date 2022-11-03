const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("welcome to simplelearn");
});
app.listen(4000, () => {
    console.log("listening to port 4000")
});
// get method
app.get('/wish', (req, res) => {
    res.send('good morning')
  })
  //post method
  app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })
// all method
app.all('/secret', (req, res, next) => {
    res.send('all methods')
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
  })
  //get method route
  //route path match abcd acd
  app.get('/ab?cd', (req, res) => {
    res.send('ab?cd')
  })
  //(This route path will match abcd, abbcd, abbbcd, )
  app.get('/ab+cd', (req, res) => {
    res.send('ab+cd')
  })
  //This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.

app.get('/ab*cd', (req, res) => {
    res.send('ab*cd')
  })
  //This route path will match /abe and /abcde.

app.get('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e')
  })
  //This route path will match anything with an “a” in it.

app.get(/a/, (req, res) => {
    res.send('/a/')
  })
  //This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.

app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/')
  })
  //route parameters
  app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
  })
  //
  app.get('/flights/:from-:to', (req, res) => {
    res.send(req.params)
  })
