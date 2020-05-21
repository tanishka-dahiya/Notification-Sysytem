import React, { useState } from 'react';
import { PasswordField } from '../commonComponents/index';
import { TextField } from '../commonComponents/index';
import { Button } from '../commonComponents/index';
import Zoom from 'react-reveal/Zoom';
import {
    Link, useHistory
} from "react-router-dom";
import '../StyleSheet/Registration.css';


function RegestrationPageContainer() {
    let history = useHistory();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [nameError, setNameError] = useState(false);

    const onTextfieldChange = (e) => {
        setForm({ ...form, email: e.target.value })

    }
    const onPasswordfieldChange = (e) => {
        setForm({ ...form, password: e.target.value })
    }
    const onNamefieldChange = (e) => {
        setForm({ ...form, name: e.target.value })
    }
    const SignInClick = () => {
        const validatedForm = Validate();
        console.log()
        if (!validatedForm) {
            history.push('/Dashboard')
        };

    }

    const Validate = () => {
        !form.password.length ? setPasswordError(true) : setPasswordError(false);
        !form.email.length ? setEmailError(true) : setEmailError(false);
        !form.name.length ? setNameError(true) : setNameError(false);
        console.log(form)
        if (emailError || passwordError || nameError) {
            return false;
        }
        else {
            return true;
        }

    }
    return (
        <Zoom>
            <div id="formContent">
                <div className="signinContainer">
                    <img src="https://www.osiaffiliate.com/blog/wp-content/uploads/2019/05/osi-push-1.png" height="600px" />

                </div>

                <div className="signupContainer">
                    <h2>Sign Up</h2>
                    <TextField isError={nameError} ErrorMessage="Enter a Username" placeholder="UserName" handleChange={onNamefieldChange} />
                    <br>
                    </br>
                    <TextField isError={emailError} ErrorMessage="Enter valid Email Id." placeholder="Email Id" handleChange={onTextfieldChange} />
                    <br>
                    </br>
                    <PasswordField isError={passwordError} ErrorMessage="Password should be alteast of 6 characters." handleChangePassword={onPasswordfieldChange} />
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