import { useState } from "react";
import GeneralForm from "./GeneralForm.jsx";
import EducationForm from "./EducationForm.jsx";
import ExperienceForm from "./ExperienceForm.jsx";
import Resume from "./Resume.jsx";

export default function MainContainer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",

    school: "",
    degree: "",
    description: "",
    eduStartDate: "",
    eduEndDate: "",

    company: "",
    position: "",
    responsibility: "",
    expStartDate: "",
    expEndDate: "",
  });

  return (
    <div className="main-container">
      <div className="form-container">
        <GeneralForm formData={formData} setFormData={setFormData} />
        <EducationForm formData={formData} setFormData={setFormData} />
        <ExperienceForm formData={formData} setFormData={setFormData} />
      </div>
      <div className="resume-container">
        <Resume formData={formData} />
      </div>
    </div>
  );
}
