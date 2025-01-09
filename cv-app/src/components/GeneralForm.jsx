import { useState } from "react";
import InputArea from "./InputArea.jsx";

export default function GeneralForm({ formData, setFormData }) {
  const [isActive, setIsActive] = useState(false);
  const [localFormData, setLocalFormData] = useState(formData);

  return (
    <div className="form">
      {isActive ? (
        <>
          <div className="form-title">
            <h3>General information</h3>
            <button
              className="editsave-btn"
              onClick={() => {
                setIsActive(false);
                setFormData((prev) => ({
                  ...prev,
                  firstName: localFormData.firstName,
                  lastName: localFormData.lastName,
                  email: localFormData.email,
                  phoneNumber: localFormData.phoneNumber,
                  address: localFormData.address,
                }));
              }}
            >
              Save
            </button>
          </div>
          <form className="input-form">
            <InputArea
              id="firstname"
              title="First name:"
              value={localFormData.firstName}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({ ...prev, firstName: newValue }))
              }
            ></InputArea>
            <InputArea
              id="lastname"
              title="Last name:"
              value={localFormData.lastName}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({ ...prev, lastName: newValue }))
              }
            ></InputArea>
            <InputArea
              id="email"
              title="Email address:"
              value={localFormData.email}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({ ...prev, email: newValue }))
              }
            ></InputArea>
            <InputArea
              id="phonenumber"
              title="Phone number:"
              value={localFormData.phoneNumber}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({ ...prev, phoneNumber: newValue }))
              }
            ></InputArea>
            <InputArea
              id="address"
              title="Address:"
              value={localFormData.address}
              onChange={(newValue) =>
                setLocalFormData((prev) => ({ ...prev, address: newValue }))
              }
            ></InputArea>
          </form>
        </>
      ) : (
        <div className="form-title">
          <h3>General information</h3>
          <button className="editsave-btn" onClick={() => setIsActive(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
