import React, { useState } from 'react';
import { Header } from '../commonComponents/index';
import { Card } from '../commonComponents/index';

import '../StyleSheet/Dashboard.css';

function MyNotificationComponent({ createdNotification }) {

    const getUrl = (image) => {

        var binary = '';
        var bytes = [].slice.call(new Uint8Array(image));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);

    }
    if (createdNotification != undefined) {
        return (

            <><Header />
                <div class="flex-container">
                    {createdNotification.map((number) => {
                        console.log(getUrl(number.image))
                        return < div > <Card title={number.title} desc={number.Description} /></div >
                    })}
                </div>
            </>

        );
    }
    else {
        return (< Header />)
    }




}
export default MyNotificationComponent;