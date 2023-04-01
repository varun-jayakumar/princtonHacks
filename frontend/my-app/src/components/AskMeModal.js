import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import Card from "./Chat";

import { useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

export default function AskModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("full");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = "full";

  return (
    <>
      <Button onClick={() => handleSizeClick(size)} key={size} m={4}>
        {" "}
        Ask me anything
      </Button>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>🚀 Got a Question Ask me!</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="">
            <div>
              <Card></Card>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
