import user from "./../models/user";

const setResponse = (obj, response) => {
  response.status(200);
  response.json(obj);
};

// this function is used to set the error in response
const setError = (err, response) => {
  response.status(500);
  response.json(err);
};

export const getLearnings = async (req, res) => {
  try {
    let id = JSON.parse(req.body);

    let userdata = await user.findOne(id);
    let learningsArray = userdata.learnings;
    learningsArray.array.forEach((learning) => {
      console.log(learning);
    });

    setResponse({ Something: "Something" }, res);
  } catch (error) {
    setError(error, res);
  }
};
