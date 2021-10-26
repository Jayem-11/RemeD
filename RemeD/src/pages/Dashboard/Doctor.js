import { InputGroup, InputLeftElement, Input, Box, SimpleGrid } from "@chakra-ui/react";
import { AiOutlineSearch } from 'react-icons/ai'
import Card from "../../components/Cards/PatientCard";
import Header from "../../components/Sections/Header";
import Footer from "../../components/Sections/Footer";
import thirdman from '../../assets/thirdman.jpg';


const data = [{
    imageURL: "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    name: 'Jane Doe',


},
{
    imageURL: thirdman,
    name: 'Sony Lomo',
},
{
    imageURL: thirdman,
    name: 'Limpy Kamami',

},
{
    imageURL: thirdman,
    name: 'Jayem',

},
{
    imageURL: thirdman,
    name: 'Viny Gits',


},
{
    imageURL: thirdman,
    name: 'Klaus Mikaelson',


},
{
    imageURL: thirdman,
    name: 'Jon Snow',

},
{
    imageURL: thirdman,
    name: 'Bella Mai',


},
{
    imageURL: thirdman,
    name: 'Kiana Malone',


},
]

const Doctor = () => {
    return (
        <>
            <Header />
            <Box pt={'15px'} pl={'10%'} pr={'10%'} minH={'78.7vH'} >

                <SimpleGrid columns={[2, null, 3]} spacing="40px">

                    {data.map(doc => (
                        <Card details={doc} />
                    ))}
                </SimpleGrid>

            </Box>
            <Footer />
        </>
    )
}

export default Doctor
