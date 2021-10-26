import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  BsFillTelephoneFill,
  BsStar,
  BsStarFill,
  BsStarHalf,
  BsChatDotsFill,
} from "react-icons/bs";
import { GiExitDoor } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { RiHospitalFill } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import thirdman from "../../assets/thirdman.jpg";
import spencer from "../../assets/spencer.jpg";
import { useHistory } from "react-router-dom";
import { CgNotes } from "react-icons/cg";

const data = {
  imageURL: spencer,
  name: "Misande Rono",
  phoneno: "+254712345678",
  email: "misande@gmail.com",
};

const Rating = ({ rating, numReviews }) => {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
};

const Patient = () => {
  const history = useHistory();
  return (
    <>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1}>
          <Image
            boxShadow="dark-lg"
            marginLeft={"15vw"}
            marginTop={"22vh"}
            height={"60%"}
            width={"50%"}
            borderRadius={"15px"}
            alt={"Login Image"}
            objectFit={"cover"}
            // Profile pic
            src={data.imageURL}
          />
        </Flex>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Button
              rounded={"full"}
              w="50%"
              variant="outline"
              colorScheme="primary"
              _hover={{
                bg: "blue.500",
                color: "white",
              }}
              onClick={() => history.push("/dashboard/doctor")}
              rightIcon={<GiExitDoor />}
            >
              Back to Dashboard
            </Button>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                {/* Name */}
                {data.name}
              </Text>
              <br />
            </Heading>
            <HStack>
              <BsFillTelephoneFill size={20} />
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                {/* Telephone */}
                {data.phoneno}
              </Text>
            </HStack>
            <HStack>
              <SiMinutemailer size={20} />
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                {/* Email */}
                {data.email}
              </Text>
            </HStack>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                leftIcon={<BsChatDotsFill />}
                onClick={() => history.push("/chat")}
              >
                Chat
              </Button>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => history.push("/notes")}
                leftIcon={<CgNotes />}
              >
                View Notes
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
};

export default Patient;
