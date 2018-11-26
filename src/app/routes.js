import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Toaster from './components/Toaster';
import App from './containers/App';
import Favorites from './components/Favorites';
import Nav from './components/Nav';
import './style/route.sass';

class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() { 
    return (   
      <div className="appContainer">
        <Nav className="appNav"/>
        <div className="appItems">
          <Switch>
            <Route exact path="/" render={ () => <App title="topRated"/> }/>
            <Route exact path="/popular" render={ () => <App title="popular"/> } />
            <Route exact path="/upcoming" render={ () => <App title="upcoming"/> } />
            <Route exact path="/favorites" render={ () => <Favorites title="favorites"/> } />
          </Switch>
        </div>
        <Toaster />
      </div>
    );
  }
}
export default Router;
