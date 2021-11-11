import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  fadeConfig,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

 const DoctorSignup =() =>{
  const { register, handleSubmit } = useForm();

  //   const [userName, setUserName] = useState('');
  //   const [Specialization, setSpecialization] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [institutionOfWork, setInstitutionOfWork] = useState('');
  //   const [postalAddress, setPostalAddress] = useState('');

  //   const onSubmit = (e) => {
  //     e.preventDefault()

  // }

  const history = useHistory();
  const handleclick = () => history.push("/dashboard/doctor");

  return (
    <div>
      <Heading
        pt={"30px"}
        mb={"10px"}
        textAlign={"center"}
        color={"gray.800"}
        lineHeight={1.1}
        // fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        fontSize={"48px"}
      >
        Join Our Team
        <Text
          as={"span"}
          bgColor={"blue.600"}
          // bgGradient="linear(to-r, red.400,pink.400)"
          bgClip="text"
        >
          !
        </Text>
      </Heading>
      <Button
        onClick={() => history.goBack()}
        _hover={{
          bg: "gray.600",
          color: "white",
        }}
        ml={"85%"}
        mt={4}
        type="submit"
        color={"white"}
        bgColor={"black"}
      >
        {/* <RiArrowGoBackFill  size={20} bgColor={'transparent'} /> */}« Back
      </Button>

      <Box position={"relative"} minH={"96.3vH"}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          mt={"20px"}

          // py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              We are a community of Specialized Doctors
            </Heading>
            <Stack direction={"row"} spacing={4} align={"center"}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    position={"relative"}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: "full",
                      height: "full",
                      rounded: "full",
                      transform: "scale(1.125)",
                      bgColor: "blue.600",
                      position: "absolute",
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text fontSize={{ base: "4xl", md: "6xl" }}>+</Text>
              <Flex
                align={"center"}
                justify={"center"}
                fontSize={{ base: "sm", md: "lg" }}
                bg={"gray.800"}
                color={"white"}
                rounded={"full"}
                width={useBreakpointValue({ base: "44px", md: "60px" })}
                height={useBreakpointValue({ base: "44px", md: "60px" })}
                position={"relative"}
                _before={{
                  content: '""',
                  width: "full",
                  height: "full",
                  rounded: "full",
                  transform: "scale(1.125)",
                  bgGradient: "linear(to-bl, orange.400,yellow.400)",
                  position: "absolute",
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
              >
                YOU
              </Flex>
            </Stack>
          </Stack>
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Text color={"black"} fontSize={{ base: "sm", sm: "md" }}>
                We’re looking for amazing doctors just like you. Become a part
                of our medical team.
              </Text>
            </Stack>
            <Box top={"5px"}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <Input
                    placeholder="Full names"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Input
                    placeholder="Specialization"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />

                  <Input
                    placeholder="johndoe@lastname.io"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Input
                    placeholder="Institution of Work"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Input
                    placeholder="Postal Address"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />

                  <Input
                    placeholder="Phone Number"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Button
                    bg={"black"}
                    color={"white"}
                    _hover={{
                      bg: "gray.900",
                    }}
                  >
                    Upload Licence
                  </Button>
                </Stack>
                <input
                  {...register("CV", { required: true })}
                  type="file"
                  name="CV"
                />

                <Button
                  onClick={handleclick}
                  w={"150px"}
                  h={"40px"}
                  mt={"17px"}
                  ml={"135px"}
                  type="submit"
                  bg={"black"}
                  color={"white"}
                  _hover={{
                    bg: "gray.900",
                  }}
                >
                  Submit
                </Button>
              </form>
            </Box>
            form
          </Stack>
        </Container>
      </Box>
    </div>
  );
}
export default DoctorSignup