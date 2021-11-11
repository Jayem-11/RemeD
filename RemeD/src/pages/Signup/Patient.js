import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const PatientSignup =()=> {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const reset = () => {
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    reset();
    history.push("/dashboard/patient");
  };

  return (
    <Box
      bgImg="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      bgRepeat="no-repeat"
      shadow="lg"
      borderRadius="25% 0px 0px"
    >
      <Heading
        pt={"30px"}
        mb={"10px"}
        textShadow="md"
        textAlign={"flex-start"}
        color={"gray.700"}
        lineHeight={1.1}
        // fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        fontSize={"48px"}
      >
        Patient SignUp
      </Heading>

      <Box
        position="relative"
        display="flex"
        justifyContent="flex-end"
        pt={4}
        pr={4}
      >
        <Button
          bgColor="primary"
          onClick={() => history.goBack()}
          _hover={{
            bg: "gray.600",
            color: "white",
          }}
        >
          « Back
        </Button>
      </Box>
      <Flex width="full" height={"100vh"} justifyContent="flex-end" pr={8}>
        <Box
          mb={6}
          mt={2}
          p={8}
          w="450px"
          borderWidth={2}
          borderRadius={8}
          boxShadow="dark-lg"
          bgColor="azure"
          alignItems="flex-end"
          height="95vh"
        >
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Firstname</FormLabel>
                <Input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Shakira"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Lastname</FormLabel>
                <Input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder=""
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="test@test.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="****35*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                variantColor="primary.500"
                variant="outline"
                width="full"
                mt={4}
                type="submit"
              >
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
export default PatientSignup