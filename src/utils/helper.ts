export const getCurrentTokenFromCookie = (): string => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; ++i) {
    if (cookies[i].indexOf("_auth_t=") !== -1) {
      return cookies[i].substr(cookies[i].indexOf("=") + 1);
    }
  }
  return "";
};
