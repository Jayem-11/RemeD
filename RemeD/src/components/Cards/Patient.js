import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Heading,
  Button,
  Tooltip,
  VStack
} from "@chakra-ui/react";
import {
  BsFillTelephoneFill,
  BsStar,
  BsStarFill,
  BsStarHalf,
  BsChatDots,
} from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

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

          <VStack mt={3} alignItems="left">
              <Button
                px={2}
                py={1}
                variant="outline"
                colorScheme="primary"
                _hover={{
                  bg: "blue.500",
                  color: "white",
                }}
                rounded="lg"
                // leftIcon={<CgProfile size="20px" />}
                onClick={() => history.push("/profile/doctor")}
              >
                View Profile
              </Button>
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
                // leftIcon={<BsChatDots size="20px" />}
                onClick={() => history.push("/profile/doctor")}
              >
                Chat
              </Button>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Card;
