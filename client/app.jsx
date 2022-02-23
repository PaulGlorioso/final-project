import React from 'react';
import Home from './pages/home';
import NotFound from './pages/not-found';
import { parseRoute } from './lib';
import MapPage from './pages/map';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: parseRoute(location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(location.hash)
      });
    });
  }

  renderPage() {
    const { route } = this.state;

    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'map') {
      return <MapPage />;
    }

    return <NotFound />;
  }

  render() {
    return (
    <>
      <div>
        {this.renderPage()}
      </div>
    </>
    );
  }
}
