import React from "react";
import { useField } from "informed";
import ReactSelect from "react-select";
import { useTranslation } from "react-i18next";

const CustomSelectField = ({ label, options, required, requiredErrorMessage, ...props }) => {
  const { t } = useTranslation();
  const { fieldState, fieldApi, render } = useField({
    ...props,
    validate: (value) => {
      if (required && (!value || value === "")) {
        return requiredErrorMessage || t("errors.required");
      }
    },
  });

  const { error, value } = fieldState;

  return render(
    <>
      {label && <label className="form-label">{label}</label>}
      <ReactSelect
        {...props}
        options={options}
        value={options.find((opt) => opt.value === value) || null}
        onChange={(selectedOption) =>
          fieldApi.setValue(selectedOption ? selectedOption.value : "")
        }
        onBlur={() => fieldApi.setTouched(true)}
        className={`form-control p-0 ${error ? "is-invalid" : ""}`}
        classNamePrefix="react-select"
        isDisabled={props.disabled}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </>
  );
};

export default CustomSelectField;