import React from 'react';
import { LoginPageContainer } from './Containers/index';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router >
      <Switch>
        <Route path="/">
          <LoginPageContainer />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
;