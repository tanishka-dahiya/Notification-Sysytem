import React, { useState } from 'react';
import { PasswordField } from '../commonComponents/index';
import { TextField } from '../commonComponents/index';
import { Button } from '../commonComponents/index';
import {
    Link, useHistory
} from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import { SimpleAlerts } from '../commonComponents/index';

import '../StyleSheet/Login.css';


function LoginPageContainer({ AuthUsers, IsToken, IsError }) {
    let history = useHistory();
    const validEmailRegex =
        RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const onTextfieldChange = (e) => {
        setForm({ ...form, email: e.target.value })

    }
    const onPasswordfieldChange = (e) => {
        setForm({ ...form, password: e.target.value })
    }
    async function SignInClick() {
        const user = { name: form.name, email: form.email, password: form.password }
        if ((form.password.length > 5) && validEmailRegex.test(form.email)) {
            await AuthUsers(user);

        }
    }

    if (IsToken !== "") {
        history.push('/Dashboard')

    }


    return (
        <Zoom>
            {(IsError != "") ? <SimpleAlerts message="Enter Valid Credentials" type='error' /> : ""}
            <div id="formContentLogin">
                <div className="signinContainerLogin">

                    <h2>Sign In</h2>
                    <TextField isError={emailError} ErrorMessage="Enter valid Email Id." placeholder="Email Id" handleChange={onTextfieldChange} />
                    <br>
                    </br>
                    <PasswordField isError={passwordError} ErrorMessage="Password should be alteast of 6 characters." handleChangePassword={onPasswordfieldChange} />
                    <br></br>
                    <Button onClick={SignInClick} placeholder="Sign IN" />
                    <br>
                    </br>
                    <div>
                        <p><Link to="/Register">Don't have an Account,Create.</Link></p>
                    </div>
                </div>

                <div className="signupContainerLogin">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXVYq2eR1EyWD5zBJksEhJidz-FDA0IaaxR4PQukSMnwzYdzG6&usqp=CAU" height="600px" />
                </div>
            </div>
        </Zoom>

    );
}
export default LoginPageContainer;