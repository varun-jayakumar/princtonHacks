import { Input, Stack, Button } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import styles from "./AddCourseForms.module.css";
import { useNavigate } from "react-router-dom";
import { fetchRoadMap } from "./../store/addLearningFormActions";
import NavBar from "./NavBar";

export default function AddCourseForms() {
  var learning = "default";
  var durationoflearning = "default";
  var hoursoflearning = "default";
  var proficiency = "default";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeLearning = (e) => {
    learning = e.target.value;
  };
  const handleChangeDurationoflearning = (e) => {
    durationoflearning = e.target.value;
  };
  const handleChangeHoursoflearning = (e) => {
    hoursoflearning = e.target.value;
  };

  const handleChangeProficiency = (e) => {
    proficiency = e.target.value;
  };

  const onSubmit = () => {
    dispatch(
      fetchRoadMap({
        learning,
        durationoflearning,
        hoursoflearning,
        proficiency,
      })
    );
    // dispatch()
    // dispatch to save the new learning in store

    navigate("/dashboard");
  };

  const onCancel = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <NavBar />
      <div className={`${styles.block} ${styles.margin}`}>
        <h1>Please answer below questions to create your roadmap</h1>
        <div>
          <label for="learning">
            {" "}
            <span class="text-md after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-slate-700">
              What do you want to learn Today
            </span>
          </label>
          <input
            onChange={handleChangeLearning}
            type="text"
            id="learning"
            name="learning"
            placeholder="i.e HTML, java, linux"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          ></input>
        </div>

        <div>
          <label for="durationoflearning">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-slate-700">
              How long do you want to learn? (in days)
            </span>
          </label>
          <div>
            <input
              onChange={handleChangeDurationoflearning}
              type="text"
              id="durationoflearning"
              name="durationoflearning"
              placeholder="i.e 5, 10 "
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            ></input>
          </div>
        </div>

        <div>
          <label for="hoursoflearning">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-slate-700">
              How many hours can you learn in a day?
            </span>
          </label>
          <input
            onChange={handleChangeHoursoflearning}
            type="text"
            id="hoursoflearning"
            name="hoursoflearning"
            placeholder="i.e 1,2"
            class="text-md mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          ></input>
        </div>

        <div>
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-slate-700">
            What is the level of proficiency?
          </span>

          <div className="flex justify-around">
            <div>
              <input
                type="radio"
                onChange={handleChangeProficiency}
                value="Beginner"
                name="gender"
              />
              {"  "}
              Beginner
            </div>
            <div>
              <input
                type="radio"
                onChange={handleChangeProficiency}
                value="Intermidiate"
                name="gender"
              />
              {"  "}
              Intermidiate
            </div>
            <div>
              <input
                type="radio"
                onChange={handleChangeProficiency}
                value="Advanced"
                name="gender"
              />
              {"  "}
              Advanced
            </div>
          </div>
        </div>
        <div>
          <Button colorScheme="green" onClick={onSubmit}>
            Submit
          </Button>
          <Button colorScheme="red" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}
