const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config');

const developmentMode = 'development';
const devServerEnabled = process.env.NODE_ENV === developmentMode;

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config.js');

module.exports.start = function() {
  //connect to database
  mongoose.connect(config.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);

  const app = express();

  if (devServerEnabled) {
    webpackConfig.mode = developmentMode;

    //reload=true:Enable auto reloading when changing JS files or content
    //timeout=1000:Time from disconnecting from server to reconnecting
    webpackConfig.entry.unshift(
      'webpack-hot-middleware/client?reload=true&timeout=1000'
    );

    //Add HMR plugin
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

    const compiler = webpack(webpackConfig);

    //Enable "webpack-dev-middleware"
    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
      })
    );

    //Enable "webpack-hot-middleware"
    app.use(webpackHotMiddleware(compiler));
  }

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
