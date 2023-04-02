import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LearningCard({ learning }) {
  const navigate = useNavigate();

  function handleStartLearning() {
    localStorage.setItem("day", learning.day);
    localStorage.setItem("hours", learning.hours);
    localStorage.setItem("level", learning.level);
    localStorage.setItem("topic", learning.topic);
    localStorage.setItem("learningId", learning._id);
    navigate("/learning");
  }

  return (
    <>
      <Card align="center" variant="filled">
        <CardHeader>
          <Heading size="md">{learning.topic}</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Access this personalized {learning.level} study source which lets
            you study {learning.topic} in {learning.day} days and{" "}
            {learning.hours} hours.
          </Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="teal" onClick={handleStartLearning}>
            Start Learning !
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
