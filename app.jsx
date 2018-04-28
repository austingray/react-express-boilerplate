import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import template from './template';
import App from './src/react/App';

// get an express instance
const app = express();

// create a public dir for accessing assets in the browser
app.use(express.static(path.join(__dirname, 'public')));

// graphql schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// graphql and graphiql endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

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
