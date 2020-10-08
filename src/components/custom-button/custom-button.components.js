import React from "react";
import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherProbs}) => {
    return (
        <button
            className={`${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`}
            {...otherProbs}>
            {children}
        </button>
    )
}
export default CustomButton