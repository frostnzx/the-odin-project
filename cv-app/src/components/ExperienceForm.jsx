import { useState } from "react";
import InputArea from "./InputArea.jsx";
export default function ExperienceForm({ formData, setFormData }) {
  const [isActive, setIsActive] = useState(false);
  const [localFormData, setLocalFormData] = useState(formData);

  return (
    <div className="form">
      {isActive ? (
        <>
          <div className="form-title">
            <h3>Work experience</h3>
            <button
              className="editsave-btn"
              onClick={() => {
                setIsActive(false);
                setFormData((prev) => ({
                  ...prev,
                  company: localFormData.company,
                  position: localFormData.position,
                  responsibility: localFormData.responsibility,
                  expStartDate: localFormData.expStartDate,
                  expEndDate: localFormData.expEndDate,
                }));
              }}
            >
              Save
            </button>
          </div>
          <form className="input-form">
            <InputArea
              id="company"
              title="Company:"
              value={localFormData.company}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({ ...prev, company: newValue }))
              }
            ></InputArea>
            <InputArea
              id="position"
              title="Position:"
              value={localFormData.position}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({ ...prev, position: newValue }))
              }
            ></InputArea>
            <InputArea
              id="responsibility"
              title="Responsibility:"
              value={localFormData.responsibility}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({
                  ...prev,
                  responsibility: newValue,
                }))
              }
            ></InputArea>
            <InputArea
              id="expStartDate"
              title="Start date:"
              value={localFormData.expStartDate}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({
                  ...prev,
                  expStartDate: newValue,
                }))
              }
            ></InputArea>
            <InputArea
              id="expEndDate"
              title="End date:"
              value={localFormData.expEndDate}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({ ...prev, expEndDate: newValue }))
              }
            ></InputArea>
          </form>
        </>
      ) : (
        <div className="form-title">
          <h3>Work experience</h3>
          <button className="editsave-btn" onClick={() => setIsActive(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
