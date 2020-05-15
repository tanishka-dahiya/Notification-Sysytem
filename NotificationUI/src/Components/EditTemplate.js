import React, { useState } from 'react';
import { TextField } from '../commonComponents/index';
import { Button } from '../commonComponents/index';
import '../StyleSheet/Card.css'



function EditTemplateConatiner({ handleBack, handleNext, imagesrc }) {
    const [isDataForm, setActiveFormData] = React.useState(false);
    const [form, setForm] = useState({
        title: '',
        description: ''
    });
    const onTitleChange = (e) => {
        setForm({ ...form, title: e.target.value })
    }
    const onDescriptionChange = (e) => {
        setForm({ ...form, description: e.target.value })
    }
    const handleClick = () => {
        setActiveFormData(true);
    }


    return (<div className="container">
        <h3>Enter Details About Notification.</h3>
        <hr width="95%"></hr>
        <br>
        </br><TextField isError={false} placeholder="Title" handleChange={onTitleChange} />
        <br>
        </br><TextField isError={false} placeholder="Description" handleChange={onDescriptionChange} multiline={true} />
        <br></br>
        <Button onClick={handleNext} placeholder="Next" /><Button onClick={handleBack} placeholder="Back" />
    </div >);





}
export default EditTemplateConatiner;