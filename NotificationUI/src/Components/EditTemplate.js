import React, { useState } from 'react';
import { TextField } from '../commonComponents/index';
import { Button } from '../commonComponents/index';
import { FileUploader } from '../commonComponents/index';
// import '../StyleSheet/Card.css'



function EditTemplateConatiner({ handleBack, handleNext, imagesrc, onTitleChange, onDescriptionChange, onChangeHandler }) {


    return (<div className="container">
        <h3>Enter Details About Notification.</h3>
        <hr width="95%"></hr>

        <br>
        </br><TextField isError={false} placeholder="Title" handleChange={onTitleChange} />
        <br>
        </br><TextField isError={false} placeholder="Description" handleChange={onDescriptionChange} multiline={true} />
        <br></br>
        <FileUploader setInputFile={onChangeHandler} />
        <br></br>
        <Button onClick={handleNext} placeholder="Next" />
    </div >);





}
export default EditTemplateConatiner;