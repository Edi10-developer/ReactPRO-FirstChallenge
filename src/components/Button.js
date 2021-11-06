const Button = ({ placeholder, className, handleClick }) => (
  <button className={className} handleclick={handleClick}>
    {placeholder}
  </button>
);

export default Button;
