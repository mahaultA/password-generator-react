// NumberDropdown.js

const NumberDropdown = ({ value, onChange }) => {
  const numbers = [];
  for (let i = 8; i <= 36; i++) {
    numbers.push(i);
  }

  return (
    <div>
      <label htmlFor="number">Nombre de caractères : </label>
      <select id="number" value={value} onChange={onChange}>
        {numbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NumberDropdown;
