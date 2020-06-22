import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { RegestrationPageContainer } from '../Components/index';
import { Loader } from '../commonComponents/index';
import { RegisterUsers, getLoading, getToken, getError } from '../ReduxContainers/registerAndLogin';

function RegistrationPageContainer(props) {
    if (props.IsLoading) {
        return (<Loader />);
    }
    else {
        return (<RegestrationPageContainer RegisterUsers={props.RegisterUsers} IsToken={props.IsToken} IsError={props.IsError} />);
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
        { RegisterUsers }
    )
)(RegistrationPageContainer);