import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { LoginPageContainer } from './Containers/index';
import { DashBoardContainer } from './Containers/index';
import { NotificationFlowContainer } from './Containers/index'
import { RegistrationPageContainer } from './Containers/index';
import YourNotificationContainer from './Containers/YourNotificationContainer';
import MyNotificationContainers from './Containers/MyNotificationContainer';
import { getToken, ResetUsers } from './ReduxContainers/registerAndLogin';
import { Header } from './commonComponents/index'


import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";



function App(props) {
  let header;
  if (props.IsToken != "") {
    header = <Header ResetUsers={props.ResetUsers} />;
  } else {
    header = null;
  }

  return (
    <>
      {header}
      < Router >
        <Switch>
          <Route exact path="/my-notification" render={() => (
            props.IsToken == "" ? (
              <Redirect to="/" />
            ) : (
                <MyNotificationContainers />
              )
          )} />
          <Route exact path="/Dashboard" render={() => (
            props.IsToken == "" ? (
              <Redirect to="/" />
            ) : (
                <DashBoardContainer />
              )
          )} />
          <Route exact path="/create-Notification" render={() => (
            props.IsToken == "" ? (
              <Redirect to="/" />
            ) : (
                <NotificationFlowContainer />
              )
          )} />
          <Route exact path="/your-Notification" render={() => (
            props.IsToken == "" ? (
              <Redirect to="/" />
            ) : (
                <YourNotificationContainer />
              )
          )} />


          <Route exact path="/Register">
            <RegistrationPageContainer />
          </Route>

          <Route exact path="/">
            <LoginPageContainer />
          </Route>
        </Switch>
      </Router >
    </>

  );
}

export default compose(
  connect(
    state => ({
      IsToken: getToken(state)
    })
    ,
    { ResetUsers }
  )
)(App);