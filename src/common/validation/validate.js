export const validateInput = (value, fieldName) => {
  let result = { isInvalid: false, errorMsg: "" };
  if (!value.trim()) {
    result.isInvalid = true;
    result.errorMsg = `${fieldName} field is required.`;
    return result;
  }
  return result;
};

export const validateSize = (value, fieldName, length = 3) => {
  let result = { isInvalid: false, errorMsg: "" };
  if (value.trim().length < length) {
    result.isInvalid = true;
    result.errorMsg = `${fieldName} field must be at least ${length} long.`;
    return result;
  }
  return result;
};

export const validateEmail = (email) => {
  let result = validateInput(email, "Email");
  if (result.isInvalid) {
    return result;
  }
  if (
    !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    result.isInvalid = true;
    result.errorMsg = "Email field must be a valid email.";
    return result;
  }
  return result;
};
