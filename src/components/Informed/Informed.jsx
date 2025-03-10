import React from "react";
import { useTranslation } from "react-i18next";
import { Form, TextArea } from "informed";
import CustomField from "./CustomField";
import CustomSelectField from "./CustomSelectField";
import useFormManager from "./useFormManager";
import statesData from "../../../states_districts.json";
import FileUpload from "./FileUpload";
import CustomCheckBox from "./CustomCheckBox";
import "../../styles/InformedForm.css";

const InformedForm = () => {
  const { t, i18n } = useTranslation();
  const {
    districts,
    handleStateChange,
    getStateOptions,
    getDistrictOptions,
    validateRequired,
    validateName,
    validatePincode,
    validatePhone,
    validateDropdown,
  } = useFormManager(statesData);

  const languages = [
    { label: "English", value: "english" },
    { label: "Malayalam", value: "malayalam" },
    { label: "Tamil", value: "tamil" },
    { label: "Hindi", value: "hindi" },
  ];

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    alert("Form submitted successfully!");
  };

  return (
    <div className="container mt-3">
      <>
        <div className="language-switch">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="btn btn-outline-primary"
          >
            English
          </button>
          <button
            onClick={() => i18n.changeLanguage("hi")}
            className="btn btn-outline-primary"
          >
            हिन्दी
          </button>
        </div>
        <div className="form-container">
          <h2>{t("formTitle")}</h2>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <CustomField
                  name="firstName"
                  label={t("firstName")}
                  placeholder={t("firstName")}
                  validate={validateName}
                  validateOn="change"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <CustomField
                  name="lastName"
                  label={t("lastName")}
                  placeholder={t("lastName")}
                  validate={validateName}
                  validateOn="change"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <CustomField
                name="street"
                label={t("street")}
                placeholder={t("street")}
                validate={validateRequired}
                validateOn="change"
                required
              />
            </div>
            <div className="mb-3">
              <CustomField
                name="city"
                label={t("city")}
                placeholder={t("city")}
                validate={validateRequired}
                validateOn="change"
                required
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <CustomField
                  name="pincode"
                  label={t("pincode")}
                  placeholder={t("pincode")}
                  validate={validatePincode}
                  validateOn="change"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <CustomField
                  name="phone"
                  label={t("phone")}
                  placeholder={t("phone")}
                  fieldType="tel"
                  validate={validatePhone}
                  validateOn="change"
                  required
                  maxLength={14}
                />
              </div>
            </div>
            <div className="mb-3">
              <CustomSelectField
                name="state"
                label={t("state")}
                options={[
                  { value: "", label: t("selectState") },
                  ...getStateOptions(),
                ]}
                onChange={handleStateChange}
                validate={validateDropdown}
                validateOn="change"
                required
              />
            </div>
            <div className="mb-3">
              <CustomSelectField
                name="district"
                label={t("district")}
                options={[
                  { value: "", label: t("selectDistrict") },
                  ...getDistrictOptions(),
                ]}
                validate={validateDropdown}
                validateOn="change"
                isDisabled={!districts.length}
                required
              />
            </div>
            <div className="mb-3">
              <TextArea
                name="messages"
                label={t("messages")}
                placeholder={t("messagesPlaceholder")}
                className="form-control"
                validateOn="change"
              />
            </div>
            <FileUpload
              name="fileUpload"
              label={t("uploadFile")}
              required
            />
            <div className="mb-3">
            <CustomCheckBox name="knownLanguages" languages={languages} options={[]}/>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              {t("submit")}
            </button>
          </Form>
        </div>
      </>
    </div>
  );
};

export default InformedForm;