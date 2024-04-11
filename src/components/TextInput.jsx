import PropTypes from "prop-types";

const TextInput = ({ label, value, onChange }) => {
  return (
    <div>
      <p>{label}</p>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput; // Exportez le composant par défaut de cette manière
