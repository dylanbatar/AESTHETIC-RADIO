// Autenticar user para poder escribir
const signIn = (email) => {
  sessionStorage.setItem("aesthetic-radio", email);
};

// Verificar si esta autenticado
const isLogger = () => {
  if (sessionStorage.getItem("aesthetic-radio")) {
    return true;
  }

  return false;
};

export { signIn, isLogger };
