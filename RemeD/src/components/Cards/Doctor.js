import {
  Text,
  Heading,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import {
  BsFillTelephoneFill,
  BsStar,
  BsStarFill,
  BsStarHalf,
  BsChatDots
} from "react-icons/bs";
import { useHistory } from "react-router-dom";
import {CgProfile} from "react-icons/cg"

const Card = ({ details }) => {
  const history = useHistory();

  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Flex
        w="350px"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Box
          w={1 / 3}
          bgSize="cover"
          style={{
            backgroundImage:
              //Profile Pic
              "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
          }}
        ></Box>

        <Box w={2 / 3} p={{ base: 4, md: 4 }}>
          <Heading
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            {details.name}
          </Heading>

          <Text
            mt={2}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {details.speciality}
          </Text>

          <HStack spacing={1} display="flex" alignItems="center" mt={2}>
            <BsStarFill color={useColorModeValue("gray.700", "gray.300")} />
            <BsStarFill color={useColorModeValue("gray.700", "gray.300")} />
            <BsStarFill color={useColorModeValue("gray.700", "gray.300")} />
            <BsStarFill color="gray.500" />
            <BsStarFill color="gray.500" />
          </HStack>

          <Flex mt={3} alignItems="center" justifyContent="space-around">
            <Tooltip hasArrow label="View Profile">
              <Button
                px={2}
                py={1}
                variant="outline"
              colorScheme="primary"
              _hover={{
                bg: "blue.500",
                color:"white"
              }}
                rounded="lg"
                onClick={() => history.push("/profile/doctor")}
              >
                <CgProfile size="25px"/>
              </Button>
            </Tooltip>
            <Tooltip hasArrow label="Chat with doctor">
              <Button
                px={2}
                py={1}
                variant="outline"
                color="gray.900"
                rounded="lg"
                _hover={{
                  bg: "gray.300",
                }}
                _focus={{
                  bg: "gray.400",
                }}
                onClick={() => history.push("/profile/doctor")}
              >
                <BsChatDots size="25px"/>
              </Button>
            </Tooltip>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Card;
