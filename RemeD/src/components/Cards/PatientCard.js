import React from "react";
import {  Box, Flex, useColorModeValue, HStack, Heading, Button } from "@chakra-ui/react";
import { BsFillTelephoneFill, BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { useHistory } from "react-router-dom";


const Card = ({details}) => {
 const history = useHistory()

  return (
    <Flex
     
      w="full"
      alignItems="center"
      justifyContent="center"
    >
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
            backgroundImage:`url(${details.imageURL})`           
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

        

          <Flex mt={3} alignItems="center" justifyContent="space-between">
          <Button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
              onClick={ () => history.push('/chat')}
            >
              Go to Chat
            </Button>
            <Button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
              onClick={ () => history.push('/profile/patient')}
            >
              View Details
            </Button>
            
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Card;