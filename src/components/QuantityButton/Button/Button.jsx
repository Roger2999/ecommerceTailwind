export const Button = ({ handleClick, label, className }) => {
  return (
    <button type="button" onClick={handleClick} className={className}>
      {label}
    </button>
  );
};
