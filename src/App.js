import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Routes from './Routes';

const browserHistory = createBrowserHistory();

class App extends React.Component {

  render(){
    return (
      <div> 
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </div>
    );
  }

}

export default App;