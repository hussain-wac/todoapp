import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      firstName: "First Name",
      lastName: "Last Name",
      street: "Street",
      city: "City",
      pincode: "Pincode",
      phone: "Phone",
      state: "State",
      district: "District",
      messages: "Messages",
      selectState: "Select a state",
      selectDistrict: "Select a district",
      submit: "Submit",
      interests: "Interests",
      sports: "Sports",
      music: "Music",
      travel: "Travel",
      selectAtLeastOne: "Please select at least one interest",
      errors: {
        required: "This field is required.",
        nameAlphabetsOnly: "Name should contain only alphabets.",
        pincodeDigits: "Pincode should be 6 digits.",
        phoneFormat: "Phone format is not compatible.",
        phoneDigits: "Phone number should be 10 digits.",
        fileUpload: "Please upload a file.",
        selectAtLeastOne: "Please select at least one option.",
        selectOption: "Please select an option.",
      },
    },
  },
  hi: {
    translation: {
      firstName: "पहला नाम",
      lastName: "उपनाम",
      street: "गली",
      city: "शहर",
      pincode: "पिन कोड",
      phone: "फोन",
      state: "राज्य",
      district: "जिला",
      messages: "संदेश",
      selectState: "राज्य चुनें",
      selectDistrict: "जिला चुनें",
      submit: "प्रस्तुत करें",
      interests: "रुचियां",
      sports: "खेल",
      music: "संगीत",
      travel: "यात्रा",
      selectAtLeastOne: "कृपया कम से कम एक रुचि चुनें",
      errors: {
        required: "यह क्षेत्र आवश्यक है।",
        nameAlphabetsOnly: "नाम में केवल अक्षर होने चाहिए।",
        pincodeDigits: "पिन कोड 6 अंकों का होना चाहिए।",
        phoneFormat: "फोन नंबर का प्रारूप सही नहीं है।",
        phoneDigits: "फोन नंबर 10 अंकों का होना चाहिए।",
        fileUpload: "कृपया एक फ़ाइल अपलोड करें।",
        selectAtLeastOne: "कृपया कम से कम एक विकल्प चुनें।",
        selectOption: "कृपया एक विकल्प चुनें।",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;