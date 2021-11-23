import { useHistory } from 'react-router-dom';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,

} from '@chakra-ui/react';

export default function Signup() {
const history = useHistory();
  const handleClick = () => history.push('/signup/doctor')
  const handleClicks = () => history.push('/signup/patient')
  
  return (
    <>
        
      <Container maxW={'3xl'}  minH={'100vh'}  >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            color={'black'}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Get Started 🏥
            
          </Heading>
          <Text color={'black'} fontSize={'18px'}>
            We bring you quality Medical services at the touch of a button
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
              <Button
              onClick={handleClick}
               w={'300px'}
               h={'40px'}
               mb={'17px'}
                    type='submit'
                  bg={'blue.700'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.600',
                  }}>
                    Register as Doctor
                </Button>
                <Button
                    onClick={handleClicks}
                    w={'300px'}
                    h={'40px'}
                    type='submit'
                  bg={'blue.700'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.600',
                  }}>
                  Register as Patient
                </Button>
            
            <Box>
            
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

