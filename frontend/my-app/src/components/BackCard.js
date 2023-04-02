import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { LockSliceActions } from "../store/LockSlice";
import { addLearningFormActions } from "../store/addLearningFormSlice";

function BackCard(props) {
  const sampleQuestions = props.question;
  const isFlipped = props.isFlipped;
  const setIsFlipped = props.setIsFlipped;
  const setIsCompleted = props.setIsCompleted;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answerIndexes, setAnswerIndexes] = useState([]);
  const dispatch = useDispatch();
  const [showTryAgain, setShowTryAgain] = useState(false);

  useEffect(() => {
    const answerIndexes = [];

    sampleQuestions.forEach((question) => {
      const answer = question.answer;
      switch (answer) {
        case "A":
          answerIndexes.push(0);
          break;
        case "B":
          answerIndexes.push(1);
          break;
        case "C":
          answerIndexes.push(2);
          break;
        case "D":
          answerIndexes.push(3);
          break;
        default:
          throw new Error(`Invalid answer: ${answer}`);
      }
    });

    setAnswerIndexes(answerIndexes);
  }, []);

  function handleNextQuestion() {
    setQuestionIndex((prevIndex) => prevIndex + 1);
  }

  function handleOptionSelect(optionIndex) {
    setSelectedOptions((prevOptions) => [
      ...prevOptions.slice(0, questionIndex),
      optionIndex,
      ...prevOptions.slice(questionIndex + 1),
    ]);
  }

  useEffect(() => {}, [questionIndex]);

  function handleFinish() {
    const correctAnswers = answerIndexes.filter((index) => index !== undefined);

    const correctAnswersCount = correctAnswers.reduce((count, index) => {
      if (selectedOptions[index] === index) {
        count++;
      }
      return count;
    }, 0);
    const percentage = (correctAnswersCount / sampleQuestions.length) * 100;

    if (percentage >= 80) {
      console.log("Success!");
      dispatch(addLearningFormActions.unlock());
      setIsFlipped(!isFlipped);
      setIsCompleted(true);
      setQuestionIndex(0);
      setSelectedOptions([]);
      setAnswerIndexes([]);
      // make axios call to set the isCompleted as true
    } else {
      setIsCompleted(false);
      setShowTryAgain(true);
      setQuestionIndex(0);
      setSelectedOptions([]);
      setAnswerIndexes([]);
    }
  }

  const currentQuestion = sampleQuestions[questionIndex];

  return (
    <div>
      <h2 className="font-bold p-2">{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index} className="p-2">
            <label>
              <input
                type="radio"
                name="answer"
                checked={selectedOptions[questionIndex] === index}
                onChange={() => handleOptionSelect(index)}
              />
              {"    " + option}
            </label>
          </li>
        ))}
      </ul>
      <div>
        {questionIndex < sampleQuestions.length - 1
          ? !showTryAgain && (
              <Button size="sm" colorScheme="blue" onClick={handleNextQuestion}>
                Next question
              </Button>
            )
          : !showTryAgain && (
              <Button size="sm" colorScheme="green" onClick={handleFinish}>
                Finish
              </Button>
            )}
        {showTryAgain && (
          <Button size="sm" colorScheme="red" onClick={props.onTryAgain}>
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
}

export default BackCard;
