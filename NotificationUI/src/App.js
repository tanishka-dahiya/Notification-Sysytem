import React from 'react';
import { LoginPageContainer } from './Containers/index';
import { DashBoardContainer } from './Containers/index';
import { NotificationFlowContainer } from './Containers/index'
import { RegistrationPageContainer } from './Containers/index';
import YourNotificationContainer from './Containers/YourNotificationContainer';
import MyNotificationContainers from './Containers/MyNotificationContainer';

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
          <DashBoardContainer />
        </Route>
        <Route path="/my-notification">
          <MyNotificationContainers />
        </Route>
        <Route path="/Register">
          <RegistrationPageContainer />
        </Route>

        <Route path="/create-Notification">
          <NotificationFlowContainer />
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