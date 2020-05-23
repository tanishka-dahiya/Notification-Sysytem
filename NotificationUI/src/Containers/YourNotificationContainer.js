import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { YourNotificationContainer } from '../Components/index';
import { Loader } from '../commonComponents/index';
import { createdNotification, getLoading, getYourCreatedNotifications } from '../ReduxContainers/Notifications';

class YourNotificationContainers extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

        this.props.createdNotification();

    }
    render() {
        console.log("data", this.props.isData.data)
        if (this.props.IsLoading) {
            return (<Loader />);
        }
        else {
            return (<YourNotificationContainer createdNotification={this.props.isData.data} />);
        }
    }
}
export default compose(
    connect(
        state => ({
            IsLoading: getLoading(state),
            isData: getYourCreatedNotifications(state),

        })
        ,
        { createdNotification }
    )
)(YourNotificationContainers);