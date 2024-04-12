const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div>
      <label>
        {label}
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
      </label>
    </div>
  );
};

export default Checkbox;
