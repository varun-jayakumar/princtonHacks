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
    navigate("/learning");
  }

  return (
    <>
      <Card align="center" variant="filled">
        <CardHeader>
          <Heading size="md">Learning topic {learning}</Heading>
        </CardHeader>
        <CardBody>
          <Text>Some Descriptiion based on what user gave as input</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="teal" onClick={handleStartLearning}>
            Continue Learning !
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
