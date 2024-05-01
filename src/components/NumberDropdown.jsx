const NumberDropdown = ({ value, onChange }) => {
  const numbers = [];
  for (let i = 8; i <= 36; i++) {
    numbers.push(i);
  }

  return (
    <div>
      <select id="number" value={value} onChange={onChange}>
        {numbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <label htmlFor="number">Nombre de caractères</label>
    </div>
  );
};

export default NumberDropdown;
