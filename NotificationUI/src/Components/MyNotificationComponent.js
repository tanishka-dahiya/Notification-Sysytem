import React, { useState } from 'react';
import { Template } from '../commonComponents/index';
import { NoDataPage } from '../commonComponents/index';

function MyNotificationComponent({ createdNotification }) {


    if (createdNotification != undefined) {
        if (createdNotification.length == 0) {
            return (<NoDataPage />);
        }
        else {
            return (

                <>
                    <div className="TemplateContainer">
                        {createdNotification.map((number, index) => {
                            if (number.image == null) {
                                return <Template id={index} isNotification={true} title={number.title} description={number.Description} src={`https://cdn.dribbble.com/users/888330/screenshots/2653750/empty_data_set.png`} />
                            }
                            else {
                                return <Template id={index} isNotification={true} title={number.title} description={number.Description} src={`data:image/png;base64,${number.image}`} />
                            }
                        })}
                    </div>
                </>

            );
        }
    }
    else {
        return ("")
    }




}
export default MyNotificationComponent;