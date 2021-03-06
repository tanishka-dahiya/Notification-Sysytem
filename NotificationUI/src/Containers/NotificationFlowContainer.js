import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CreateNotificationFlow } from '../Components/index';
import { Loader } from '../commonComponents/index';
import { postNotification, getLoading, getError } from '../ReduxContainers/Notifications';

function NotificationFlowContainer(props) {
    if (props.IsLoading) {
        return (<Loader />);
    }
    else {

        return (<CreateNotificationFlow postNotification={props.postNotification} IsError={props.IsError} />);
    }
}
export default compose(
    connect(
        state => ({
            IsLoading: getLoading(state),
            IsError: getError(state)
        })
        ,
        { postNotification }
    )
)(NotificationFlowContainer);