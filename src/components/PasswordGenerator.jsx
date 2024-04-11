import { useState } from "react";
import {
  generateString,
  checkPasswordValidFromUserSettings,
} from "../utils/passwordUtils";

import TextInput from "./TextInput";

const PasswordGenerator = () => {
  const [generatedPassword, setGeneratedPassword] = useState(null);
  const [nbCharacters, setNbCharacters] = useState("");
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [upperCase, setUpperCase] = useState(false);

  const handleGeneratePassword = () => {
    // Generer le mot de passe en fonction des parametres
    let charactersAuthorized = "abcdefghijklmnopqrstuvwxyz";

    if (specialCharacters) {
      charactersAuthorized += "@_/+";
    }

    if (numbers) {
      charactersAuthorized += "0123456789";
    }

    if (upperCase) {
      charactersAuthorized += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    let generatedPassword = "";
    let validityPassword = false;

    do {
      generatedPassword = generateString(nbCharacters, charactersAuthorized);
      // Verification du mot de passe
      validityPassword = checkPasswordValidFromUserSettings(
        generatedPassword,
        specialCharacters,
        numbers,
        upperCase
      );
    } while (!validityPassword);

    setGeneratedPassword(generatedPassword);
  };

  return (
    <div>
      <h1>Generateur de mot de passe</h1>
      <TextInput
        label="Nombre de caracteres"
        value={nbCharacters}
        onChange={(e) => setNbCharacters(parseInt(e.target.value))}
      />
      <div>
        <label>
          Caracteres speciaux ?
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
      <button onClick={handleGeneratePassword}>Generer</button>
      {generatedPassword && (
        <div>
          <h2>Mot de passe genere :</h2>
          <p>{generatedPassword}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
