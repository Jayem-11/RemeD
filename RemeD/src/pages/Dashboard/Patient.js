import {InputGroup, InputLeftElement, Input, Box,SimpleGrid} from "@chakra-ui/react";
import {AiOutlineSearch} from 'react-icons/ai'
import Card from "../../components/Cards/DoctorCard";
import Header from "../../components/Sections/Header";
import Footer from "../../components/Sections/Footer";
import thirdman from '../../assets/thirdman.jpg';


const data = [{
    imageURL:  "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    name: 'Jane Doe',
    speciality: 'Oncologist',
    institution: 'Nairobi Hospital',

},
{
    imageURL: thirdman,
    name: 'Sony Lomo',
    speciality: 'Oncologist',
    institution: 'Nairobi Hospital',

},
{
    imageURL: thirdman,
    name: 'Limpy Kamami',
    speciality: 'Oncologist',
    institution: 'Nairobi Hospital',

},
{
    imageURL: thirdman,
    name: 'Jayem',
    speciality: 'Oncologist',
    institution: 'Nairobi Hospital',

},
{
    imageURL: thirdman,
    name: 'Viny Gits',
    speciality: 'Oncologist',
    institution: 'Nairobi Hospital',

},
{
    imageURL: thirdman,
    name: 'Klaus Mikaelson',
    speciality: 'Oncologist',
    institution: 'Nairobi Hospital',

},
]

const Patient = () => {
    return (
        <>
        <Header/>
        <Box  pl={'10%'} pr={'10%'} minH={'88.7vH'} >
            <InputGroup w={'25%'} mb={'2%'} display={{ base: "none", lg: "block" }} mr="auto" bg={'white'} border={'black'} >
                <InputLeftElement
                    pointerEvents="none"
                    children={<AiOutlineSearch />}
                />
                <Input type="tel" placeholder="Search..." />

            </InputGroup>
            <SimpleGrid  columns={[2, null, 3]} spacing="40px">
                
            {data.map(doc => (
                <Card details = {doc} />
            ) )} 
            </SimpleGrid>
            
        </Box>
        <Footer/>
        </>
    )
}

export default Patient
