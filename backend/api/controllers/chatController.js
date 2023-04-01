
import * as chatService from '../service/chatService.js';

const setResponse = (obj,response) => {
    response.status(200);
    response.json(obj);
}

// this function is used to set the error in response 
const setError = (err, response) => {
    response.status(500);
    response.json(err);
}


export const post = async (req, res) => {
	try {
       
        const user = await chatService.post(req,res);
        //setResponse(user,res)
	} catch (error) {
		setError(error,res);
	}
}