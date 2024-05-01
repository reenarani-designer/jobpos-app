export const emailRegqx = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]$"
);
export const passwordRegex = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
export const phoneRegex = new RegExp(/^[6-9]\d{9}$/);
export const otpRegex = new RegExp(/^[0-9]{6}$/);
export const validator = (regex, value) => {
  return regex.test(value);
};
