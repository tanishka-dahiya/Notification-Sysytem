import React, { useState } from 'react';
import { Template } from '../commonComponents/index';


function MyNotificationComponent({ createdNotification }) {


    if (createdNotification != undefined) {
        return (

            <>
                <div className="TemplateContainer">
                    {createdNotification.map((number, index) => {

                        return <Template id={index} isNotification={true} title={number.title} description={number.Description} src={`data:image/png;base64,${number.image}`} />
                    })}
                </div>
            </>

        );
    }
    else {
        return ("")
    }




}
export default MyNotificationComponent;