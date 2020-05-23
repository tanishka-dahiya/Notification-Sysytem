import React, { useState } from 'react';
import { TextField } from '../commonComponents/index';
import { SelectContainer } from '../commonComponents/index';
import { Button } from '../commonComponents/index';
import '../StyleSheet/Card.css'



function RecipientDetails({ handleBack, handleFinish, imagesrc, onRecipientChange, onDescriptionChange }) {

    const TypeOfRecipient = ["Email", "Phone", "Portal"]


    return (<div className="container">
        <h3>Enter Recipent Details.</h3>
        <hr width="95%"></hr>
        <br>
        </br><SelectContainer TypeOfRecipient={TypeOfRecipient} handleChangeRecipient={onRecipientChange} />
        < br >
        </br><TextField isError={false} placeholder={`Enter Email or Mobile`} handleChange={onDescriptionChange} />
        <br></br>
        <Button onClick={handleFinish} placeholder="Finish" />
    </div >);





}
export default RecipientDetails;