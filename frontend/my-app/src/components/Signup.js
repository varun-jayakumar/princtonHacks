import { useState } from "react";
import {
  InputLeftAddon,
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { BiWalletAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const signup = () => {
    const data = {};
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mt="2"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="blue.600" />
        <Heading color="blue.600">Welcome, Please Sign up</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={8}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <Stack spacing={8}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input type="text" placeholder="First name" />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input type="text" placeholder="Last Name" />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BiWalletAlt color="gray.300" />}
                    />
                    <Input type="password" placeholder="Password" />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<AiOutlineMail color="gray.300" />}
                    />
                    <Input type="email" placeholder="email address" />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon children="+1" />
                    <Input type="tel" placeholder="phone number" />
                  </InputGroup>
                </Stack>
              </FormControl>

              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="Blue"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
        <Box>
          Already have a account?{" "}
          <Link color="blue.500" href="/login">
            log in
          </Link>
        </Box>
      </Stack>
      <Button colorScheme="green" onClick={signup}>
        Signup
      </Button>
    </Flex>
  );
};

export default Signup;
