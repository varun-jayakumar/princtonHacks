import { education } from "../models/education.js";
import { Roadmap } from "../models/Roadmap.js";
import callOpenAiApi from "../utils/chatgptapicall copy.js";
import { Mcq } from "../models/Mcq.js";

export const save = async (req, res) => {
  console.log("in save");
  console.log(req.body);
  let query = {
    day: req.body.day,
    hours: req.body.hours,
    level: req.body.level,
    topic: req.body.topic,
  };
  const road = await education.findOne(query);

  if (!road) {
    let data = await callOpenAiApi(req);
    if (data) {
      let dat = data.roadmap;
      //let dat = JSON.parse(response.data.choices[0].message.content).roadmap;
      let roadmap_id = [];
      for (var j in dat) {
        console.log(j);
        let mcqs = dat[j].mcqs;
        let arr_mcq = [];
        for (var k in mcqs) {
          let opt = JSON.parse(JSON.stringify(mcqs[k].options));
          let m = {
            question: mcqs[k].question,
            options: opt,
            answer: mcqs[k].answer,
          };
          let mc = new Mcq(m);
          let mcid = await mc.save();
          console.log("printing mcq id");
          console.log(mcid._id);
          arr_mcq.push(mc._id);
        }
        let days = {
          Day: dat[j].day,
          topics: dat[j].topics,
          assignments: dat[j].assignments,
          mcqs: arr_mcq,
        };
        let road = new Roadmap(days);
        await road.save();
        console.log(road);
        roadmap_id.push(road._id);
      }

      let edu = {
        day: req.body.day,
        hours: req.body.hours,
        level: req.body.level,
        topic: req.body.topic,
        roadmap: roadmap_id,
      };
      const road_edu = new education(edu);
      road_edu.save();

      res.status(201).send({
        message: "Roadmap created",
        data: data,
      });

      return res;
    } else {
      res.status(404).send({
        message: "Error from gpt api call",
        data: data,
      });
      return res;
    }
  }
  let arr = [];
  arr = road.user;
  arr.push(req.body.userid);

  road.updateOne({ user: arr });

  res.status(201).send({
    message: "Roadmap fetched from Db",
    data: road.roadmap,
  });
  return res;
};
