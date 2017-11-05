/**
 * The template that is used to generate every page on the server
 * TODO: provide a way to override this, maybe as a directory in the root of
 * the project named 'template'
 */
import React from 'react';
import { renderToString } from 'react-dom/server';

const template = (state, component) => /* @html */`
<html>
  <head>
    <script>
      var __STATE__ = ${JSON.stringify(state)};
    </script>
  </head>

  <body>
    <div id="app">
      <div>${component}</div>
    </div>
    <script src="/build/js/bundle.js"></script>
  </body>
</html>
`;

export default (state, Component) => template(
  state,
  renderToString(<Component state={state} />),
);
