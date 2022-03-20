require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')


const app = express();

//* Импорт роутов
const indexRouter = require('./routes/index.routes');
// const usersRouter = require('./routes/user.routes');
const cartRouter = require('./routes/cart.routes');
const categoryRoutes = require('./routes/category.routes');
const bouquetListMainRouter = require('./routes/bouquet_list_main.routes');

//* config
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//* use routes
app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/cart', cartRouter);
app.use('/categories', categoryRoutes);
app.use('/bouquets', bouquetListMainRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
