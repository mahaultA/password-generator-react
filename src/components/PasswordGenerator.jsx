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
      <h1 className="mx-auto py-6 font-bold text-2xl">
        Générateur de mot de passe
      </h1>
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

      <button
        className="flex mx-auto my-6 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleGeneratePassword}
      >
        Générer
      </button>
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
