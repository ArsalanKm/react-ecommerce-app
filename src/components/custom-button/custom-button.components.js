import React from "react";
import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProbs}) => {
    return (
        <button
            className={`${inverted ? 'inverted' : ''}
             ${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`}
            {...otherProbs}>
            {children}
        </button>
    )
}
export default CustomButton