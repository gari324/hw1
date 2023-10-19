import "./button.css";
export default function Button({ value, onClick }) {
  return (
    <button className="but1" onClick={onClick}>
      {value}
    </button>
  );
}
