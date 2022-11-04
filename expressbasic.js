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
  //route handlers
 // A single callback function can handle a route. 

app.get('/example/a', (req, res) => {
  res.send('Hello from A!')
})
//More than one callback function can handle the next object.

app.get('/hii/k', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})
//An array of callback functions can handle a route. For example:

const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

const cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/hellohi/c', [cb0, cb1, cb2])
// combination of independent functions and arrays of functions can handle a route. For example:

const h0 = function (req, res, next) {
  console.log('H0')
  next()
}

const h1 = function (req, res, next) {
  console.log('H1')
  next()
}

app.get('/exmple/d', [h0, h1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
})
//
app.get('/exmple/json', (req, res) =>{
 // res.jsonp({ user: 'tobi' })
 res.status(500).jsonp({ error: 'message' })
})

// an example of chained route handlers that are defined by using app.route().

app.route('/book')
.get((req, res) => {
  res.send('Get a random book')
})
.post((req, res) => {
  res.send('Add a book')
})
.put((req, res) => {
  res.send('Update the book')
})
// express .route
const birds = require('./birds')

app.use('/birds', birds)


