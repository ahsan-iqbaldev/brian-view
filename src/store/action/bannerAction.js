import firebase from "../../config/firebase";


export const getBanner = () => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      firebase
        .firestore()
        .collection("banner")
        .orderBy("timestamp","desc")
        .onSnapshot(async (data) => {
          let tempData = [];
          for (let doc of data.docs) {
            let id = doc.id;
            let data1 = doc.data();
            tempData.push({ id: id, ...data1 });
          }
          dispatch({ type: "GET_BANNER", payload: tempData });
          dispatch(setIsLoading(false));
        });
    } catch (error) {
      dispatch(setIsLoading(false));
      alert(error.message);
    }
  };

  

  export const setIsLoading = (val) => async (dispatch) => {
    dispatch({
      type: "SET_IS_LOADING",
      payload: val,
    });
  };
  

