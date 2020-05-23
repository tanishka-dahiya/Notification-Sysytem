import React, { useState } from 'react';
import { Header } from '../commonComponents/index';
import { Table } from '../commonComponents/index';
import '../StyleSheet/Dashboard.css';

function YourNotificationContainer({ createdNotification }) {


    const FieldValues = [{ id: 'title', label: 'Title', minWidth: 170 }, , { id: 'description', label: 'Description', minWidth: 100 }, , {
        id: 'recipient',
        label: 'Recipient',
        minWidth: 170,
        format: (value) => value.toLocaleString('en-US'),
        align: 'right'
    }, {
        id: 'date',
        label: 'Date',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },]
    return (
        <>
            <Header />
            <Table FieldValues={FieldValues} createdNotification={createdNotification} />
        </>

    );
}
export default YourNotificationContainer;