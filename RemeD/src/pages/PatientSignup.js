import React, { useState } from 'react';
import {
    Box, Button, Flex, FormControl,
    FormLabel, Heading,
    Input,
} from '@chakra-ui/react';

import customTheme from "../utils/theme";

export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const reset = () => {
        setEmail('')
        setPassword('')
        setFirstname('')
        setLastname('')
    }
    const handleSubmit = event => {
    event.preventDefault();
    alert(`Email: ${email} & Password: ${password}`);
    reset()
};
    



    return (
        <Box>

            <Box
                display="flex"
                justifyContent="flex-end"
                pt={4}
                pr={4}
            >
                <Button
                    colorScheme="primary"
                >
                    Back
                </Button>
            </Box>
            <Flex width="full" align="center" justifyContent="center" height={'100vh'}>

                <Box mb={6} mr={30} mt={1} p={8} w="350px" borderWidth={2} borderRadius={8} boxShadow='dark-lg' bgColor="azure">
                    <Box textAlign="center">
                        <Heading>Patient SignUP</Heading>
                    </Box>
                    <Box my={4} textAlign="left">
                        <form onSubmit={handleSubmit}>
                            <FormControl isRequired>
                                <FormLabel>Firstname</FormLabel>
                                <Input type="text" value={firstname} onChange={e => setFirstname(e.target.value)} placeholder="Shakira" />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Lastname</FormLabel>
                                <Input type="text" value={lastname} onChange={e => setLastname(e.target.value)} placeholder="" />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder="test@test.com" value={email} onChange={e => setEmail(e.target.value)} />

                            </FormControl>
                            <FormControl mt={6} isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder="****35*" value={password} onChange={e => setPassword(e.target.value)} />
                            </FormControl>
                            <Button variantColor='primary.500' variant='outline' width="full" mt={4} type="submit">
                                Sign Up
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );

}

