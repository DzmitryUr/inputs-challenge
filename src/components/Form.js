import React, { useState } from "react";
import CustomInput from "./CustomInput";

const inputCounts = 30;
const inputs = [];
const initialValues = {};

for (let i = 0; i < inputCounts; i++) {
    const name = `input${i}`;
    inputs.push(name);
    initialValues[name] = { value: "", field: `Custom name ${i}` };
}

export default function Form() {
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: { ...values[name], value },
        });
    };

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: { ...values[name], field: value },
        });
    };

    const sendRequst = () => {
        fetch("http://localhost:3000/rest", {
            method: "POST",
            body: JSON.stringify(values),
        })
            .then((response) => {
                console.log("Request completed! response:", response);
            })
            .catch((error) => {
                console.log("error during request:", error);
            });
    };

    const clearInputs = () => {
        setValues(initialValues);
    };

    const clearInput = (name) => {
        setValues({
            ...values,
            [name]: { ...values[name], value: "" },
        });
    };

    return (
        <form>
            <div className="form-container">
                {inputs.map((name) => {
                    return (
                        <CustomInput
                            key={name}
                            handleFieldChange={handleFieldChange}
                            handleInputChange={handleInputChange}
                            value={values[name].value}
                            fieldValue={values[name].field}
                            name={name}
                            clearInput={clearInput}
                        />
                    );
                })}
            </div>

            <div className="form-container">
                <button
                    className="button btn-submit"
                    type="button"
                    onClick={sendRequst}
                >
                    Submit
                </button>

                <button className="button" type="button" onClick={clearInputs}>
                    Clear
                </button>
            </div>
        </form>
    );
}
