import AddCourseForms from "./AddCourseForms";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LearningCard from "./LearningCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchLearnings } from "./../store/LearningsAction";
import styles from "./Dashboard.module.css";
import NavBar from "./NavBar";
import axios from "axios";
import { Input, Stack, Button } from "@chakra-ui/react";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fet, setFet] = useState([]);

  // const learnings = useSelector((state) => state.learnings.learnings);
  // const length = learnings.length;

  useEffect(() => {
    //     // dispatch(fetchLearnings());
    //     // console.log(learnings);
    //     const userString = JSON.stringify(JSON.parse(localStorage.getItem("user")));
    //     const id = JSON.parse(userString);
    // const fetch = async() => {
    //  const res = await axios.post("http://localhost:5006/dashboard/dash", {
    //    userid: id._id,
    //  };
    // })
    const fetchData = async () => {
      try {
        const userString = JSON.stringify(
          JSON.parse(localStorage.getItem("user"))
        );
        const id = JSON.parse(userString);
        // getting api data
        const data = await axios.post("http://localhost:5006/dashboard/dash", {
          userid: id._id,
        });
        console.log(":::::::::::::::");
        console.log(data.data.learnings);
        console.log(":::::::::::::::");
        setFet(data.data.learnings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    console.log("##");
    console.log(fet);
    console.log("###");
  }, []);

  const onClickAddCourseHandler = () => {
    navigate("/add");
  };
  const onlogout = () => {
    console.log("inside logout");
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <NavBar />

      <div class="grid grid-cols-1 w-1/2 mx-auto">
        <Button>
          <a
            href="https://testnets.opensea.io/collection/ssk-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Your Certificates
          </a>
        </Button>
        <Button onClick={onlogout}>Logout</Button>

        <div>
          <h1 class={styles.heading}>Your Learnings</h1>
        </div>
        <div>
          {fet &&
            fet.map((learning) => (
              <div className={styles.card}>
                <LearningCard learning={learning} />
              </div>
            ))}
        </div>
        <div className="w-98 mx-auto">
          <button
            onClick={onClickAddCourseHandler}
            class="rounded-full bg-red-600 text-gray-100 px-8 py-2 hover:bg-red-500"
          >
            + add Learning
          </button>
        </div>
      </div>
    </>
  );
}

/* <div class="items-center">
      <button
        type="button"
        class="w-1/2 inline-block rounded-full bg-neutral-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]">
        Dark
      </button>
    </div> */
