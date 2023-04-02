import axios from "axios";

const OPENAI_API_KEY = "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"; // Replace with your OpenAI API Key
const url = "https://api.openai.com/v1/chat/completions";
const url1 = "https://api.openai.com/v1/completions";

async function callOpenAiApi(req) {
  try {
    const payload = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Give me road map with daily topics,assignments,3 mcqs with answer to learn ${req.body.topic} in ${req.body.day} days where i can spend ${req.body.hours} hours each day for a ${req.body.level}`,
        },
        {
          role: "user",
          content:
            "Give me above text to JSON format as roadmap:{day: Number ,topics:[],assignments:[],mcqs:[{question: , option:[],answer}]}",
        },
      ],
      temperature: 0.7,
    };

    const response = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    });

    // console.log('Data:', response.data.choices[0].message.content);

    let dat = JSON.parse(response.data.choices[0].message.content);
    //console.log(dat)
    // for (var j in dat) {
    //   let mcqsd = dat[j].mcqs
    //   let arr_mcq = []

    //   for (var k in mcqsd) {
    //     let final_opt = []
    //     let opt =  JSON.parse(JSON.stringify(mcqsd[k].options));
    //     console.log("*********")
    //     console.log(opt)
    //     console.log(opt.lenght)
    //     for (var l in opt) {
    //       console.log(l)
    //       console.log(opt[l])
    //       final_opt.push(opt[l])
    //     }
    //     console.log
    //     let m = {
    //       question: mcqsd[k].question,
    //       options: opt,
    //       answer: mcqsd[k].answer,
    //     }
    //     // let mc = new Mcq(m)
    //     arr_mcq.push(m)

    //   }
    //   let days = {
    //     Day: dat[j].day,
    //     topics: dat[j].topics,
    //     assignments: dat[j].assignments,
    //     mcqs: arr_mcq

    //   }
    //   // let road  = new Roadmap(days);
    //   // await road.save()
    //   console.log(days.mcqs[0])
    // }

    return dat;
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

export default callOpenAiApi;
