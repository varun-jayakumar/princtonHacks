import { Configuration, OpenAIApi } from "openai"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: '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',
  })
)

export const chatApi = async(req) =>{
    try {
        const response = await openAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: req.body.input }],
          });

        console.log(response.data.choices[0].message.content);

        let data = response.data.choices[0].message.content;

        return data;

        // return res.status(200).json({
        //   success: true,
        //   data: JSON.parse(response.data.choices[0].message.content)
        // });
    } catch (error) {
      if (error.response) {
        console.log('Error:', error.response.data);
        console.log('Status:', error.response.status);
        console.log('Headers:', error.response.headers);
      } else if (error.request) {
        console.log('Error:', error.request);
      } else {
        console.log('Error:', error.message);
      }
      console.log('Config:', error.config);
  
      return res.status(400).json({
        success: false,
        error: error.response
          ? error.response.data
          : "There was an issue on the server",
      });
    }
  };

  export default chatApi;