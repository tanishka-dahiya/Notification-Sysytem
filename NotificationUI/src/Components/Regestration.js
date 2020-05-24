import React, { useState } from 'react';
import { PasswordField } from '../commonComponents/index';
import { TextField } from '../commonComponents/index';
import { Button } from '../commonComponents/index';
import Zoom from 'react-reveal/Zoom';
import { SimpleAlerts } from '../commonComponents/index';
import {
    Link, useHistory
} from "react-router-dom";
import '../StyleSheet/Registration.css';


function RegestrationPageContainer({ RegisterUsers, IsToken, IsError }) {
    const validEmailRegex =
        RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    let history = useHistory();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setError] = useState({
        name: '',
        email: '',
        password: ''
    });
    const onTextfieldChange = (e) => {
        setForm({ ...form, email: e.target.value });
        const emailError =
            validEmailRegex.test(e.target.value)
                ? false
                : true;


        setError({ ...errors, email: emailError, });

    }
    const onPasswordfieldChange = (e) => {
        setForm({ ...form, password: e.target.value });
        const PasswordError =
            e.target.value.length >= 6
                ? false
                : true;



        setError({ ...errors, password: PasswordError });

    }
    const onNamefieldChange = (e) => {
        setForm({ ...form, name: e.target.value });
        const NameError =
            e.target.value.length >= 1
                ? false
                : true;

        setError({ ...errors, name: NameError });

    }
    async function SignInClick() {
        const user = { name: form.name, email: form.email, password: form.password }
        if (form.name.length && (form.password.length > 5) && validEmailRegex.test(form.email)) {
            await RegisterUsers(user);

        }
    }

    if (IsToken !== "") {
        history.push('/Dashboard')

    }
    return (
        <Zoom>
            {(IsError != "") ? <SimpleAlerts message="Enter Correct Details" type='error' /> : ""}
            <div id="formContent">
                <div className="signinContainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXVYq2eR1EyWD5zBJksEhJidz-FDA0IaaxR4PQukSMnwzYdzG6&usqp=CAU" height="600px" />

                </div>

                <div className="signupContainer">
                    <h2>Sign Up</h2>
                    <TextField isError={errors.name} ErrorMessage="Enter a Username" placeholder="UserName" handleChange={onNamefieldChange} />
                    <br>
                    </br>
                    <TextField isError={errors.email} ErrorMessage="Enter valid Email Id." placeholder="Email Id" handleChange={onTextfieldChange} />
                    <br>
                    </br>
                    <PasswordField isError={errors.password} ErrorMessage="Password should be alteast of 6 characters." handleChangePassword={onPasswordfieldChange} />
                    <br></br>
                    <Button onClick={SignInClick} placeholder="Sign Up" />
                    <br>
                    </br>
                    <div>
                        <p><Link to="/">Already Have an Account,Sign In.</Link></p>
                    </div>

                </div>
            </div>
        </Zoom>

    );
}
export default RegestrationPageContainer;