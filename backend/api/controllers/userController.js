import * as userService from '../service/userService.js'

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
       
        const user = await userService.save(req,res);
        //setResponse(user,res)
	} catch (error) {
		setError(error,res);
	}
}

export const userLogin = async (req,res) => {
    try {
        const log = await userService.login(req,res);
        setResponse(log,res);
        console.log(res.status);
    } catch (error) {
        setError(error,res)
    }
}