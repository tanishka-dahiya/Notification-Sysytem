import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Dashboard } from '../Components/index';
import { getToken, getLoading } from '../ReduxContainers/registerAndLogin';
import { Loader } from '../commonComponents/index';


function DashBoardContainer(props) {


    if (props.IsLoading) {
        return (<Loader />)
    }
    else {

        return (<Dashboard />);
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