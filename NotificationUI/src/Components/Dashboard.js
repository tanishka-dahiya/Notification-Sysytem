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
    return (
        <>
            <Header />
            <h3>Dashboard</h3>
            <hr width="95%"></hr>
            <div class="flex-container">
                <div> <Card title='Create Notification' imageSrc="https://www.alphansotech.com/wp-content/uploads/2015/12/Push-notification-1.jpg" desc="You can easily create a notifications and customize according to any festival,holiday,Emergency News or about any new policies. " onClick={handleCreateNotification} /></div>
                <div> <Card title='Your Notifications' imageSrc="https://ultimatemember.com/wp-content/uploads/bb-plugin/cache/notifications-circle.png" desc="History of all Notifications Created by you.Access your all Created Notifications At one Place and check all its comments here very Easily. " /></div>
                <div> <Card title='Latest Conversations' imageSrc="https://appinventiv.com/wp-content/uploads/sites/1/2019/08/Are-Mobile-App-Push-Notifications-worth-the-hype.png" desc="get Know about whats happening in surroundings  without interference and to seek, receive and impart information and ideas through this Media. " /></div>

            </div>
        </>

    );
}
export default Dashboard;