const Button = ({ placeholder, className, handleClick }) => (
  <button className={className} handleClick={handleClick}>
    {placeholder}
  </button>
);

export default Button;
