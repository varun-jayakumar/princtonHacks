import { education } from "../models/education.js";
import { Roadmap } from "../models/Roadmap.js";
import { callOpenAiApi1, callOpenAiApi2 } from "../utils/chatdayService.js";
import { Mcq } from "../models/Mcq.js";

import { user } from "../models/user.js";

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
    let data = await callOpenAiApi1(req);

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
        user: req.body.userid,
      };
      const road_edu = new education(edu);
      road_edu.save();

      //   res.status(201).send({
      //     message: "Roadmap created for day 1",
      //     data: data
      //   });

      console.log(road_edu);
      console.log(road_edu._id);
      let ass = await education.findOne({
        _id: road_edu._id,
      });
      console.log(ass);
      let arr_res = road_edu.roadmap;
      let road_map_1 = await Roadmap.findOne({
        _id: arr_res[0],
      });
      let mcq_arr = road_map_1.mcqs;
      let mcqobj_arr = [];
      for (var i = 0; i < mcq_arr.length; i += 1) {
        let mcqobj = await Mcq.findOne({
          _id: mcq_arr[i],
        });
        let obj = {
          question: mcqobj.question,
          options: mcqobj.options,
          answer: mcqobj.answer,
        };
        mcqobj_arr.push(obj);
      }

      let final_ans = {
        Day: road_map_1.Day,
        topics: road_map_1.topics,
        assignments: road_map_1.assignments,
        mcqs: mcqobj_arr,
        is_completed: road_map_1.is_completed,
      };
      console.log("Befor updating user");
      let user_toread = await user.findOne({ _id: req.body.userid }).exec();
      let learn_arr = user_toread.learnings;
      learn_arr.push(road_edu._id);
      await user
        .findOneAndUpdate(
          {
            _id: req.body.userid,
          },
          {
            learnings: learn_arr,
          }
        )
        .exec();

      res.status(201).send({
        message: "Roadmap created for day 1",
        data: [final_ans],
      });

      return res;
    }
  } else {
    let road_edu = road;
    let ass = await education.findOne({
      _id: road_edu._id,
    });
    console.log(ass);
    let arr_res = road_edu.roadmap;
    let road_map_1 = await Roadmap.findOne({
      _id: arr_res[0],
    });
    let mcq_arr = road_map_1.mcqs;
    let mcqobj_arr = [];
    for (var i = 0; i < mcq_arr.length; i += 1) {
      let mcqobj = await Mcq.findOne({
        _id: mcq_arr[i],
      });
      let obj = {
        question: mcqobj.question,
        options: mcqobj.options,
        answer: mcqobj.answer,
      };
      mcqobj_arr.push(obj);
    }

    let final_ans = {
      Day: road_map_1.Day,
      topics: road_map_1.topics,
      assignments: road_map_1.assignments,
      mcqs: mcqobj_arr,
      is_completed: road_map_1.is_completed,
    };
    // console.log("Befor updating user")
    // let user_toread = await  user.findOne({ _id: req.body.userid }).exec();
    // let learn_arr = user_toread.learnings;
    // learn_arr.push(road_edu._id);
    // await user.findOneAndUpdate({
    //     _id: req.body.userid,
    // }, {
    //     learnings: learn_arr,
    // }).exec();

    res.status(201).send({
      message: "Roadmap created for day 1",
      data: [final_ans],
    });

    return res;
  }
};

export const saveotherthanone = async (req, res) => {
  console.log("in save");
  let i = 0;
  console.log(req.body);
  let query = {
    day: req.body.day,
    hours: req.body.hours,
    level: req.body.level,
    topic: req.body.topic,
  };
  const roadmaps = await education.findOne(query);

  if (roadmaps) {
    console.log(roadmaps.roadmap.length);
    if (roadmaps.roadmap.length >= parseInt(roadmaps.day, 10)) {
      console.log("inside the endpoint db");
      res.status(201).send({
        message: "Already present in db",
        data: roadmaps,
      });
      return res;
    }

    let data = await callOpenAiApi2(req, res);

    if (data) {
      let dat = data.roadmap;
      //let dat = JSON.parse(response.data.choices[0].message.content).roadmap;
      let roadmap_id = [];
      for (var j in dat) {
        if (i > 0) {
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
        i += 1;
      }

      let road_arr = roadmaps.roadmap;
      console.log("from db");
      console.log(road_arr);
      console.log(roadmap_id);
      const res_conc = road_arr.concat(roadmap_id);
      console.log("after added db");
      console.log(res_conc);
      console.log(roadmaps);
      await education
        .findOneAndUpdate(
          {
            _id: roadmaps._id,
          },
          {
            roadmap: res_conc,
          }
        )
        .exec();

      res.status(201).send({
        message: "Roadmap created for day 1",
        data: data,
      });

      return res;
    }
  } else {
    res.status(405).send({
      message: "Roadmap  cannot find for other than day 1",
    });

    return res;
  }
};

export const update_count = async (req, res) => {
  const edu = await education.findOne({ _id: req.body.learning });
  console.log(edu);
  console.log(req.body);
  let ed = education
    .findOneAndUpdate({ _id: req.body.learning }, { count: req.body.count })
    .exec();
  res.status(200).send({
    message: "Count updated",
    data: ed,
  });
  return res;
};

export const retrive_db = async (req, res) => {
  // let query = {
  //     day: req.body.day,
  //     hours: req.body.hours,
  //     level: req.body.level,
  //     topic: req.body.topic,
  // };
  const road = await education.findOne({ _id: req.body.learning });
  if (road) {
    let all_day_road = [];
    let arr_res = road.roadmap;
    console.log(arr_res.length);
    for (var j = 0; j < arr_res.length; j += 1) {
      console.log(arr_res[j]);
      console.log(j);
      var road_map_1 = await Roadmap.findOne({
        _id: arr_res[j],
      });
      console.log(road_map_1);
      var mcq_arr = road_map_1.mcqs;
      var mcqobj_arr = [];
      for (var i = 0; i < mcq_arr.length; i += 1) {
        var mcqobj = await Mcq.findOne({
          _id: mcq_arr[i],
        });
        var obj = {
          question: mcqobj.question,
          options: mcqobj.options,
          answer: mcqobj.answer,
        };
        mcqobj_arr.push(obj);
      }

      var final_ans = {
        Day: road_map_1.Day,
        topics: road_map_1.topics,
        assignments: road_map_1.assignments,
        mcqs: mcqobj_arr,
        is_completed: road_map_1.is_completed,
      };
      all_day_road.push(final_ans);

      console.log("end");
    }

    res.status(200).send({
      message: "Roadmap created for user",
      count: road.count,
      data: all_day_road,
    });

    return res;
  } else {
    res.status(404).send({
      message: "not found",
    });

    return res;
  }
};
