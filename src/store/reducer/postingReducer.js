const initialState = {
    rec_Posts: null,
    brian_Posts: null,
    trending_Posts: null,
    original_Posts: null,
    single_Post: null,
    isLoading: false,
  };
  const postingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_REC_POSTS":
        return {
          ...state,
          rec_Posts: action.payload
        };

        case "GET_BRIAN_POSTS":
          return {
            ...state,
            brian_Posts: action.payload
          };

          case "GET_TRENDING_POSTS":
            return {
              ...state,
              trending_Posts: action.payload
            };

            case "GET_ORIGINAL_POSTS":
              return {
                ...state,
                original_Posts: action.payload
              };

              case "GET_SINGLE_POSTS":
                return {
                  ...state,
                  single_Post: action.payload
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
  export default postingReducer;
  