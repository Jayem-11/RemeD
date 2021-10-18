import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState } from 'react';


  export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

    
    }



    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Welcome Back 🩺</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
                <form onSubmit={() => {onSubmit()}}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired > 
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={5}>
                    
                  <Link color={'blue.400'}>Forgot password?</Link>
                <Link to='/signup' color={'blue.400'}>Don't have an account?</Link>
                <Button
                    type='submit'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    );
  }