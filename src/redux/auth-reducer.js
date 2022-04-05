const initialState = {
  token: "",
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}

export default authReducer;
