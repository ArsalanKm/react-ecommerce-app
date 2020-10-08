import React from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.components";

import {auth, signInWithGoogle} from "../../firebase/firebase.utils";


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        const {email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword({email, password})

            this.setState({
                email: '',
                password: ''
            })
        } catch (err) {
            console.log(err)
        }
    }
    handleChange = (e) => {
        const {value, name} = e.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with your email and pasword</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        label="password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton isGoogleSignIn={false} type="submit"> Sign IN </CustomButton>
                        <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle} type="submit"> Sign IN With
                            Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn