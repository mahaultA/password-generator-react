const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="form-checkbox h-5 w-5 text-blue-500"
      />
      <label className="inline-block">{label}</label>
    </div>
  );
};

export default Checkbox;
