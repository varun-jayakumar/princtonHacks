import { LearningsSliceActions } from "./LearningsSlice";
import axios from "axios";
export const fetchLearnings = (data) => {
  return async (dispatch) => {
    const fetchHandler = async (data) => {
      // const res = await fetch(`API_path`);
      // const responseData = await res.json();
      // return responseData;
      const userString = JSON.stringify(
        JSON.parse(localStorage.getItem("user"))
      );
      const id = JSON.parse(userString);

      const response = await axios
        .post(`http://localhost:5006/dashboard/dash`, {
          userid: id._id,
        })
        .then((res) => {
          return res.data;
        });
      return response;
    };
    try {
      const learningsData = await fetchHandler(data);
      // const learningsData = ["learnings1", "learning2"];
      dispatch(LearningsSliceActions.updateData(learningsData));
    } catch (err) {
      console.log(err);
    }
  };
};
