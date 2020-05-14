import React, { useState } from 'react';
import { PasswordField } from '../commonComponents/index';
import { TextField } from '../commonComponents/index';
import { Button } from '../commonComponents/index';
import {
    Link, useHistory
} from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import '../StyleSheet/Login.css';


function LoginPageContainer() {
    let history = useHistory();
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
    const SignInClick = () => {
        !form.password.length ? setPasswordError(true) : setPasswordError(false);
        !form.email.length ? setEmailError(true) : setEmailError(false);
        history.push('/Dashboard')
    }

    return (
        <Zoom>
            <div id="formContent">
                <div className="signinContainer">
                    <div className="image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRd9i_-4mi8b5gQoIef3KezGadi-RqwQ_4lk45UvoD0jpjqvrwB&usqp=CAU" height="120px" />
                    </div>
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
                        <p> <Link to="/ForgetPassword">Forgot Password?</Link></p>
                    </div>
                </div>

                <div className="signupContainer">
                    <img src="https://www.osiaffiliate.com/blog/wp-content/uploads/2019/05/osi-push-1.png" height="600px" />
                </div>
            </div>
        </Zoom>

    );
}
export default LoginPageContainer;