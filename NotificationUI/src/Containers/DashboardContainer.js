import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Dashboard } from '../Components/index';
import { getToken, getLoading } from '../ReduxContainers/registerAndLogin';
import { Loader } from '../commonComponents/index';

import { NotAuthorized } from '../commonComponents/index';

function DashBoardContainer(props) {


    if (props.IsLoading) {
        return (<Loader />)
    }
    else if (props.IsToken != "") {

        return (<Dashboard />);
    }
    else {
        return (<NotAuthorized />);
    }
}
export default compose(
    connect(
        state => ({
            IsLoading: getLoading(state),
            IsToken: getToken(state)
        })
        ,
        null
    )
)(DashBoardContainer);