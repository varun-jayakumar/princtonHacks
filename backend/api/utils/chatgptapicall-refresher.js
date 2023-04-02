import axios from "axios";

const OPENAI_API_KEY = "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"; // Replace with your OpenAI API Key
const url = "https://api.openai.com/v1/chat/completions";

async function callOpenAiApi_refresher(topics) {
  var topicsString = "";
  topics.forEach((topic, index) => {
    topicsString = topicsString + topic + ", ";
  });
  try {
    const payload = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Give me a total of 5 Multiple Choice Questions questions with answers (i.e "A") on the following topics ${topicsString} without telling which topics the questions are from`,
        },
        { role: "user", content: "Give me above answer in JSON format" },
      ],
      temperature: 0.7,
    };

    const response = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    });

    let data = response.data.choices[0].message.content;
    console.log(data);
    return JSON.parse(data);
  } catch (error) {
    if (error.response) {
      console.log("Error:", error.response.data);
      console.log("Status:", error.response.status);
      console.log("Headers:", error.response.headers);
    } else if (error.request) {
      console.log("Error:", error.request);
    } else {
      console.log("Error:", error.message);
    }
    console.log("Config:", error.config);

    return res.status(400).json({
      success: false,
      error: error.response
        ? error.response.data
        : "There was an issue on the server",
    });
  }
}

export default callOpenAiApi_refresher;
