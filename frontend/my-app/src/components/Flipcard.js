import React, { useState } from "react";
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
  const [assignmentsChecked, setAssignmentsChecked] = useState(
    Array(props.assignments.length).fill(false)
  );
  const sample_questions = [
    {
      question:
        "Which of the following statements best describes React components?",
      options: [
        {
          option:
            "A) React components are reusable pieces of code that encapsulate behavior and UI.",
          isCorrect: true,
        },
        {
          option:
            "B) React components are only used for UI design and cannot contain any behavior.",
          isCorrect: false,
        },
        {
          option:
            "C) React components are only used in class-based components, not in functional components.",
          isCorrect: false,
        },
        {
          option:
            "D) React components can only be used in conjunction with Redux.",
          isCorrect: false,
        },
      ],
      answer:
        "A) React components are reusable pieces of code that encapsulate behavior and UI.",
    },
    {
      question:
        "hari of the following statements best describes React components?",
      options: [
        {
          option:
            "A) React components are reusable pieces of code that encapsulate behavior and UI.",
          isCorrect: true,
        },
        {
          option:
            "B) React components are only used for UI design and cannot contain any behavior.",
          isCorrect: false,
        },
        {
          option:
            "C) React components are only used in class-based components, not in functional components.",
          isCorrect: false,
        },
        {
          option:
            "D) React components can only be used in conjunction with Redux.",
          isCorrect: false,
        },
      ],
      answer:
        "A) React components are reusable pieces of code that encapsulate behavior and UI.",
    },
    {
      question:
        "Varun of the following statements best describes React components?",
      options: [
        {
          option:
            "A) React components are reusable pieces of code that encapsulate behavior and UI.",
          isCorrect: true,
        },
        {
          option:
            "B) React components are only used for UI design and cannot contain any behavior.",
          isCorrect: false,
        },
        {
          option:
            "C) React components are only used in class-based components, not in functional components.",
          isCorrect: false,
        },
        {
          option:
            "D) React components can only be used in conjunction with Redux.",
          isCorrect: false,
        },
      ],
      answer:
        "A) React components are reusable pieces of code that encapsulate behavior and UI.",
    },
    {
      question:
        "prem of the following statements best describes React components? prem of the following statements best describes React components? prem of the following statements best describes React components? prem of the following statements best describes React components?",
      options: [
        {
          option:
            "A) React components are reusable pieces of code that encapsulate behavior and UI.",
          isCorrect: true,
        },
        {
          option:
            "B) React components are only used for UI design and cannot contain any behavior.",
          isCorrect: false,
        },
        {
          option:
            "C) React components are only used in class-based components, not in functional components.",
          isCorrect: false,
        },
        {
          option:
            "D) React components can only be used in conjunction with Redux.",
          isCorrect: false,
        },
      ],
      answer:
        "A) React components are reusable pieces of code that encapsulate behavior and UI.",
    },
  ];
  const handleCheckboxChange = (idx) => {
    const newAssignmentsChecked = [...assignmentsChecked];
    newAssignmentsChecked[idx] = !newAssignmentsChecked[idx];
    setAssignmentsChecked(newAssignmentsChecked);
  };

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
                    {allAssignmentsChecked && (
                      <Button
                        size="sm"
                        colorScheme="yellow"
                        onClick={() => setIsFlipped(!isFlipped)}
                      >
                        Take Quiz
                      </Button>
                    )}
                  </div>
                )}
                {isFlipped && (
                  <div className="flip-card-back">
                    {/* Back content */}
                    <BackCard
                      question={sample_questions}
                      isFlipped={isFlipped}
                      setIsFlipped={setIsFlipped}
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