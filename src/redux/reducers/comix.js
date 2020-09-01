let initialState = {
  isLoaded: false,
  items: [],
};

let comix = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMIX":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default comix;
