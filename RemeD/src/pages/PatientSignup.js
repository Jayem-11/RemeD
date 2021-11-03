//import React, { useState } from 'react';
import {
  Box, Button, Flex, FormControl,
  FormLabel, Heading,
  Input
} from '@chakra-ui/react';

   
  export default function Form() {
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    //const handleSubmit = event => {
    //event.preventDefault();};
    //alert(`Email: ${email} & Password: ${password}`);

    

    return (
      <Flex width="full" align="center" justifyContent="center" >
        <Box mb={6} mr={30} mt={1} p={8} w="350px" borderWidth={2} borderRadius={8} boxShadow="lg">
          <Box textAlign="center">
            <Heading>Patient SignUP</Heading>
          </Box>
          <Box my={4} textAlign="left">
        <form>
            <FormControl isRequired>
                <FormLabel>FirstName</FormLabel>
              <Input type="text" placeholder="Shakira" />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>FamilyName</FormLabel>
              <Input type="text" placeholder="" />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="test@test.com"/>
              
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="****35*"/> 
             
            </FormControl>
            <Button variantColor='primary.300' variant='outline' width="full" mt={4} type="submit">
              Sign In
            </Button>
          </form>
         </Box>
        </Box>
      </Flex>
     );
              
    }

