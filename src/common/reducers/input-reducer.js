export const defaultInputValue = {
  value: "",
  isInvalid: false,
  errorMsg: "",
};

export const inputReducer = (state, action) => {
  switch (action.type) {
    case "valueChange": {
      return {
        value: action.value,
        isInvalid: false,
        errorMsg: "",
      };
    }
    case "validateResult": {
      if (action.validateResult) {
        return {
          ...state,
          isInvalid: action.validateResult.isInvalid,
          errorMsg: action.validateResult.errorMsg,
        };
      }
      return state;
    }
    default: {
      return state;
    }
  }
};
