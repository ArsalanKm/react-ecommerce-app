import React from "react";
import './sign-in-and-sign-up.scss'
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SingInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}
export default SingInAndSignUpPage