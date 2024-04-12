//------------------------------------------------------------
// CHAINES DE CARACTERES GLOBALES
//------------------------------------------------------------
const charactersLowCase = "abcdefghijklmnopqrstuvwxyz";
const charactersUpCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charactersNumbers = "0123456789";
const charactersSpecials = "@_/+";

//------------------------------------------------------------
// GENERATION D'UNE STRING RANDOM A PARTIR D'UNE LISTE
// DE CARACTERES AUTORISES (characters)
//------------------------------------------------------------
export const generateString = (length, characters) => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

//------------------------------------------------------------
// VALIDATION DE LA CHAINE DE CARACTERES SELON LES
// PARAMETRES RENTRES PAR L'UTILISATEUR
//------------------------------------------------------------
export const hasNumber = (myString) => {
  return /\d/.test(myString);
};

export const checkPasswordValidFromUserSettings = (
  password,
  specialCharAsked,
  numberAsked,
  upperCaseAsked
) => {
  // Créer une expression régulière basée sur les caractères autorisés
  const regexSpecialChar = new RegExp(`[${charactersSpecials}]`);
  // Vérifier si la chaîne générée contient au moins un des caractères autorisés
  const containsSpecialChar = regexSpecialChar.test(password);
  if (specialCharAsked && !containsSpecialChar) {
    console.log("PROBLEME : Pas de caractere special");
    return false;
  }

  if (numberAsked && !hasNumber(password)) {
    console.log("PROBLEME : Pas de nombres");
    return false;
  }

  // Créer une expression régulière basée sur les caractères autorisés
  const regexUpperCase = new RegExp(`[${charactersUpCase}]`);
  // Vérifier si la chaîne générée contient au moins un des caractères autorisés
  const containsUpperCase = regexUpperCase.test(password);
  if (upperCaseAsked && !containsUpperCase) {
    console.log("PROBLEME : Pas de majuscule");
    return false;
  }

  return true;
};

// ---------------------------------------

export const generatePassword = (
  nbCharacters,
  includeSpecialCharacters,
  includeNumbers,
  includeUpperCase
) => {
  let characters = charactersLowCase;
  if (includeSpecialCharacters) {
    characters += charactersSpecials;
  }
  if (includeNumbers) {
    characters += charactersNumbers;
  }
  if (includeUpperCase) {
    characters += charactersUpCase;
  }

  let password = "";
  let validityPassword = false;
  // for (let i = 0; i < nbCharacters; i++) {
  //   password += characters.charAt(
  //     Math.floor(Math.random() * characters.length)
  //   );
  // }

  do {
    password = generateString(nbCharacters, characters);
    // Verification du mot de passe
    validityPassword = checkPasswordValidFromUserSettings(
      password,
      includeSpecialCharacters,
      includeNumbers,
      includeUpperCase
    );
  } while (!validityPassword);

  return password;
};
