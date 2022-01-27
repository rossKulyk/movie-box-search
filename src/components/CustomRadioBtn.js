import React from "react";

// Pass-in props: id, value, checked, onChange, label.
// Redirect the rest of passed props into input element. type-redio need to be after the spread operator
export default function CustomRadioBtn({ label, ...restProps }) {
    console.log("CustomRadioBtn label > ", label);
    console.log("CustomRadioBtn restProps > ", restProps);

    return (
        <label htmlFor={restProps.id} className="custom-radio-btn">
            {label}{" "}
            <input
                {...restProps}
                type="radio"
                className="custom-radio-btn--input"
            />
        </label>
    );
}
