
import axios from 'axios';

const OPENAI_API_KEY = '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'; // Replace with your OpenAI API Key
const url = 'https://api.openai.com/v1/chat/completions';
const url1 = 'https://api.openai.com/v1/completions';

async function callOpenAiApi(req,res) {
  try {
    const payload = {
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'user', content: `Give me road map with topics,assignments,3 mcqs with answer to learn ${req.body.topic} in ${req.body.day} days where i can spend ${req.body.hours} hours each day for a ${req.body.level}` },
            { role: 'user', content: 'Give me above text to JSON format as roadmap:{day: ,topics:[],assignments:[],mcqs:[{question: , option:[],answer}]}' },
            
    
    ],
        temperature: 0.7,
      };
  
      const response = await axios.post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      });
  
      console.log('Data:', response.data.choices[0].message.content);
      return res.status(200).json({
        success: true,
        data: JSON.parse(response.data.choices[0].message.content)
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