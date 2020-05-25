import React, { useState } from 'react';
import { Header } from '../commonComponents/index';
import { Card } from '../commonComponents/index';

import '../StyleSheet/Dashboard.css';

function MyNotificationComponent({ createdNotification }) {


    if (createdNotification != undefined) {
        return (

            <><Header />
                <div class="flex-container">
                    {createdNotification.map((number) => {

                        return < div > <Card title={number.title} desc={number.Description} imageSrc={`data:image/png;base64,${number.image}`} /></div >
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