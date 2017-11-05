import express from 'express';
import path from 'path';
import template from './reaxpress/template';
import App from './src/react/App';

const app = express();

// middleware
app.use(express.static(path.join(__dirname, 'public')));

// use template.html on every route
app.get('*', (req, res) => {
  // get the current url
  const url = req.originalUrl.split('?')[0];
  // set the current app state
  const state = {
    url,
  };
  // send the response
  res.send(template(state, App));
});

module.exports = app;
