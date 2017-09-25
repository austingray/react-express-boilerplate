import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import {
  Homepage,
  Login,
  Error,
} from './Views';

const routes = [
  {
    url: '/',
    key: 'homepage',
    component: Homepage,
  },
  {
    url: '/login',
    key: 'login',
    component: Login,
  },
];

const errorRoute = {
  key: 'error',
  component: Error,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    // get the state from the server
    const appState = this.props.state || window.__STATE__; // eslint-disable-line no-underscore-dangle max-len

    // get the current route
    const activeRoute = routes.find(route => route.url === appState.url) || errorRoute;

    this.state = {
      activeRoute,
    };
  }
  render() {
    const route = this.state.activeRoute;
    const Component = route.component;
    return <Component />;
  }
}

if (typeof document !== 'undefined') {
  render(
    <App />,
    document.getElementById('app'),
  );
}

App.propTypes = {
  state: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default App;
