import firebase from "../../config/firebase";

/////get recommended post////////

export const getRecPost = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    firebase
      .firestore()
      .collection("posts")
      .where("category", "==", "Recommended")
      .onSnapshot(async (data) => {
        let tempData = [];
        for (let doc of data.docs) {
          let id = doc.id;
          let data1 = doc.data();
          tempData.push({ id: id, ...data1 });
        }
        dispatch({ type: "GET_REC_POSTS", payload: tempData });
        dispatch(setIsLoading(false));
      });
  } catch (error) {
    dispatch(setIsLoading(false));
    alert(error.message);
  }
};

/////get brian post////////

export const getBrianPost = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    firebase
      .firestore()
      .collection("posts")
      .where("category", "==", "brian")
      .onSnapshot(async (data) => {
        let tempData = [];
        for (let doc of data.docs) {
          let id = doc.id;
          let data1 = doc.data();
          tempData.push({ id: id, ...data1 });
        }
        dispatch({ type: "GET_BRIAN_POSTS", payload: tempData });
        dispatch(setIsLoading(false));
      });
  } catch (error) {
    dispatch(setIsLoading(false));
    alert(error.message);
  }
};

/////get trending post////////

export const getTrendingPost = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    firebase
      .firestore()
      .collection("posts")
      .where("category", "==", "trending")
      .onSnapshot(async (data) => {
        let tempData = [];
        for (let doc of data.docs) {
          let id = doc.id;
          let data1 = doc.data();
          tempData.push({ id: id, ...data1 });
        }
        dispatch({ type: "GET_TRENDING_POSTS", payload: tempData });
        dispatch(setIsLoading(false));
      });
  } catch (error) {
    dispatch(setIsLoading(false));
    alert(error.message);
  }
};

/////get original post////////

export const getOriginalPost = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    firebase
      .firestore()
      .collection("posts")
      .where("category", "==", "original")
      .onSnapshot(async (data) => {
        let tempData = [];
        for (let doc of data.docs) {
          let id = doc.id;
          let data1 = doc.data();
          tempData.push({ id: id, ...data1 });
        }
        dispatch({ type: "GET_ORIGINAL_POSTS", payload: tempData });
        dispatch(setIsLoading(false));
      });
  } catch (error) {
    dispatch(setIsLoading(false));
    alert(error.message);
  }
};

export const getSinglePost = (userId) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const snapshot = await firebase
      .firestore()
      .collection("posts")
      .doc(userId)
      .get();

    const data = snapshot.data();
    dispatch({
      type: "GET_SINGLE_POSTS",
      payload: { id: snapshot.id, ...data },
    });
    dispatch(setIsLoading(false));
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
