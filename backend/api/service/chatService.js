import chatApi from '../utils/chatgptapicall.js';


export const post = async(req, res) => {

    let data = await chatApi(req);

    if (data) {
        return res.status(200).json({
          success: true,
          data: data
        });
    }
    else{
        res.status(404).send({
            message: "Error from gpt api call",
            data: data
        });
        return res
    }

}