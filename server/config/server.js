const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config');

module.exports.start = function() {
  //connect to database
  mongoose.connect(config.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);

  const app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware
  app.use(bodyParser.json());

  const port = config.port || 8080;

  const webpackBuildDir = path.join(__dirname, '../../dist');
  app.use(express.static(webpackBuildDir));

  const htmlEntrypoint = path.join(webpackBuildDir, 'index.html');
  app.get('/', (req, res) => {
    res.sendFile(htmlEntrypoint);
  });

  const mockResponse = {
    foo: 'bar',
    bar: 'foo',
  };
  app.get('/api', (req, res) => {
    res.send(mockResponse);
  });

  app.listen(port, function() {
    console.log('App listening on port: ' + port);
  });

  return app;
};
