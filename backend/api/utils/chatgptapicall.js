import axios from 'axios';

const OPENAI_API_KEY = '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'; // Replace with your OpenAI API Key
const url = 'https://api.openai.com/v1/chat/completions';

 const callOpenAiApi = async(req,res)=> {
  try {
    const payload = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `Give me road map with topics,assignments,3 mcqs with answer to learn ${req.body.topic} in ${req.body.day} days where i can spend ${req.body.hours} hours each day for a ${req.body.level}` }],
      temperature: 0.7,
    };

    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
    });

    console.log('Data:', response.data.choices[0].message.content);

    const url1 = 'https://api.openai.com/v1/completions';

    // const payload1 = {
    //     model: 'gpt-3.5-turbo',
    //     messages: [{ role: 'user', content: `Give me the below text as json format ${response.data.choices[0].message.content}` }],
    //     temperature: 0.7,
    //   };

      const payload1 = {
        "model": "text-davinci-003",
        "prompt": `Give me the below text as json format ${response.data.choices[0].message.content}`,
        "max_tokens": 7,
        "temperature": 0
    };
  
      const response1 = await axios.post(url1, payload1, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      });

      console.log('Data2:', response1.data.choices[0]);



    return res.status(200).json({
        success: true,
        data: response1.data.choices[0].text,
      });

    
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
}

export default callOpenAiApi;
