import React, { useState } from 'react';
import { TextField } from '../commonComponents/index';
import { SelectContainer } from '../commonComponents/index';
import { Button } from '../commonComponents/index';
import '../StyleSheet/Card.css'



function RecipientDetails({ handleBack, handleNext, imagesrc }) {
    const [isDataForm, setActiveFormData] = React.useState(false);
    const [form, setForm] = useState({
        TypeOfRecipent: '',
        recipentDetails: ''
    });
    const onRecipientChange = (value) => {
        setForm({ ...form, TypeOfRecipent: value })
    }
    const onDescriptionChange = (e) => {
        setForm({ ...form, description: e.target.value })
    }

    const TypeOfRecipient = ["Email", "Phone", "Portal"]


    return (<div className="container">
        <h3>Enter Recipent Details.</h3>
        <hr width="95%"></hr>
        <br>
        </br><SelectContainer TypeOfRecipient={TypeOfRecipient} handleChangeRecipient={onRecipientChange} />
        < br >
        </br><TextField isError={false} placeholder={`Enter ${form.TypeOfRecipent} Address`} handleChange={onDescriptionChange} />
        <br></br>
        <Button onClick={handleNext} placeholder="Next" /><Button onClick={handleBack} placeholder="Back" />
    </div >);





}
export default RecipientDetails;