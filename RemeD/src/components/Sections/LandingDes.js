import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
    
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
import doctors from '../../assets/doctors.jpg';
import hosi from '../../assets/hosi.jpg';
import {BiMessageRoundedDetail} from 'react-icons/bi';
import {RiTeamFill } from 'react-icons/ri';


  
  
 
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function LandingDes() {
    return (
      <Container maxW={'7xl'} minH={'200vh'} bg={'#f1faee'}  >
        <SimpleGrid  columns={{ base: 1, md: 2 }} spacing={10} pt={'100px'} >
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Story
            </Text>
            <Heading>Doctor's Advice</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Use your phone, iPad, or computer to speak with one of our doctors. Our doctors listen to your symptoms and diagnose your condition just like they would in a clinic. They may prescribe medications or suggest lab tests based on the results.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'black.500'} w={5} h={5} />
                }
                // iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Know Your Progress'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Affordable Cost '}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'blue.600'} w={5} h={5} />
                }
                iconBg={useColorModeValue('blue.100', 'blue.900')}
                text={'Health Analysis'}
              />
            </Stack>
          </Stack>
          <Flex w={'550px'} >
            <Image 
             mt={'15%'}
            
              h={'40vh'}
              
              rounded={'md'}
              alt={'feature image'}
              src={
                  doctors
              }
            //   objectFit={'contain'}
            />
          </Flex>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pt={'100px'}   mt={'2.5%'}>
        <Flex w={'500px'} >
            <Image 
             mt={'5%'}
            
              h={'45vh'}
              
              rounded={'md'}
              alt={'feature image'}
              src={
                  hosi
              }
            //   objectFit={'contain'}
            />
          </Flex>
              
          <Stack spacing={4}>
            
            <Heading p={2} >Smart Hospital Consultancy </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            RemeD is an online doctor consultation platform that allows users to consult with a doctor through web or mobile app. Any registered user can have an online medical consultation, get doctor advice online, and obtain medications online. It also makes diagnostic services more accessible.            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={ BiMessageRoundedDetail  } color={'blue.500'} w={5} h={5} />
                }
                text={'Consultation Offered'}
              />
              <Feature
                icon={<Icon as={RiTeamFill} color={'blue.500'} w={5} h={5} />}
                iconBg={useColorModeValue('blue.100', 'blue.900')}
                text={'Work With Our Team'}
              />
            
            </Stack>
          </Stack>
         
        </SimpleGrid>      

      </Container>
    );
  }