import { useState } from "react";
import TextInput from "./TextInput";

const PasswordForm = ({ onSubmit }) => {
  const [nbCharacters, setNbCharacters] = useState("");
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [upperCase, setUpperCase] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      nbCharacters: parseInt(nbCharacters),
      specialCharacters,
      numbers,
      upperCase,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Nombre de caractères"
        value={nbCharacters}
        onChange={(e) => setNbCharacters(e.target.value)}
      />
      <div>
        <label>
          Caractères spéciaux ?
          <input
            type="checkbox"
            checked={specialCharacters}
            onChange={() => setSpecialCharacters(!specialCharacters)}
          />
        </label>
      </div>
      <div>
        <label>
          Chiffres ?
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </label>
      </div>
      <div>
        <label>
          Majuscules ?
          <input
            type="checkbox"
            checked={upperCase}
            onChange={() => setUpperCase(!upperCase)}
          />
        </label>
      </div>
      <button type="submit">Générer</button>
    </form>
  );
};

export default PasswordForm;
