import * as roadMapService from "../service/roadMapService.js";
import callOpenAiApi_refresher from "./../utils/chatgptapicall-refresher.js";
import * as roadMapService1 from '../service/roadMapday1.js';

const setResponse = (obj, response) => {
  response.status(200);
  response.json(obj);
};

// this function is used to set the error in response
const setError = (err, response) => {
  response.status(500);
  response.json(err);
};

export const post = async (req, res) => {
  try {
    const user = await roadMapService.save(req, res);
    //setResponse(user,res)
  } catch (error) {
    setError(error, res);
  }
};

export const getRefresher = async (req, res) => {
  try {
    let response = await callOpenAiApi_refresher(req.body.topics);
    setResponse({ response }, res);
  } catch (error) {
    setError(error, res);
  }
};

export const postday1 = async (req,res) => {
    try {
        const user = await roadMapService1.save(req,res);
        //setResponse(user,res)
	} catch (error) {
		setError(error,res);
	}
};

export const postday2 = async (req,res) => {
    try {
        const user = await roadMapService1.saveotherthanone(req,res);
        //setResponse(user,res)
	} catch (error) {
		setError(error,res);
	}
};

export const retrive_from_db = async (req,res) => {
    try {
        const user = await roadMapService1.retrive_db(req,res);
        //setResponse(user,res)
	} catch (error) {
		setError(error,res);
	}
};
