import {addLearningFormActions} from "./addLearningFormSlice"

export const fetchRoadMap = (data) => {
    return async (dispatch) => {
      const fetchHandler = async (data) => {
        const res = await fetch(
          `API_path`
        );
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
       // const roadmapData = await fetchHandler(data);
        console.log(data)
        const roadmapData ={attribute1: "dummydata"}
        dispatch(addLearningFormActions.updateData(roadmapData));
      } catch (err) {
        console.log(err);
      }
    };
  };