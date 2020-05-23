import React, { useState } from 'react';
import { Steper } from '../commonComponents/index';
import { Header } from '../commonComponents/index';
import { Template } from '../commonComponents/index';
import { EditTemplateConatiner } from '../Components/index';
import { RecepientDetails } from '../Components/index';
import '../StyleSheet/Card.css'



function CreateNotificationFlow({ postNotification, IsError }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedTemplate, setActiveTemplate] = React.useState("");

    const [form, setForm] = useState({
        title: '',
        description: '',
        image: null,
        TypeOfRecipent: '',
        recipentDetails: ''
    });
    const onTitleChange = (e) => {
        setForm({ ...form, title: e.target.value })
    }
    const onDescriptionChange = (e) => {
        setForm({ ...form, description: e.target.value })
    }

    const onChangeHandler = (file) => {
        setForm({ ...form, image: file })
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    async function handleFinish() {
        const formData = new FormData();
        formData.append('image', form.image);
        formData.append('title', form.title);
        formData.append('Description', form.description);
        formData.append('RecipientType', form.TypeOfRecipent);
        formData.append('RecipientAddress', form.recipentDetails);


        await postNotification(formData);
    };

    const onRecipientChange = (value) => {
        setForm({ ...form, TypeOfRecipent: value })
    }
    const onTypeChange = (e) => {
        setForm({ ...form, recipentDetails: e.target.value })
    }


    const TemplateObject = [{ title: 'Holi Celebration', src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXMK0wn3B4QEdSGBkUqy8gFFmOsaMiZM5ZTPRaY9gVSjrU5GKI&usqp=CAU" }, { title: 'Diwali Celebration', src: "https://blog.atlantisthepalm.com/wp-content/uploads/2017/10/8Oct-844x428.jpg" },
    { title: 'Fun Friday', src: 'https://i.pinimg.com/originals/93/c8/12/93c812ad6c36355853f2318ead214757.jpg' },
    { title: 'Nagarro News', src: 'https://www.montgomerycountymd.gov/OCP/Resources/Images/News.png' },
    { title: 'New Policy', src: 'data:image/jpeg;base64,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' },

    { title: 'Blood Donation', src: 'https://scoophub.in/wp-content/uploads/2016/05/Blood-Donation-Organizations-in-India.jpg' },
    { title: 'Holiday news', src: 'https://images.twinkl.co.uk/tw1n/image/private/t_630/image_repo/fd/c6/AU-T-212-Holiday-News-Display-Banner.jpg' },
    { title: 'Chritmas Celebration', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLm3YAPREhGAlb8cdkmgBHoJRhF4SvfViUgZrogg5JRAYNWoX1&usqp=CAU' },
    { title: 'Require Support', src: 'data:image/jpeg;base64,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' }]

    const Steps = { first: "Select Template", second: "Submit Template data", last: 'Recipient Details' }


    const handleTemplateClick = (id) => {
        setActiveTemplate(id);
        setActiveStep(1);
    }

    return (
        <><Header />

            <Steper Steps={Steps} activeStep={activeStep} />
            {activeStep == 0 && <div className="TemplateContainer">
                {TemplateObject.map((template, index) =>
                    <Template id={index} title={template.title} src={template.src} onClick={handleTemplateClick} />
                )}
            </div>}
            {activeStep == 1 && <EditTemplateConatiner onDescriptionChange={onDescriptionChange} onTitleChange={onTitleChange} imagesrc={TemplateObject[selectedTemplate].src} handleNext={handleNext} onChangeHandler={onChangeHandler} />}
            {activeStep == 2 && <RecepientDetails onDescriptionChange={onTypeChange} onRecipientChange={onRecipientChange} imagesrc={TemplateObject[selectedTemplate].src} handleFinish={handleFinish} />}

        </>

    );
}
export default CreateNotificationFlow;