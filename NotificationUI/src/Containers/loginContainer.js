import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LoginComponent from '../Components/index';
import { Loader } from '../commonComponents/index';
import { AuthUsers, getLoading, getToken, getError } from '../ReduxContainers/registerAndLogin';

function LoginPageContainer(props) {
    if (props.IsLoading) {
        return (<Loader />);
    }
    else {
        return (<LoginComponent AuthUsers={props.AuthUsers} IsToken={props.IsToken} IsError={props.IsError} />);
    }
}
export default compose(
    connect(
        state => ({
            IsLoading: getLoading(state),
            IsToken: getToken(state),
            IsError: getError(state)
        })
        ,
        { AuthUsers }
    )
)(LoginPageContainer);