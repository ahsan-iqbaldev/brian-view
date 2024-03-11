const initialState = {
    banner: null,
    isLoading: false,
  };
  const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_BANNER":
        return {
          ...state,
          banner: action.payload
        };
        
        case "SET_IS_LOADING":
          return {
            ...state,
            isLoading: action.payload,
          };
  
      default:
        return state;
    }
  };
  export default bannerReducer;
  