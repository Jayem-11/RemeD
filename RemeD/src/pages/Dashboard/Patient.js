import {InputGroup, InputLeftElement, Input, Box,SimpleGrid} from "@chakra-ui/react";
import {AiOutlineSearch} from 'react-icons/ai'
import Card from "../../components/Cards/Doctor";
import NavBar from "../../components/Sections/Navbar/NavBar";
// import Footer from "../../components/Sections/Footer";
import thirdman from '../../assets/thirdman.jpg';
import tima from '../../assets/tima.jpg';
import laura from '../../assets/laura.jpg';
import miro from '../../assets/miro.jpg';
import shenko from '../../assets/shenko.jpg';
import sales from '../../assets/sales.jpg';



const data = [{
    imageURL:  tima,
    name: 'John Michael',
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
    imageURL: laura,
    name: 'Limpy Kamami',
    speciality: 'Oncologist',
    institution: 'Nairobi Hospital',

},
{
    imageURL: miro,
    name: 'viny Gits',
    speciality: 'Oncologist',
    institution: 'Nairobi Hospital',

},
{
    imageURL: shenko,
    name: 'Sandra Sloan',
    speciality: 'Oncologist',
    institution: 'Nairobi Hospital',

},
{
    imageURL: sales,
    name: 'Collin Davis',
    speciality: 'Oncologist',
    institution: 'Nairobi Hospital',

},
]

const Patient = () => {
    return (
        <>
        <NavBar/>
        <Box  pl={'10%'} pr={'10%'} minH={'88.7vH'} >
            <InputGroup w={'25%'} mb={'2%'} display={{ base: "none", lg: "block" }} mr="auto" bg={'white'} border={'black'} >
                <InputLeftElement
                    pointerEvents="none"
                    children={<AiOutlineSearch />}
                />
                <Input bg="inherit" variant="flushed" border="none" type="tel" placeholder="Search..." />

            </InputGroup>
            <SimpleGrid  columns={[2, null, 3]} spacing="40px">
                
            {data.map(doc => (
                <Card details = {doc} />
            ) )} 
            </SimpleGrid>
        </Box>
        {/* <Footer/> */}
        </>
    )
}

export default Patient
