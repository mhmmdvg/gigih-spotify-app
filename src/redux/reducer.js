const initialState = {
  token: '',
};

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'GET_TOKEN':
//       return {
//         ...state,
//         token: action.payload,
//       };
//     default:
//       return state;
//   }
// }

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case 'GET_TOKEN': {
      return {
        ...state,
        token: payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
