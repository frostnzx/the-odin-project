export default function InputArea({ id, title, value, onChange }) {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </>
  );
}
