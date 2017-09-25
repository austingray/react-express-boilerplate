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

export default template;
