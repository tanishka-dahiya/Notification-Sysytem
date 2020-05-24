import React, { useState } from 'react';
import { Header } from '../commonComponents/index';
import { Card } from '../commonComponents/index';

import {
    useHistory
} from "react-router-dom";
import '../StyleSheet/Dashboard.css';

function Dashboard() {

    let history = useHistory();
    const handleCreateNotification = () => {
        history.push('/create-Notification')
    }
    const handleYourNotification = () => {
        history.push('/your-Notification')
    }
    const handleMyNotification = () => {
        history.push('/my-notification')
    }


    return (<><Header />
        <h3>Dashboard</h3>
        <hr width="95%"></hr>
        <div class="flex-container">
            <div> <Card title='Create Notification' imageSrc="https://www.alphansotech.com/wp-content/uploads/2015/12/Push-notification-1.jpg" desc="You can easily create a notifications and customize according to any festival,holiday,Emergency News or about any new policies. " onClick={handleCreateNotification} /></div>
            <div> <Card title='Your Created Notifications' imageSrc="https://ultimatemember.com/wp-content/uploads/bb-plugin/cache/notifications-circle.png" desc="History of all Notifications Created by you.Access your all Created Notifications At one Place. " onClick={handleYourNotification} /></div>
            <div> <Card title='Your Notifications' imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgty2E77bTv9Q3UOLSFyS9i9OQlTg1H5DfEIPIiyN5qeGg8Yxc&usqp=CAU" desc="Know about what is going around you and be a part of it. " onClick={handleMyNotification} /></div>

        </div></>);





}
export default Dashboard;