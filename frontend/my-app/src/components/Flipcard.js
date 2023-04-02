import React, { useState, useEffect } from "react";
import styles from "./FlipCard.module.css";
import BackCard from "./BackCard";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";

function FlipCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [assignmentsChecked, setAssignmentsChecked] = useState(
    Array(props.assignments.length).fill(false)
  );

  // const sample_questions = [
  //   {
  //     question:
  //       "Which of the following statements best describes React components?",
  //     options: [
  //       "React components are reusable pieces of code that encapsulate behavior and UI.",
  //       "React components are only used for UI design and cannot contain any behavior.",
  //       "React components are only used in class-based components, not in functional components.",
  //       "React components can only be used in conjunction with Redux.",
  //     ],
  //     answer:
  //       "A",
  //   },
  //   {
  //     question:
  //       "Which of the following statements best describes React components?",
  //     options: [
  //       "React components are reusable pieces of code that encapsulate behavior and UI.",
  //       "React components are only used for UI design and cannot contain any behavior.",
  //       "React components are only used in class-based components, not in functional components.",
  //       "React components can only be used in conjunction with Redux.",
  //     ],
  //     answer:
  //       "A",
  //   },
  // ];

  useEffect(() => {
    const fetchData = () => {
      // const data = axios.get("new questions")
      // setQuestions(data)
      console.log("inside fetchdata function");
      console.log(props.mcq);
      // can keep it outside
      // setQuestions(props.mcqs);
      setQuestions(props.mcq);
      console.log("questions");
      console.log(questions);
    };

    fetchData();
  }, []);
  const handleCheckboxChange = (idx) => {
    const newAssignmentsChecked = [...assignmentsChecked];
    newAssignmentsChecked[idx] = !newAssignmentsChecked[idx];
    setAssignmentsChecked(newAssignmentsChecked);
  };
  // add async
  function handleTryAgain() {
    // Replace with your actual API call
    // const data = await axios.get("your-api-endpoint-for-questions");
    setQuestions(questions);
    console.log("inside handle try again");
    setIsFlipped(!isFlipped);
  }
  const allAssignmentsChecked = assignmentsChecked.every((checked) => checked);

  return (
    <div className={`${styles.margin} h-100px w-3/4`}>
      <div>
        <Card className="height-auto" variant="filled">
          <CardBody>
            <div className={`form flip-card ${isFlipped ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                {!isFlipped && (
                  <div className="flip-card-front">
                    <h1 className="font-bold mx-2">Day-{props.index + 1}</h1>
                    {/* Front content */}
                    <h2 className="font-bold p-2">{props.topic}</h2>

                    {props.assignments.map((data, idx) => (
                      <div className="p-3 assignment-item" key={idx}>
                        {`${idx + 1}. ${data}`}
                        {"     "}
                        <input
                          type="checkbox"
                          checked={assignmentsChecked[idx]}
                          onChange={() => handleCheckboxChange(idx)}
                        />
                      </div>
                    ))}
                    {(allAssignmentsChecked || completed) && (
                      <Button
                        size="sm"
                        colorScheme="yellow"
                        onClick={() => {
                          if (!completed) {
                            setIsFlipped(!isFlipped);
                          }
                        }}
                      >
                        {completed ? "Completed" : "Take Quiz"}
                      </Button>
                    )}
                  </div>
                )}
                {isFlipped && (
                  <div className="flip-card-back">
                    {/* Back content */}
                    <BackCard
                      // change this to questions variable
                      question={questions}
                      isFlipped={isFlipped}
                      setIsFlipped={setIsFlipped}
                      setIsCompleted={setCompleted}
                      onTryAgain={handleTryAgain}
                    />
                  </div>
                )}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default FlipCard;
