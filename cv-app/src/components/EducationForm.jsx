import { useState } from "react";
import InputArea from "./InputArea.jsx";

export default function EducationForm({ formData, setFormData }) {
  const [isActive, setIsActive] = useState(false);
  const [localFormData, setLocalFormData] = useState(formData);

  return (
    <div className="form">
      {isActive ? (
        <>
          <div className="form-title">
            <h3>Education</h3>
            <button
              className="editsave-btn"
              onClick={() => {
                setIsActive(false);
                setFormData((prev) => ({
                  ...prev,
                  school: localFormData.school,
                  degree: localFormData.degree,
                  description: localFormData.description,
                  eduStartDate: localFormData.eduStartDate,
                  eduEndDate: localFormData.eduEndDate,
                }));
              }}
            >
              Save
            </button>
          </div>
          <form className="input-form">
            <InputArea
              id="school"
              title="School:"
              value={localFormData.school}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({ ...prev, school: newValue }))
              }
            ></InputArea>
            <InputArea
              id="degree"
              title="Degree:"
              value={localFormData.degree}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({ ...prev, degree: newValue }))
              }
            ></InputArea>
            <InputArea
              id="description"
              title="Description:"
              value={localFormData.description}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({ ...prev, description: newValue }))
              }
            ></InputArea>
            <InputArea
              id="eduStartDate"
              title="Start date:"
              value={localFormData.eduStartDate}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({
                  ...prev,
                  eduStartDate: newValue,
                }))
              }
            ></InputArea>
            <InputArea
              id="eduEndDate"
              title="End date:"
              value={localFormData.eduEndDate}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({ ...prev, eduEndDate: newValue }))
              }
            ></InputArea>
          </form>
        </>
      ) : (
        <div className="form-title">
          <h3>Education</h3>
          <button className="editsave-btn" onClick={() => setIsActive(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
