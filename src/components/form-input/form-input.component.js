import React from "react";
import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...otherProbs}) => {
    return (
        <div className="group">
            {label ?
                <label
                    className={`${otherProbs.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
                : null}
            <input
                className="form-input"
                onChange={handleChange}
                {...otherProbs}
            />
        </div>
    )
}
export default FormInput