export default function Resume({ formData }) {
  const style1 = {
    display: "flex",
    justifyContent: "start",
    marginLeft: "30px",
  };
  const style2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <>
      <h2>Resume</h2>
      <h4 style={style1}>
        <b>Personal information</b>
      </h4>
      <p style={style2}>
        <div>
          {formData.firstName} {formData.lastName}
        </div>
        {formData.email}
        <div>{formData.phoneNumber}</div>
        <div>{formData.address}</div>
      </p>
      <h4 style={style1}>
        <b>Education</b>
      </h4>
      <p style={style2}>
        <div>{formData.school}</div>
        <div>{formData.degree}</div>
        <div>{formData.description}</div>
        <div>
          {formData.eduStartDate} - {formData.eduEndDate}
        </div>
      </p>
      <h4 style={style1}>
        <b>Work experience</b>
      </h4>
      <p style={style2}>
        <div>{formData.company}</div>
        <div>{formData.position}</div>
        <div>{formData.responsibility}</div>
        <div>{formData.expStartDate}</div>
        <div>{formData.expEndDate}</div>
      </p>
    </>
  );
}
