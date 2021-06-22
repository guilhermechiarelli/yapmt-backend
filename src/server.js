require('express-async-errors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index');
const AppError = require('./errors/AppError');

class App {
  constructor() {
    this.mongoose = mongoose;
    this.server = express();

    this.database();
    this.middlewares();
    this.routes();
    this.exeptionHandler();

    this.server.listen(3333, () => {
      console.log('Server started!');
    });
  }

  database() {
    this.mongoose.connect('mongodb://localhost/yapmt-guilherme', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(morgan('dev'));
  }

  routes() {
    this.server.use(routes);
  }

  exeptionHandler() {
    this.server.use((err, req, res, next) => {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message });
      }

      console.log(err);

      return res.status(500).json({ message: 'Internal server error.' });
    });
  }
}

module.exports = new App().server;
