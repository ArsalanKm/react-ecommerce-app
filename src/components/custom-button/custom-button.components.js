import React from "react";
import './custom-button.styles.scss'

const CustomButton = ({children,...otherProbs}) => {
    return (
        <button className='custom-button'{...otherProbs}>
            {children}
        </button>
    )
}
export default CustomButton