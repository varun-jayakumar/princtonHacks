import { LearningsSliceActions } from "./LearningsSlice";

export const fetchLearnings = (data) => {
  return async (dispatch) => {
    const fetchHandler = async (data) => {
      const res = await fetch(`API_path`);
      const responseData = await res.json();
      return responseData;

      // console.log("data", data);
      // const response = await axios
      //   .get(`providers/${data.pId}/offerings`, {
      //     params: {
      //       userAccountId: data.id,
      //     },
      //   })
      //   .then((res) => {
      //     return res.data;
      //   });
      // return response;
    };

    try {
      // const learningsData = await fetchHandler(data);
      const learningsData = ["learnings1", "learning2"];
      dispatch(LearningsSliceActions.updateData(learningsData));
    } catch (err) {
      console.log(err);
    }
  };
};
