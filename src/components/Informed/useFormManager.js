import { useState } from "react";
import { useTranslation } from "react-i18next";

const useFormManager = (statesData) => {
  const [districts, setDistricts] = useState([]);
  const { t } = useTranslation();

  const validateRequired = (value) => (!value ? t("errors.required") : undefined);

  const validateName = (value) => {
    if (!value) return t("errors.required");
    return /^[a-zA-Z\s]+$/.test(value) ? undefined : t("errors.nameAlphabetsOnly");
  };

  const validatePincode = (value) =>
    /^\d{6}$/.test(value) ? undefined : t("errors.pincodeDigits");

  const validatePhone = (value) => {
    if (typeof value !== 'string') return t("errors.phoneFormat");
    const trimmedValue = value.replace(/\s+/g, "").replace(/^\+91/, "");
    return /^\d{10}$/.test(trimmedValue) 
      ? undefined
      : t("errors.phoneDigits");
  };

  const validateFileUpload = (value) =>
    value && value.length > 0 ? undefined : t("errors.fileUpload");

  const validateInterests = (value) =>
    value && Object.values(value).some((v) => v)
      ? undefined
      : t("errors.selectAtLeastOne");

  const validateDropdown = (value) => (!value ? t("errors.selectOption") : undefined);

  const handleStateChange = (selectedState) => {
    const stateName = selectedState?.value || "";
    const selectedStateObj = statesData.states.find((item) => item.state === stateName);
    setDistricts(selectedStateObj ? selectedStateObj.districts || [] : []);
  };

  const getStateOptions = () =>
    statesData.states.map((state) => ({
      value: state.state,
      label: state.state,
    }));

  const getDistrictOptions = () =>
    districts.map((district) => ({
      value: district,
      label: district,
    }));

  return {
    districts,
    handleStateChange,
    getStateOptions,
    getDistrictOptions,
    validateRequired,
    validateName,
    validatePincode,
    validatePhone,
    validateFileUpload,
    validateInterests,
    validateDropdown,
  };
};

export default useFormManager;