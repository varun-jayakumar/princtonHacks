import React from "react";
import FlipCard from "./Flipcard";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AskModal from "./AskMeModal";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { LockSliceActions } from "../store/LockSlice";

function HomeCard() {
  const sample_data = [
    {
      day: 1,
      topics: "Introduction to React",
      assignments: [
        "Read the React documentation: Introduction",
        "Watch a beginner's tutorial on React",
      ],
      isCompleted: false,
    },
    {
      day: 2,
      topics: "React Components and Props",
      assignments: [
        "Read the React documentation: Components and Props",
        "Create a simple React component",
        "Pass props to a child component",
      ],
      isCompleted: false,
    },
    {
      day: 3,
      topics: "Introduction to React",
      assignments: [
        "Read the React documentation: Introduction",
        "Watch a beginner's tutorial on React",
      ],
      isCompleted: false,
    },
    {
      day: 4,
      topics: "Introduction to React",
      assignments: [
        "Read the React documentation: Introduction",
        "Watch a beginner's tutorial on React",
      ],
      isCompleted: false,
    },
    {
      day: 5,
      topics: "Introduction to React",
      assignments: [
        "Read the React documentation: Introduction",
        "Watch a beginner's tutorial on React",
      ],
      isCompleted: false,
    },
  ];
  const [sample_assignments, setSampleAssignments] = useState([]);
  const dispatch = useDispatch();
  // get this from backend aswell
  const count = useSelector((state) => state.lock.lock_no);
  console.log(count);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // getting api data
  //       const data = await axios.get("your_api_url_here");
  //       // getting data in sample data format
  //       setSampleAssignments(data[0].roadmap);
  // dispatch(LockSliceActions.update())
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const navigate = useNavigate();

  function handleOnClickHome() {
    navigate("/dashboard");
  }
  return (
    <>
      <NavBar />
      <Button onClick={handleOnClickHome}>Home</Button>
      <AskModal></AskModal>
      <div className="grid grid-col-1  mx-auto">
        {/* change this to sampleAssignments */}
        {sample_data &&
          sample_data.map((data, idx) => (
            <div className={count >= idx ? "" : "blur-sm"}>
              {count >= idx ? (
                <FlipCard
                  index={idx}
                  assignments={data.assignments}
                  topic={data.topics}
                  mcq={data.mcqs}
                  isCompleted={data.isCompleted}
                />
              ) : (
                <div className="relative">
                  <FlipCard
                    index={idx}
                    assignments={[""]}
                    topic=""
                    mcq={[]}
                    isCompleted={false}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaLock size={48} />
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
}

export default HomeCard;
