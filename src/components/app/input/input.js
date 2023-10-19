import "./input.css";
export default function Input({ placeholder, onChange, inputValue }) {
  return (
    <input
      className="input1"
      onChange={onChange}
      value={inputValue}
      placeholder={placeholder}
    ></input>
  );
}
