import React from 'react';
import { LoginPageContainer } from './Containers/index';
import { Dashboard } from './Components/index';
import { CreateNotificationFlow } from './Components/index'
import { YourNotificationContainer } from './Components/index';
import { RegestrationPageContainer } from './Components/index';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router >
      <Switch>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="/Register">
          <RegestrationPageContainer />
        </Route>

        <Route path="/create-Notification">
          <CreateNotificationFlow />
        </Route>
        <Route path="/your-Notification">
          <YourNotificationContainer />
        </Route>
        <Route path="/">
          <LoginPageContainer />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
;