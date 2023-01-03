const express = require('express');
const app = express();
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const path = require('path');

//1 middlewares
// console.log(process.env.user)
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

//middleware stands between client and server
//data from the body is added to request object
app.use(express.json());

//Built-in middleware for public routes
//When called at url in browser, omit public.
app.use(express.static(path.join(__dirname, 'public')));

//Custom middleware function
//Call next()
//you can set variables in middleware to be passed to middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//3 Routes

//Mounting Router
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
