import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MyNotificationComponent from '../Components/MyNotificationComponent';
import { Loader } from '../commonComponents/index';
import { getMyNotification, getLoading, getMyNotifications } from '../ReduxContainers/Notifications';

class MyNotificationContainers extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

        this.props.getMyNotification();

    }
    render() {
        console.log("data", this.props.isData.data)
        if (this.props.IsLoading) {
            return (<Loader />);
        }
        else {
            return (<MyNotificationComponent createdNotification={this.props.isData.data} />);
        }
    }
}
export default compose(
    connect(
        state => ({
            IsLoading: getLoading(state),
            isData: getMyNotifications(state),

        })
        ,
        { getMyNotification }
    )
)(MyNotificationContainers);