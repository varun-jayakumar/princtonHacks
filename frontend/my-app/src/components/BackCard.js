import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";

function BackCard(props) {
  const sampleQuestions = props.question;
  const isFlipped = props.isFlipped;
  const setIsFlipped = props.setIsFlipped;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const answerIndices = [];

  sampleQuestions.map((question) => {
    const index = question.options.findIndex((option) => option.isCorrect);
    answerIndices.push(index);
  });

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
    const correctAnswers = answerIndices.filter((index) => index !== undefined);

    const correctAnswersCount = correctAnswers.reduce((count, index) => {
      if (selectedOptions[index] === index) {
        count++;
      }
      return count;
    }, 0);
    const percentage = (correctAnswersCount / sampleQuestions.length) * 100;

    if (percentage >= 80) {
      console.log("Success!");
    } else {
      console.log("Fail!");
    }
    setIsFlipped(!isFlipped);
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
              {"    " + option.option}
            </label>
          </li>
        ))}
      </ul>
      {questionIndex < sampleQuestions.length - 1 ? (
        <Button size="sm" colorScheme="blue" onClick={handleNextQuestion}>
          Next question
        </Button>
      ) : (
        <Button size="sm" colorScheme="green" onClick={handleFinish}>
          Finish
        </Button>
      )}
    </div>
  );
}

export default BackCard;
