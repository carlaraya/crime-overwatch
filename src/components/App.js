import React, { Component } from 'react';
import ReactRouter, { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav.js'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={function(){return null;}} />
            <Route exact path='/battle' component={function(){return null;}} />
            <Route path='/battle/results' component={function(){return null;}} />
            <Route path='/popular' component={function(){return null;}} />
            <Route render={function() {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
