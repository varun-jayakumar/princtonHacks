import React from "react";
import FlipCard from "./Flipcard";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AskModal from "./AskMeModal";
import NavBar from "./NavBar";

function HomeCard() {
  const sample_data = [
    {
      day: 1,
      topic: "Introduction to React",
      assignments: [
        "Read the React documentation: Introduction",
        "Watch a beginner's tutorial on React",
      ],
    },
    {
      day: 2,
      topic: "React Components and Props",
      assignments: [
        "Read the React documentation: Components and Props",
        "Create a simple React component",
        "Pass props to a child component",
      ],
    },
  ];

  const navigate = useNavigate();

  function handleOnClickHome() {
    navigate("/dashboard");
  }
  const count = 0;
  return (
    <>
      <NavBar />
      <Button onClick={handleOnClickHome}>Home</Button>
      <AskModal></AskModal>
      <div className="grid grid-col-1  mx-auto">
        {sample_data.map((data, idx) => (
          <>
            <FlipCard
              index={idx}
              assignments={data.assignments}
              topic={data.topic}
            />
            {/* <br />
          <br /> */}
          </>
        ))}
      </div>
    </>
  );
}

export default HomeCard;
