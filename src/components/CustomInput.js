function CustomInput({
    name,
    handleFieldChange,
    handleInputChange,
    value,
    fieldValue,
    clearInput,
}) {
    return (
        <div className="custom-input">
            <div>
                <input
                    className="input"
                    value={fieldValue}
                    name={name}
                    onChange={handleFieldChange}
                />
            </div>
            <div className="input-container">
                <input
                    className="input"
                    value={value}
                    onChange={handleInputChange}
                    name={name}
                />
                {value && (
                    <span className="icon" onClick={() => clearInput(name)}>
                        X
                    </span>
                )}
            </div>
        </div>
    );
}

export default CustomInput;
