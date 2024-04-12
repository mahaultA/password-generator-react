import { useState } from "react";
import NumberDropdown from "./NumberDropdown";
import Checkbox from "./Checkbox";
import { generatePassword } from "../utils/passwordUtils";

const PasswordGenerator = () => {
  const [passwordOptions, setPasswordOptions] = useState({
    nbCharacters: 8,
    specialCharacters: false,
    numbers: false,
    upperCase: false,
  });
  const [generatedPassword, setGeneratedPassword] = useState(null);

  const handleOptionChange = (option, value) => {
    setPasswordOptions({ ...passwordOptions, [option]: value });
  };

  const handleGeneratePassword = () => {
    const { nbCharacters, specialCharacters, numbers, upperCase } =
      passwordOptions;
    const generatedPassword = generatePassword(
      nbCharacters,
      specialCharacters,
      numbers,
      upperCase
    );
    setGeneratedPassword(generatedPassword);
  };

  return (
    <div>
      <h1>Générateur de mot de passe</h1>
      <NumberDropdown
        value={passwordOptions.nbCharacters}
        onChange={(e) =>
          handleOptionChange("nbCharacters", parseInt(e.target.value))
        }
      />
      <Checkbox
        label="Caractères spéciaux"
        checked={passwordOptions.specialCharacters}
        onChange={(value) => handleOptionChange("specialCharacters", value)}
      />
      <Checkbox
        label="Chiffres"
        checked={passwordOptions.numbers}
        onChange={(value) => handleOptionChange("numbers", value)}
      />
      <Checkbox
        label="Majuscules"
        checked={passwordOptions.upperCase}
        onChange={(value) => handleOptionChange("upperCase", value)}
      />
      <br></br>
      <button onClick={handleGeneratePassword}>Générer</button>
      {generatedPassword && (
        <div>
          <h2>Mot de passe généré :</h2>
          <p>{generatedPassword}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
