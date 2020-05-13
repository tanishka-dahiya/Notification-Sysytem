import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LoginComponent from '../Components/index';
import { RegisterUserActions, getLoading } from '../ReduxContainers/registerAndLogin';

function LoginPageContainer() {
    return (
        <LoginComponent />
    );
}
export default compose(
    connect(
        state => ({
            IsLoading: getLoading(state)
        })
        ,
        { ...RegisterUserActions }
    )
)(LoginPageContainer);