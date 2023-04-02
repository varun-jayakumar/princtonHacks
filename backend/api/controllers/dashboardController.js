import { user } from "../models/user.js";
import { education } from "./../models/education.js";

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
    let result = [];
    let userdata = await user.findOne(id);
    let learningsArray = userdata.learnings;
    learningsArray.array.forEach(async (learningID) => {
      let edu = await education.findOne({ learning: learningID });
      result.push(edu);
    });

    setResponse({ learnings: result }, res);
  } catch (error) {
    setError(error, res);
  }
};
