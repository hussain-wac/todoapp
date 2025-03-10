import React from "react";
import './checkbox.css';
import { useField } from "informed";  
import { useTranslation } from "react-i18next";  

const CustomCheckBox = ({ name, languages = [] }) => {
  const { t } = useTranslation(); 

  const { fieldState, fieldApi } = useField({
    name,  
    initialValue: [],  
  });

  const { value, error, showError } = fieldState;
  const { setValue } = fieldApi;

  const handleChange = (e) => {
    const newValue = e.target.value;
    const updatedValue = value.includes(newValue)
      ? value.filter((v) => v !== newValue)  
      : [...value, newValue];  

    setValue(updatedValue);  
  };

  return (
    <div className="form-group">
      <label className="form-label"></label>
      {languages.map((language) => (
        <div className="form-check custom-checkbox" key={language.value}>
          <input
            type="checkbox"
            name={name}
            value={language.value}
            checked={value.includes(language.value)}  
            onChange={handleChange}
            className="form-check-input"
            required
          />
          <label className="form-check-label" htmlFor={language.value}>
            {language.value}
          </label>
        </div>
      ))}
      {showError && <small style={{ color: "red" }}>{error}</small>}
    </div>
  );
};

export default CustomCheckBox;