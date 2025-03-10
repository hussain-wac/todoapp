import React, { useState } from "react";
import { Upload } from "lucide-react"; // Lucide icon for upload
import { useTranslation } from "react-i18next";

const FileUpload = ({ name, label, required, onChange, error }) => {
  const { t } = useTranslation();
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Validation: File type (images only)
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(selectedFile.type)) {
      setErrorMessage(t("fileTypeError"));
      return;
    }

    // Validation: File size (less than 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setErrorMessage(t("fileSizeError"));
      return;
    }

    // Clear errors if valid
    setErrorMessage("");
    setFile(selectedFile);

    // Create a preview URL for the image
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);

    // Pass the file to the parent component
    if (onChange) {
      onChange(selectedFile);
    }
  };

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div className="file-upload-container">
        <label htmlFor={name} className="file-upload-label">
          <Upload className="upload-icon" />
          <span>{t("chooseFile")}</span>
          <input
            type="file"
            id={name}
            name={name}
            className="file-upload-input"
            onChange={handleFileChange}
            required={required}
            accept="image/*"
          />
        </label>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {previewUrl && (
          <div className="preview-container">
            <img
              src={previewUrl}
              alt="Preview"
              className="preview-image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;